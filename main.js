let computerScore=0;
let humanScore=0;

let humanChoice= prompt('rock, paper, scissors');
// converting to lower case for the string not to be case sensitive
let humanChoice_=humanChoice.toLowerCase();

console.log('human chose', humanChoice);

let options=['rock','paper', 'scissors'];
let compChoice= options[Math.floor(Math.random()*options.length)];

console.log('computer chose',compChoice);

if(humanChoice_=='rock' && compChoice=='paper')
{
  console.log('paper beats rock you lost this round')
  computerScore+=1;
  console.log('computer'+  computerScore+ 'you'+ humanScore)
}
else if (humanChoice_ == "rock" && compChoice == "scissors") 
{
  console.log("rock beats scissors! You won this round.")
  humanScore += 1;
  console.log("Computer: " + computerScore + " You: " + humanScore)
} 
else if (humanChoice_ == "rock" && compChoice == "rock") 
{
  console.log("There was a tie");
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "paper" && compChoice == "rock") 
{
  console.log("Paper beats rock");
  humanScore += 1;
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "paper" && compChoice == "scissors") 
{
  console.log("Scissors beats paper");
  computerScore+=1;
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "paper" && compChoice == "paper") 
{
  console.log("There was a tie");
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "scissors" && compChoice == "rock") 
{
  console.log("Rock beats scissors");
  computerScore+=1;
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "scissors" && compChoice == "paper") 
{
  console.log("Scissors beats paper");
  humanScore += 1;
  console.log("Computer: " + computerScore + " You: " + humanScore);
}
else if (humanChoice_ == "scissors" && compChoice == "scissors") 
{
  console.log("There was a tie");
  console.log("Computer: " + computerScore + " You: " + humanScore);
}