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

function playRound(playerSelection, computerSelection){
    let playerBeats = beats[playerSelection];
    if (playerBeats === computerSelection) {
        return("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === computerSelection){
        return("A boring Tie");
    } else {
        return("You Lose! " + computerSelection + " beats " + playerSelection);
    };
};

const playerSelection = "rock";
const computerSelection = options[getComputerChoice()];
console.log(playRound(playerSelection, computerSelection));
