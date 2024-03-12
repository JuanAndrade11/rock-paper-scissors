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

function resetRounds(){
    playedRounds = 0;
    playerRounds = 0;
    computerRounds = 0;
    tiedRounds = 0;
}

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

    alert(roundResult.result);

    if (roundResult.playerWon) {
        playerRounds++;
    } else if (!roundResult.tie) {
        computerRounds++;
    } else {
        tiedRounds++;
    };

    playedRounds++;

    alert("Player Rounds " + playerRounds + " Computer Rounds " + computerRounds + " ties " + tiedRounds + " in " + playedRounds + " rounds.");
    

    if (playerRounds === 5) {
        alert("You Win! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
    } else if (computerRounds === 5) {
        alert("You Lose! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
    };

    updateLabels();
};

function updateLabels(){
    played.textContent = "# of Played Rounds: " + playedRounds;
    player.textContent = "# of Player Wins: " + playerRounds;
    computer.textContent = "# of Computer Wins: " + computerRounds;
    ties.textContent = "# of Tied Rounds: " + tiedRounds;
}

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
