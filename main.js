
function preload() {};

let game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
  resetGame();
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

function resetGame() {
  setInterval(countTime, 1000);
}



