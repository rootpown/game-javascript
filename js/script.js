let playerResult = 0;
let computerResult = 0;
let gameResult = "";
function gameStart(playerSelection, computerSelection) {
  const ROCK = document.getElementById("ROCK");
  const PAPER = document.getElementById("PAPER");
  const SCISSORS = document.getElementById("SCISSORS");
  ROCK.addEventListener("click", () => {
    playRound("ROCK");
  });
  PAPER.addEventListener("click", () => {
    playRound("PAPER");
  });
  SCISSORS.addEventListener("click", () => {
    playRound("SCISSORS");
  });
}
function playRound(playerSelection) {
  const computerSelection = computerPlay();
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

  gameResultation();
}
function computerPlay() {
  const computerChoises = ["ROCK", "PAPER", "SCISSORS"];
  return computerChoises[Math.floor(Math.random() * computerChoises.length)];
}
function gameResultation() {
  const resultElement = document.getElementById("game-result");
  resultElement.textContent = `Player: ${playerResult} Computer ${computerResult} `;
  if (playerResult === 3 || computerResult === 3) {
    if (playerResult === 3) {
      resultElement.textContent = "You Won ##PLAYER";
    } else {
      resultElement.textContent = "Computer WON ##YOU LOST";
    }
    playerResult = 0;
    computerResult = 0;
  }
}

gameStart();
