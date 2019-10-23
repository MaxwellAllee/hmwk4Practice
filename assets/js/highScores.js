
const middle = document.getElementById('scores')

const start=()=>{
    let storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores === null) middle.textContent = 'No current high scores! '
    else{
        storedScores.sort(function(a, b){return b.score-a.score});
        let text = '<ul>'
        storedScores.forEach((element, index) => {
            
            text+= `<li>${index+1}. ${element.intials} - ${element.score}</li>`
        });
        middle.innerHTML= text + '</ul>'
    }
    
}


start()

clearIT=()=>{
    localStorage.clear()
    start()
}
back=()=>{
    window.location.href = "./index.html";
}