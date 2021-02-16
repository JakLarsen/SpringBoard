
let timeLeft = ""

function getTimer(){
  while(Number.isInteger(timeLeft) === false){
    timeLeft = parseInt(prompt("Please type a valid number to countdown from."));
    console.log(timeLeft);
  }
  return timeLeft;
}

function getMillisecondTimer(){
  return timeLeft * 1000;
}

function countdown(timeleft){
  let countdownTimerId = setInterval(function(){
    if (timeLeft < 1){
      clearInterval(countdownTimerId);
      console.log("DONE!");
    }
    else{
      console.log(timeLeft);
      timeLeft--;
    }
  }, 1000)
}

function randomGame(){
  let numbersLessThanThreshold = 0;
  let randomGameTimerId = setInterval(function(){
    let ourNumber = Math.random();
    if (ourNumber <= 0.75){
      numbersLessThanThreshold++;
    }
    else{
      clearInterval(randomGameTimerId);
      console.log(`We found ${numbersLessThanThreshold} numbers less than 0.75!`);
    }
  }, 1000)
}


timeLeft = getTimer();
countdown(timeLeft);

const millisecondTimeLeft = getMillisecondTimer();
setTimeout(randomGame, millisecondtimeLeft);