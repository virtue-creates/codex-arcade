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
  pins: document.querySelector("#pins"),
};

const params = new URLSearchParams(window.location.search);
const arcadeLaunch = params.get("from") === "arcade" && params.get("credit") === "1";

const TAU = Math.PI * 2;
const PLAY_SECONDS = 60;
const SPECIMEN_COUNT = 3;

let width = 0;
let height = 0;
let dpr = 1;
let box = { x: 0, y: 0, w: 0, h: 0 };
let state = "intro";
let lastTime = 0;
let elapsed = 0;
let rescued = 0;
let activePin = null;
let pointer = { x: 0, y: 0, down: false };
let motes = [];
let pins = [];
let bugs = [];
let ripples = [];
let exit = { x: 0, y: 0, r: 36 };

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
    x: box.x + box.w - 72,
    y: box.y + box.h * 0.5,
    r: Math.max(31, box.w * 0.037),
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
    { id: 1, x: px(0.34), y: py(0.31), r: 17 },
    { id: 2, x: px(0.49), y: py(0.66), r: 17 },
    { id: 3, x: px(0.66), y: py(0.42), r: 17 },
  ];
  bugs = [
    makeBug(px(0.15), py(0.25), 0.18, "#1a1714", "#c48653", 92),
    makeBug(px(0.17), py(0.55), -0.08, "#24170f", "#ddb36d", 78),
    makeBug(px(0.2), py(0.78), -0.34, "#111b1f", "#8bd8dd", 86),
  ];
  ripples = [];
  rescued = 0;
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
    lost: false,
    wiggle: Math.random() * TAU,
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
  const title =
    rescued === SPECIMEN_COUNT
      ? "Every specimen found the moon."
      : rescued === 0
        ? "The box kept its secrets."
        : "Some wings reached the light.";
  ui.endTitle.textContent = title;
  ui.endKicker.textContent = rescued === SPECIMEN_COUNT ? "Perfect Rescue" : "Night Shift Complete";
  ui.endText.textContent = `${rescued}/${SPECIMEN_COUNT} rescued in ${formatTime(elapsed)}. The pins are still warm.`;
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

  if (bugs.every((bug) => bug.rescued || bug.lost)) {
    endGame();
  }

  updateHud();
}

function updateBug(bug, dt) {
  if (bug.rescued || bug.lost) {
    return;
  }

  const toExit = Math.atan2(exit.y - bug.y, exit.x - bug.x);
  bug.angle = turnToward(bug.angle, toExit, 0.13 * dt);
  bug.angle += Math.sin(elapsed * 2.4 + bug.wiggle) * 0.14 * dt;

  for (const pin of pins) {
    const dx = bug.x - pin.x;
    const dy = bug.y - pin.y;
    const distance = Math.hypot(dx, dy);
    const influence = 96;
    if (distance < influence) {
      const side = Math.sign(Math.sin(bug.angle) * dx - Math.cos(bug.angle) * dy) || 1;
      const force = (1 - distance / influence) * 2.9;
      bug.angle += side * force * dt;
      if (distance < pin.r + bug.r + 2) {
        bug.angle += side * 1.5;
        bug.x += Math.cos(bug.angle) * 3;
        bug.y += Math.sin(bug.angle) * 3;
      }
    }
  }

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

  if (Math.hypot(bug.x - exit.x, bug.y - exit.y) < exit.r) {
    bug.rescued = true;
    rescued += 1;
    ripples.push({ x: exit.x, y: exit.y, radius: exit.r * 0.4, life: 0.8 });
    updateHud();
  }
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawRoom();
  drawBox();
  drawMoonExit();
  drawPins();
  drawBugs();
  drawRipples();

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
  const glow = ctx.createRadialGradient(exit.x, exit.y, 5, exit.x, exit.y, exit.r * 2.6);
  glow.addColorStop(0, "rgba(222, 249, 255, 0.95)");
  glow.addColorStop(0.28, "rgba(167, 231, 255, 0.34)");
  glow.addColorStop(1, "rgba(167, 231, 255, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(exit.x, exit.y, exit.r * 2.6, 0, TAU);
  ctx.fill();

  ctx.fillStyle = "rgba(232, 252, 255, 0.84)";
  ctx.beginPath();
  ctx.arc(exit.x, exit.y, exit.r, 0, TAU);
  ctx.fill();
  ctx.fillStyle = "rgba(57, 78, 87, 0.55)";
  ctx.beginPath();
  ctx.arc(exit.x - exit.r * 0.22, exit.y - exit.r * 0.12, exit.r * 0.92, 0, TAU);
  ctx.fill();

  ctx.strokeStyle = "rgba(16, 23, 26, 0.38)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(exit.x, exit.y, exit.r + 5, 0, TAU);
  ctx.stroke();
}

function drawPins() {
  for (const pin of pins) {
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
    ctx.translate(bug.x, bug.y);
    ctx.rotate(bug.angle);
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
  }
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
  ui.pins.textContent = `${pins.length}`;
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
