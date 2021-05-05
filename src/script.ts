import SimplexNoise from "simplex-noise";

const BACKGROUND_COLOR = "#0a031d";
const WAVES_DENSITY = 7;
const ZOOM = 200;
const STRENGTH = 10;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let simplex;
let w: number;
let h: number;
let ticker = 0;
let then = 0;

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("resize", reset);
  reset();
}

function reset() {
  simplex = new SimplexNoise();
  w = canvas.width = window.innerWidth * 1;
  h = canvas.height = window.innerHeight * 1;
  ctx.fillStyle = BACKGROUND_COLOR;
}

function draw() {
  requestAnimationFrame(draw);

  let now = Date.now();
  let delta = (now - then) / 5000;
  ticker += delta;
  then = now;

  ctx.lineWidth = 1;
  ctx.fillRect(0, 0, w, h);
  let strengthY = STRENGTH * 3;
  for (let y = -STRENGTH; y < h + STRENGTH; y += WAVES_DENSITY) {
    ctx.beginPath();
    ctx.strokeStyle = `hsla(${y * 0.6 + ticker * 50}, 100%, 50%, 0.3)`;
    for (let x = -STRENGTH; x < w + STRENGTH; x += 3) {
      let n1 = simplex.noise3D(x / ZOOM, y / ZOOM, ticker) * STRENGTH;
      let n2 =
        simplex.noise3D(x / ZOOM + 1000, y / ZOOM + 1000, ticker) * strengthY;
      ctx.lineTo(x + n1, y + n2);
    }
    ctx.stroke();
  }
}

setup();
draw();
