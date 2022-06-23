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
    let playerSelection = properCase(String(this.textContent));
    let computerSelection = computerPlay();
    console.log(playerSelection,computerSelection)

    if (playerSelection == computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
             (playerSelection == "Paper" && computerSelection == "Rock") ||
             (playerSelection == "Scissor" && computerSelection == "Paper")) {
        
        playerCount += 1;
        const playerScoreBox = document.querySelector('.player-scoreBox')
        if (document.querySelector('.player-scoreBox > div')){
            playerScoreBox.removeChild(playerScoreBox.lastElementChild);
        }
        const scoreOnScreen = document.createElement('div');
        scoreOnScreen.textContent = playerCount;
        playerScoreBox.appendChild(scoreOnScreen);
    }
    else {
        computerCount += 1
        const compScoreBox = document.querySelector('.computer-scoreBox')
        if (document.querySelector('.computer-scoreBox > div')){
            compScoreBox.removeChild(compScoreBox.lastElementChild);
        }
        const scoreOnScreen = document.createElement('div');
        scoreOnScreen.textContent = computerCount;
        compScoreBox.appendChild(scoreOnScreen);
        console.log(compScoreBox)
    }
}

let playerCount = 0, computerCount = 0;
const playerBox = document.querySelector('.player-box')
const playerBtns = document.querySelectorAll('.player-box > button')
playerBtns.forEach(btn => btn.addEventListener('click', playRound))