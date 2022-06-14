function computerPlay(){
    let randomINT = randomInteger(1,3);
    return (randomINT==1) ? "Rock" : (randomINT == 2) ? "Paper" : "Scissors"
}

function randomInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}