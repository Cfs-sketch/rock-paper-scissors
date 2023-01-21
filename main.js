let playerScore = 0;
let computerScore = 0;

const playerSelection = playerPlay();
const computerSelection = computerPlay();

// computer select function
function computerPlay() {

    const option = ['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random() * 3);
    
    return option[random];
}

console.log('Computer: ' + computerSelection);

// player select function
function playerPlay() {

    const input = prompt('Please enter input');

    const option = input.toLowerCase();
    
    return option;
}

console.log('Player: ' + playerSelection);


// play 1 single round
function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return 'It is a tie';
    }


    if(playerSelection === 'rock') {

        if(computerSelection === 'scissors') {
            playerScore++;
            return 'Player wins with rock';
        } else if(computerSelection === 'paper') {
            computerScore++;
            return 'Computer wins with paper'
        }
    }

    if(playerSelection === 'paper') {

        if(computerSelection === 'rock') {
            playerScore++;
            return 'Player wins with paper';
        } else if(computerSelection === 'scissors') {
            computerScore++;
            return 'Computer wins with scissors';
        }
    }

    if(playerSelection === 'scissors') {

        if(computerSelection === "paper") {
            playerScore++;
            return 'Player wins with scissors';
        } else if(computerSelection === 'rock') {
            computerScore++;
            return 'Computer wins with rock';
        }
    }

}

// console.log(playRound(playerSelection, computerSelection));
playRound(playerSelection, computerSelection);

console.log('Player: ' + playerScore);
console.log('Computer: ' + computerScore);


// game

function game() {

    for(var i = 1; i <= 5; i++) {

       console.log('repeat 5 times');
       playRound(playerSelection, computerSelection);
    }

}

game();