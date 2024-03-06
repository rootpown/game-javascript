const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let playerResult = 0;
let computerResult = 0;
let gameResult = "";

function gameStart(playerSelection, computerSelection) {
  if (
    playerSelection === "ROCK" ||
    playerSelection === "PAPER" ||
    playerSelection === "SCISSORS"
  ) {
    if (playerSelection === computerSelection) {
      gameResult = "tie";
    } else {
      switch (computerSelection) {
        case "ROCK":
          if (playerSelection === "ROCK") {
            computerResult++;
            gameResult = "lose";
          } else {
            playerResult++;
            gameResult = "win";
          }
          break;
        case "PAPER":
          if (playerSelection === "PAPER") {
            computerResult++;
            gameResult = "lose";
          } else {
            playerResult++;
            gameResult = "Win";
          }
          break;
        case "SCISSORS":
          if (playerSelection === "SCISSORS") {
            computerResult++;
            gameResult = "lose";
          } else {
            playerResult++;
            gameResult = "Win";
          }
          break;
      }
    }
  } else {
    console.log("Invalid number selection");
  }
}

function printResult() {
  console.log(`Player result: ${playerResult}`);
  console.log(`Computer result: ${computerResult}`);
  console.log(`Game result: ${gameResult}`);
}

rl.question("Enter your choice (ROCK, PAPER, or SCISSORS): ", (input) => {
  const playerSelection = input.toUpperCase();
  const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
  const computerSelection =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  gameStart(playerSelection, computerSelection);
  printResult();

  rl.close();
});
