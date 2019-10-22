let secondsLeft = 75
let timerText = document.getElementById('time')
const startGame=()=>{
    startTimer()
    questions()
}

const startTimer =()=>{
    const timerInt = setInterval(function() {
        secondsLeft--;
        timerText.textContent = 'Time: '+secondsLeft ;
    
        if(secondsLeft === 0) {
          clearInterval(timerInt);
        }
    
      }, 1000);
}

const questions =()=>{
    
}






//Starts Game
document.getElementById("startGame").addEventListener("click", startGame);

