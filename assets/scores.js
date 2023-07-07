var userScore = score
var form = document.getElementById('form')
var submitInfo = document.getElementById('submit')
var finaleMessg = document.getElementById('finale')



function inputHighscore(){
    questionEl.innerText = "";
   nextButton.classList.add('hide');
   form.classList.remove('hide');
   submitInfo.addEventListener('click',userInfo);
   timerContainerEl.classList.add('hide');
   finaleMessg.innerText =  "your final score was: " + score
   

}

function userInfo(){
    
    var user = document.getElementById('text').value;
    clearStatusClass(document.body);
    startButton.classList.remove('hide');
    form.classList.add('hide');
    timeLeft = 100
localStorage.setItem(user, JSON.stringify(score));

//localStorage.setItem('highscore',JSON.stringify(score));
    
    
    console.log(JSON.parse(localStorage.getItem(user)));
}



function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

