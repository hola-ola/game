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
      this.player.draw();

        if (keyIsDown(38)) {
            this.player.runUp();
        }
        if (keyIsDown(40)) {
            this.player.runDown();
        }

      // Square obstacles
      if (frameCount % 120 === 0) {
        this.obstaclesSquare.push(new Obstacle1());
      }

      if (frameCount % 120 === 0) {
        this.obstaclesSquare.push(new Obstacle5());
      }      
      this.obstaclesSquare.forEach((obstacle, index) => {
        obstacle.draw();

        // in this case we are checking that whenever an obstacle is coliding with the player
        if (this.collisionCheckSquare(obstacle, this.player)) {
            obstacle.isColliding = true;
            this.collisionCount += 1;
        }

        // everytime the obstacle goes off canvas, remove it from the array
        if (obstacle.x + obstacle.width <= 0) {
          this.obstaclesSquare.splice(index, 1);
        }
    });

      // Round obstacles
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

        // in this case we are checking that whenever an obstacle is coliding with the player
        if (this.collisionCheckRound(obstacle, this.player)) {
            obstacle.isColliding = true;
            this.collisionCount += 1;
            console.log("Collided with a circle!")
        }

        // everytime the obstacle goes off canvas, remove it from the array
        if (obstacle.x + obstacle.d <= 0) {
          this.obstaclesRound.splice(index, 1);
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
  
    collisionCheckSquare(obstacle, player) {
      if (obstacle.isColliding) {
        return false;
      }
      //  if player's right side is to the left of the obstacle's left
      if (player.x + player.width < obstacle.x) {
        return false;
      }
  
      // if obstacle's right side is to the left of player's left
      if (obstacle.x + obstacle.width < player.x) {
        return false;
      }
  
      // player top side is below obstacle's bottom side
      if (player.y > obstacle.y + obstacle.height) {
        return false;
      }
  
      //  obstacle top side is below the player's bottom side
      if (obstacle.y > player.y + player.height) {
        return false;
      }
      return true;
    }

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

    countPoints() {
      let pointsCounter = document.getElementById("points-counter");
      // To correct later – five should become 10 or higher
      if (this.timeCount % 5 == 1 && this.timeCount > 5) {
          this.pointsCount += 10;
          pointsCounter.innerText = `Points: ${this.pointsCount}`;
      }
    }

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
      
      //Context elements
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

      // Level 23
      if (this.levelCount == 3) {
        button.classList.add("btn3");
        title.classList.add("title3");
        counters.classList.add("count3");
        body.classList.add("body3");
        this.background = "yellow";
      }
    }
    
}