const CREDIT_STORAGE_KEY = "codexArcadeCredits";
const INITIAL_CREDITS = 5;
const FREE_COIN_AMOUNT = 3;

const creditCount = document.querySelector("#creditCount");
const freeCoinButton = document.querySelector("#freeCoinButton");
const soundButton = document.querySelector("#soundButton");
const cabinetGrid = document.querySelector("#cabinetGrid");
const cabinetCardTemplate = document.querySelector("#cabinetCardTemplate");

const audioState = {
  context: null,
  master: null,
  bass: null,
  shimmer: null,
  filter: null,
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

function addFreeCoins() {
  setCredits(getCredits() + FREE_COIN_AMOUNT);
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
  master.connect(context.destination);

  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 520;
  filter.Q.value = 8;
  filter.connect(master);

  const bass = context.createOscillator();
  bass.type = "sawtooth";
  bass.frequency.value = 55;
  bass.connect(filter);
  bass.start();

  const shimmer = context.createOscillator();
  const shimmerGain = context.createGain();
  shimmer.type = "triangle";
  shimmer.frequency.value = 220;
  shimmerGain.gain.value = 0.018;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(master);
  shimmer.start();

  audioState.context = context;
  audioState.master = master;
  audioState.bass = bass;
  audioState.shimmer = shimmer;
  audioState.filter = filter;

  window.setInterval(() => {
    if (!audioState.isOn || !audioState.context) return;
    const now = audioState.context.currentTime;
    audioState.bass.frequency.setTargetAtTime(55 + Math.random() * 5, now, 0.08);
    audioState.filter.frequency.setTargetAtTime(420 + Math.random() * 260, now, 0.18);
  }, 700);

  return context;
}

function setSoundEnabled(enabled) {
  const context = getAudioContext();
  if (!context || !audioState.master) return;

  if (context.state === "suspended") {
    context.resume();
  }

  audioState.isOn = enabled;
  audioState.master.gain.setTargetAtTime(enabled ? 0.075 : 0, context.currentTime, 0.08);
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
    setSoundEnabled(!audioState.isOn);
    wakeArcade();
  });

  const games = await loadGames();
  cabinetGrid.replaceChildren(...games.map(renderGameCard));
}

initArcade();
