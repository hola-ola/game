//  Game class is important. It hold all the relevant data. Nothing happens without a game "logically".
// Game is the single source of information for the status of the game. If somehthing happens to a player, the game is aware
class Game {
    constructor() {
      this.player = new Player();
      this.startHouse = new House(0, 0, 100, 100);
      this.endHouse = new House(1100, 500, 100, 100);
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
    }
}