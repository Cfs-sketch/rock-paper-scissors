
const playerSelector = ('rock', 'paper', 'scissors','Rock'
, 'Paper', 'Scissors', 'ROCK', 'PAPER', 'SCISSORS');
computerSelector = getComputerChoice();
console.log(playRound(playerSelector, computerSelector));

function getComputerChoice(Rock, Paper, Scissors) {
    Rock = 'Rock'; Paper = 'Paper'; Scissors = 'Scissors';
return Math.floor(Math.random(Rock, Paper, Scissors));
}

function playRound(playerSelector, computerSelector) {

    if (playerSelector === computerSelector) {
        alert('It\'s a tie!');
    } else if (playerSelector === 'Rock') 
        if (computerSelector === 'Scissors') {
            alert('You win!');
}}
function game(playRound){
    for (let i = 0; i < 5; i++) {
        playRound();
     }
}