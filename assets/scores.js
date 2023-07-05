var userScore = score
var form = document.getElementById('form')
var submitInfo = document.getElementById('submit')



function inputHighscore(){
    questionEl.innerText = "";
   nextButton.classList.add('hide');
   form.classList.remove('hide');
   submitInfo.addEventListener('click',userInfo);
   timerContainerEl.classList.add('hide');
   

}

function userInfo(){
    var user = document.getElementById('text').value;
    localStorage.setItem('score', score);
    localStorage.setItem('user', user);
    clearStatusClass(document.body);
    startButton.classList.remove('hide');
    form.classList.add('hide');
    timeLeft = 100
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


function displayScores(){
    
}