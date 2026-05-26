const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

const ui = {
  time: document.querySelector("#time"),
  score: document.querySelector("#score"),
  wave: document.querySelector("#wave"),
  hpBar: document.querySelector("#hpBar"),
  xpBar: document.querySelector("#xpBar"),
  intro: document.querySelector("#intro"),
  introKicker: document.querySelector("#introKicker"),
  introTagline: document.querySelector("#introTagline"),
  choices: document.querySelector("#choices"),
  choiceGrid: document.querySelector("#choiceGrid"),
  end: document.querySelector("#end"),
  endKicker: document.querySelector("#endKicker"),
  endTitle: document.querySelector("#endTitle"),
  endText: document.querySelector("#endText"),
  startBtn: document.querySelector("#startBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  soundBtn: document.querySelector("#soundBtn"),
};

const TAU = Math.PI * 2;
const WIN_TIME = 120;
const BEST_SCORE_KEY = "neon-core-survivor-best-score";
const params = new URLSearchParams(window.location.search);
const arcadeLaunch = params.get("from") === "arcade" && params.get("credit") === "1";
let soundEnabled = false;
let audioContext = null;

let width = 0;
let height = 0;
let dpr = 1;
let lastTime = 0;
let state = "intro";
let shake = 0;
let flash = 0;
let stars = [];
let particles = [];
let bullets = [];
let enemyBullets = [];
let enemies = [];
let orbs = [];
let keys = new Set();
let mouse = { x: 0, y: 0, down: false };
let spawnClock = 0;
let fireClock = 0;
let pulseClock = 0;
let dashClock = 0;
let waveAnnounce = 0;

const player = {
  x: 0,
  y: 0,
  r: 14,
  hp: 100,
  maxHp: 100,
  speed: 285,
  invuln: 0,
  level: 1,
  xp: 0,
  nextXp: 45,
  score: 0,
  elapsed: 0,
  damage: 18,
  fireRate: 0.14,
  bulletSpeed: 780,
  pierce: 0,
  spread: 1,
  magnet: 110,
  dashCooldown: 1.15,
  dashTime: 0,
  dashVx: 0,
  dashVy: 0,
  orbit: 0,
  slowField: 0,
  pulse: false,
};

const upgrades = [
  {
    id: "twin",
    name: "Twin Shot",
    text: "Adds a second luminous round to every volley.",
    apply: () => {
      player.spread = Math.min(player.spread + 1, 5);
    },
  },
  {
    id: "pierce",
    name: "Pierce",
    text: "Player rounds cut through one extra target.",
    apply: () => {
      player.pierce += 1;
    },
  },
  {
    id: "charge",
    name: "Hotter Core",
    text: "Raises shot damage and projectile speed.",
    apply: () => {
      player.damage += 7;
      player.bulletSpeed += 50;
    },
  },
  {
    id: "magnet",
    name: "Magnet Core",
    text: "Pulls sync shards from farther away.",
    apply: () => {
      player.magnet += 80;
    },
  },
  {
    id: "dash",
    name: "Phase Dash",
    text: "Dash recharges faster and leaves a harder trail.",
    apply: () => {
      player.dashCooldown = Math.max(0.48, player.dashCooldown - 0.18);
    },
  },
  {
    id: "orbit",
    name: "Orbit Bit",
    text: "Adds a rotating blade of light around the core.",
    apply: () => {
      player.orbit = Math.min(player.orbit + 1, 4);
    },
  },
  {
    id: "pulse",
    name: "Pulse Ring",
    text: "Periodically detonates a circular neon burst.",
    apply: () => {
      player.pulse = true;
      player.damage += 3;
    },
  },
  {
    id: "slow",
    name: "Slow Field",
    text: "Enemy rounds lose speed near the core.",
    apply: () => {
      player.slowField = Math.min(player.slowField + 1, 3);
    },
  },
  {
    id: "repair",
    name: "Emergency Seal",
    text: "Restores health and reinforces the hull.",
    apply: () => {
      player.maxHp += 12;
      player.hp = Math.min(player.maxHp, player.hp + 42);
    },
  },
];

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  stars = Array.from({ length: Math.floor((width * height) / 9000) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * 1 + 0.25,
    a: Math.random() * 0.6 + 0.25,
  }));
}

function resetGame() {
  Object.assign(player, {
    x: width / 2,
    y: height / 2,
    hp: 100,
    maxHp: 100,
    speed: 285,
    invuln: 0,
    level: 1,
    xp: 0,
    nextXp: 45,
    score: 0,
    elapsed: 0,
    damage: 18,
    fireRate: 0.14,
    bulletSpeed: 780,
    pierce: 0,
    spread: 1,
    magnet: 110,
    dashCooldown: 1.15,
    dashTime: 0,
    dashVx: 0,
    dashVy: 0,
    orbit: 0,
    slowField: 0,
    pulse: false,
  });
  particles = [];
  bullets = [];
  enemyBullets = [];
  enemies = [];
  orbs = [];
  spawnClock = 0;
  fireClock = 0;
  pulseClock = 0;
  dashClock = 0;
  shake = 0;
  flash = 0;
  waveAnnounce = 1.4;
  state = "playing";
  ui.intro.classList.add("hidden");
  ui.end.classList.add("hidden");
  ui.choices.classList.add("hidden");
  updateHud();
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function wave() {
  return Math.floor(player.elapsed / 30) + 1;
}

function spawnEnemy() {
  const side = Math.floor(Math.random() * 4);
  const margin = 60;
  const pos = [
    { x: rand(-margin, width + margin), y: -margin },
    { x: width + margin, y: rand(-margin, height + margin) },
    { x: rand(-margin, width + margin), y: height + margin },
    { x: -margin, y: rand(-margin, height + margin) },
  ][side];
  const w = wave();
  const roll = Math.random();
  const shooter = w >= 2 && roll > 0.68;
  const bruiser = w >= 4 && roll < 0.16;
  const type = bruiser ? "bruiser" : shooter ? "shooter" : "hunter";
  const base = {
    hunter: { hp: 35 + w * 8, speed: 82 + w * 8, r: 16, color: "#ff4fd8", score: 30 },
    shooter: { hp: 45 + w * 9, speed: 58 + w * 5, r: 18, color: "#ffd166", score: 50 },
    bruiser: { hp: 115 + w * 18, speed: 45 + w * 3, r: 25, color: "#a7ff4f", score: 90 },
  }[type];
  enemies.push({
    ...pos,
    ...base,
    maxHp: base.hp,
    type,
    fire: rand(0.4, 1.2),
    hit: 0,
  });
}

function shoot() {
  const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
  const count = player.spread;
  for (let i = 0; i < count; i++) {
    const offset = (i - (count - 1) / 2) * 0.12;
    const a = angle + offset;
    bullets.push({
      x: player.x + Math.cos(a) * 22,
      y: player.y + Math.sin(a) * 22,
      vx: Math.cos(a) * player.bulletSpeed,
      vy: Math.sin(a) * player.bulletSpeed,
      r: 4,
      life: 0.92,
      damage: player.damage,
      pierce: player.pierce,
      color: i % 2 ? "#ff4fd8" : "#40e9ff",
    });
  }
  spark(player.x, player.y, "#40e9ff", 5, 2.4);
  playTone(660, 0.025, "triangle", 0.018);
}

function enemyShoot(enemy) {
  const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
  const spreads = wave() >= 5 ? [-0.18, 0, 0.18] : [0];
  for (const offset of spreads) {
    const a = angle + offset;
    enemyBullets.push({
      x: enemy.x,
      y: enemy.y,
      vx: Math.cos(a) * (190 + wave() * 12),
      vy: Math.sin(a) * (190 + wave() * 12),
      r: 6,
      life: 4.2,
      color: enemy.color,
    });
  }
}

function spark(x, y, color, count, force = 1) {
  for (let i = 0; i < count; i++) {
    const a = Math.random() * TAU;
    const speed = rand(40, 210) * force;
    particles.push({
      x,
      y,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed,
      r: rand(1.2, 4.2) * force,
      life: rand(0.28, 0.7),
      maxLife: 0.7,
      color,
    });
  }
}

function dropOrb(enemy) {
  const count = enemy.type === "bruiser" ? 5 : enemy.type === "shooter" ? 3 : 2;
  for (let i = 0; i < count; i++) {
    orbs.push({
      x: enemy.x + rand(-12, 12),
      y: enemy.y + rand(-12, 12),
      vx: rand(-70, 70),
      vy: rand(-70, 70),
      r: 5,
      value: enemy.type === "bruiser" ? 12 : 8,
      life: 12,
    });
  }
}

function killEnemy(enemy) {
  if (enemy.dead) return;
  enemy.dead = true;
  player.score += enemy.score;
  shake = Math.max(shake, enemy.type === "bruiser" ? 9 : 4);
  spark(enemy.x, enemy.y, enemy.color, enemy.type === "bruiser" ? 34 : 18, enemy.type === "bruiser" ? 1.3 : 1);
  dropOrb(enemy);
  playTone(enemy.type === "bruiser" ? 120 : 180, 0.06, "sawtooth", 0.035);
}

function damagePlayer(amount) {
  if (player.invuln > 0 || state !== "playing") return;
  player.hp -= amount;
  player.invuln = 0.8;
  shake = 12;
  flash = 0.18;
  spark(player.x, player.y, "#ff4fd8", 22, 1.1);
  playTone(96, 0.16, "sawtooth", 0.06);
  if (player.hp <= 0) endRun(false);
}

function levelUp() {
  state = "upgrade";
  const pool = [...upgrades].sort(() => Math.random() - 0.5).slice(0, 3);
  ui.choiceGrid.innerHTML = "";
  pool.forEach((upgrade) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.innerHTML = `<b>${upgrade.name}</b><span>${upgrade.text}</span>`;
    button.addEventListener("click", () => {
      upgrade.apply();
      ui.choices.classList.add("hidden");
      waveAnnounce = 0.9;
      state = "playing";
    });
    ui.choiceGrid.appendChild(button);
  });
  ui.choices.classList.remove("hidden");
}

function endRun(won) {
  state = "end";
  const score = Math.floor(player.score);
  const survived = Math.floor(player.elapsed);
  const best = Math.max(score, readBestScore());
  writeBestScore(best);
  ui.endKicker.textContent = won ? "Run Complete" : "Core Collapse";
  ui.endTitle.textContent = won ? "Signal stabilized" : "The grid consumed the core";
  ui.endText.textContent = `Score ${score.toLocaleString()} - Best ${best.toLocaleString()} - Survived ${formatTime(survived)} - Level ${player.level} - Wave ${wave()}`;
  ui.end.classList.remove("hidden");
  playTone(won ? 720 : 140, won ? 0.28 : 0.35, won ? "sine" : "sawtooth", 0.07);
}

function update(dt) {
  if (state !== "playing") {
    updateParticles(dt);
    return;
  }

  player.elapsed += dt;
  if (player.elapsed >= WIN_TIME) {
    player.elapsed = WIN_TIME;
    endRun(true);
  }

  spawnClock -= dt;
  fireClock -= dt;
  dashClock = Math.max(0, dashClock - dt);
  player.invuln = Math.max(0, player.invuln - dt);
  shake = Math.max(0, shake - dt * 24);
  flash = Math.max(0, flash - dt * 2.5);
  waveAnnounce = Math.max(0, waveAnnounce - dt);

  const w = wave();
  const spawnRate = Math.max(0.16, 0.82 - w * 0.085);
  if (spawnClock <= 0) {
    spawnClock = spawnRate;
    const bursts = w >= 5 && Math.random() > 0.72 ? 3 : 1;
    for (let i = 0; i < bursts; i++) spawnEnemy();
  }

  if (fireClock <= 0) {
    fireClock = player.fireRate;
    shoot();
  }

  movePlayer(dt);
  updateBullets(dt);
  updateEnemies(dt);
  updateOrbs(dt);
  updateOrbit(dt);
  updatePulse(dt);
  updateParticles(dt);
  updateHud();
}

function movePlayer(dt) {
  let ax = 0;
  let ay = 0;
  if (keys.has("KeyW") || keys.has("ArrowUp")) ay -= 1;
  if (keys.has("KeyS") || keys.has("ArrowDown")) ay += 1;
  if (keys.has("KeyA") || keys.has("ArrowLeft")) ax -= 1;
  if (keys.has("KeyD") || keys.has("ArrowRight")) ax += 1;
  const len = Math.hypot(ax, ay) || 1;
  ax /= len;
  ay /= len;

  if (player.dashTime > 0) {
    player.dashTime -= dt;
    player.x += player.dashVx * dt;
    player.y += player.dashVy * dt;
    spark(player.x, player.y, "#40e9ff", 2, 1.1);
  } else {
    player.x += ax * player.speed * dt;
    player.y += ay * player.speed * dt;
  }

  player.x = clamp(player.x, 28, width - 28);
  player.y = clamp(player.y, 28, height - 28);
}

function updateBullets(dt) {
  for (const bullet of bullets) {
    bullet.x += bullet.vx * dt;
    bullet.y += bullet.vy * dt;
    bullet.life -= dt;
  }

  for (const bullet of enemyBullets) {
    let slow = 1;
    if (player.slowField) {
      const d = Math.hypot(bullet.x - player.x, bullet.y - player.y);
      if (d < 150 + player.slowField * 45) slow = 0.48;
    }
    bullet.x += bullet.vx * dt * slow;
    bullet.y += bullet.vy * dt * slow;
    bullet.life -= dt;
    if (Math.hypot(bullet.x - player.x, bullet.y - player.y) < bullet.r + player.r) {
      bullet.life = 0;
      damagePlayer(12);
    }
  }

  bullets = bullets.filter((b) => b.life > 0 && b.x > -80 && b.x < width + 80 && b.y > -80 && b.y < height + 80);
  enemyBullets = enemyBullets.filter((b) => b.life > 0 && b.x > -100 && b.x < width + 100 && b.y > -100 && b.y < height + 100);
}

function updateEnemies(dt) {
  for (const enemy of enemies) {
    enemy.hit = Math.max(0, enemy.hit - dt * 8);
    const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
    const desired = enemy.type === "shooter" ? 220 : 0;
    const gap = Math.hypot(player.x - enemy.x, player.y - enemy.y);
    const moveDir = enemy.type === "shooter" && gap < desired ? -1 : 1;
    enemy.x += Math.cos(angle) * enemy.speed * moveDir * dt;
    enemy.y += Math.sin(angle) * enemy.speed * moveDir * dt;

    if (enemy.type === "shooter") {
      enemy.fire -= dt;
      if (enemy.fire <= 0) {
        enemy.fire = rand(1.15, 1.8);
        enemyShoot(enemy);
      }
    }

    if (gap < enemy.r + player.r) {
      damagePlayer(enemy.type === "bruiser" ? 22 : 14);
      const push = 42;
      enemy.x -= Math.cos(angle) * push;
      enemy.y -= Math.sin(angle) * push;
    }
  }

  for (const bullet of bullets) {
    for (const enemy of enemies) {
      if (enemy.hp <= 0) continue;
      if (Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y) <= bullet.r + enemy.r) {
        enemy.hp -= bullet.damage;
        enemy.hit = 1;
        spark(bullet.x, bullet.y, enemy.color, 8, 0.7);
        if (bullet.pierce > 0) bullet.pierce -= 1;
        else bullet.life = 0;
        if (enemy.hp <= 0) {
          killEnemy(enemy);
        }
      }
    }
  }

  enemies = enemies.filter((enemy) => !enemy.dead);
}

function updateOrbs(dt) {
  for (const orb of orbs) {
    const dx = player.x - orb.x;
    const dy = player.y - orb.y;
    const d = Math.hypot(dx, dy);
    if (d < player.magnet) {
      const pull = (1 - d / player.magnet) * 920;
      orb.vx += (dx / (d || 1)) * pull * dt;
      orb.vy += (dy / (d || 1)) * pull * dt;
    }
    orb.x += orb.vx * dt;
    orb.y += orb.vy * dt;
    orb.vx *= 0.96;
    orb.vy *= 0.96;
    orb.life -= dt;
    if (d < player.r + orb.r + 4) {
      orb.life = 0;
      player.xp += orb.value;
      player.score += orb.value;
      spark(orb.x, orb.y, "#ffd166", 6, 0.6);
      if (player.xp >= player.nextXp) {
        player.xp -= player.nextXp;
        player.level += 1;
        player.nextXp = Math.floor(player.nextXp * 1.24 + 18);
        playTone(880, 0.12, "sine", 0.08);
        levelUp();
      }
    }
  }
  orbs = orbs.filter((orb) => orb.life > 0);
}

function updateOrbit(dt) {
  if (!player.orbit) return;
  const t = performance.now() / 1000;
  for (let i = 0; i < player.orbit; i++) {
    const a = t * 2.5 + (i / player.orbit) * TAU;
    const blade = {
      x: player.x + Math.cos(a) * 58,
      y: player.y + Math.sin(a) * 58,
      r: 12,
    };
    for (const enemy of enemies) {
      if (Math.hypot(enemy.x - blade.x, enemy.y - blade.y) < enemy.r + blade.r) {
        enemy.hp -= 38 * dt;
        enemy.hit = 1;
        if (enemy.hp <= 0) killEnemy(enemy);
        if (Math.random() > 0.86) spark(blade.x, blade.y, "#a7ff4f", 2, 0.8);
      }
    }
  }
}

function updatePulse(dt) {
  if (!player.pulse) return;
  pulseClock -= dt;
  if (pulseClock > 0) return;
  pulseClock = 3.2;
  shake = Math.max(shake, 6);
  spark(player.x, player.y, "#ffffff", 60, 1.2);
  for (const enemy of enemies) {
    const d = Math.hypot(enemy.x - player.x, enemy.y - player.y);
    if (d < 185) {
      enemy.hp -= 45 * (1 - d / 240);
      enemy.hit = 1;
      if (enemy.hp <= 0) killEnemy(enemy);
    }
  }
}

function updateParticles(dt) {
  for (const p of particles) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.96;
    p.vy *= 0.96;
    p.life -= dt;
  }
  particles = particles.filter((p) => p.life > 0);
}

function dash() {
  if (state !== "playing" || dashClock > 0) return;
  const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
  player.dashVx = Math.cos(angle) * 980;
  player.dashVy = Math.sin(angle) * 980;
  player.dashTime = 0.14;
  player.invuln = 0.22;
  dashClock = player.dashCooldown;
  shake = Math.max(shake, 5);
}

function updateHud() {
  const remain = Math.max(0, WIN_TIME - player.elapsed);
  const minutes = Math.floor(remain / 60);
  const seconds = Math.floor(remain % 60).toString().padStart(2, "0");
  ui.time.textContent = `${minutes}:${seconds}`;
  ui.score.textContent = Math.floor(player.score).toLocaleString();
  ui.wave.textContent = wave();
  ui.hpBar.style.transform = `scaleX(${clamp(player.hp / player.maxHp, 0, 1)})`;
  ui.xpBar.style.transform = `scaleX(${clamp(player.xp / player.nextXp, 0, 1)})`;
}

function applyLaunchFlavor() {
  if (!arcadeLaunch) return;
  ui.introKicker.textContent = "1 Credit Inserted - Core Online";
  ui.introTagline.textContent = "Survive 120 seconds. Auto-fire aims at your mouse.";
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function readBestScore() {
  return Number.parseInt(localStorage.getItem(BEST_SCORE_KEY) || "0", 10) || 0;
}

function writeBestScore(score) {
  localStorage.setItem(BEST_SCORE_KEY, String(score));
}

function playTone(frequency, duration, type = "sine", volume = 0.04) {
  if (!soundEnabled) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  ui.soundBtn.textContent = soundEnabled ? "Sound On" : "Sound Off";
  ui.soundBtn.setAttribute("aria-pressed", String(soundEnabled));
  if (soundEnabled) playTone(520, 0.09, "sine", 0.06);
}

function draw() {
  ctx.save();
  const sx = shake ? rand(-shake, shake) : 0;
  const sy = shake ? rand(-shake, shake) : 0;
  ctx.translate(sx, sy);
  drawBackdrop();
  drawOrbs();
  drawBullets(enemyBullets, true);
  drawEnemies();
  drawBullets(bullets, false);
  drawPlayer();
  drawParticles();
  drawWaveText();
  ctx.restore();

  if (flash > 0) {
    ctx.fillStyle = `rgba(255, 79, 216, ${flash * 0.35})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function drawBackdrop() {
  const grd = ctx.createRadialGradient(width * 0.5, height * 0.42, 20, width * 0.5, height * 0.5, Math.max(width, height) * 0.8);
  grd.addColorStop(0, "#111b2e");
  grd.addColorStop(0.45, "#070d19");
  grd.addColorStop(1, "#02040a");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, width, height);

  for (const s of stars) {
    ctx.fillStyle = `rgba(190, 235, 255, ${s.a})`;
    ctx.fillRect(s.x, s.y, s.z * 1.7, s.z * 1.7);
  }

  const grid = 48;
  const pulse = Math.sin(performance.now() / 850) * 0.05 + 0.1;
  ctx.lineWidth = 1;
  ctx.strokeStyle = `rgba(64, 233, 255, ${pulse})`;
  ctx.beginPath();
  for (let x = ((performance.now() / 55) % grid) - grid; x < width + grid; x += grid) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }
  for (let y = ((performance.now() / 75) % grid) - grid; y < height + grid; y += grid) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }
  ctx.stroke();

  ctx.strokeStyle = "rgba(255, 79, 216, 0.2)";
  ctx.lineWidth = 2;
  ctx.strokeRect(26, 26, width - 52, height - 52);
}

function glowCircle(x, y, r, color, alpha = 1) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = r * 1.8;
  ctx.fillStyle = colorToRgba(color, alpha);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, TAU);
  ctx.fill();
  ctx.restore();
}

function colorToRgba(hex, alpha) {
  const n = Number.parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function drawPlayer() {
  const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
  ctx.save();
  ctx.translate(player.x, player.y);
  ctx.rotate(angle);

  ctx.shadowColor = "#40e9ff";
  ctx.shadowBlur = 24;
  ctx.fillStyle = player.invuln > 0 ? "rgba(255,255,255,0.86)" : "#40e9ff";
  ctx.beginPath();
  ctx.moveTo(23, 0);
  ctx.lineTo(-12, -13);
  ctx.lineTo(-7, 0);
  ctx.lineTo(-12, 13);
  ctx.closePath();
  ctx.fill();

  ctx.shadowColor = "#ff4fd8";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#ff4fd8";
  ctx.beginPath();
  ctx.arc(-4, 0, 5, 0, TAU);
  ctx.fill();
  ctx.restore();

  if (player.slowField) {
    ctx.strokeStyle = `rgba(64, 233, 255, ${0.16 + player.slowField * 0.05})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(player.x, player.y, 150 + player.slowField * 45, 0, TAU);
    ctx.stroke();
  }

  if (player.orbit) {
    const t = performance.now() / 1000;
    for (let i = 0; i < player.orbit; i++) {
      const a = t * 2.5 + (i / player.orbit) * TAU;
      glowCircle(player.x + Math.cos(a) * 58, player.y + Math.sin(a) * 58, 7, "#a7ff4f", 0.95);
    }
  }
}

function drawEnemies() {
  for (const enemy of enemies) {
    const alpha = enemy.hit > 0 ? 1 : 0.82;
    glowCircle(enemy.x, enemy.y, enemy.r, enemy.hit > 0 ? "#ffffff" : enemy.color, alpha);
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, enemy.r + 4, 0, TAU * (enemy.hp / enemy.maxHp));
    ctx.stroke();
  }
}

function drawBullets(list, hostile) {
  for (const bullet of list) {
    ctx.save();
    ctx.shadowColor = bullet.color;
    ctx.shadowBlur = hostile ? 20 : 16;
    ctx.fillStyle = bullet.color;
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.r, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
}

function drawOrbs() {
  for (const orb of orbs) {
    glowCircle(orb.x, orb.y, orb.r, "#ffd166", 0.9);
  }
}

function drawParticles() {
  for (const p of particles) {
    const alpha = clamp(p.life / p.maxLife, 0, 1);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = p.r * 3;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * alpha, 0, TAU);
    ctx.fill();
    ctx.restore();
  }
}

function drawWaveText() {
  if (waveAnnounce <= 0 || state !== "playing") return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, waveAnnounce);
  ctx.textAlign = "center";
  ctx.font = "800 46px Inter, system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.shadowColor = "#40e9ff";
  ctx.shadowBlur = 28;
  ctx.fillText(`WAVE ${wave()}`, width / 2, 110);
  ctx.restore();
}

function loop(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000 || 0);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", resize);
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
window.addEventListener("mousedown", () => {
  mouse.down = true;
});
window.addEventListener("mouseup", () => {
  mouse.down = false;
});
window.addEventListener("keydown", (event) => {
  keys.add(event.code);
  if (event.code === "Space") {
    event.preventDefault();
    dash();
  }
  if (event.code === "Enter" && state === "intro") resetGame();
});
window.addEventListener("keyup", (event) => {
  keys.delete(event.code);
});

ui.startBtn.addEventListener("click", resetGame);
ui.restartBtn.addEventListener("click", resetGame);
ui.soundBtn.addEventListener("click", toggleSound);

resize();
mouse.x = width / 2 + 140;
mouse.y = height / 2;
player.x = width / 2;
player.y = height / 2;
applyLaunchFlavor();
updateHud();
requestAnimationFrame(loop);
