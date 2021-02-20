      // Obstacle 2: circle big [color]
      if (frameCount % 180 === 0) {
        this.obstacles2.push(new Obstacle2());
      }

      this.obstacles2.forEach((obstacle, index) => {
        obstacle.draw();
      })

      // // Obstacle 3: circle small [color]
      if (frameCount % 60 === 0) {
        this.obstacles3.push(new Obstacle3());
      }

      this.obstacles3.forEach((obstacle, index) => {
        obstacle.draw();
    })


    // Correct code for collision check (pasre in line 31)
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
