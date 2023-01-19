
function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
return Math.floor(Math.random() * choices.length);
}

function playRound(playerSelector) {
let computerSelector =  getComputerChoice();
let result = ""

    if ((playerSelector == 'rock' && computerSelector == 'scissors') ||
    (playerSelector == 'scissors' && computerSelector == 'paper') ||
    (playerSelector == 'paper' && computerSelector == 'rock')) ;
}
function game(playRound){
    for (let i = 0; i < 5; i++) {
        playRound();
     }
}
game(playRound);