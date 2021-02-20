//  The Character is the class that holds all of the player's information
class Player {
    constructor() {
      this.x = 100;
      this.y = 200;
      this.width = 30;
      this.height = 30;
    }

    draw() {
        let c = color("black");
        fill(c);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    runUp() {
        this.y -= 3;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    runDown() {
        this.y += 3;
        if (this.y > HEIGHT - this.height) {
            this.y = HEIGHT - this.height;
        }
    }
  }
  