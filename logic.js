function computerPlay(){
    let randomINT = randomInteger(1,3);
    return (randomINT==1) ? "Rock" : (randomINT == 2) ? "Paper" : "Scissor";
}

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function properCase(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(chosenButton){
    let playerCount = 0, computerCount = 0;
    let playerSelection = chosenButton.textContent;
    let computerSelection = computerPlay();
    // Remove problem with case sensitivity.
    playerSelection = properCase(playerSelection);

    if (playerSelection == computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
             (playerSelection == "Paper" && computerSelection == "Rock") ||
             (playerSelection == "Scissor" && computerSelection == "Paper")) {
        
        playerCount += 1
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerCount += 1
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}