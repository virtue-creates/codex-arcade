const CREDIT_STORAGE_KEY = "codexArcadeCredits";
const INITIAL_CREDITS = 5;
const FREE_COIN_AMOUNT = 3;
const BGM_MASTER_VOLUME = 0.18;

const creditCount = document.querySelector("#creditCount");
const freeCoinButton = document.querySelector("#freeCoinButton");
const soundButton = document.querySelector("#soundButton");
const cabinetGrid = document.querySelector("#cabinetGrid");
const cabinetCardTemplate = document.querySelector("#cabinetCardTemplate");

const audioState = {
  context: null,
  master: null,
  delay: null,
  activeNodes: new Set(),
  musicTimer: null,
  beat: 0,
  isOn: false
};

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

function addFreeCoins() {
  setCredits(getCredits() + FREE_COIN_AMOUNT);
  showCoinToast("+3 CREDITS");
  wakeArcade();
  playCoinSound();
}

function canPlay(game) {
  return game.status === "prototype" || game.status === "playable";
}

function launchGame(game) {
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
  setCredits(Math.max(getCredits(), INITIAL_CREDITS));
  freeCoinButton.addEventListener("click", addFreeCoins);
  soundButton.addEventListener("click", () => {
    showCoinToast(audioState.isOn ? "BGM OFF" : "BGM ON");
    setSoundEnabled(!audioState.isOn);
    wakeArcade();
  });

  const games = await loadGames();
  cabinetGrid.replaceChildren(...games.map(renderGameCard));
}

initArcade();
