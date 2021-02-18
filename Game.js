class Game {
    constructor() {
      this.player = new Player();
      this.startHouse = new House(0, 0, 50, 50);
      this.endHouse = new House(1150, 450, 50, 50);
      this.obstacles1 = [];
      this.obstacles2 = [];
      this.obstacles3 = [];
      this.collisionCount = 0;
    }
    draw() {
      this.player.draw();

        if (keyIsDown(38)) {
            this.player.runUp();
        }
        if (keyIsDown(37)) {
            this.player.runLeft();
        }
        if (keyIsDown(40)) {
            this.player.runDown();
        }
        if (keyIsDown(39)) {
            this.player.runRight();
        }

      this.startHouse.draw();  

      this.endHouse.draw();  

      // Obstacle 1: square [color]
      if (frameCount % 120 === 0) {
        this.obstacles1.push(new Obstacle1());
      }

      this.obstacles1.forEach((obstacle, index) => {
        obstacle.draw();
        // everytime the obstacle goes off canvas, remove it from the array
        if (obstacle.x + obstacle.width <= 0) {
          this.obstacles1.splice(index, 1);
        }
  
        // in this case we are checking that whenever an obstacle is coliding with the player
        if (this.collisionCheckSquare(obstacle, this.player)) {
          console.log("OOOOOH");
          return;
          //   tells p5 to stop calling the draw function
        }
      });
    }

  collisionCheckSquare(obstacle, player) {
    if (player.x + player.width < obstacle.x) {
      return false;
    }

    if (obstacle.x + obstacle.width < player.x) {
      return false;
    }

    if (player.y > obstacle.y + obstacle.height) {
      return false;
    }

    if (obstacle.y > player.y + player.height) {
      return false;
    }
    return true;
  }

  colisionCheckCircle() {}

  
} 
