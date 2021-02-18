//  The Character is the class that holds all of the player's information
class Player {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.width = 30;
      this.height = 30;
    }

    draw() {
      rect(this.x, this.y, this.width, this.height);
    }

    runUp() {
        this.y -= 3;
        if (this.y < 0) {
            this.y = 0;
        }
    }

    runLeft() {
        this.x -= 3;
        if (this.x < 0) {
            this.x = 0;
        }
    }

    runDown() {
        this.y += 3;
        if (this.y > HEIGHT - this.height) {
            this.y = HEIGHT - this.height;
        }
    }

    runRight() {
        this.x += 3;
        if (this.x > WIDTH - this.width) {
            this.x = WIDTH - this.width;
        }
    }
  }
  