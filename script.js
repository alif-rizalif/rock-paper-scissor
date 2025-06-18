function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) return "rock";
  if (randomNum == 1) return "paper";
  if (randomNum == 2) return "scissor";
}

function getHumanChoice() {
  const inputUser = prompt(
    "Please input your selection\nrock / paper / scissor"
  );
  return inputUser;
}
