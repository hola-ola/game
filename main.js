function preload() {
  music = loadSound("./sound/ten-walls-walking-with-elephants-original-mix.mp3")
}

let game = new Game();

function setup() {
  createCanvas(WIDTH, HEIGHT);
  // setInterval(countTime, 1000);
}

function draw() {
  background(game.background);
  game.draw();
}

function mousePressed() {
  if (music.isPlaying()) {
    music.stop();
  } else {
    music.play();
  }
}

function countTime() {
  game.countTime();
  game.countPoints();
  game.countLevel();
}
