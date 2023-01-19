
const playerSelector = ('rock', 'paper', 'scissors','Rock'
, 'Paper', 'Scissors', 'ROCK', 'PAPER', 'SCISSORS');
computerSelector = getComputerChoice();
console.log(playRound(playerSelect, computerSelector));

function getComputerChoice(Rock, Paper, Scissors) {
    Rock = 'Rock'; Paper = 'Paper'; Scissors = 'Scissors';
return Math.floor(Math.random(Rock, Paper, Scissors));
}

function playRound(playerSelect, computerSelect) {

    if (playerSelect === computerSelect) {
        alert('It\'s a tie!');
    } else if (playerSelect === 'Rock') 
        if (computerSelect === 'Scissors') {
            alert('You win!');
}}