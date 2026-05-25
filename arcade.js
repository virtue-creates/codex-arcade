const CREDIT_STORAGE_KEY = "codexArcadeCredits";
const ANALYTICS_STORAGE_KEY = "codexArcadeAnalyticsEvents";
const MANAGER_MEMO_STORAGE_KEY = "codexArcadeManagerMemos";
const INITIAL_CREDITS = 5;
const FREE_COIN_AMOUNT = 3;
const BGM_MASTER_VOLUME = 0.18;
const GA_MEASUREMENT_ID = "G-VBKHF7QYE0";
const FEEDBACK_ENDPOINT = "https://formspree.io/f/xkoevqod";
const VISIT_STORAGE_KEY = "codexArcadeFirstVisitSeen";

const creditCount = document.querySelector("#creditCount");
const freeCoinButton = document.querySelector("#freeCoinButton");
const soundButton = document.querySelector("#soundButton");
const cabinetGrid = document.querySelector("#cabinetGrid");
const cabinetCardTemplate = document.querySelector("#cabinetCardTemplate");
const openMemoButton = document.querySelector("#openMemoButton");
const managerMemoDialog = document.querySelector("#managerMemoDialog");
const managerMemoForm = document.querySelector("#managerMemoForm");
const memoStatus = document.querySelector("#memoStatus");
const memoMessageField = managerMemoForm.querySelector("textarea");

const audioState = {
  context: null,
  master: null,
  delay: null,
  activeNodes: new Set(),
  musicTimer: null,
  beat: 0,
  isOn: false
};

let memoFormStarted = false;

const fallbackGames = [
  {
    id: "neon-core-survivor",
    cabinet: "Cabinet 01",
    title: "Neon Core Survivor",
    description:
      "ネオンアリーナで180秒生き残る、1画面弾幕サバイバー。",
    status: "prototype",
    genre: ["survival", "bullet-hell", "arcade"],
    devices: ["desktop"],
    input: ["keyboard", "mouse"],
    orientation: "landscape",
    path: "games/neon-core-survivor/",
    thumbnail: "assets/thumbnails/neon-core-survivor.png",
    creditCost: 1
  }
];

const statusLabels = {
  prototype: "NOW PLAYABLE",
  playable: "NOW PLAYABLE",
  concept: "AGENTS TUNING"
};

function setupGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.append(script);
}

function getAnalyticsLog() {
  try {
    return JSON.parse(localStorage.getItem(ANALYTICS_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function getStoredManagerMemos() {
  try {
    return JSON.parse(localStorage.getItem(MANAGER_MEMO_STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function trackArcadeEvent(eventName, params = {}) {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    ...params
  };
  const log = getAnalyticsLog();
  log.push(payload);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(log.slice(-120)));

  if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
    window.gtag("event", eventName, params);
  }
}

function isFirstVisit() {
  const seen = localStorage.getItem(VISIT_STORAGE_KEY) === "1";
  if (!seen) {
    localStorage.setItem(VISIT_STORAGE_KEY, "1");
    return true;
  }
  return false;
}

function getMessageLengthBucket(length) {
  if (length < 40) return "short";
  if (length < 160) return "medium";
  return "long";
}

function getCredits() {
  const stored = Number.parseInt(localStorage.getItem(CREDIT_STORAGE_KEY), 10);

  if (Number.isNaN(stored)) {
    localStorage.setItem(CREDIT_STORAGE_KEY, String(INITIAL_CREDITS));
    return INITIAL_CREDITS;
  }

  return stored;
}

function setCredits(value) {
  localStorage.setItem(CREDIT_STORAGE_KEY, String(value));
  creditCount.textContent = String(value).padStart(2, "0");
}

function wakeArcade() {
  document.body.classList.add("is-awake", "coin-inserted");
  window.setTimeout(() => {
    document.body.classList.remove("coin-inserted");
  }, 950);
}

function showCoinToast(message) {
  const toast = document.querySelector("#coinToast");
  if (toast) {
    toast.textContent = message;
  }
}

function openManagerMemo() {
  managerMemoDialog.classList.add("is-open");
  managerMemoDialog.setAttribute("aria-hidden", "false");
  memoStatus.textContent = "";
  memoMessageField?.focus();
  trackArcadeEvent("open_manager_memo", {
    ui_location: "arcade_note",
    event_origin: "manager_memo_button"
  });
}

function closeManagerMemo() {
  managerMemoDialog.classList.remove("is-open");
  managerMemoDialog.setAttribute("aria-hidden", "true");
}

function saveManagerMemoFallback(payload) {
  const memos = getStoredManagerMemos();
  memos.push(payload);
  localStorage.setItem(MANAGER_MEMO_STORAGE_KEY, JSON.stringify(memos.slice(-50)));
  trackArcadeEvent("feedback_fallback_saved", {
    memo_cabinet_id: payload.cabinet,
    replay_intent: payload.replay_intent,
    clarity: payload.clarity,
    message_length: payload.message.length,
    message_length_bucket: getMessageLengthBucket(payload.message.length),
    submit_result: "fallback_saved"
  });
}

function trackMemoFormStart() {
  if (memoFormStarted) return;
  memoFormStarted = true;

  const formData = new FormData(managerMemoForm);
  const message = String(formData.get("message") || "");
  trackArcadeEvent("memo_form_start", {
    memo_cabinet_id: formData.get("cabinet"),
    replay_intent: formData.get("replay_intent"),
    clarity: formData.get("clarity"),
    message_length_bucket: getMessageLengthBucket(message.length),
    ui_location: "manager_memo_modal"
  });
}

function handleReturnToArcade() {
  const params = new URLSearchParams(window.location.search);
  const returnedFrom = params.get("returned_from");

  if (!returnedFrom) return;

  trackArcadeEvent("return_to_arcade", {
    game_id: returnedFrom,
    cabinet_id: returnedFrom,
    event_origin: "game_back_link",
    ui_location: "arcade_entry"
  });

  params.delete("returned_from");
  const cleanUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}${window.location.hash}`;
  window.history.replaceState({}, "", cleanUrl);
}

async function submitManagerMemo(event) {
  event.preventDefault();

  const formData = new FormData(managerMemoForm);
  const payload = {
    cabinet: formData.get("cabinet"),
    replay_intent: formData.get("replay_intent"),
    clarity: formData.get("clarity"),
    message: String(formData.get("message") || "").trim(),
    created_at: new Date().toISOString()
  };

  if (!payload.message) {
    memoStatus.textContent = "メモ本文を書いてください。";
    return;
  }

  const submitButton = managerMemoForm.querySelector(".memo-submit");
  submitButton.disabled = true;
  memoStatus.textContent = "店長室へ送っています...";

  try {
    if (FEEDBACK_ENDPOINT) {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Feedback endpoint failed: ${response.status}`);
      }
    } else {
      saveManagerMemoFallback(payload);
    }

    trackArcadeEvent("submit_manager_memo", {
      memo_cabinet_id: payload.cabinet,
      replay_intent: payload.replay_intent,
      clarity: payload.clarity,
      message_length: payload.message.length,
      message_length_bucket: getMessageLengthBucket(payload.message.length),
      mode: FEEDBACK_ENDPOINT ? "formspree" : "fallback"
    });
    trackArcadeEvent("manager_memo_submit_result", {
      memo_cabinet_id: payload.cabinet,
      submit_result: FEEDBACK_ENDPOINT ? "sent" : "fallback_saved"
    });
    managerMemoForm.reset();
    memoStatus.textContent = FEEDBACK_ENDPOINT
      ? "メモを受け取りました。次の改善会議に回します。"
      : "仮受付しました。Formspree接続後は店長室へ送れるようになります。";
  } catch (error) {
    saveManagerMemoFallback(payload);
    trackArcadeEvent("manager_memo_submit_result", {
      memo_cabinet_id: payload.cabinet,
      submit_result: "fallback_after_error"
    });
    memoStatus.textContent = "送信先に届かなかったため、仮受付として保存しました。";
  } finally {
    submitButton.disabled = false;
  }
}

function addFreeCoins() {
  const before = getCredits();
  setCredits(getCredits() + FREE_COIN_AMOUNT);
  showCoinToast("+3 CREDITS");
  wakeArcade();
  playCoinSound();
  trackArcadeEvent("click_free_credit", {
    credit_count_before: before,
    credit_count_after: getCredits(),
    ui_location: "credit_panel",
    cta_label: "CREDITを受け取る"
  });
}

function canPlay(game) {
  return game.status === "prototype" || game.status === "playable";
}

function launchGame(game) {
  trackArcadeEvent("launch_cabinet", {
    game_id: game.id,
    cabinet_id: game.id,
    cabinet_name: game.title,
    cabinet_status: game.status,
    cabinet: game.cabinet,
    credit_cost: game.creditCost,
    ui_location: "cabinet_button",
    cta_label: "PRESS PLAY"
  });
  const launchUrl = new URL(game.path, window.location.href);
  launchUrl.searchParams.set("from", "arcade");
  launchUrl.searchParams.set("credit", String(game.creditCost));
  window.location.href = launchUrl.toString();
}

function getAudioContext() {
  if (audioState.context) return audioState.context;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  const context = new AudioContextClass();
  const master = context.createGain();
  master.gain.value = 0;

  const delay = context.createDelay(0.45);
  const delayGain = context.createGain();
  delay.delayTime.value = 0.18;
  delayGain.gain.value = 0.16;
  delay.connect(delayGain);
  delayGain.connect(master);
  master.connect(context.destination);

  audioState.context = context;
  audioState.master = master;
  audioState.delay = delay;

  return context;
}

function playTone(frequency, startTime, duration, type = "triangle", volume = 0.03, destination = audioState.master) {
  if (!audioState.context || !audioState.master) return;

  const oscillator = audioState.context.createOscillator();
  const gain = audioState.context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(destination);
  if (destination === audioState.master && audioState.delay) {
    gain.connect(audioState.delay);
  }
  audioState.activeNodes.add(oscillator);
  oscillator.addEventListener("ended", () => {
    audioState.activeNodes.delete(oscillator);
    oscillator.disconnect();
    gain.disconnect();
  });
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);
}

function playMusicStep() {
  if (!audioState.isOn || !audioState.context) return;

  const now = audioState.context.currentTime;
  const melody = [330, 392, 494, 0, 440, 392, 294, 0, 330, 392, 587, 494, 440, 0, 392, 0];
  const bass = [82, 82, 98, 98, 73, 73, 110, 110];
  const note = melody[audioState.beat % melody.length];
  const bassNote = bass[audioState.beat % bass.length];

  if (audioState.beat % 2 === 0) {
    playTone(bassNote, now, 0.18, "sine", 0.04);
  }

  if (note) {
    playTone(note, now + 0.012, 0.13, "triangle", 0.055);
    playTone(note * 2, now + 0.018, 0.06, "sine", 0.025);
  }

  if (audioState.beat % 8 === 0) {
    playTone(1568, now + 0.026, 0.04, "square", 0.028);
  }

  audioState.beat += 1;
}

function startMusicLoop() {
  if (audioState.musicTimer) return;
  playMusicStep();
  audioState.musicTimer = window.setInterval(playMusicStep, 250);
}

function stopMusicLoop() {
  if (!audioState.musicTimer) return;
  window.clearInterval(audioState.musicTimer);
  audioState.musicTimer = null;
}

function stopActiveMusicNodes() {
  audioState.activeNodes.forEach((node) => {
    try {
      node.stop();
    } catch (error) {
      // Already stopped.
    }
  });
  audioState.activeNodes.clear();
}

function setSoundEnabled(enabled) {
  const context = getAudioContext();
  if (!context || !audioState.master) return;

  if (context.state === "suspended") {
    context.resume();
  }

  audioState.isOn = enabled;
  if (enabled) {
    audioState.master.gain.cancelScheduledValues(context.currentTime);
    audioState.master.gain.setValueAtTime(audioState.master.gain.value, context.currentTime);
    audioState.master.gain.linearRampToValueAtTime(BGM_MASTER_VOLUME, context.currentTime + 0.08);
    startMusicLoop();
  } else {
    stopMusicLoop();
    stopActiveMusicNodes();
    audioState.master.gain.cancelScheduledValues(context.currentTime);
    audioState.master.gain.setValueAtTime(0, context.currentTime);
  }
  soundButton.textContent = enabled ? "BGM ON" : "BGM OFF";
  soundButton.classList.toggle("is-on", enabled);
  soundButton.setAttribute("aria-pressed", String(enabled));
  trackArcadeEvent("toggle_bgm", {
    enabled,
    ui_location: "credit_panel",
    cta_label: enabled ? "BGM ON" : "BGM OFF"
  });
}

function playCoinSound() {
  const context = getAudioContext();
  if (!context || !audioState.master) return;

  if (context.state === "suspended") {
    context.resume();
  }

  const now = context.currentTime;
  const coinGain = context.createGain();
  const coin = context.createOscillator();
  coin.type = "square";
  coin.frequency.setValueAtTime(880, now);
  coin.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
  coinGain.gain.setValueAtTime(0, now);
  coinGain.gain.linearRampToValueAtTime(0.12, now + 0.01);
  coinGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  coin.connect(coinGain);
  coinGain.connect(context.destination);
  coin.start(now);
  coin.stop(now + 0.24);
}

function createTag(label) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = label;
  return tag;
}

function getScreenState(game) {
  if (canPlay(game)) {
    return {
      state: "CABINET ONLINE",
      title: "INSERT COIN"
    };
  }

  return {
    state: "COMING SOON",
    title: game.id === "metro-mender" ? "路線修復中" : "夜間展示準備中"
  };
}

function renderGameCard(game, index) {
  const cabinet = cabinetCardTemplate.content.firstElementChild.cloneNode(true);
  const number = cabinet.querySelector(".cabinet-number");
  const status = cabinet.querySelector(".cabinet-status");
  const screenState = cabinet.querySelector(".screen-state");
  const screenTitle = cabinet.querySelector(".screen-overlay strong");
  const cost = cabinet.querySelector(".cabinet-cost");
  const signal = cabinet.querySelector(".cabinet-signal");
  const title = cabinet.querySelector("h3");
  const description = cabinet.querySelector(".cabinet-description");
  const tagRow = cabinet.querySelector(".tag-row");
  const button = cabinet.querySelector(".play-button");
  const screen = getScreenState(game);

  cabinet.classList.add(game.id, game.status);
  number.textContent = game.cabinet || `Cabinet ${String(index + 1).padStart(2, "0")}`;
  status.textContent = statusLabels[game.status] || game.status;
  screenState.textContent = screen.state;
  screenTitle.textContent = screen.title;
  cost.textContent = `${game.creditCost} CREDIT = 1 PLAY`;
  signal.textContent = canPlay(game) ? "READY" : "STANDBY";
  signal.classList.toggle("ready", canPlay(game));
  title.textContent = game.title;
  description.textContent = game.description;

  [...game.genre, ...game.devices, ...game.input, game.orientation].forEach((tag) => {
    tagRow.append(createTag(tag));
  });

  if (canPlay(game)) {
    let creditReady = false;
    button.textContent = "INSERT COIN";
    button.addEventListener("click", () => {
      const creditsBefore = getCredits();
      trackArcadeEvent("select_cabinet", {
        game_id: game.id,
        cabinet_id: game.id,
        cabinet_name: game.title,
        cabinet_status: game.status,
        cabinet: game.cabinet,
        ui_location: "cabinet_button",
        cta_label: button.textContent
      });

      if (!creditReady) {
        if (getCredits() < game.creditCost) {
          addFreeCoins();
        }

        creditReady = true;
        showCoinToast("CREDIT READY");
        wakeArcade();
        playCoinSound();
        cabinet.classList.add("credit-ready");
        button.textContent = "PRESS PLAY";
        button.classList.add("ready");
        screenState.textContent = "CREDIT READY";
        screenTitle.textContent = "CABINET ONLINE";
        signal.textContent = "ONLINE";
        trackArcadeEvent("insert_coin", {
          game_id: game.id,
          cabinet_id: game.id,
          cabinet_name: game.title,
          cabinet_status: game.status,
          cabinet: game.cabinet,
          credit_cost: game.creditCost,
          credit_count_before: creditsBefore,
          credit_count_after: getCredits(),
          ui_location: "cabinet_button",
          cta_label: "INSERT COIN"
        });
        return;
      }

      launchGame(game);
    });
  } else {
    button.textContent = "COMING SOON";
    button.disabled = true;
  }

  return cabinet;
}

async function loadGames() {
  try {
    const response = await fetch("games.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Unable to load games.json: ${response.status}`);
    }

    const manifest = await response.json();
    return manifest.games || fallbackGames;
  } catch (error) {
    console.warn(error);
    return fallbackGames;
  }
}

async function initArcade() {
  setupGoogleAnalytics();
  handleReturnToArcade();
  trackArcadeEvent("arcade_visit", {
    event_origin: "top",
    is_first_visit: isFirstVisit()
  });
  setCredits(Math.max(getCredits(), INITIAL_CREDITS));
  freeCoinButton.addEventListener("click", addFreeCoins);
  soundButton.addEventListener("click", () => {
    showCoinToast(audioState.isOn ? "BGM OFF" : "BGM ON");
    setSoundEnabled(!audioState.isOn);
    wakeArcade();
  });
  openMemoButton.addEventListener("click", openManagerMemo);
  managerMemoForm.addEventListener("input", trackMemoFormStart);
  managerMemoForm.addEventListener("change", trackMemoFormStart);
  managerMemoForm.addEventListener("submit", submitManagerMemo);
  managerMemoDialog.querySelectorAll("[data-close-memo]").forEach((button) => {
    button.addEventListener("click", closeManagerMemo);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && managerMemoDialog.classList.contains("is-open")) {
      closeManagerMemo();
    }
  });

  const games = await loadGames();
  cabinetGrid.replaceChildren(...games.map(renderGameCard));
}

initArcade();
