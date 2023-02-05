const options = ["Rock", "Paper", "Scissors"];
let player = 0;
let computer = 0;

const getComputerChoice = function() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice = options[randomNum].toLowerCase()
    return choice;
}

const playRound = function(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log('You loose! Paper beats Rock');
        computer++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log('You win! Paper beats Rock');
        player++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log('You win! Rock beats Scissors');
        player++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log('You loose! Rock beats Scissors');
        computer++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log('You loose! Scissors beats Paper');
        computer++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log('You win! Scissors beats Paper');
        player++;
    }
    else {
        console.log('Draw')
    }
}

const game = function() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt('Enter your choice');
        playRound(playerSelection.toLowerCase(), getComputerChoice());
    }
    if (player > computer) {
        console.log('Player Won!');
        console.log('Player:', player, 'Computer:', computer);
        player = 0;
        computer = 0;
    }
    else if (player < computer) {
        console.log('Computer Won!');
        console.log('Player:', player, 'Computer:', computer);
        player = 0;
        computer = 0;
    }
    else {
        console.log("It's a Draw");
        console.log('Player:', player, 'Computer:', computer);
        player = 0;
        computer = 0;
    }
}

game()