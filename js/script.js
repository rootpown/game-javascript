
let playerResult = 0;
let computerResult = 0;
let gameResult = "";
function gameStart(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    gameResult = "draw";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerResult++;
    gameResult = "You Won!";
  } else {
    computerResult++;
    gameResult = "You Lost!";
  }
  document.getElementById(
    "game-result"
  ).innerText = `Player Result: ${playerResult}, Computer Result ${computerResult}, Game Result: ${gameResult}`;
}
);
