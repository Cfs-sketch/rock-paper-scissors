let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
return Math.floor(Math.random() * choices.length);
}

function playRound(playerSelector) {
    let computerSelector = computerPlay()
    let result = ""

    if ((playerSelector == 'rock' && computerSelector == 'scissors') ||
        (playerSelector == 'scissors' && computerSelector == 'paper') ||
        (playerSelector == 'paper' && computerSelector == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelector + ' beats ' + computerSelector
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelector == computerSelector) {
        result = ('It\'s a tie. You both chose ' + playerSelector
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelector + ' beats ' + playerSelector
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}
