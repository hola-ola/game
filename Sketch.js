function countTime() {
  let time = document.getElementById("time-counter")
  game.timeCounter++;
  let minutes = Math.floor(game.timeCounter/60);
  let seconds = game.timeCounter % 60;
  if (game.timeCounter < 10) {
    time.innerText = `Time: 00:0${game.timeCounter}`;
    console.log(time);
  } 
  else if (10 < game.timeCounter < 60) {
    time.innerText = `Time: 00:${game.timeCounter}`;
  } 
  else if (60 < game.timeCounter < 3600) {
    time.innerText = `Time: 0${minutes}:${seconds}`;
    console.log(time);
  }
}