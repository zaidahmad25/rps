const gender = prompt("Hi player! What's your gender? (M/F)");
const playerName = prompt("Thank you! Now what's your name?");
const numberOfRounds = parseInt(prompt(`Hey ${playerName}! How many rounds would you like to play?`));

const playerNameEl = document.querySelector('.player-name');
const roundsCountEl = document.querySelector('.rounds-count');
const playAgainEl = document.querySelector('.playagain-btn');
const playerPointsEl = document.querySelector('.player-pt');
const computerPointsEl = document.querySelector('.computer-pt');
const outputTextEl = document.querySelector('.output-text');
const manImageEl = document.querySelector('.man');
const womanImageEl = document.querySelector('.woman');
const computerImageEl = document.querySelector('.computer');
const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');


const options = ["Rock", "Paper", "Scissors"];
let player = 0;
let computer = 0;
let rounds = 1;

playerNameEl.textContent = playerName + ":";
playerPointsEl.textContent = player;
computerPointsEl.textContent = computer;

const getComputerChoice = function() {
    let randomNum = Math.floor((Math.random() * 3));
    let choice = options[randomNum].toLowerCase()
    return choice;
} 

const displayPic = function(gender, won) {
    if (gender.toLowerCase() == 'm' && won === 'player') {
        manImageEl.style.display = "block";
        outputTextEl.textContent = 'Wins';
    }
    else if (gender.toLowerCase() == 'f' && won === 'player') {
        womanImageEl.style.display = "block";
        outputTextEl.textContent = 'Wins';
    }
    else {
        computerImageEl.style.display = "block";
        outputTextEl.textContent = 'Wins';
    }
}
// Player: Blue (#2c3e50), Computer: Red (#ff7979)

const results = function() {
    if (player > computer) {
        outputTextEl.textContent = `Congratulations! ${ playerName } wins!`
        player = 0;
        computer = 0;
    }
    else if (player < computer) {
        outputTextEl.textContent = `Oh o, computer wins!`
        player = 0;
        computer = 0;
    }
    else {
        outputTextEl.textContent = "It's a draw!"
        player = 0;
        computer = 0;
    }
}

rockEl.addEventListener('click', function() {
    if (rounds <= numberOfRounds+1) {
        console.log(getComputerChoice())
        if (getComputerChoice() === 'rock') {
            outputTextEl.textContent = 'Draw';
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'paper') {
            computer++;
            computerPointsEl.textContent = computer;
            rockEl.backgroundColor = '#ff7979';
            paperEl.backgroundColor = '#2c3e50';
            displayPic(gender, 'computer');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'scissors') {
            player++;
            playerNameEl.textContent = playerName;
            rockEl.backgroundColor = '#2c3e50';
            scissorsEl.backgroundColor = '#ff7979';
            displayPic(gender, 'player');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else {
            console.log('hi')
        }
    }
    else {
        results();
    }
});

paperEl.addEventListener('click', function() {
    if (rounds <= numberOfRounds) {
        if (getComputerChoice() === 'rock') {
            player++;
            playerNameEl.textContent = playerName;
            rockEl.backgroundColor = '#ff7979';
            paperEl.backgroundColor = '#2c3e50';
            displayPic(gender, 'player');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'paper') {
            outputTextEl.textContent = 'Draw';
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'scissors') {
            computer++;
            computerPointsEl.textContent = computer;
            scissorsEl.backgroundColor = '#2c3e50';
            paperEl.backgroundColor = '#ff7979';
            displayPic(gender, 'computer');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
    }
    else {
        results();
    }
});

scissorsEl.addEventListener('click', function() {
    if (rounds <= numberOfRounds) {
        if (getComputerChoice() === 'rock') {
            computer++;
            computerPointsEl.textContent = computer;
            rockEl.backgroundColor = '#2c3e50';
            scissorsEl.backgroundColor = '#ff7979';
            displayPic(gender, 'computer');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'paper') {
            player++;
            playerNameEl.textContent = playerName;
            scissorsEl.backgroundColor = '#ff7979';
            paperEl.backgroundColor = '#2c3e50';
            displayPic(gender, 'player');
            roundsCountEl.textContent = rounds;
            rounds++;
        }
        else if (getComputerChoice() === 'scissors') {
            outputTextEl.textContent = 'Draw';
            roundsCountEl.textContent = rounds;
            rounds++;
        }
    }
    else {
        results();
    }
});
