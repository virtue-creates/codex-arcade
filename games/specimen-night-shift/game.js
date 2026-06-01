const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

const ui = {
  intro: document.querySelector("#intro"),
  introKicker: document.querySelector("#introKicker"),
  end: document.querySelector("#end"),
  endKicker: document.querySelector("#endKicker"),
  endTitle: document.querySelector("#endTitle"),
  endText: document.querySelector("#endText"),
  startBtn: document.querySelector("#startBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  time: document.querySelector("#time"),
  rescued: document.querySelector("#rescued"),
  moves: document.querySelector("#moves"),
};

const params = new URLSearchParams(window.location.search);
const arcadeLaunch = params.get("from") === "arcade" && params.get("credit") === "1";

const TAU = Math.PI * 2;
const PLAY_SECONDS = 60;
const SPECIMEN_COUNT = 3;
const PIN_INFLUENCE = 122;

let width = 0;
let height = 0;
let dpr = 1;
let box = { x: 0, y: 0, w: 0, h: 0 };
let state = "intro";
let lastTime = 0;
let elapsed = 0;
let rescued = 0;
let pinMoves = 0;
let rescueTimes = [];
let activePin = null;
let pointer = { x: 0, y: 0, down: false };
let motes = [];
let pins = [];
let bugs = [];
let ripples = [];
let bendBursts = [];
let rescueBursts = [];
let exit = { x: 0, y: 0, lineX: 0, top: 0, bottom: 0, r: 36 };

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const marginX = Math.max(24, width * 0.07);
  const marginY = Math.max(70, height * 0.12);
  const targetW = Math.min(width - marginX * 2, (height - marginY * 1.5) * 1.72);
  const targetH = targetW / 1.72;
  box = {
    w: targetW,
    h: targetH,
    x: (width - targetW) / 2,
    y: (height - targetH) / 2 + 20,
  };
  exit = {
    x: box.x + box.w - 28,
    y: box.y + box.h * 0.5,
    lineX: box.x + box.w - 42,
    top: box.y + box.h * 0.5 - Math.max(54, box.h * 0.17),
    bottom: box.y + box.h * 0.5 + Math.max(54, box.h * 0.17),
    r: Math.max(34, box.w * 0.042),
  };

  motes = Array.from({ length: Math.floor((width * height) / 18000) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.4,
    a: Math.random() * 0.35 + 0.08,
  }));

  if (state === "intro") {
    setupSpecimenBox();
  } else {
    keepPiecesInBox();
  }
}

function setupSpecimenBox() {
  const px = (n) => box.x + box.w * n;
  const py = (n) => box.y + box.h * n;
  pins = [
    { id: 1, x: px(0.34), y: py(0.31), r: 17, startX: 0, startY: 0, moved: false },
    { id: 2, x: px(0.49), y: py(0.66), r: 17, startX: 0, startY: 0, moved: false },
    { id: 3, x: px(0.66), y: py(0.42), r: 17, startX: 0, startY: 0, moved: false },
  ];
  bugs = [
    makeBug(px(0.15), py(0.25), 0.18, "#1a1714", "#c48653", 76),
    makeBug(px(0.17), py(0.55), -0.08, "#24170f", "#ddb36d", 66),
    makeBug(px(0.2), py(0.78), -0.34, "#111b1f", "#8bd8dd", 72),
  ];
  ripples = [];
  bendBursts = [];
  rescueBursts = [];
  rescued = 0;
  pinMoves = 0;
  rescueTimes = [];
  updateHud();
}

function makeBug(x, y, angle, body, accent, speed) {
  return {
    x,
    y,
    angle,
    speed,
    r: 12,
    body,
    accent,
    rescued: false,
    escaping: false,
    escapeLife: 0,
    lost: false,
    wiggle: Math.random() * TAU,
    bendGlow: 0,
    trail: [],
  };
}

function keepPiecesInBox() {
  for (const pin of pins) {
    pin.x = clamp(pin.x, box.x + 38, box.x + box.w - 38);
    pin.y = clamp(pin.y, box.y + 38, box.y + box.h - 38);
  }
  for (const bug of bugs) {
    bug.x = clamp(bug.x, box.x + 24, box.x + box.w - 24);
    bug.y = clamp(bug.y, box.y + 24, box.y + box.h - 24);
  }
}

function startGame() {
  elapsed = 0;
  state = "playing";
  activePin = null;
  ui.intro.classList.add("hidden");
  ui.end.classList.add("hidden");
  setupSpecimenBox();
}

function endGame() {
  state = "result";
  activePin = null;
  canvas.classList.remove("dragging");
  const routeRank = getRouteRank();
  const title =
    rescued === SPECIMEN_COUNT
      ? "Every specimen found the moon."
      : rescued === 0
        ? "The box kept its secrets."
        : "Some wings reached the light.";
  ui.endTitle.textContent = title;
  ui.endKicker.textContent = routeRank;
  ui.endText.textContent = `${rescued}/${SPECIMEN_COUNT} rescued. Pin moves: ${pinMoves}. Chain: ${getBestChain()} specimens. Fewer moves make the cleaner route.`;
  ui.end.classList.remove("hidden");
}

function update(dt) {
  if (state !== "playing") {
    return;
  }

  elapsed += dt;
  if (elapsed >= PLAY_SECONDS) {
    elapsed = PLAY_SECONDS;
    endGame();
  }

  for (const bug of bugs) {
    updateBug(bug, dt);
  }

  ripples = ripples.filter((r) => {
    r.life -= dt;
    r.radius += dt * 48;
    return r.life > 0;
  });
  bendBursts = bendBursts.filter((burst) => {
    burst.life -= dt;
    burst.radius += dt * 34;
    return burst.life > 0;
  });
  rescueBursts = rescueBursts.filter((burst) => {
    burst.life -= dt;
    burst.y -= dt * 24;
    return burst.life > 0;
  });

  if (bugs.every((bug) => bug.rescued || bug.lost)) {
    endGame();
  }

  updateHud();
}

function updateBug(bug, dt) {
  if (bug.rescued || bug.lost) {
    return;
  }

  if (bug.escaping) {
    bug.escapeLife -= dt;
    bug.x += Math.cos(bug.angle) * bug.speed * 1.45 * dt;
    bug.y += Math.sin(bug.angle) * bug.speed * 0.22 * dt;
    bug.trail.push({ x: bug.x, y: bug.y, life: 0.55 });
    bug.trail = bug.trail
      .map((point) => ({ ...point, life: point.life - dt }))
      .filter((point) => point.life > 0)
      .slice(-18);
    if (bug.escapeLife <= 0 || bug.x > box.x + box.w + 42) {
      bug.rescued = true;
    }
    return;
  }

  const toExit = Math.atan2(exit.y - bug.y, exit.x - bug.x);
  bug.angle = turnToward(bug.angle, toExit, 0.13 * dt);
  bug.angle += Math.sin(elapsed * 2.4 + bug.wiggle) * 0.14 * dt;

  for (const pin of pins) {
    const dx = bug.x - pin.x;
    const dy = bug.y - pin.y;
    const distance = Math.hypot(dx, dy);
    if (distance < PIN_INFLUENCE) {
      const side = Math.sign(Math.sin(bug.angle) * dx - Math.cos(bug.angle) * dy) || 1;
      const force = (1 - distance / PIN_INFLUENCE) * 4.8;
      bug.angle += side * force * dt;
      bug.bendGlow = Math.min(1, bug.bendGlow + dt * 5);
      if (Math.random() < 0.28) {
        bendBursts.push({
          x: bug.x,
          y: bug.y,
          radius: 8,
          life: 0.34,
          color: bug.accent,
        });
      }
      if (distance < pin.r + bug.r + 2) {
        bug.angle += side * 1.5;
        bug.x += Math.cos(bug.angle) * 3;
        bug.y += Math.sin(bug.angle) * 3;
      }
    }
  }
  bug.bendGlow = Math.max(0, bug.bendGlow - dt * 1.6);

  bug.x += Math.cos(bug.angle) * bug.speed * dt;
  bug.y += Math.sin(bug.angle) * bug.speed * dt;

  if (bug.x < box.x + 18) {
    bug.x = box.x + 18;
    bug.angle = reflectAngle(bug.angle, "x");
  }
  if (bug.x > box.x + box.w - 18) {
    bug.x = box.x + box.w - 18;
    bug.angle = reflectAngle(bug.angle, "x");
  }
  if (bug.y < box.y + 18) {
    bug.y = box.y + 18;
    bug.angle = reflectAngle(bug.angle, "y");
  }
  if (bug.y > box.y + box.h - 18) {
    bug.y = box.y + box.h - 18;
    bug.angle = reflectAngle(bug.angle, "y");
  }

  bug.trail.push({ x: bug.x, y: bug.y, life: 0.9 });
  bug.trail = bug.trail
    .map((point) => ({ ...point, life: point.life - dt }))
    .filter((point) => point.life > 0)
    .slice(-28);

  if (crossedExitLine(bug)) {
    bug.escaping = true;
    bug.escapeLife = 0.48;
    bug.angle = 0;
    rescued += 1;
    rescueTimes.push(elapsed);
    ripples.push({ x: exit.lineX, y: bug.y, radius: exit.r * 0.38, life: 0.9 });
    rescueBursts.push({
      x: exit.lineX - 58,
      y: bug.y - 26,
      text: getBestChain() > 1 ? `CHAIN ${getBestChain()} / RESCUED ${rescued}/${SPECIMEN_COUNT}` : `RESCUED ${rescued}/${SPECIMEN_COUNT}`,
      life: 1.35,
    });
    updateHud();
  }
}

function crossedExitLine(bug) {
  return bug.x >= exit.lineX && bug.y >= exit.top && bug.y <= exit.bottom;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawRoom();
  drawBox();
  drawMoonExit();
  drawProjectedPaths();
  drawPins();
  drawBugs();
  drawBendBursts();
  drawRipples();
  drawRescueBursts();

  if (state === "intro") {
    drawIntroSpecimens();
  }
}

function drawRoom() {
  const gradient = ctx.createRadialGradient(width * 0.57, height * 0.38, 40, width * 0.5, height * 0.5, width * 0.78);
  gradient.addColorStop(0, "#25313a");
  gradient.addColorStop(0.45, "#18110f");
  gradient.addColorStop(1, "#08080a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  for (const mote of motes) {
    ctx.globalAlpha = mote.a;
    ctx.fillStyle = "#e8d7ad";
    ctx.beginPath();
    ctx.arc(mote.x, mote.y, mote.r, 0, TAU);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function drawBox() {
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 18;
  ctx.fillStyle = "#24140f";
  ctx.fillRect(box.x - 24, box.y - 24, box.w + 48, box.h + 48);
  ctx.restore();

  ctx.fillStyle = "#3a2118";
  ctx.fillRect(box.x - 18, box.y - 18, box.w + 36, box.h + 36);
  ctx.fillStyle = "#8f6e43";
  ctx.fillRect(box.x - 8, box.y - 8, box.w + 16, box.h + 16);
  ctx.fillStyle = "#d8caa5";
  ctx.fillRect(box.x, box.y, box.w, box.h);

  ctx.save();
  ctx.beginPath();
  ctx.rect(box.x, box.y, box.w, box.h);
  ctx.clip();
  ctx.globalAlpha = 0.16;
  ctx.strokeStyle = "#5e452a";
  for (let x = box.x - box.h; x < box.x + box.w; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, box.y);
    ctx.lineTo(x + box.h, box.y + box.h);
    ctx.stroke();
  }
  ctx.globalAlpha = 0.12;
  for (let i = 0; i < 80; i += 1) {
    const x = box.x + ((i * 79) % Math.max(1, box.w));
    const y = box.y + ((i * 47) % Math.max(1, box.h));
    ctx.fillStyle = i % 3 === 0 ? "#4d3422" : "#ffffff";
    ctx.fillRect(x, y, 1.5, 1.5);
  }
  ctx.restore();

  ctx.strokeStyle = "rgba(48, 31, 20, 0.55)";
  ctx.lineWidth = 2;
  ctx.strokeRect(box.x + 13, box.y + 13, box.w - 26, box.h - 26);
}

function drawMoonExit() {
  const beam = ctx.createLinearGradient(box.x + box.w - 160, exit.y, box.x + box.w + 16, exit.y);
  beam.addColorStop(0, "rgba(167, 231, 255, 0)");
  beam.addColorStop(0.62, "rgba(167, 231, 255, 0.22)");
  beam.addColorStop(1, "rgba(222, 249, 255, 0.72)");
  ctx.fillStyle = beam;
  ctx.beginPath();
  ctx.moveTo(box.x + box.w - 170, exit.y - 70);
  ctx.lineTo(box.x + box.w + 12, exit.y - 48);
  ctx.lineTo(box.x + box.w + 12, exit.y + 48);
  ctx.lineTo(box.x + box.w - 170, exit.y + 70);
  ctx.closePath();
  ctx.fill();

  const glow = ctx.createRadialGradient(exit.x, exit.y, 4, exit.x, exit.y, exit.r * 2.8);
  glow.addColorStop(0, "rgba(222, 249, 255, 0.82)");
  glow.addColorStop(0.28, "rgba(167, 231, 255, 0.42)");
  glow.addColorStop(1, "rgba(167, 231, 255, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(exit.x, exit.y, exit.r * 2.8, 0, TAU);
  ctx.fill();

  ctx.fillStyle = "#10171a";
  ctx.fillRect(box.x + box.w - 13, exit.top - 8, 18, exit.bottom - exit.top + 16);
  ctx.fillStyle = "rgba(225, 250, 255, 0.84)";
  ctx.fillRect(box.x + box.w - 6, exit.top, 7, exit.bottom - exit.top);

  ctx.strokeStyle = "rgba(222, 249, 255, 0.78)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(box.x + box.w - 21, exit.top - 12);
  ctx.lineTo(box.x + box.w + 3, exit.top);
  ctx.lineTo(box.x + box.w + 3, exit.bottom);
  ctx.lineTo(box.x + box.w - 21, exit.bottom + 12);
  ctx.stroke();

  ctx.save();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.86)";
  ctx.shadowColor = "rgba(167, 231, 255, 0.95)";
  ctx.shadowBlur = 12;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(exit.lineX, exit.top);
  ctx.lineTo(exit.lineX, exit.bottom);
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = "rgba(232, 252, 255, 0.78)";
  for (let y = exit.top + 13; y < exit.bottom; y += 22) {
    ctx.beginPath();
    ctx.moveTo(exit.lineX - 16, y);
    ctx.lineTo(exit.lineX - 7, y - 5);
    ctx.lineTo(exit.lineX - 7, y + 5);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = "rgba(18, 16, 13, 0.78)";
  ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.textAlign = "center";
  ctx.fillText("CROSS TO RESCUE", exit.lineX - 64, exit.top - 16);

  ctx.fillStyle = "rgba(167, 231, 255, 0.55)";
  ctx.beginPath();
  ctx.moveTo(exit.x - 84, exit.y);
  ctx.lineTo(exit.x - 64, exit.y - 8);
  ctx.lineTo(exit.x - 64, exit.y + 8);
  ctx.closePath();
  ctx.fill();
}

function drawProjectedPaths() {
  if (!activePin || state !== "playing") {
    return;
  }

  for (const bug of bugs) {
    if (bug.rescued || bug.escaping || bug.lost) {
      continue;
    }
    if (Math.hypot(bug.x - activePin.x, bug.y - activePin.y) > PIN_INFLUENCE * 1.55) {
      continue;
    }

    let x = bug.x;
    let y = bug.y;
    let angle = bug.angle;
    ctx.save();
    ctx.globalAlpha = 0.48;
    ctx.fillStyle = bug.accent;
    for (let step = 1; step <= 11; step += 1) {
      angle = steerAngleAt(x, y, angle, 0.08);
      x += Math.cos(angle) * bug.speed * 0.1;
      y += Math.sin(angle) * bug.speed * 0.1;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1.6, 4 - step * 0.18), 0, TAU);
      ctx.fill();
    }
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}

function steerAngleAt(x, y, angle, dt) {
  let nextAngle = angle;
  for (const pin of pins) {
    const dx = x - pin.x;
    const dy = y - pin.y;
    const distance = Math.hypot(dx, dy);
    if (distance < PIN_INFLUENCE) {
      const side = Math.sign(Math.sin(nextAngle) * dx - Math.cos(nextAngle) * dy) || 1;
      const force = (1 - distance / PIN_INFLUENCE) * 4.8;
      nextAngle += side * force * dt;
    }
  }
  return nextAngle;
}

function drawPins() {
  for (const pin of pins) {
    const influenceGlow = ctx.createRadialGradient(pin.x, pin.y, pin.r, pin.x, pin.y, PIN_INFLUENCE);
    influenceGlow.addColorStop(0, "rgba(167, 231, 255, 0.14)");
    influenceGlow.addColorStop(0.55, "rgba(167, 231, 255, 0.07)");
    influenceGlow.addColorStop(1, "rgba(167, 231, 255, 0)");
    ctx.fillStyle = influenceGlow;
    ctx.beginPath();
    ctx.arc(pin.x, pin.y, PIN_INFLUENCE, 0, TAU);
    ctx.fill();

    ctx.strokeStyle = activePin === pin ? "rgba(167, 231, 255, 0.55)" : "rgba(61, 86, 91, 0.32)";
    ctx.setLineDash([8, 8]);
    ctx.lineWidth = activePin === pin ? 2 : 1;
    ctx.beginPath();
    ctx.arc(pin.x, pin.y, PIN_INFLUENCE, 0, TAU);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.38)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 8;
    ctx.fillStyle = "rgba(58, 36, 24, 0.22)";
    ctx.beginPath();
    ctx.ellipse(pin.x + 6, pin.y + 9, pin.r * 1.1, pin.r * 0.48, 0.2, 0, TAU);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = "rgba(27, 20, 17, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pin.x, pin.y);
    ctx.lineTo(pin.x + 8, pin.y + 30);
    ctx.stroke();

    const head = ctx.createRadialGradient(pin.x - 5, pin.y - 5, 2, pin.x, pin.y, pin.r);
    head.addColorStop(0, "#565862");
    head.addColorStop(0.45, "#202126");
    head.addColorStop(1, "#08090b");
    ctx.fillStyle = head;
    ctx.beginPath();
    ctx.arc(pin.x, pin.y, pin.r, 0, TAU);
    ctx.fill();

    ctx.strokeStyle = activePin === pin ? "#a7e7ff" : "rgba(247, 236, 209, 0.25)";
    ctx.lineWidth = activePin === pin ? 3 : 1;
    ctx.beginPath();
    ctx.arc(pin.x, pin.y, pin.r + 4, 0, TAU);
    ctx.stroke();
  }
}

function drawBugs() {
  for (const bug of bugs) {
    if (bug.rescued) {
      continue;
    }

    for (const point of bug.trail) {
      ctx.globalAlpha = point.life * 0.22;
      ctx.fillStyle = bug.accent;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3.5, 0, TAU);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.save();
    if (bug.escaping) {
      ctx.globalAlpha = Math.max(0.1, bug.escapeLife / 0.48);
    }
    ctx.translate(bug.x, bug.y);
    ctx.rotate(bug.angle);
    if (bug.bendGlow > 0) {
      ctx.globalAlpha = bug.bendGlow * 0.75;
      ctx.strokeStyle = bug.accent;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 22, -0.8, 0.8);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "rgba(36, 23, 15, 0.22)";
    ctx.beginPath();
    ctx.ellipse(5, 9, 18, 6, 0, 0, TAU);
    ctx.fill();

    ctx.strokeStyle = bug.body;
    ctx.lineWidth = 2;
    for (let i = -2; i <= 2; i += 1) {
      ctx.beginPath();
      ctx.moveTo(-2 + i * 3, -4);
      ctx.lineTo(-10 + i * 2, -11);
      ctx.moveTo(-2 + i * 3, 4);
      ctx.lineTo(-10 + i * 2, 11);
      ctx.stroke();
    }

    ctx.fillStyle = bug.body;
    ctx.beginPath();
    ctx.ellipse(0, 0, 15, 7, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = bug.accent;
    ctx.beginPath();
    ctx.ellipse(5, 0, 6, 3, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#f3dfb7";
    ctx.beginPath();
    ctx.arc(11, -2.5, 1.6, 0, TAU);
    ctx.arc(11, 2.5, 1.6, 0, TAU);
    ctx.fill();
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}

function drawBendBursts() {
  for (const burst of bendBursts) {
    ctx.globalAlpha = Math.max(0, burst.life * 1.7);
    ctx.strokeStyle = burst.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(burst.x, burst.y, burst.radius, 0.2, TAU - 0.8);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawRipples() {
  for (const ripple of ripples) {
    ctx.globalAlpha = Math.max(0, ripple.life);
    ctx.strokeStyle = "#dff9ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, TAU);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function drawRescueBursts() {
  ctx.save();
  ctx.font = "700 16px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.textAlign = "center";
  for (const burst of rescueBursts) {
    ctx.globalAlpha = Math.min(1, burst.life);
    ctx.fillStyle = "#e8fbff";
    ctx.shadowColor = "rgba(167, 231, 255, 0.95)";
    ctx.shadowBlur = 14;
    ctx.fillText(burst.text, burst.x, burst.y);
  }
  ctx.restore();
  ctx.globalAlpha = 1;
}

function drawIntroSpecimens() {
  ctx.save();
  ctx.globalAlpha = 0.38;
  ctx.fillStyle = "#15110d";
  for (const bug of bugs) {
    ctx.beginPath();
    ctx.ellipse(bug.x, bug.y, 18, 8, bug.angle, 0, TAU);
    ctx.fill();
  }
  ctx.restore();
}

function updateHud() {
  const remaining = Math.max(0, PLAY_SECONDS - elapsed);
  ui.time.textContent = formatTime(remaining);
  ui.rescued.textContent = `${rescued}/${SPECIMEN_COUNT}`;
  ui.moves.textContent = `${pinMoves}`;
}

function getBestChain() {
  let best = 0;
  for (let i = 0; i < rescueTimes.length; i += 1) {
    let chain = 1;
    for (let j = i + 1; j < rescueTimes.length; j += 1) {
      if (rescueTimes[j] - rescueTimes[j - 1] <= 4.5) {
        chain += 1;
      }
    }
    best = Math.max(best, chain);
  }
  return best;
}

function getRouteRank() {
  if (rescued === SPECIMEN_COUNT && pinMoves <= 3) {
    return "Silent Route";
  }
  if (rescued === SPECIMEN_COUNT) {
    return "Clean Escape";
  }
  if (rescued > 0 && getBestChain() > 1) {
    return "Moon Chain";
  }
  if (rescued > 0) {
    return "Some Wings Free";
  }
  return "Box Kept Them";
}

function formatTime(seconds) {
  const total = Math.ceil(seconds);
  const min = Math.floor(total / 60);
  const sec = total % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function reflectAngle(angle, axis) {
  return axis === "x" ? Math.PI - angle : -angle;
}

function turnToward(current, target, amount) {
  const delta = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + clamp(delta, -amount, amount);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getPointer(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function onPointerDown(event) {
  pointer = { ...getPointer(event), down: true };
  activePin = pins.find((pin) => Math.hypot(pointer.x - pin.x, pointer.y - pin.y) < pin.r + 16) || null;
  if (activePin) {
    activePin.startX = activePin.x;
    activePin.startY = activePin.y;
    activePin.moved = false;
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add("dragging");
  }
}

function onPointerMove(event) {
  pointer = { ...getPointer(event), down: pointer.down };
  if (!activePin || state !== "playing") {
    return;
  }
  activePin.x = clamp(pointer.x, box.x + 36, box.x + box.w - 36);
  activePin.y = clamp(pointer.y, box.y + 36, box.y + box.h - 36);
  if (!activePin.moved && Math.hypot(activePin.x - activePin.startX, activePin.y - activePin.startY) > 12) {
    activePin.moved = true;
    pinMoves += 1;
    updateHud();
  }
}

function onPointerUp() {
  pointer.down = false;
  activePin = null;
  canvas.classList.remove("dragging");
}

function loop(time = 0) {
  const dt = Math.min(0.033, (time - lastTime) / 1000 || 0);
  lastTime = time;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

if (arcadeLaunch) {
  ui.introKicker.textContent = "1 Credit / Night Shift Armed";
}

ui.startBtn.addEventListener("click", startGame);
ui.restartBtn.addEventListener("click", startGame);
canvas.addEventListener("pointerdown", onPointerDown);
canvas.addEventListener("pointermove", onPointerMove);
canvas.addEventListener("pointerup", onPointerUp);
canvas.addEventListener("pointercancel", onPointerUp);
window.addEventListener("resize", resize);

resize();
updateHud();
requestAnimationFrame(loop);
