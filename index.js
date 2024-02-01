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
  return userChoice.toLowerCase();
}


const checkWinner = (playerSelection, computerSelection) => {

  if(playerSelection == computerSelection){ return "Tie";}
   
  else if ((playerSelection == "rock" && computerSelection == "scissor") || 
     (playerSelection == "scissor" && computerSelection == "paper") || 
     (playerSelection == "paper" && computerSelection == "rock"))
    { return "Player";}
}


const playRound = (playerSelection, computerSelection) => {
  const result = checkWinner(playerSelection, computerSelection);  
  if(result == "Tie") return "Tie"
}



console.log("computer selection " + computerSelection());
console.log("player selection " + playerSelection());

console.log(checkWinner());



