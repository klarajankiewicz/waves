import SimplexNoise from "simplex-noise";

let canvas;
let ctx;
let simplex;
let w, h;
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
  ctx.fillStyle = "#0a031d";
}

function draw() {
  requestAnimationFrame(draw);

  let now = Date.now();
  let delta = (now - then) / 5000;
  ticker += delta;
  
  then = now;

  ctx.lineWidth = 1;
  ctx.fillRect(0, 0, w, h);
  let zoom = 100;
  let strength = 10; //szerokość fali
  let strengthY = strength * 3; //wysokość fali
  for (let y = -strength; y < h + strength; y += 3) {
    ctx.beginPath();
    ctx.strokeStyle = `hsla(${y * 0.6 + ticker * 50}, 100%, 50%, 0.3)`;
    for (let x = -strength; x < w + strength; x += 3) {
      let n1 = simplex.noise3D(x / zoom, y / zoom, ticker) * strength;
      let n2 =
        simplex.noise3D(x / zoom + 1000, y / zoom + 1000, ticker) * strengthY;
      ctx.lineTo(x + n1, y + n2);
    }
    ctx.stroke();
  }
}

setup();
draw();
