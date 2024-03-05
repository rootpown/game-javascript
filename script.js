// const readline = require("node:readline");
// const { stdin: input, stdout: output } = require("node:process");

// const rl = readline.createInterface({ input, output });

let playerResult = 0;
let computerResult = 0;
let gameResult = " ";

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
function gameEnd(computerSelection) {
  let result = Math.floor(Math.random() * 2) + 1;
  if (result === 1) {
    computerSelection++;
  }
}
rl.question("type: ", (logger) => {
  console.log(`Thank you for your valuable feedback: ${logger}`);

  rl.close();
});
