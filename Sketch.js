draw() {
  // Level 4 look
  background(220);
  let r = random(255); // r is a random number between 0 - 255
  let g = random(100,200); // g is a random number betwen 100 - 200
  let b = random(100); // b is a random number between 0 - 100
  let a = random(200,255); // a is a random number between 200 - 255
  
  noStroke();
  fill(r, g, b, a);
  rect(this.x, this.y, this.width, this.height);
  this.x -= 4;
}

draw() {
  // Level 4 look
  let colors = ["white", 'black'];
  let randomColor = random(colors);
  
  noStroke();
  fill(randomColor);
  rect(this.x, this.y, this.width, this.height);
  this.x -= 4;
}