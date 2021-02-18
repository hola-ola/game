
function preload() {};

let game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
    background("antiquewhite");
    game.draw();
}

function lifeLevel() {
  if(game.collisionCount = 1) {
    console.log("Lost a life");
  }
}

