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