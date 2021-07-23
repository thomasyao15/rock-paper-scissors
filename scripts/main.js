
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

function calcRoundWinner(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("It's a draw.");
        return "draw";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            console.log("You win! Rock beats scissors.");
            return "player";
        }
        else if (computerSelection == "paper") {
            console.log("You lose! Paper beats rock.");
            return "computer";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You win! Paper beats rock.");
            return "player";
        }
        else if (computerSelection == "scissors") {
            console.log("You lose! Scissors beats paper.");
            return "computer";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            console.log("You win! Scissors beats paper.");
            return "player";
        }
        else if (computerSelection == "rock") {
            console.log("You lose! Rock beats scissors.");
            return "computer";
        }
    }
}

function playRound() {
    let playerSelection = getPlayerOption();
    let computerSelection = genComputerOption();

    winner = calcRoundWinner(playerSelection, computerSelection);
    
    switch (winner) {
        case "player":
            playerWins++;
            break;
        case "computer":
            computerWins++;
    }
}

function getPlayerOption() {
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

    printWinner();
}

function printWinner() {
    if (playerWins > computerWins) {
        console.log(`You won!\nPlayer: ${playerWins}\nComputer: ${computerWins}`);
    }
    else if (computerWins > playerWins) {
        console.log(`You lost!\nPlayer: ${playerWins}\nComputer: ${computerWins}`);
    }
    else {
        console.log(`It was a draw!\nPlayer: ${playerWins}\nComputer: ${computerWins}`);
    }
}

const roundLength = 5;
let playerWins = 0;
let computerWins = 0;

playGame();