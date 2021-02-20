class Obstacle1 {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
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

class Obstacle2 extends Obstacle1 {
  constructor(x, y, isColliding) {
    super(x, y, isColliding);
    this.d = 50;
  }

  draw() {
    let c = color("purple");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 2;
  }
}

  class Obstacle3 extends Obstacle2 {
    constructor(x, y, isColliding, d) {
      super(x, y, isColliding);
      this.d = 30;
    }
  
    draw() {
      let c = color("pink");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 5;
    }
  }

  class Obstacle4 extends Obstacle2 {
    constructor(x, y, isColliding, d) {
      super(x, y, isColliding);
      this.d = 60;
    }
    
    draw() {
      let c = color("darkgreen");
      fill(c);
      noStroke();
      circle(this.x, this.y, this.d);
      this.x -= 4;
    }
  }

  // #5 Obstacle: navy rectangle
  class Obstacle5 extends Obstacle1 {
    constructor(x, y, width, height, isColliding) {
      super(x, y, isColliding);
      this.width = 75;
      this.height = 40;
    }
    
    draw() {
      let c = color("navy");
      fill(c);
      noStroke();
      rect(this.x, this.y, this.width, this.height);
      this.x -= 3;
    }
  }