// score board
    let playerScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
// player pick
    function playerSelection() {
    let playerInput = prompt("Enter your choice"); 
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    }

// computer random pick
    function computerSelection() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    return rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    }

 // gameplay
    let gamePlay = playRound(playerSelection, computerSelection);
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "Rock") {
            if (computerSelection === "Rock") {
                console.log("It's a tie!");
                } else if (computerSelection === "Scissors") {
                    console.log(`You win! ${playerSelection()} beats ${computerSelection()}!`);
                    playerScore++;
                } else {
                    console.log(`You lose! ${computerSelection()} beats ${playerSelection()}!`);
                    computerScore++
                }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Paper") {
                console.log("It's a tie!");
                } else if (computerSelection === "Rock") {
                    console.log(`You win! ${playerSelection()} beats ${computerSelection()}!`);
                    playerScore++
                } else {
                    console.log(`You lose! ${computerSelection()} beats ${playerSelection()}!`);
                    computerScore++
                }
        } else  {
            if (computerSelection === "Scissors") {
                    console.log("It's a tie!");
                } else if (computerSelection === "Paper") {
                    console.log(`You win! ${playerSelection()} beats ${computerSelection()}!`);
                    playerScore++ 
                } else {
                    console.log(`You lose! ${computerSelection()} beats ${playerSelection()}!`);
                    computerScore++
                }
        }
};

// score
let currentPlayerScore = `You: ${playerScore}`;
let currentComputerScore = `Computer: ${computerScore}`;
console.log(currentPlayerScore, ':', currentComputerScore);

// rounds
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerSelection();
        let computerSelection = computerSelection();
        playRound(playerSelection, computerSelection);
    }
    checkWinner();
}