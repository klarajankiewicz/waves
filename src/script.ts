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
  backgroundGradient = ctx.createLinearGradient(0, 0, w, w * 0.5);
  backgroundGradient.addColorStop(0, "#a6c8ff");
  backgroundGradient.addColorStop(0.5, "#535cbc");
  backgroundGradient.addColorStop(1, "#4a0031");
  wavesGradient = ctx.createLinearGradient(0, 0, w * 0.8, w);
  wavesGradient.addColorStop(0, "#5584c4");
  wavesGradient.addColorStop(0.5, "#2d2666");
  wavesGradient.addColorStop(1, "#d4111b");
}

function reset() {
  simplex = new SimplexNoise();
  w = canvas.width = window.innerWidth * 1;
  h = canvas.height = window.innerHeight * 1;
  setGradients()
}
function drawCircle(color: string) {
  ctx.beginPath();
  ctx.arc(250, 275, 150, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill()
  ctx.closePath();
}

function drawSecondCircle(color: string) {
  ctx.beginPath();
  ctx.arc(1200, 575, 60, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill()
  ctx.closePath();
}

function draw() {
  requestAnimationFrame(draw);

  let now = Date.now();
  let delta = (now - then) / 1500;
  ticker += delta;
  then = now;

  ctx.fillStyle = backgroundGradient;

  ctx.lineWidth = 2;
  ctx.fillRect(0, 0, w, h);
  drawCircle("#a4bcff");
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
    ctx.closePath();

    drawSecondCircle ("#f22c2c");


  }


}

setup();
draw();
