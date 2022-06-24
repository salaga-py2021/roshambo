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
    const playerScore = document.querySelector('.player-scoreBox > h3');
    const compScore = document.querySelector('.computer-scoreBox > h3');
    const newGame = document.querySelector('.new-game');

    if (resetGame) {
        playerCount = computerCount = 0;
        playerScore.textContent = playerCount;
        compScore.textContent = computerCount;
        newGame.removeChild(newGame.firstElementChild)
        playerBtns.forEach(btn => btn.disabled = false);
        resetGame = false;
        return 'Game is now Reset!'
    }

    if (playerSelection == computerSelection) {
        return `It's a tie. You both chose ${playerSelection}`;
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissor") || 
             (playerSelection == "Paper" && computerSelection == "Rock") ||
             (playerSelection == "Scissor" && computerSelection == "Paper")) {
        
        playerCount += 1;
        playerScore.textContent = playerCount;
    }
    else {
        computerCount += 1;
        compScore.textContent = computerCount;
    }

    if (computerCount == 5 || playerCount == 5) {
        const winner = document.createElement('h1');
        winner.textContent = (playerCount == 5) ? 'Winner: Player' : 'Winner: Computer'
        newGame.insertBefore(winner,newGame.lastElementChild);
        playerBtns.forEach(btn => btn.disabled = true);
    }
    
}

let playerCount = 0, computerCount = 0;
let resetGame = false;
const playerBox = document.querySelector('.player-box');
const playerBtns = document.querySelectorAll('.player-box > button');
playerBtns.forEach(btn => btn.addEventListener('click', playRound));

let newGameBtn = document.querySelector('.new-game > button');
newGameBtn.addEventListener('click', () => {
    resetGame = true;
    playRound();
})