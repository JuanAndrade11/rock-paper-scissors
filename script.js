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

function playGame() {
    let playerRounds = 0;
    let computerRounds = 0;
    let tiedRounds = 0;

    while (playerRounds < 3 && computerRounds < 3) {
        let playerSelection = prompt("Type your selection", "rock").toLowerCase();
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

        console.log("Player Rounds " + playerRounds + " Computer Rounds " + computerRounds + " ties " + tiedRounds);
    };

    if (playerRounds === 3) {
        console.log("You Win! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
    } else {
        console.log("You Lose! " + playerRounds + " to " + computerRounds + " with " + tiedRounds + " ties");
    };
};

playGame();
