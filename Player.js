//  The Character is the class that holds all of the player's information
class Player {
    constructor() {
      this.x = 0;
      this.y = 200;
      this.width = 25;
      this.height = 25;
      this.velocity = 0;
      this.start = 100;
      this.color = "black";
    }

    draw() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);

        this.velocity += GRAVITY;
        this.x += this.velocity;
        if (this.x >= this.start) {
            this.x = this.start;
            this.velocity = 0;
        }
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
  