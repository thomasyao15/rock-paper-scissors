
function genComputerOption() {
    randNumber = Math.floor(Math.random() * 3);  // Rand number from 0-2

    switch (randNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function updateCommentary(message) {
    const commentary = document.getElementById("commentary");
    commentary.textContent = message;
}

function calcRoundWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        updateCommentary("It's a draw.");
        return "draw";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            updateCommentary("You win! Rock beats scissors.");
            return "player";
        }
        else if (computerSelection == "paper") {
            updateCommentary("You lose! Paper beats rock.");
            return "computer";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            updateCommentary("You win! Paper beats rock.");
            return "player";
        }
        else if (computerSelection == "scissors") {
            updateCommentary("You lose! Scissors beats paper.");
            return "computer";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            updateCommentary("You win! Scissors beats paper.");
            return "player";
        }
        else if (computerSelection == "rock") {
            updateCommentary("You lose! Rock beats scissors.");
            return "computer";
        }
    }
}

function playRound(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = genComputerOption();

    updateChoices(playerSelection, computerSelection)

    winner = calcRoundWinner(playerSelection, computerSelection);
    
    switch (winner) {
        case "player":
            incrementScore('player');
            break;
        case "computer":
            incrementScore('computer');
            break;
    }
}

function updateChoices(player, computer) {
    const playerChoice = document.getElementById('player-choice');
    playerChoice.textContent = `You chose: ${player}`

    const computerChoice = document.getElementById('computer-choice');
    computerChoice.textContent = `Computer chose: ${computer}`
}

function incrementScore(user) {
    if (user == "player") {
        playerWins++;
        setPlayerWins(playerWins);
    }
    if (user == "computer") {
        computerWins++;
        setComputerWins(computerWins);
    }
}

function setPlayerWins(playerWins) {
    const playerScore = document.getElementById('player-score');
    playerScore.textContent = playerWins;
}

function setComputerWins(computerWins) {
    const computerScore = document.getElementById('computer-score');
    computerScore.textContent = computerWins;
}


// const winTarget = 5;
let playerWins = 0;
let computerWins = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let playerChoice = e.target.id;
        playRound(playerChoice)
    })
})