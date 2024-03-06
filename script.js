const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let playerResult = 0;
let computerResult = 0;
let gameResult = "";
function gameStart(playerSelection, computerSelection) {
  if (!["ROCK", "PAPER", "SCISSORS"].includes(playerSelection)) {
    throw new Error("Invalid input. Please enter ROCK, PAPER, or SCISSORS.");
  }
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
}
function printResult() {
  console.log(`Player result: ${playerResult}`);
  console.log(`Computer result: ${computerResult}`);
  console.log(`Game result: ${gameResult}`);
}
function playGame() {
  rl.question("Enter your choice (ROCK, PAPER, or SCISSORS): ", (input) => {
    try {
      const playerSelection = input.toUpperCase();
      const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
      const computerSelection =
        computerOptions[Math.floor(Math.random() * computerOptions.length)];
      gameStart(playerSelection, computerSelection);

      if (playerResult === 3 || computerResult === 3) {
        console.log("Game Result: ", gameResult);
        rl.close();
      } else {
        printResult();
        playGame();
      }
    } catch (error) {
      console.error(error.message);
      playGame();
    }
  });
}
playGame();
