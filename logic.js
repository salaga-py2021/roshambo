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

function playRound(playerSelection,computerSelection){
    // Remove problem with case sensitivity.
    playerSelection = properCase(playerSelection);

    if (playerSelection == computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
             (playerSelection == "Paper" && computerSelection == "Rock") ||
             (playerSelection == "Scissor" && computerSelection == "Paper")) {
        
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let playerCount = 0, computerCount = 0; 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissor");
        let computerSelection = computerPlay();
        let playRoundResult = playRound(playerSelection,computerSelection);

        // Print Round Result
        console.log(playRoundResult);

        // Score Round
        if (playRoundResult.charAt(4) == "W") playerCount++;
        else if (playRoundResult.charAt(4) == "L") computerCount++;

        // Print New Score
        console.log(`Player Score: ${playerCount}`);
        console.log(`Computer Score: ${computerCount}`);
    }

    let finalMessage = (playerCount == computerCount) ? "The game is a tie" : 
                       (playerCount > computerCount) ? "You win the game!" : "You lose the game"

    console.log(finalMessage)
}