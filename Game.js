class Game {
    constructor() {
      this.player = new Player();
      this.obstaclesSquare = [];
      this.obstaclesRound = [];
      this.collisionCount = 0;
      this.timeCount = 0;
      this.pointsCount = 0;
      this.levelCount = 1;
      this.background = "antiquewhite";
    }
    draw() {
      this.player.color = "blue";
      this.player.draw();

        if (keyIsDown(38)) {
            this.player.runUp();
        }
        if (keyIsDown(40)) {
            this.player.runDown();
        }

      // Create square obstacles
      if (frameCount % 120 === 0) {
        this.obstaclesSquare.push(new Obstacle1());
      }

      if (frameCount % 120 === 0) {
        this.obstaclesSquare.push(new Obstacle5());
      }      
      this.obstaclesSquare.forEach((obstacle, index) => {
        obstacle.draw();

        if (this.collisionCheckSquare(obstacle, this.player)) {
            obstacle.isColliding = true;
            this.collisionCount += 1;
        }

        if (obstacle.x + obstacle.width <= 0) {
          this.obstaclesSquare.splice(index, 1);
        }
    });

      // Create round obstacles
      if (frameCount % 180 === 0) {
        this.obstaclesRound.push(new Obstacle2());
      }

      if (frameCount % 60 === 0) {
        this.obstaclesRound.push(new Obstacle3());
      }

      if (frameCount % 120 === 0) {
        this.obstaclesRound.push(new Obstacle4());
      }
      
      this.obstaclesRound.forEach((obstacle, index) => {
        obstacle.draw();

        if (this.collisionCheckRound(obstacle, this.player)) {
            obstacle.isColliding = true;
            this.collisionCount += 1;
            console.log("Collided with a circle!")
        }

        if (obstacle.x + obstacle.d <= 0) {
          this.obstaclesRound.splice(index, 1);
        }
    });

    // Count life leve of the player based on the number of collisions
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
  
    // Check collision between two square objects
    collisionCheckSquare(obstacle, player) {
      if (obstacle.isColliding) {
        return false;
      }
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

    // Cheeck collision between a square and a circle
    collisionCheckRound(obstacle, player) {
      if (obstacle.isColliding) {
        return false;
      }
      let testX = obstacle.x;
      let testY = obstacle.y;

      if (obstacle.x < player.x) {
        testX = player.x;
      } else if (obstacle.x > player.x + player.width) {
        testX = player.x + player.width;
      } 
      if (obstacle.y < player.y) {
        testY = player.y;
      } else if (obstacle.y > player.y + player.height) {
        testY = player.y + player.height;
      }
      let d = dist(obstacle.x, obstacle.y, testX, testY);
      let rad = obstacle.d / 2;
      if(d <= rad) {
        return true;
      }
      return false;
    }

    // Count the time up
    countTime() {
      let timeCounter = document.getElementById("time-counter")

      let hours = Math.floor(this.timeCount / 3600);
      let minutes = Math.floor(this.timeCount / 60);
      let seconds = this.timeCount % 60;
      let timeArray = [hours, minutes, seconds];

      timeCounter.innerText = `Time: ${timeArray[0]}:0${timeArray[1]}:${timeArray[2]}`;

      if (this.collisionCount < 6) {
        this.timeCount++;
      }
    }

    // Count points based on survival time
    countPoints() {
      let pointsCounter = document.getElementById("points-counter");
      // To correct later – five should become 10 or higher
      if (this.timeCount % 5 == 1 && this.timeCount > 5) {
          this.pointsCount += 10;
          pointsCounter.innerText = `Points: ${this.pointsCount}`;
      }
    }

    // Count levels based on the number of points
    countLevel() {
      let levelCounter = document.getElementById("level-counter");
      // Points needed to get to level 2 – to correct later
      if (this.pointsCount == 10) {
          this.levelCount = 2;
      }
      // Points needed to get to level 3 – to correct later
      if (this.pointsCount == 20) {
        this.levelCount = 3;
      }
        levelCounter.innerText = `Level: ${this.levelCount}`;
      
      //Elements to change when level changes
      let button = document.getElementById("reset");
      let title = document.getElementById("title");
      let counters = document.getElementById("counters")
      let body = document.querySelector("body");

      // Level 2 
      if (this.levelCount == 2) {
        button.classList.add("btn2");
        title.classList.add("title2");
        counters.classList.add("count2");
        body.classList.add("body2");
        this.background = "black";
      }

      // Level 3
      if (this.levelCount == 3) {
        button.classList.add("btn3");
        title.classList.add("title3");
        counters.classList.add("count3");
        body.classList.add("body3");
        this.background = "yellow";
      }
    }
    // In order to adjust the player and the obstacles to new level, look for line 13;
    // You can modify certain items of player/ obstalces from the game
    
}