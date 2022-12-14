let playerScore = 0;
let compScore = 0;
let playerSelection;
let computerSelection = getComputerChoice();

const player = document.querySelector('#play-score');
player.textContent = `Score: ${playerScore}`;

const computer = document.querySelector('#comp-score');
computer.textContent = `Score: ${compScore}`;

const output = document.querySelector('#output');
output.style.fontSize = '12px';

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();

        if (playerSelection == 'rock') {
            document.getElementById('playChoice').src ='images/rock.png';
        } else if (playerSelection == 'paper') {
            document.getElementById('playChoice').src ='images/paper.png';
        } else if (playerSelection == 'scissors') {
            document.getElementById('playChoice').src ='images/scissors.png';
        }
        if (computerSelection == 'rock') {
            document.getElementById('compChoice').src ='images/rock.png';
        } else if (computerSelection == 'paper') {
            document.getElementById('compChoice').src ='images/paper.png';
        } else if (computerSelection == 'scissors') {
            document.getElementById('compChoice').src ='images/scissors.png';
        }
        game();
    });
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    resetGame();
});

const disableRock = document.getElementById('rock');
const disablePaper = document.getElementById('paper');
const disableScissors = document.getElementById('scissors');

// game functions

function getComputerChoice() { // randomizes computer's choice
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        output.textContent = 'You lose! Paper beats Rock!';
        compScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        output.textContent = 'You win! Paper beats Rock!';
        playerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        output.textContent = 'You lose! Scissors beats Paper!';
        compScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        output.textContent = 'You win! Scissors beats Paper!';
        playerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        output.textContent = 'You lose! Rock beats Scissors!';
        compScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        output.textContent = 'You win! Rock beats Scissors!';
        playerScore++;
    }
    else if (playerSelection == computerSelection) {
        output.textContent = 'It\'s a tie!';
    } 
}

function game() { // the game itself

    playRound(playerSelection, computerSelection);
    player.textContent = `Score: ${playerScore}`;
    computer.textContent = `Score: ${compScore}`;
    
    endGame();
}

// helper functions

function endGame() { // ends the game, disables buttons from continuing game, shows reset button
    if (playerScore >= 5 && compScore < 5) {
        output.textContent = 'GG EZ, Play again?';
        disableRock.disabled = true;
        disablePaper.disabled = true;
        disableScissors.disabled = true;
        showResetBtn();
    } else if (playerScore < 5 && compScore >= 5) {
        output.textContent = 'Git gud scrub. Play again?'; 
        disableRock.disabled = true;
        disablePaper.disabled = true;
        disableScissors.disabled = true;
        showResetBtn();
    }
}

function showResetBtn() { // shows reset button
    document.getElementById('reset').style.visibility = 'visible';
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    player.textContent = `Score: ${playerScore}`;
    computer.textContent = `Score: ${compScore}`;
    output.textContent = 'GLHF';
    disableRock.disabled = false;
    disablePaper.disabled = false;
    disableScissors.disabled = false;
    resetBtn.style.visibility = 'hidden';
    document.getElementById('playChoice').src ='images/question.png';
    document.getElementById('compChoice').src ='images/question.png';
}