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

function resetRounds(){
    playedRounds = 0;
    playerRounds = 0;
    computerRounds = 0;
    tiedRounds = 0;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
};

function playRound(playerSelection, computerSelection) {
    let playerBeats = beats[playerSelection];
    if (playerBeats === computerSelection) {
        return { result: "You Win! " + playerSelection + " beats " + computerSelection, playerWon: true };
    } else if (playerSelection === computerSelection) {
        return { result: "A boring Tie", tie: true };
    } else {
        return { result: "You Lose! " + computerSelection + " beats " + playerSelection, playerWon: false };
    };
};

function playGame(playerSelection) {
    let computerSelection = options[getComputerChoice()];
    let roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult.result);

    if (roundResult.playerWon) {
        playerRounds++;
    } else if (!roundResult.tie) {
        computerRounds++;
    } else {
        tiedRounds++;
    };

    playedRounds++;

    console.log("Player Rounds " + playerRounds + " Computer Rounds " + computerRounds + " ties " + tiedRounds + " in " + playedRounds + " rounds.");
    

    if (playerRounds === 5) {
        console.log("You Win! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
    } else if (computerRounds === 5) {
        console.log("You Lose! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
        resetRounds();
    };
};

document.getElementById("rock").addEventListener("click", () => {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playGame("scissors");
});
