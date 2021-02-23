
function preload() {};

let game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
  setInterval(countTime, 1000);
}

function draw() {
    background(game.background);
    game.draw();
}

function countTime() {
  game.countTime();
  game.countPoints();
  game.countLevel();
}



