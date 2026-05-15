const GAME_ID = "metro-mender";
const GAME_SECONDS = 120;
const MAX_REPAIRS = 5;

const stations = [
  { id: "north", name: "North", x: 150, y: 115, hub: true },
  { id: "museum", name: "Museum", x: 375, y: 115 },
  { id: "harbor", name: "Harbor", x: 625, y: 115 },
  { id: "east", name: "East", x: 850, y: 170 },
  { id: "west", name: "West", x: 160, y: 335 },
  { id: "central", name: "Central", x: 500, y: 330, hub: true },
  { id: "market", name: "Market", x: 780, y: 365 },
  { id: "garden", name: "Garden", x: 320, y: 520 },
  { id: "south", name: "South", x: 610, y: 520 }
];

const initialEdges = [
  { id: "e1", from: "north", to: "museum", line: "blue", broken: false },
  { id: "e2", from: "museum", to: "harbor", line: "blue", broken: true },
  { id: "e3", from: "harbor", to: "east", line: "blue", broken: false },
  { id: "e4", from: "west", to: "central", line: "blue", broken: true },
  { id: "e5", from: "central", to: "market", line: "blue", broken: false },
  { id: "e6", from: "museum", to: "central", line: "amber", broken: true },
  { id: "e7", from: "central", to: "south", line: "amber", broken: false },
  { id: "e8", from: "garden", to: "south", line: "amber", broken: true },
  { id: "e9", from: "west", to: "garden", line: "amber", broken: false },
  { id: "e10", from: "north", to: "west", line: "blue", broken: false },
  { id: "e11", from: "harbor", to: "market", line: "amber", broken: true },
  { id: "e12", from: "market", to: "south", line: "blue", broken: false }
];

const state = {
  mode: "title",
  secondsLeft: GAME_SECONDS,
  repairsLeft: MAX_REPAIRS,
  repaired: new Set(),
  score: 0,
  restoredPercent: 0,
  onlineStations: new Set(),
  timerId: null
};

const elements = {
  map: document.querySelector("#metro-map"),
  titleScreen: document.querySelector("#title-screen"),
  resultScreen: document.querySelector("#result-screen"),
  startButton: document.querySelector("#start-button"),
  titleStartButton: document.querySelector("#title-start-button"),
  retryButton: document.querySelector("#retry-button"),
  creditPill: document.querySelector("#credit-pill"),
  insertText: document.querySelector("#insert-text"),
  instructionBox: document.querySelector("#instruction-box"),
  time: document.querySelector("#time-readout"),
  repairs: document.querySelector("#repairs-readout"),
  restored: document.querySelector("#restored-readout"),
  score: document.querySelector("#score-readout"),
  rank: document.querySelector("#rank-readout"),
  finalScore: document.querySelector("#final-score"),
  finalRestored: document.querySelector("#final-restored"),
  finalStations: document.querySelector("#final-stations"),
  finalFixed: document.querySelector("#final-fixed")
};

function stationById(id) {
  return stations.find((station) => station.id === id);
}

function edgeIsOnline(edge) {
  return !edge.broken || state.repaired.has(edge.id);
}

function edgeClass(edge) {
  const classes = ["segment", `line-${edge.line}`];
  if (edge.broken && !state.repaired.has(edge.id)) classes.push("is-broken");
  if (edge.broken && state.repaired.has(edge.id)) classes.push("is-repaired");
  return classes.join(" ");
}

function createSvgElement(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, String(value));
  });
  return element;
}

function drawMap() {
  const existing = Array.from(elements.map.querySelectorAll("[data-dynamic='true']"));
  existing.forEach((node) => node.remove());

  const online = getOnlineStations();
  const layerLines = createSvgElement("g", { "data-dynamic": "true" });
  const layerStations = createSvgElement("g", { "data-dynamic": "true" });
  const layerLabels = createSvgElement("g", { "data-dynamic": "true" });

  initialEdges.forEach((edge) => {
    const from = stationById(edge.from);
    const to = stationById(edge.to);
    const line = createSvgElement("line", {
      class: edgeClass(edge),
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y
    });
    const hit = createSvgElement("line", {
      class: `segment-hit ${edge.broken && !state.repaired.has(edge.id) ? "" : "is-locked"}`,
      x1: from.x,
      y1: from.y,
      x2: to.x,
      y2: to.y,
      "data-edge-id": edge.id
    });
    hit.addEventListener("click", () => repairEdge(edge.id));
    layerLines.append(line, hit);

    if (edge.broken && !state.repaired.has(edge.id)) {
      const label = createSvgElement("text", {
        class: "fault-label",
        x: (from.x + to.x) / 2,
        y: (from.y + to.y) / 2 - 14,
        "text-anchor": "middle"
      });
      label.textContent = "FAULT";
      layerLabels.append(label);
    }

    if (edgeIsOnline(edge)) {
      drawPulseDot(layerLines, from, to, edge.id);
    }
  });

  stations.forEach((station) => {
    const ring = createSvgElement("circle", {
      class: `station-ring ${online.has(station.id) ? "is-online" : ""} ${station.hub ? "is-hub" : ""}`,
      cx: station.x,
      cy: station.y,
      r: station.hub ? 18 : 14
    });
    const label = createSvgElement("text", {
      class: "station-label",
      x: station.x,
      y: station.y + 42,
      "text-anchor": "middle"
    });
    label.textContent = station.name;
    layerStations.append(ring, label);
  });

  elements.map.append(layerLines, layerStations, layerLabels);
}

function drawPulseDot(layer, from, to, edgeId) {
  const dot = createSvgElement("circle", {
    class: "pulse-dot",
    r: 5
  });
  const animateX = createSvgElement("animate", {
    attributeName: "cx",
    values: `${from.x};${to.x};${from.x}`,
    dur: `${3 + edgeId.length * 0.22}s`,
    repeatCount: "indefinite"
  });
  const animateY = createSvgElement("animate", {
    attributeName: "cy",
    values: `${from.y};${to.y};${from.y}`,
    dur: `${3 + edgeId.length * 0.22}s`,
    repeatCount: "indefinite"
  });
  dot.append(animateX, animateY);
  layer.append(dot);
}

function repairEdge(edgeId) {
  if (state.mode !== "play") return;

  const edge = initialEdges.find((item) => item.id === edgeId);
  if (!edge || !edge.broken || state.repaired.has(edge.id)) {
    setInstruction("That segment is already online.");
    return;
  }

  if (state.repairsLeft <= 0) {
    setInstruction("No repair crews remain. Let the clock run or retry.");
    return;
  }

  state.repaired.add(edge.id);
  state.repairsLeft -= 1;
  updateScore();
  drawMap();
  updateHud();
  setInstruction(`${stationById(edge.from).name} to ${stationById(edge.to).name} restored.`);

  if (allFaultsFixed() || state.repairsLeft === 0) {
    window.setTimeout(() => finishGame("repairs-complete"), 500);
  }
}

function getOnlineStations() {
  const adjacency = new Map();
  stations.forEach((station) => adjacency.set(station.id, []));
  initialEdges.filter(edgeIsOnline).forEach((edge) => {
    adjacency.get(edge.from).push(edge.to);
    adjacency.get(edge.to).push(edge.from);
  });

  const start = "central";
  const online = new Set([start]);
  const queue = [start];

  while (queue.length) {
    const current = queue.shift();
    adjacency.get(current).forEach((next) => {
      if (!online.has(next)) {
        online.add(next);
        queue.push(next);
      }
    });
  }

  state.onlineStations = online;
  return online;
}

function updateScore() {
  const online = getOnlineStations();
  const repairedCount = state.repaired.size;
  const hubBonus = online.has("north") ? 600 : 0;
  const restoredPercent = Math.round((online.size / stations.length) * 100);
  const timeBonus = state.mode === "play" ? state.secondsLeft * 8 : 0;
  const unusedRepairBonus = state.repairsLeft * 150;
  const fixedFaultBonus = repairedCount * 420;
  const isolationPenalty = (stations.length - online.size) * 180;

  state.restoredPercent = restoredPercent;
  state.score = Math.max(
    0,
    online.size * 260 + hubBonus + fixedFaultBonus + unusedRepairBonus + timeBonus - isolationPenalty
  );
}

function updateHud() {
  elements.time.textContent = String(state.secondsLeft);
  elements.repairs.textContent = String(state.repairsLeft);
  elements.restored.textContent = `${state.restoredPercent}%`;
  elements.score.textContent = String(state.score);
}

function setInstruction(message) {
  elements.instructionBox.textContent = message;
}

function startGame() {
  state.mode = "play";
  state.secondsLeft = GAME_SECONDS;
  state.repairsLeft = MAX_REPAIRS;
  state.repaired = new Set();
  state.score = 0;
  state.restoredPercent = 0;
  hideOverlay(elements.titleScreen);
  hideOverlay(elements.resultScreen);
  setInstruction("Click red fault lines to reconnect the network.");
  updateScore();
  drawMap();
  updateHud();
  clearInterval(state.timerId);
  state.timerId = window.setInterval(tick, 1000);
}

function tick() {
  if (state.mode !== "play") return;
  state.secondsLeft -= 1;
  updateScore();
  updateHud();

  if (state.secondsLeft <= 0) {
    finishGame("time-up");
  }
}

function finishGame(reason) {
  if (state.mode === "result") return;
  state.mode = "result";
  clearInterval(state.timerId);
  state.timerId = null;
  updateScore();
  updateHud();
  drawMap();

  const rank = getRank();
  elements.rank.textContent = `Rank ${rank}`;
  elements.finalScore.textContent = String(state.score);
  elements.finalRestored.textContent = `${state.restoredPercent}%`;
  elements.finalStations.textContent = `${state.onlineStations.size}/${stations.length}`;
  elements.finalFixed.textContent = `${state.repaired.size}/${initialEdges.filter((edge) => edge.broken).length}`;
  setInstruction(reason === "time-up" ? "Shift ended. Review the service report." : "Repair crews have returned. Review the service report.");
  showOverlay(elements.resultScreen);
}

function getRank() {
  if (state.restoredPercent >= 100 && state.score >= 5200) return "S";
  if (state.restoredPercent >= 90) return "A";
  if (state.restoredPercent >= 75) return "B";
  if (state.restoredPercent >= 55) return "C";
  return "D";
}

function allFaultsFixed() {
  return initialEdges.filter((edge) => edge.broken).every((edge) => state.repaired.has(edge.id));
}

function showOverlay(overlay) {
  overlay.classList.add("is-visible");
}

function hideOverlay(overlay) {
  overlay.classList.remove("is-visible");
}

function configureArcadeLaunch() {
  const params = new URLSearchParams(window.location.search);
  const fromArcade = params.get("from") === "arcade";
  const credit = params.get("credit") === "1";

  if (fromArcade && credit) {
    elements.creditPill.textContent = "1 CREDIT";
    elements.insertText.textContent = "1 CREDIT INSERTED";
    setInstruction("Arcade credit received. Start the repair shift.");
    return;
  }

  elements.creditPill.textContent = "FREE PLAY";
  elements.insertText.textContent = "INSERT COIN";
}

function init() {
  configureArcadeLaunch();
  updateScore();
  drawMap();
  updateHud();
  elements.startButton.addEventListener("click", startGame);
  elements.titleStartButton.addEventListener("click", startGame);
  elements.retryButton.addEventListener("click", startGame);

  window.CodexArcadeGame = {
    id: GAME_ID,
    version: "0.1.0",
    supportsArcadeParams: true,
    supportsPostMessage: false,
    start: startGame,
    getState: () => ({
      mode: state.mode,
      score: state.score,
      restoredPercent: state.restoredPercent,
      repairsLeft: state.repairsLeft,
      secondsLeft: state.secondsLeft
    })
  };
}

init();
