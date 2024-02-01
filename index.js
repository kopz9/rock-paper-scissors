const computerSelection = () => {
  var choiceArray = [
    "rock",
    "paper",
    "scissor"
  ]
  var randomNumber = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomNumber];
}

const playerSelection = () => {
  let userChoice = prompt("Rock, Paper or Scissor?");
  return userChoice
}

const checkWinner = (playerSelection, computerSelection) => {

  if(!playerSelection || !computerSelection){
    return "Invalid choices"
  }

  const pS = playerSelection.toLowerCase();
  const cS = computerSelection.toLowerCase();

  if(pS === cS){
    return "Tie"
  } 
  if (
    (pS === "rock" && cS === "scissor") ||
    (pS === "paper" && cS === "rock") ||
    (pS === "scissor" && cS === "paper")
  ) {
    return "Player wins";
  }
  return "Computer wins";
  }
 
const playerChoice = playerSelection();
const computerChoice = computerSelection();  
const result = checkWinner(playerChoice, computerChoice);

console.log(`Player choice: ${playerChoice}`)
console.log(`Computer choice: ${computerChoice}`);
console.log(`Result: ${result}`)



