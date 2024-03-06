const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let playerResult = 0;
let computerResult = 0;
let gameResult = "";
function gameStart(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      gameResult = "draw";
      break;
    case (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
      playerResult++;
      gameResult = "You Won!";
      break;
    default:
      computerResult++;
      gameResult = "You Lost!";
      break;
  }
}
function printResult() {
  console.log(`Player result: ${playerResult}`);
  console.log(`Computer result: ${computerResult}`);
  console.log(`Game result: ${gameResult}`);
}
function playGame() {
  rl.question("Enter your choice (ROCK, PAPER, or SCISSORS): ", (input) => {
    const playerSelection = input.toUpperCase();
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
    const computerSelection =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    gameStart(playerSelection, computerSelection);

    if (playerResult === 3 || computerResult === 3) {
      console.log("game over");
      rl.close();
    } else {
      printResult();
      playGame();
    }
  });
}
playGame();
