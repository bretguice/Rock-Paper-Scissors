const rpsArray = ['Rock', 'Paper', 'Scissors']
const winningScore = 5;
let playerScore = 0;
let cpuScore = 0;
let round = 0;
let playerPick;
let cpuPick;
const description = document.getElementById('description');
const title = document.getElementById('title');
const playerScorePrint = document.getElementById('player-score');
const cpuScorePrint = document.getElementById('cpu-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const retry = document.getElementById('retry');

rock.addEventListener('click', () =>  playGame('Rock'));
paper.addEventListener('click', () =>  playGame('Paper'));
scissors.addEventListener('click', () =>  playGame('Scissors'));

function playGame(playerPick) {
    //retry.style.visibility = 'hidden';
    cpuPick = cpuChoice();
    console.log(`Computer pick is ${cpuPick}`);
    testPicks(playerPick); 
}

function cpuChoice () {
    let randNumb = Math.floor(Math.random() * rpsArray.length)
    return rpsArray[randNumb];
}

function testPicks(playerPick) {
    
    if (playerScore >= 5 || cpuScore >= 5) {
        checkForWinner();
    } else if (playerPick === cpuPick) {
        description.textContent = "Same pick! Try Again!";
        console.log('test picks fail');
        return; 
    } else if (playerPick ===null || cpuPick === null) {
         return;  
    } else {
        console.log(`Test Pick${playerPick} vs ${cpuPick}`);
         determineWinner(playerPick);       
    }
}

function determineWinner(playerPick) {
    if (playerPick === 'Rock' && cpuPick === 'Paper' ||
        playerPick === 'Paper' && cpuPick ==='Scissors' ||
        playerPick === 'Scissors' && cpuPick ==='Rock') {
            ++round;
            description.textContent = `${cpuPick} beats ${playerPick}! You lose round #${round}!`;
            ++cpuScore;
            playerScorePrint.textContent = `${playerScore}`;
            cpuScorePrint.textContent = `${cpuScore}`;
            checkForWinner();
    } else if (cpuPick === 'Rock' && playerPick === 'Paper' ||
        cpuPick === 'Paper' && playerPick ==='Scissors' ||
        cpuPick === 'Scissors' && playerPick ==='Rock') {
            ++round;
            description.textContent = `${playerPick} beats ${cpuPick}! You win round #${round}!`;
            ++playerScore;
            playerScorePrint.textContent = `${playerScore}`;
            cpuScorePrint.textContent = `${cpuScore}`;
            checkForWinner();
    } 
}

function checkForWinner() {
    if (playerScore === winningScore) {
        title.textContent = `Congratulations!  You have won by a score of player:${playerScore} to computer:${cpuScore}!`;
        retry.style.visibility = 'visible';
        retry.addEventListener('click', () => restartGame());
    } else if (cpuScore === winningScore) {
        title.textContent = `Sorry!  You have lost by a score of player:${playerScore} to computer:${cpuScore}!`;
        retry.style.visibility = 'visible';
        retry.addEventListener('click', () => restartGame());
    } else {
        return;

    }
}

function restartGame() {
    window.location.reload();
    retry.style.visibility = 'hidden';
}
