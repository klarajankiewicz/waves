import SimplexNoise from "simplex-noise";

// const BACKGROUND_COLOR = "#0a031d";
const WAVES_DENSITY = 8;
const ZOOM = 150;
const STRENGTH = 15;

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let simplex;
let w: number;
let h: number;
let ticker = 0;
let then = 0;
let backgroundGradient;
let wavesGradient

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("resize", reset);
  reset();
}

const setGradients = () => {
  backgroundGradient = ctx.createLinearGradient(0, 0, w, w * 0.75);
  backgroundGradient.addColorStop(0, "#fee55a");
  backgroundGradient.addColorStop(0.5, "#ebcedf");
  backgroundGradient.addColorStop(1, "#89d2f6");
  wavesGradient = ctx.createLinearGradient(100, 0, w, w * 0.5);
  wavesGradient.addColorStop(0, "#0030b9");
  wavesGradient.addColorStop(0.5, "#b700ff");
  wavesGradient.addColorStop(1, "#d4111b");
  ctx.fillStyle = backgroundGradient;
}

function reset() {
  simplex = new SimplexNoise();
  w = canvas.width = window.innerWidth * 1;
  h = canvas.height = window.innerHeight * 1;
  setGradients()
}

function draw() {
  requestAnimationFrame(draw);

  let now = Date.now();
  let delta = (now - then) / 5000;
  ticker += delta;
  then = now;

  ctx.lineWidth = 2;
  ctx.fillRect(0, 0, w, h);
  let strengthY = STRENGTH * 3;
  for (let y = -STRENGTH; y < h + STRENGTH; y += WAVES_DENSITY) {
    ctx.beginPath();
    ctx.strokeStyle = wavesGradient
    for (let x = -STRENGTH; x < w + STRENGTH; x += 3) {
      let n1 = simplex.noise3D(x / ZOOM, y / ZOOM, ticker) * STRENGTH;
      let n2 = simplex.noise3D(x / ZOOM + 1000, y / ZOOM + 1000, ticker) * strengthY;
      ctx.lineTo(x + n1, y + n2);
    }
    ctx.stroke();
  }
}

setup();
draw();
