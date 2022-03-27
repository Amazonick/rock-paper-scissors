const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score-board');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

// score board
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

possibleChoices.forEach((button) =>
  button.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    computerChoiceDisplay.innerHTML = computerRandomChoice();
    game();
  })
  );

// Computer Selection
function computerRandomChoice() {
  const computerPick = ['rock', 'paper', 'scissors'];
  const computerRandom = Math.floor(Math.random() * 3);
  return (computerChoice = computerPick[computerRandom]);
}

// Play Round
function playRound() {
  // Player: ROCK
  if (playerChoice === 'rock' && computerChoice === 'rock') {
    result = "It's a tie!";
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    result = 'You lose!';
    computerScore++;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    result = 'You win!';
    playerScore++;
  }
  // Player: PAPER
  else if (playerChoice === 'paper' && computerChoice === 'paper') {
    result = "It's a tie!";
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    result = 'You lose!';
    computerScore++;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    result = 'You win!';
    playerScore++;
  }
  // Player: SCISSORS
  else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
    result = "It's a tie!";
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    result = 'You lose!';
    computerScore++;
  } else {
    result = 'You win!';
    playerScore++;
  }
  console.log('Player score:' + playerScore);
  console.log('Computer score:' + computerScore);
  resultDisplay.innerHTML = result;
  scoreDisplay.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// multiple rounds
function game() {
  while (playerScore < 5 && computerScore < 5) {
    playRound(playerChoice, computerChoice);
    gamesPlayed++;
    console.log('Player:' + playerScore, ' Comp:' + computerScore);
    console.log('Rounds:' + gamesPlayed);
    break;
  }

  if (playerScore === 5) {
    resultDisplay.innerHTML = 'You won the game!';
  } else if (computerScore === 5) {
    resultDisplay.innerHTML = 'You lost the game!';
  } else if (playerScore === 5 && computerScore === 5) {
    resultDisplay.innerHTML = 'The game is a tie! No winners. :)'
  }
}
// score
console.log('Rounds:' + gamesPlayed);
