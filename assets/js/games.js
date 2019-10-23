let secondsLeft = questions.length * 15
const title = document.getElementById('title')
const middle = document.getElementById('middle')
let timerInt
const wrong = document.getElementById('wrong')
const startGame = () => {
    startTimer()
    questionAsk()
}
const startTimer = () => {
    const timerText = document.getElementById('time')
    timerText.textContent = 'Time: ' + secondsLeft;
    timerInt = setInterval(function () {
        secondsLeft--;
        timerText.textContent = 'Time: ' + secondsLeft;

        if (secondsLeft === 0) {
            finGame()
        }

    }, 1000);
}
let counter = 0
const finGame = () => {
    clearInterval(timerInt)
    if (counter <= questions.length - 1) secondsLeft -= (questionAsk.length - 1 - counter) * 15
    if  (secondsLeft < 0) secondsLeft = 0
    title.style = 'text-align: left'
    title.innerHTML = 'All done!'

    middle.innerHTML = `Your final score is ${secondsLeft}<div > Enter intials:<input type="text" id="intials">
    <button id='finButton' onClick = "submitInt()"> Submit</button>`
}
const submitInt = () => {
    const ints = document.getElementById('intials').value
  
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores === null) localStorage.setItem("scores", JSON.stringify([{ score: secondsLeft, intials: ints }]));
    else {
        storedScores.push({ score: secondsLeft, intials: ints })
        localStorage.setItem("scores", JSON.stringify(storedScores))

    }
   window.location.href = "./highscore.html";
}

const listening = (event) => {

    if (questions[counter].answer === event.target.value) {
        dispCorrectness('<hr> Correct!')
        counter++
    }
    else {
        secondsLeft -= 15
        dispCorrectness('<hr> Wrong!')
        counter++

    }
    if (counter > questions.length - 1) finGame()
    else questionAsk()
}
const dispCorrectness = (correctness) => {
    wrong.innerHTML = correctness
    setTimeout(() => {
        wrong.innerHTML = ''
    }, 3000)
}

const questionAsk = () => {
    title.textContent = questions[counter].title
    middle.innerHTML = ''
    // loop over choices
    questions[counter].choices.forEach(function (choice, i) {
        // create new button for each choice
        var choiceButton = document.createElement("button");
        choiceButton.className = 'question'
        choiceButton.value = choice
        choiceButton.textContent = i + 1 + ". " + choice;
        choiceButton.onclick = listening;
        middle.appendChild(choiceButton);
    });

}




//Starts Game
document.getElementById("startGame").addEventListener("click", startGame);

