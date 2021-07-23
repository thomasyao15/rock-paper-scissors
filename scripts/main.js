
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

function calcRoundMsg(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "It's a draw.";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors.";
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats rock.";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock.";
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper.";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper.";
        }
        else if (computerSelection == "rock") {
            return "You lose! Rock beats scissors.";
        }
    }
}

function playRound() {
    let playerSelection = parsePlayerOption();
    let computerSelection = genComputerOption();

    console.log(calcRoundMsg(playerSelection, computerSelection));
}

function parsePlayerOption() {
    let playerText;

    while (true) {
        playerText = prompt("Choose: rock, paper or scissors").toLowerCase();
        if (playerText != "rock" && playerText != "scissors" && playerText != "paper") {
            console.log("Player entered an invalid option.");
        }
        else {
            return playerText;
        }
    }
}

function playGame() {
    for (let i = 0; i < roundLength; i++) {
        playRound();
    }
}

const roundLength = 5;
playGame();