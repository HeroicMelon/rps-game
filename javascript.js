let playerScore = 0;
let compScore = 0;

function getComputerChoice() { // randomizes computer's choice
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        message = 'You lose! Paper beats Rock!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        message = 'You win! Paper beats Rock!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'You lose! Scissors beats Paper!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        message = 'You win! Scissors beats Paper!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'You lose! Rock beats Scissors!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    message = 'You win! Rock beats Scissors!';
    }
    else if (playerSelection == computerSelection) {
        message = 'It\'s a tie!';
    } else {
        message = 'Invalid answer';
    }
    return message;
}


function game() { // the game itself
    let playerSelection = prompt("rock, paper, or scissors?").toLowerCase(); // changes player answer to lowercase
    let computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.search('You win!') > -1) { // returns -1 if no match found
        playerScore++;
        console.log('You win! Player - ' + `${playerScore}` + ' Computer - ' + `${compScore}`);
    } else if (roundResult.search('You lose!') > -1) {
        compScore++;
        console.log('You lose! Player - ' + `${playerScore}` + ' Computer - ' + `${compScore}`);
    } else if (roundResult.search('tie!') > -1) {
        console.log('It\'s a tie! Player - ' + `${playerScore}` + ' Computer - ' + `${compScore}`);
    } else {
        console.log('Invalid answer');
    }
    endGame();
}
game();
function endGame() { // ends the game when score reaches 5
    if (playerScore >= 5 && compScore < 5) {
        alert('Game over, You win!');
    } else if (playerScore < 5 && compScore >= 5) {
        alert('Game over, You lose!');
    }
}
