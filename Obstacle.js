// THE SQUARE OBSTACLE
class Obstacle1 {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
    this.y = random(0, height);
    this.isColliding = false;
    this.defaultSetup = true;
  }

  // Level 1 & 2 look
  drawLevel1() {
    let c = color("goldenrod");
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 3;
  }

  // Level 3 look
  drawLevel3() {
    let c = color("coral");
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }

  // Level 4 look
  drawLevel4() {
    if (frameCount % 24 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }
    let c = this.defaultSetup ? "greenyellow" : "DeepPink";
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }

  // Level 5 look
  drawLevel5() {
    if (frameCount % 24 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }
    let c = this.defaultSetup ? "greenyellow" : "DeepPink";
    this.width = this.defaultSetup ? this.width - 1 : this.width + 1;
    this.height = this.defaultSetup ? this.height - 1 : this.height + 1;
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }
}

// THE MEDIUM BALL OBSTACLE
class Obstacle2 extends Obstacle1 {
  constructor(x, y, isColliding) {
    super(x, y, isColliding);
    this.d = 50;
  }

  // Level 1 & 2 look
  drawLevel1() {
    let c = color("purple");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 2;
  }

  // Level 3 look
  drawLevel3() {
    let c = color("aquamarine");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 3;
  }

  // Level 4 look
  drawLevel4() {
    if (frameCount % 21 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "yellow" : "MediumSlateBlue";
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 3;
  }

  // Level 5 look
  drawLevel5() {
    if (frameCount % 21 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "yellow" : "DodgerBlue";
    this.d = this.defaultSetup ? this.d - 1 : this.d + 1;
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 3;
  }
}

// THE TINY BALL OBSTACLE
class Obstacle3 extends Obstacle2 {
  constructor(x, y, isColliding, d) {
    super(x, y, isColliding);
    this.d = 30;
  }

  // Level 1 & 2 look
  drawLevel1() {
    let c = color("pink");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 5;
  }

  // Level 3 look
  drawLevel3() {
    let c = color("deepPink");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 6;
  }

  // Level 4 look
  drawLevel4() {
    if (frameCount % 22 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "Turquoise" : "DarkOrange";
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 6;
  }

  // Level 5 look
  drawLevel5() {
    if (frameCount % 22 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "Turquoise" : "DarkOrange";
    this.d = this.defaultSetup ? this.d - 1 : this.d + 1;
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 6;
  }
}

// THE BIGGEST BALL OBSTACLE
class Obstacle4 extends Obstacle2 {
  constructor(x, y, isColliding, d) {
    super(x, y, isColliding);
    this.d = 60;
  }

  // Level 1 and 2 look
  drawLevel1() {
    let c = color("darkgreen");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 4;
  }

  // Level 3 look
  drawLevel3() {
    let c = color("darkturquoise");
    fill(c);
    noStroke();
    circle(this.x, this.y, this.d);
    this.x -= 5;
  }

  // Level 4 look
  drawLevel4() {
    if (frameCount % 18 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "lime" : "magenta";
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 5;
  }

  // Level 5 look
  drawLevel5() {
    if (frameCount % 23 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "lime" : "magenta";
    this.d = this.defaultSetup ? this.d - 1 : this.d + 1;
    fill(c);
    circle(this.x, this.y, this.d);
    this.x -= 5;
  }
}

// THE RECTANGLE OBSTACLE
class Obstacle5 extends Obstacle1 {
  constructor(x, y, width, height, isColliding) {
    super(x, y, isColliding);
    this.width = 75;
    this.height = 40;
  }

  // Level 1 and 2 look
  drawLevel1() {
    let c = color("darkblue");
    fill(c);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    this.x -= 3;
  }

  // Level 3 look
  drawLevel3() {
    let c = color("darkviolet");
    fill(c);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }

  // Level 4 look
  drawLevel4() {
    if (frameCount % 15 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "aqua" : "Chartreuse";
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }

  // Level 5 look
  drawLevel5() {
    if (frameCount % 15 === 0) {
      this.defaultSetup = !this.defaultSetup;
    }

    let c = this.defaultSetup ? "aqua" : "Chartreuse";
    this.width = this.defaultSetup ? this.width - 0.5 : this.width + 0.5;
    this.height = this.defaultSetup ? this.height - 0.5 : this.height + 0.5;
    fill(c);
    rect(this.x, this.y, this.width, this.height);
    this.x -= 4;
  }
  
}
