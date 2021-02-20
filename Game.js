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

        // in this case we are checking that whenever an obstacle is coliding with the player
        if (this.colisionCheck(obstacle, this.player)) {
          this.obstacles1.splice(index, 1);
          this.collisionCount += 1;
          console.log(this.collisionCount)
        }

        // everytime the obstacle goes off canvas, remove it from the array
        if (obstacle.x + obstacle.width <= 0) {
          this.obstacles1.splice(index, 1);
        }
    });
        let lifeLevel6 = document.getElementById("level-6")
        let lifeLevel5 = document.getElementById("level-5")
        let lifeLevel4 = document.getElementById("level-4")
        let lifeLevel3 = document.getElementById("level-3")
        let lifeLevel2 = document.getElementById("level-2")
        let lifeLevel1 = document.getElementById("level-1")

        if (this.collisionCount == 1) {
          lifeLevel6.style.visibility = "hidden";
        } else if (this.collisionCount == 2) {
          lifeLevel5.style.visibility = "hidden";
        } else if (this.collisionCount == 3) {
          lifeLevel4.style.visibility = "hidden";
        } else if (this.collisionCount == 4) {
          lifeLevel3.style.visibility = "hidden";
        } else if (this.collisionCount == 5) {
          lifeLevel2.style.visibility = "hidden";
        } else if (this.collisionCount == 6) {
          lifeLevel1.style.visibility = "hidden";
          console.log("You are dead");
          noLoop();
        }
    }
  
    colisionCheck(obstacle, player) {
      //   player.left + player.width (players.rightSide)
      //  if player's right side is to the left of the obstacle's left
      if (player.x + player.width < obstacle.x) {
        return false;
      }
  
      //  obstacle's left and obstacle width (obstacle.rightSide)
      // if obstacle's right side is to the left of player's left
      if (obstacle.x + obstacle.width < player.x) {
        return false;
      }
  
      // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
      // player top side is below obstacle's bottom side
      if (player.y > obstacle.y + obstacle.height) {
        return false;
      }
  
      //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
      //  obstacle top side is below the player's bottom side
      if (obstacle.y > player.y + player.height) {
        return false;
      }
      return true;
    }
} 
