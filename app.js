//Getting the elements

const gameIndicator = document.querySelector('.indicator');
const givenNumberValue = document.querySelector('.given-number');
const guessInput = document.querySelector('.guess');
const messageValue = document.querySelector('.message');
const scoreValue = document.querySelector('#score');
const highScoreValue = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const background = document.querySelector('body');

// Declaring default scores
let currentScore = 20;
let given;
let highScore = 0; 

// playing new game
function newGame() {
    given = Math.floor(Math.random() * 20);
    
// for cheaters HSHAHAHA
    console.log(given);
}

// checking if guess was right
checkBtn.addEventListener('click', function () {
    numGuess();
    scoreValue.textContent = currentScore;
    messageValue.classList.remove('animation-start')
    gameOver();
});

// guessing output
function numGuess() {
    if (guessInput.value > given) {
        currentScore -= 1;
        messageValue.textContent = 'Too High';
    } else if (guessInput.value < given) {
        currentScore -= 1;
        messageValue.textContent = 'Too Low';
    } else if (guessInput.value == given) {
        messageValue.textContent = 'Correct Number!';
        background.classList.add('color-change');
        givenNumberValue.textContent = given;
        gameIndicator.textContent = 'Guess Correct!';

        
        updateHighScore(); 

        
    }
}

function gameOver() {
    if (currentScore == 0) {
        background.classList.add('game-over');
        messageValue.textContent = 'Please Start New Game';
        gameIndicator.textContent = 'GAME OVER';
        givenNumberValue.textContent = given;
        messageValue.classList.add('animation-start')
    }
}

// reset to default
resetBtn.addEventListener('click', function () {
    givenNumberValue.textContent = '?';
    background.classList.remove('color-change');
    background.classList.remove('game-over');
    guessInput.value = '';
    scoreValue.textContent = '20';
    messageValue.textContent = 'Start guessing...';
    messageValue.classList.add('animation-start')
    gameIndicator.textContent = 'Guess My Number!';
    currentScore = 20; 
    newGame();
    
});




// updating the high score
function updateHighScore() {
    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreValue.textContent = highScore;
    }
}




