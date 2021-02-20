class Obstacle1 {
  constructor() {
    this.x = width;
    this.width = 50;
    this.height = 50;
    this.y = random(0, height);
    this.isColliding = false;
  }

  draw() {
    let c = color("orange");
    fill(c);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    this.x -= 3;
  }
}

class Obstacle2 {
  constructor() {
    this.x = 1200;
    this.y = random(0, this.x);
    this.d = 50;
    this.isColliding = false;
  }

  draw() {
    let c = color("purple");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 2;
  }
}


  class Obstacle3 {
    constructor() {
      this.x = 1200;
      this.y = random(0, this.x);
      this.d = 30;
    }
  
    draw() {
      let c = color("darkgreen");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 5;
    }
}