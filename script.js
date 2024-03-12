let options = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

let beats = {
    "rock" : "scissors",
    "paper" : "rock",
    "scissors" : "paper"
};

let playedRounds = 0;
let playerRounds = 0;
let computerRounds = 0;
let tiedRounds = 0;


const played = document.getElementById("played");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const ties = document.getElementById("ties");

const logElement = document.getElementById("log");

function resetRounds(){
    playedRounds = 0;
    playerRounds = 0;
    computerRounds = 0;
    tiedRounds = 0;
};

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
};

function getResult(playerSelection, computerSelection) {
    let playerBeats = beats[playerSelection];
    if (playerBeats === computerSelection) {
        return { result: "You Win! " + playerSelection + " beats " + computerSelection, playerWon: true };
    } else if (playerSelection === computerSelection) {
        return { result: "A boring Tie", tie: true };
    } else {
        return { result: "You Lose! " + computerSelection + " beats " + playerSelection, playerWon: false };
    };
};

function playRound(playerSelection) {
    let computerSelection = options[getComputerChoice()];
    let roundResult = getResult(playerSelection, computerSelection);

    logMessage(roundResult.result);

    if (roundResult.playerWon) {
        playerRounds++;
    } else if (!roundResult.tie) {
        computerRounds++;
    } else {
        tiedRounds++;
    };

    playedRounds++;

    logMessage("Player Rounds " + playerRounds + " Computer Rounds " + computerRounds + " ties " + tiedRounds + " in " + playedRounds + " rounds.");
    

    if (playerRounds === 5) {
        alert("You Win! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
        deleteAllChildElements(logElement);
    } else if (computerRounds === 5) {
        alert("You Lose! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
        deleteAllChildElements(logElement);
    };

    updateLabels();
};

function updateLabels(){
    played.textContent = "# of Played Rounds: " + playedRounds;
    player.textContent = "# of Player Wins: " + playerRounds;
    computer.textContent = "# of Computer Wins: " + computerRounds;
    ties.textContent = "# of Tied Rounds: " + tiedRounds;
};

function logMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    logElement.appendChild(messageElement);
};

function deleteAllChildElements(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    };
};

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});

updateLabels();
