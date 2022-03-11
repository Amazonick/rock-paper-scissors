// score board
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

// Player Selection
let playerSelection




// Computer Selection
let computerSelection = computerSelect();
function computerSelect() {
    const computerPick = ['rock', 'paper', 'scissors'];
    const computerRandom = Math.floor(Math.random()*3);
    return computerPick[computerRandom]; 
};

// Play Round
function playRound(playerSelection, computerSelection) {


        if (playerSelection === "rock" && computerSelection === "rock") {
                console.log(playerSelection + " & " + computerSelection + " is a tie!")
        }   
        else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("You lose! Your choice: " + playerSelection + " Computer: " + computerSelection); 
                computerScore++         
        }   
        else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("You win! Your choice: " + playerSelection + " Computer: " + computerSelection);
                playerScore++
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
                console.log(playerSelection + " & " + computerSelection + " is a tie!")
        }   
        else if (playerSelection === "paper" && computerSelection === "scissors") {
                console.log("You lose! Your choice: " + playerSelection + " Computer: " + computerSelection); 
                computerScore++ 
        }   
        else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("You win! Your choice: " + playerSelection + " Computer: " + computerSelection);
                playerScore++
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
                console.log(playerSelection + " & " + computerSelection + " is a tie!")
        }   
        else if (playerSelection === "scissors" && computerSelection === "rock") {
                console.log("You lose! Your choice: " + playerSelection + " Computer: " + computerSelection); 
                computerScore++ 
        }   
        else {
                console.log("You win! Your choice: " + playerSelection + " Computer: " + computerSelection);
                playerScore++
        }
        
}

// multiple rounds
function game() {
        // player input
        function playerSelect() {
                return prompt("Choose your tool!").toLowerCase();
        };

        while (playerScore < 5 && computerScore < 5) {
            playRound(playerSelect(), computerSelect());
            gamesPlayed++
            console.log('Player:' + playerScore, ' Comp:' + computerScore);
            console.log("Rounds:" + gamesPlayed)
        }
        
        if (playerScore === 5) {
                console.log("You won the game!");
        } else if (computerScore === 5) {
                console.log("You lost the game!");
        } else if (playerScore === computerScore) {
                console.log("It's a draw!");
        }
    } ;
game()

// score
console.log("Player score:" + playerScore)
console.log("Computer score:" + computerScore)
console.log("Rounds:" + gamesPlayed)


