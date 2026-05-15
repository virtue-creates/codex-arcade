const CREDIT_STORAGE_KEY = "codexArcadeCredits";
const INITIAL_CREDITS = 5;
const FREE_COIN_AMOUNT = 3;

const creditCount = document.querySelector("#creditCount");
const freeCoinButton = document.querySelector("#freeCoinButton");
const cabinetGrid = document.querySelector("#cabinetGrid");
const cabinetCardTemplate = document.querySelector("#cabinetCardTemplate");

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
  },
  {
    id: "metro-mender",
    cabinet: "Cabinet 02",
    title: "Metro Mender",
    description: "壊れた地下鉄網をつなぎ直す、短時間ルート修理パズル。",
    status: "concept",
    genre: ["puzzle", "arcade", "strategy"],
    devices: ["desktop", "tablet"],
    input: ["mouse"],
    orientation: "landscape",
    path: "games/metro-mender/",
    thumbnail: "assets/thumbnails/metro-mender.png",
    creditCost: 1
  },
  {
    id: "specimen-night-shift",
    cabinet: "Cabinet 03",
    title: "Specimen Night Shift",
    description: "夜だけ動き出す標本箱の虫たちを、月明かりの出口へ導く奇妙なパズル。",
    status: "concept",
    genre: ["puzzle", "arcade", "strategy"],
    devices: ["desktop", "tablet"],
    input: ["mouse", "touch"],
    orientation: "landscape",
    path: "games/specimen-night-shift/",
    thumbnail: "assets/thumbnails/specimen-night-shift.png",
    creditCost: 1
  }
];

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

function addFreeCoins() {
  setCredits(getCredits() + FREE_COIN_AMOUNT);
}

function canPlay(game) {
  return game.status === "prototype" || game.status === "playable";
}

function launchGame(game) {
  const credits = getCredits();

  if (credits < game.creditCost) {
    addFreeCoins();
    return;
  }

  setCredits(credits - game.creditCost);
  const launchUrl = new URL(game.path, window.location.href);
  launchUrl.searchParams.set("from", "arcade");
  launchUrl.searchParams.set("credit", String(game.creditCost));
  window.location.href = launchUrl.toString();
}

function createTag(label) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = label;
  return tag;
}

function renderGameCard(game, index) {
  const card = cabinetCardTemplate.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  const number = card.querySelector(".cabinet-number");
  const status = card.querySelector(".cabinet-status");
  const cost = card.querySelector(".cabinet-cost");
  const title = card.querySelector("h3");
  const description = card.querySelector(".cabinet-description");
  const tagRow = card.querySelector(".tag-row");
  const button = card.querySelector(".play-button");

  image.src = game.thumbnail || "";
  image.alt = `${game.title} thumbnail`;
  image.addEventListener("error", () => {
    image.removeAttribute("src");
    image.alt = "";
  });

  number.textContent = game.cabinet || `Cabinet ${String(index + 1).padStart(2, "0")}`;
  status.textContent = game.status;
  status.classList.add(game.status);
  cost.textContent = `${game.creditCost} credit`;
  title.textContent = game.title;
  description.textContent = game.description;

  [...game.genre, ...game.devices, ...game.input, game.orientation].forEach((tag) => {
    tagRow.append(createTag(tag));
  });

  if (canPlay(game)) {
    button.textContent = "INSERT COIN / PLAY";
    button.addEventListener("click", () => launchGame(game));
  } else {
    button.textContent = "COMING SOON";
    button.disabled = true;
  }

  return card;
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
  setCredits(getCredits());
  freeCoinButton.addEventListener("click", addFreeCoins);

  const games = await loadGames();
  cabinetGrid.replaceChildren(...games.map(renderGameCard));
}

initArcade();
