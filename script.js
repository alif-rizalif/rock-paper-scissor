// alert("Welcome to the RPS Game\n(Rock, Paper, Scissor)");

// Add Rock Button
const btnRock = document.querySelector("#rock");
// Add Paper Button
const btnPaper = document.querySelector("#paper");
// Add Rock Button
const btnScissor = document.querySelector("#scissor");

// Add Player Score
const playerNumber = document.querySelector("#number-player");
// Add Computer Score
const computerNumber = document.querySelector("#number-computer");

// Add Player Choice
const playerChoiceText = document.querySelector("#player-choice");
// Add Computer Choice
const computerChoiceText = document.querySelector("#computer-choice");

// Add Remaining Turn Text
const remainTurnNum = document.querySelector("#remain-number");

// Add Result Area
const resultArea = document.querySelector("#result-area");
// Add Result Text
const gameResult = document.querySelector("#result-text");
// Add Refresh Button
const refreshBtn = document.querySelector("#btn-refresh");

// Declare First Score
let playerScore = 0;
let computerScore = 0;

// Declare Remaining Turn
let remainTurn = 5;

// Create function to get the computer choice
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) return "rock";
  if (randomNum == 1) return "paper";
  if (randomNum == 2) return "scissor";
}

// Function Add Result Area
function resultGame() {
  if (remainTurn <= 0) {
    console.log(remainTurn);
    btnRock.remove();
    btnPaper.remove();
    btnScissor.remove();

    resultArea.setAttribute("class", "result-area");

    if (computerScore == playerScore) {
      gameResult.textContent = "DRAW";
      gameResult.setAttribute("class", "bg-result-draw");
    }
    if (playerScore > computerScore) {
      gameResult.textContent = "PLAYER WIN!";
      gameResult.setAttribute("class", "bg-result-player");
    }
    if (playerScore < computerScore) {
      gameResult.textContent = "COMPUTER WIN!";
      gameResult.setAttribute("class", "bg-result-computer");
    }

    refreshBtn.textContent = "PLAY AGAIN";
    refreshBtn.setAttribute("class", "bg-refresh");
    refreshBtn.addEventListener("click", () => {
      // reload the current page
      window.location.reload();
    });
  }
}

// Button Area
btnRock.addEventListener("click", () => {
  remainTurn--;
  remainTurnNum.textContent = remainTurn;

  let playerChoice = "rock";
  playerChoiceText.textContent = "ROCK";
  playerChoiceText.style.textDecoration = "none";
  computerChoiceText.style.textDecoration = "none";

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = computerChoice.toUpperCase();

  // console.log(`Player : ${playerChoice},\nComputer : ${computerChoice}`);

  if (playerChoice == computerChoice) {
    console.log("Result is DRAW!");
  }
  if (computerChoice == "paper") {
    console.log("You LOSE! Paper beats Rock");
    computerScore++;
    computerNumber.textContent = computerScore;
    playerChoiceText.style.textDecoration = "line-through";
  }
  if (computerChoice == "scissor") {
    console.log("You WIN! Rock beats Scissor");
    playerScore++;
    playerNumber.textContent = playerScore;
    computerChoiceText.style.textDecoration = "line-through";
  }

  // console.log(`Score :\nPlayer = ${playerScore}\nComputer = ${computerScore}`);

  resultGame();
});

btnPaper.addEventListener("click", () => {
  remainTurn--;
  remainTurnNum.textContent = remainTurn;

  let playerChoice = "paper";
  playerChoiceText.textContent = "PAPER";
  playerChoiceText.style.textDecoration = "none";
  computerChoiceText.style.textDecoration = "none";

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = computerChoice.toUpperCase();

  if (playerChoice == computerChoice) {
    console.log("Result is DRAW!");
  }
  if (computerChoice == "scissor") {
    console.log("You LOSE! Scissor beats Paper");
    computerScore++;
    computerNumber.textContent = computerScore;
    playerChoiceText.style.textDecoration = "line-through";
  }
  if (computerChoice == "rock") {
    console.log("You WIN! Paper beats Rock");
    playerScore++;
    playerNumber.textContent = playerScore;
    computerChoiceText.style.textDecoration = "line-through";
  }

  resultGame();
});

btnScissor.addEventListener("click", () => {
  remainTurn--;
  remainTurnNum.textContent = remainTurn;

  let playerChoice = "scissor";
  playerChoiceText.textContent = "SCISSOR";
  playerChoiceText.style.textDecoration = "none";
  computerChoiceText.style.textDecoration = "none";

  let computerChoice = getComputerChoice();
  computerChoiceText.textContent = computerChoice.toUpperCase();

  if (playerChoice == computerChoice) {
    console.log("Result is DRAW!");
  }
  if (computerChoice == "rock") {
    console.log("You LOSE! Rock beats Scissor");
    computerScore++;
    computerNumber.textContent = computerScore;
    playerChoiceText.style.textDecoration = "line-through";
  }
  if (computerChoice == "paper") {
    console.log("You WIN! Scissor beats Paper");
    playerScore++;
    playerNumber.textContent = playerScore;
    computerChoiceText.style.textDecoration = "line-through";
  }

  resultGame();
});
