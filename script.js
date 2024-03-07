var options = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

console.log(options[getComputerChoice()])
