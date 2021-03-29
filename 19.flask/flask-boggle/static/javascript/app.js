                    

                    
                                        // GLOBAL VARIABLES



const guessForm = document.querySelector('#guess-form');
const guessInput = document.querySelector('#guess-input');
const errDiv = document.querySelector('#err-div');
const scoreDiv = document.querySelector('#score-div');
const scoreVal = document.querySelector('#score-val');
const timerDiv = document.querySelector('#timer-div');
const startBtn = document.querySelector('#start-btn');
const playedStat = document.querySelector('#played');
const highScoreStat = document.querySelector('#high-score');



                                        // ONLOAD VARIABLES



let score = 0;
let time = 0;
let timerPresent = false;
timerDiv.style.display = "none";



                                        // MAIN FUNCTIONS



//Onload
window.onload = function(){
    console.debug('onload')

    if(inGame()){
        showTimer()
        startTimer()
    }
    if(inStats()){
        showStats();
    }
}

//Check if we are at the /game endpoint
function inGame(){
    console.debug('inGame()');

    if (window.location.href.indexOf("game") > -1) {
        return true;
      }
    else{
        return false;
    }
}

//Check if we are at the /stats endpoint
function inStats(){
    console.debug('inStats()');

    if (window.location.href.indexOf("stats") > -1) {
        return true;
      }
    else{
        return false;
    }
}

//Display stats on DOM
function showStats(){
    console.debug('showStats()')

    
    playedStat.innerText = localStorage.getItem('gamesPlayed');
    highScoreStat.innerText = localStorage.getItem('highScore');
}

//Show user the status of their guessed word, valid, duplicate, etc
function updateErrDivWithGuess(msg, dupmsg, guessInputVal){
    console.debug('updateErrDivWithGuess()');

    if (msg == 'ok'){
        msg = 'accepted';
    }   
    else if(msg == 'not-word'){
        msg = 'not found in our dictionary';
    }

    if (dupmsg != 'ok'){
        msg = 'a duplicate'
    }

    errDiv.innerText = `Your word, "${guessInputVal}," is ${msg}.`;
}

//Update the score and place it on the DOM
function updateScore(scoreIncrease){
    console.debug('updateScore()');

    score += scoreIncrease;
    scoreVal.innerText = `${score}`;
}

//Show the timer (called onload if at the /game url)
function showTimer(){
    console.debug('showTimer()');

    timerDiv.style.display = "flex";
}

//Save the current score to localStorage
function saveScore(){
    console.debug('saveScore()');

    let currScore = scoreVal.innerText;
    localStorage.setItem('lastScore', currScore)
}

//Start a timer for 60sec then endgame
function startTimer(){
    console.debug('startTimer()');

    let myTimer = setInterval(updateTimer, 1000); 

    //Timer ticks at 1/sec
    function updateTimer(){
        console.debug('updateTimer()');

        time += 1;
        
        //When the time hits 60sec, clear the timer, save score, end the game.
        if(time == 60){
            clearInterval(myTimer);
            saveScore();
            endGame();
        }
        timerDiv.innerText = `Time: ${time}`;
    }
}

//Remove the form so that no further guesses can be made
function removeGuessForm(){
    console.debug('removeGuessForm()');

    guessForm.style.display = "none";
}

//save high score to localStorage
function saveHighScore(){
    console.debug('saveHighScore()');

    let currScore = parseInt(localStorage.getItem('lastScore'));
    let highScore = localStorage.getItem('highScore');
    if (highScore == null){
        localStorage.setItem('highScore', currScore);
    }
    else if (currScore > parseInt(highScore)){
        localStorage.setItem('highScore', currScore)
    }
}

//Save games played to localStorage
function saveGamesPlayed(){
    console.debug('saveGamesPlayed()');
    
    let gamesPlayed = localStorage.getItem('gamesPlayed');
    if (gamesPlayed == null){
        localStorage.setItem('gamesPlayed', 1);
    }
    else{
        gamesPlayed = parseInt(gamesPlayed) + 1;
        localStorage.setItem('gamesPlayed', gamesPlayed);
    }
}

//Update high score and games played
function updateStats(){
    console.debug('updateStats()');
    
    saveHighScore();
    saveGamesPlayed();
}

//END THE GAME
//-removes the guess form
//-checks to update highscore
//-call to show stats page?
function endGame(){
    console.debug('endGame()');

    removeGuessForm();
    updateStats();
}


function resetGuessInput(){
    console.debug('resetGuessInput()');

    guessInput.value = '';
}

function doesScorePoints(result, duplicateResult){
    console.debug('doesScorePoints()');
    
    return ((result == "ok") && (duplicateResult == "ok"))
}



                                        // CLICK HANDLERS



//Just let us know that we clicked it
//Start button sends us to /start -> /game
startBtn.addEventListener('click', async function(e){
    console.debug('Start Button Clicked');

});    

//HANDLE GUESS SUBMISSIONS
//-sends guess to backend to check for validity
//-at backend also check for redundancy
//-receives result from backend and shows user if their guess is valid
//-calls to update score if valid word
//-resets the input field
guessForm.addEventListener('submit', async function(e){
    console.debug('Submit Attempt')
    
    e.preventDefault();

    let guessInputVal = guessInput.value;
    const response = await axios.get("/guess", { params: { guess: guessInputVal }});
    let result = response.data.result
    let duplicateResult = response.data.duplicate;

    updateErrDivWithGuess(result, duplicateResult, guessInputVal);

    if(doesScorePoints(result, duplicateResult)){
        let scoreIncrease = guessInputVal.length;
        updateScore(scoreIncrease);
    }

    resetGuessInput();
});


//figure out how to handle the submit even handler on home page load
//The submit form will load when you hit start, what do you do with the error on the first page load?