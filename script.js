// Write the logic to play the entire game
function playGame() {
  // Declare the score variables
  let humanScore = 0;
  let computerScore = 0;

  // Write the logic to play a single round
  function playRound() {
    // Create function to get the human choice
    function humanInput() {
      const inputUser = prompt(
        "Please input your selection\nrock / paper / scissor"
      );
      return inputUser;
    }
    let humanChoice = humanInput().toLowerCase();

    // Create function to get the computer choice
    function getComputerChoice() {
      const randomNum = Math.floor(Math.random() * 3);

      if (randomNum == 0) return "rock";
      if (randomNum == 1) return "paper";
      if (randomNum == 2) return "scissor";
    }
    let computerChoice = getComputerChoice();

    console.log(`Player : ${humanChoice},\nComputer : ${computerChoice}`);

    if (humanChoice == computerChoice) {
      console.log("Result is DRAW!");
    }
    if (humanChoice == "rock") {
      if (computerChoice == "paper") {
        console.log("You LOSE! Paper beats Rock");
        computerScore++;
      }
      if (computerChoice == "scissor") {
        console.log("You WIN! Rock beats Scissor");
        humanScore++;
      }
    }
    if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You WIN! Paper beats Rock");
        humanScore++;
      }
      if (computerChoice == "scissor") {
        console.log("You LOSE! Scissor beats Paper");
        computerScore++;
      }
    }
    if (humanChoice == "scissor") {
      if (computerChoice == "rock") {
        console.log("You LOSE! Rock beats Scissor");
        computerScore++;
      }
      if (computerChoice == "paper") {
        console.log("You WIN! Scissor beats Paper");
        humanScore++;
      }
    }

    console.log(`Score :\nPlayer = ${humanScore}\nComputer = ${computerScore}`);
  }

  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame();
