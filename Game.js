class Game {
  constructor() {
    this.player = new Player();
    this.obstaclesSquare = [];
    this.obstaclesRound = [];
    this.collisionCount = 0;
    this.timeCount = 0;
    this.pointsCount = 0;
    this.levelCount = 0;
    this.background = "antiquewhite";
    this.gameOn = true;
  }
  draw() {

    // Draw the player
    this.player.draw();
    if (keyIsDown(38)) {
      this.player.runUp();
    }
    if (keyIsDown(40)) {
      this.player.runDown();
    }

    if (frameCount % 60 === 0) {
      this.countTime();
    }

    // SQUARE OBSTACLES
    // Level 1: Set the frequency of appearance for square obstalces
    if (frameCount % 120 === 0 && this.levelCount === 1) {
      this.obstaclesSquare.push(new Obstacle1());
      this.obstaclesSquare.push(new Obstacle5());
    }

    // Level 2 & up: Set the frequency of appearance for square obstalces
    if (this.levelCount !== 1) {
      if (frameCount % 90 === 0) {
        this.obstaclesSquare.push(new Obstacle1());
        this.obstaclesSquare.push(new Obstacle5());
      }
    }

    // The look of the obstacles
    this.obstaclesSquare.forEach((obstacle, index) => {
      if (this.levelCount < 3) {
        obstacle.drawLevel1();

        // Level 3 look
      } else if (this.levelCount === 3) {
        obstacle.drawLevel3();

        // Level 4 look
      } else if (this.levelCount === 4) {
        obstacle.drawLevel4();

        // Level 5 look
      } else if (this.levelCount === 5) {
        obstacle.drawLevel5();
      }
      
      // Collision check
      if (this.collisionCheckSquare(obstacle, this.player)) {
        obstacle.isColliding = true;
        this.collisionCount += 1;
      }

      // Removing obstacles from the array
      if (obstacle.x + obstacle.width <= 0) {
        this.obstaclesSquare.splice(index, 1);
      }
    });

    // CIRCLE OBSTACLES
    // Level 1: Set the frequency of appearance for circle obstalces
    if (frameCount % 180 === 0 && this.levelCount === 1) {
      this.obstaclesRound.push(new Obstacle2());
    }
    if (frameCount % 60 === 0 && this.levelCount === 1) {
      this.obstaclesRound.push(new Obstacle3());
    }
    if (frameCount % 120 === 0 && this.levelCount === 1) {
      this.obstaclesRound.push(new Obstacle4());
    }

    // Level 2 & up: Set the frequency of appearance for circle obstalces
    if (this.levelCount !== 1) {
      if (frameCount % 170 === 0) {
        this.obstaclesRound.push(new Obstacle2());
      }
      if (frameCount % 50 === 0) {
        this.obstaclesRound.push(new Obstacle3());
      }
      if (frameCount % 110 === 0) {
        this.obstaclesRound.push(new Obstacle4());
      }
    }

    // The look of the obstacles
    this.obstaclesRound.forEach((obstacle, index) => {
      if (this.levelCount < 3) {
        obstacle.drawLevel1();
        
        // Level 3 look
      } else if (this.levelCount === 3) {
        obstacle.drawLevel3();

        // Level 4 look
      } else if (this.levelCount === 4) {
        obstacle.drawLevel4();

        // Level 5 look
      } else if (this.levelCount === 5) {
        obstacle.drawLevel5();
      }

      // Collision check
      if (this.collisionCheckRound(obstacle, this.player)) {
        obstacle.isColliding = true;
        this.collisionCount += 1;
        console.log("Collided with a circle!");
      }

      // Removing obstacles from the array
      if (obstacle.x + obstacle.d <= 0) {
        this.obstaclesRound.splice(index, 1);
      }
    });

    // // Count life leve of the player based on the number of collisions

    if (this.collisionCount === 1) {
      lifeLevel6.style.visibility = "hidden";
    } else if (this.collisionCount === 2) {
      lifeLevel5.style.visibility = "hidden";
    } else if (this.collisionCount === 3) {
      lifeLevel4.style.visibility = "hidden";
    } else if (this.collisionCount === 4) {
      lifeLevel3.style.visibility = "hidden";
    } else if (this.collisionCount === 5) {
      lifeLevel2.style.visibility = "hidden";
    } else if (this.collisionCount === 6) {
      lifeLevel1.style.visibility = "hidden";
      console.log("You are dead");
      this.gameOn = false;
      console.log(this.gameOn);
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
    if (d <= rad) {
      return true;
    }
    return false;
  }

  // Count the time up
  countTime() {
    let hours = Math.floor(this.timeCount / 3600);
    let minutes = Math.floor(this.timeCount / 60);
    let seconds = this.timeCount % 60;
    let timeArray = [hours, minutes, seconds];

    timeCounter.innerText = `Time: ${timeArray[0]}:0${timeArray[1]}:${timeArray[2]}`;

    if (this.collisionCount < 6) {
      this.timeCount++;
      this.countPoints();
      this.countLevel();
    }
  }

  // Count points based on survival time
  countPoints() {
    // To correct later – five should become 10 or higher
    if (this.timeCount % 3 == 1 && this.timeCount > 3) {
      this.pointsCount += 10;
      pointsCounter.innerText = `Points: ${this.pointsCount}`;
    }
  }

  // Count levels based on the number of points
  countLevel() {
    // Points needed to get to level 2 – to correct later
    if (this.pointsCount === 10) {
      this.levelCount = 2;
    }
    // Points needed to get to level 3 – to correct later
    if (this.pointsCount === 20) {
      this.levelCount = 3;
    }
    // Points needed to get to level 4 – to correct later
    if (this.pointsCount == 30) {
      this.levelCount = 4;
    }
    // Points needed to get to level 5 – to correct later
    if (this.pointsCount >= 40) {
      this.levelCount = 5;
    }
    
    levelCounter.innerText = `Level: ${this.levelCount}`;

    //Elements to change when level changes

    // Level 2
    if (this.levelCount == 2) {
      resetButton.classList.add("btn2");
      title.classList.add("title2");
      counters.classList.add("count2");
      body.classList.add("body2");
      this.background = "black";
      this.player.color = "antiquewhite";
    }

    // Level 3
    if (this.levelCount == 3) {
      resetButton.classList.add("btn3");
      title.classList.add("title3");
      counters.classList.add("count3");
      body.classList.add("body3");
      this.background = "yellow";
      this.player.color = "black";
    }

    // Level 4
    if (this.levelCount == 4) {
      resetButton.classList.add("btn4");
      title.classList.add("title4");
      counters.classList.add("count4");
      body.classList.add("body4");
      this.background = "darkblue";
      this.player.color = "antiquewhite";
    }

    // Level 5
    if (this.levelCount == 5) {
      resetButton.classList.add("btn5");
      title.classList.add("title5");
      counters.classList.add("count5");
      body.classList.add("body5");
      this.background = "#8c1aff";
      this.player.color = "black";
    }
  }
  // In order to adjust the player and the obstacles to new level, look for line 13;
  // You can modify certain items of player/ obstalces from the game
}
