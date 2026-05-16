const GAME_ID = "metro-mender";
const GAME_SECONDS = 90;
const MAX_REPAIRS = 4;
const CENTER_STATION = "central";

const stations = [
  { id: "north", name: "North", x: 150, y: 115, major: true },
  { id: "museum", name: "Museum", x: 375, y: 115 },
  { id: "harbor", name: "Harbor", x: 625, y: 115 },
  { id: "east", name: "East", x: 850, y: 170, major: true },
  { id: "west", name: "West", x: 160, y: 335 },
  { id: "central", name: "Central", x: 500, y: 330, center: true },
  { id: "market", name: "Market", x: 780, y: 365 },
  { id: "garden", name: "Garden", x: 320, y: 520 },
  { id: "south", name: "South", x: 610, y: 520, major: true }
];

const initialEdges = [
  { id: "e1", from: "north", to: "museum", line: "blue", broken: false },
  { id: "e2", from: "museum", to: "harbor", line: "blue", broken: true },
  { id: "e3", from: "harbor", to: "east", line: "blue", broken: true },
  { id: "e4", from: "west", to: "central", line: "blue", broken: true },
  { id: "e5", from: "central", to: "market", line: "blue", broken: false },
  { id: "e6", from: "museum", to: "central", line: "amber", broken: true },
  { id: "e7", from: "central", to: "south", line: "amber", broken: false },
  { id: "e8", from: "garden", to: "south", line: "amber", broken: true },
  { id: "e9", from: "west", to: "garden", line: "amber", broken: false },
  { id: "e10", from: "north", to: "west", line: "blue", broken: true },
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
  previewEdgeId: null,
  lastNewStations: new Set(),
  impactText: "",
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
  impactBox: document.querySelector("#impact-box"),
  time: document.querySelector("#time-readout"),
  repairs: document.querySelector("#repairs-readout"),
  restored: document.querySelector("#restored-readout"),
  score: document.querySelector("#score-readout"),
  rank: document.querySelector("#rank-readout"),
  finalScore: document.querySelector("#final-score"),
  finalRestored: document.querySelector("#final-restored"),
  finalStations: document.querySelector("#final-stations"),
  finalFixed: document.querySelector("#final-fixed"),
  finalMajors: document.querySelector("#final-majors"),
  finalIsolated: document.querySelector("#final-isolated")
};

function stationById(id) {
  return stations.find((station) => station.id === id);
}

function edgeIsOnline(edge) {
  return !edge.broken || state.repaired.has(edge.id);
}

function edgeIsOnlineFor(edge, repairedSet) {
  return !edge.broken || repairedSet.has(edge.id);
}

function edgeClass(edge) {
  const classes = ["segment", `line-${edge.line}`];
  if (edge.broken && !state.repaired.has(edge.id)) classes.push("is-broken");
  if (edge.broken && state.repaired.has(edge.id)) classes.push("is-repaired");
  if (state.previewEdgeId === edge.id) classes.push("is-preview");
  return classes.join(" ");
}

function createSvgElement(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => {
    element.setAttribute(key, String(value));
  });
  return element;
}

function getHitPolygonPoints(from, to, width = 44) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const offsetX = (-dy / length) * (width / 2);
  const offsetY = (dx / length) * (width / 2);

  return [
    `${from.x + offsetX},${from.y + offsetY}`,
    `${to.x + offsetX},${to.y + offsetY}`,
    `${to.x - offsetX},${to.y - offsetY}`,
    `${from.x - offsetX},${from.y - offsetY}`
  ].join(" ");
}

function drawMap() {
  const existing = Array.from(elements.map.querySelectorAll("[data-dynamic='true']"));
  existing.forEach((node) => node.remove());

  const online = getOnlineStations();
  const layerLines = createSvgElement("g", { "data-dynamic": "true" });
  const layerPreview = createSvgElement("g", { "data-dynamic": "true" });
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
    const hit = createSvgElement("polygon", {
      class: `segment-hit ${edge.broken && !state.repaired.has(edge.id) ? "" : "is-locked"}`,
      points: getHitPolygonPoints(from, to),
      "data-edge-id": edge.id
    });
    hit.addEventListener("click", () => repairEdge(edge.id));
    hit.addEventListener("mouseenter", () => previewEdge(edge.id));
    hit.addEventListener("mouseleave", clearPreview);
    hit.addEventListener("focus", () => previewEdge(edge.id));
    hit.addEventListener("blur", clearPreview);
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

    if (state.previewEdgeId === edge.id && edge.broken && !state.repaired.has(edge.id)) {
      const previewLine = createSvgElement("line", {
        class: "preview-line",
        x1: from.x,
        y1: from.y,
        x2: to.x,
        y2: to.y
      });
      layerPreview.append(previewLine);
    }
  });

  const previewOutcome = state.previewEdgeId ? getRepairOutcome(state.previewEdgeId) : null;
  const previewStations = previewOutcome ? previewOutcome.newStations : new Set();

  stations.forEach((station) => {
    const ring = createSvgElement("circle", {
      class: [
        "station-ring",
        online.has(station.id) ? "is-online" : "",
        station.center ? "is-center" : "",
        station.major ? "is-major" : "",
        previewStations.has(station.id) ? "is-preview" : "",
        state.lastNewStations.has(station.id) ? "is-new-online" : ""
      ].filter(Boolean).join(" "),
      cx: station.x,
      cy: station.y,
      r: station.center ? 22 : station.major ? 17 : 14
    });
    const label = createSvgElement("text", {
      class: "station-label",
      x: station.x,
      y: station.y + 42,
      "text-anchor": "middle"
    });
    label.textContent = station.name;
    if (station.center || station.major) {
      const badge = createSvgElement("text", {
        class: "station-badge",
        x: station.x,
        y: station.y - 28,
        "text-anchor": "middle"
      });
      badge.textContent = station.center ? "CENTRAL" : "MAJOR";
      layerLabels.append(badge);
    }
    layerStations.append(ring, label);
  });

  if (state.impactText) {
    const impact = createSvgElement("text", {
      class: "floating-impact",
      x: 500,
      y: 74,
      "text-anchor": "middle"
    });
    impact.textContent = state.impactText;
    layerLabels.append(impact);
  }

  elements.map.append(layerLines, layerPreview, layerStations, layerLabels);
}

function getSvgPoint(event) {
  const rect = elements.map.getBoundingClientRect();
  const scaleX = 1000 / rect.width;
  const scaleY = 640 / rect.height;

  return {
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}

function pointToSegmentDistance(point, from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const lengthSquared = dx * dx + dy * dy;

  if (lengthSquared === 0) {
    return Math.hypot(point.x - from.x, point.y - from.y);
  }

  const t = Math.max(0, Math.min(1, ((point.x - from.x) * dx + (point.y - from.y) * dy) / lengthSquared));
  const projected = {
    x: from.x + t * dx,
    y: from.y + t * dy
  };

  return Math.hypot(point.x - projected.x, point.y - projected.y);
}

function getNearestRepairableEdge(point) {
  let nearest = null;
  let nearestDistance = Number.POSITIVE_INFINITY;

  initialEdges.forEach((edge) => {
    if (!edge.broken || state.repaired.has(edge.id)) return;

    const distance = pointToSegmentDistance(point, stationById(edge.from), stationById(edge.to));

    if (distance < nearestDistance) {
      nearest = edge;
      nearestDistance = distance;
    }
  });

  return nearest && nearestDistance <= 42 ? nearest : null;
}

function handleMapClick(event) {
  if (state.mode !== "play") return;

  const edge = getNearestRepairableEdge(getSvgPoint(event));

  if (edge) {
    repairEdge(edge.id);
  }
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

  const before = getNetworkOutcome(state.repaired, state.secondsLeft, state.repairsLeft);
  const projected = getRepairOutcome(edge.id);
  state.repaired.add(edge.id);
  state.repairsLeft -= 1;
  updateScore();
  const after = getNetworkOutcome(state.repaired, state.secondsLeft, state.repairsLeft);
  state.lastNewStations = projected.newStations;
  state.impactText = `+${Math.max(0, after.score - before.score)} score`;
  clearPreview(false);
  drawMap();
  updateHud();
  setInstruction(`${stationById(edge.from).name} to ${stationById(edge.to).name} repaired.`);
  setImpact(buildImpactText(projected, after.score - before.score));

  window.setTimeout(() => {
    state.lastNewStations = new Set();
    state.impactText = "";
    drawMap();
  }, 900);

  if (allFaultsFixed() || state.repairsLeft === 0) {
    window.setTimeout(() => finishGame("repairs-complete"), 500);
  }
}

function getOnlineStations() {
  const online = getOnlineStationsFor(state.repaired);
  state.onlineStations = online;
  return online;
}

function getOnlineStationsFor(repairedSet) {
  const adjacency = new Map();
  stations.forEach((station) => adjacency.set(station.id, []));
  initialEdges.filter((edge) => edgeIsOnlineFor(edge, repairedSet)).forEach((edge) => {
    adjacency.get(edge.from).push(edge.to);
    adjacency.get(edge.to).push(edge.from);
  });

  const start = CENTER_STATION;
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

  return online;
}

function updateScore() {
  const outcome = getNetworkOutcome(state.repaired, state.secondsLeft, state.repairsLeft);
  state.onlineStations = outcome.online;
  state.restoredPercent = outcome.restoredPercent;
  state.score = outcome.score;
}

function getNetworkOutcome(repairedSet, secondsLeft, repairsLeft) {
  const online = getOnlineStationsFor(repairedSet);
  const restoredPercent = Math.round((online.size / stations.length) * 100);
  const repairedCount = repairedSet.size;
  const majorOnline = getMajorOnlineCount(online);
  const timeBonus = state.mode === "play" ? secondsLeft * 6 : 0;
  const unusedRepairBonus = repairsLeft * 180;
  const fixedFaultBonus = repairedCount * 260;
  const majorBonus = majorOnline * 700;
  const isolationPenalty = (stations.length - online.size) * 220;
  const score = Math.max(
    0,
    online.size * 320 + majorBonus + fixedFaultBonus + unusedRepairBonus + timeBonus - isolationPenalty
  );

  return { online, restoredPercent, score, majorOnline };
}

function getRepairOutcome(edgeId) {
  const before = getNetworkOutcome(state.repaired, state.secondsLeft, state.repairsLeft);
  const nextRepaired = new Set(state.repaired);
  nextRepaired.add(edgeId);
  const after = getNetworkOutcome(nextRepaired, state.secondsLeft, Math.max(0, state.repairsLeft - 1));
  const newStations = new Set([...after.online].filter((stationId) => !before.online.has(stationId)));
  const newMajorStations = [...newStations].filter((stationId) => stationById(stationId).major);

  return {
    before,
    after,
    newStations,
    newMajorStations,
    scoreDelta: after.score - before.score,
    restoredDelta: after.restoredPercent - before.restoredPercent
  };
}

function getMajorOnlineCount(onlineSet) {
  return stations.filter((station) => station.major && onlineSet.has(station.id)).length;
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

function setImpact(message, warning = false) {
  elements.impactBox.textContent = message;
  elements.impactBox.classList.toggle("is-warning", warning);
}

function buildImpactText(outcome, scoreDelta) {
  const newCount = outcome.newStations.size;
  const majorText = outcome.newMajorStations.length
    ? ` Major online: ${outcome.newMajorStations.map((id) => stationById(id).name).join(", ")}.`
    : "";

  if (newCount === 0) {
    return `No stations restored now. Score ${scoreDelta >= 0 ? "+" : ""}${scoreDelta}.`;
  }

  return `+${newCount} station${newCount === 1 ? "" : "s"}, +${outcome.restoredDelta}% restored, score ${scoreDelta >= 0 ? "+" : ""}${scoreDelta}.${majorText}`;
}

function previewEdge(edgeId) {
  if (state.mode !== "play") return;

  const edge = initialEdges.find((item) => item.id === edgeId);
  if (!edge || !edge.broken || state.repaired.has(edge.id)) return;

  state.previewEdgeId = edge.id;
  const outcome = getRepairOutcome(edge.id);
  const from = stationById(edge.from).name;
  const to = stationById(edge.to).name;
  const warning = outcome.newStations.size === 0;
  setImpact(`Preview ${from}-${to}: ${buildImpactText(outcome, outcome.scoreDelta)}`, warning);
  drawMap();
}

function clearPreview(redraw = true) {
  state.previewEdgeId = null;
  if (state.mode === "play") {
    setImpact("Hover a fault line to preview its effect.");
  }
  if (redraw) drawMap();
}

function startGame() {
  state.mode = "play";
  state.secondsLeft = GAME_SECONDS;
  state.repairsLeft = MAX_REPAIRS;
  state.repaired = new Set();
  state.score = 0;
  state.restoredPercent = 0;
  state.previewEdgeId = null;
  state.lastNewStations = new Set();
  state.impactText = "";
  hideOverlay(elements.titleScreen);
  hideOverlay(elements.resultScreen);
  setInstruction("Red faults are choices. Use 4 repairs to restore the best route from CENTRAL.");
  setImpact("Hover a fault line to preview its effect.");
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
  elements.finalMajors.textContent = `${getMajorOnlineCount(state.onlineStations)}/${stations.filter((station) => station.major).length}`;
  elements.finalIsolated.textContent = String(stations.length - state.onlineStations.size);
  setInstruction(reason === "time-up" ? "Shift ended. Review the service report." : "Repair crews have returned. Review the service report.");
  setImpact("Retry and choose a better route from CENTRAL.");
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
  elements.map.addEventListener("click", handleMapClick);

  window.CodexArcadeGame = {
    id: GAME_ID,
    version: "0.2.3",
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
