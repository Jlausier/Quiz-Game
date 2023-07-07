//let key = (JSON.parse(localStorage.getItem(user)));
//let storedscore = (JSON.parse(localStorage.getItem('highscore')));
    
    
    let userScore = [];
    //let yourScore = [];
    
    const scoreList = document.getElementById('score-list')
    
    function displayScores(){

        for (var i = 0; i < localStorage.length; i++) {
            var init = localStorage.key(i);
            var highscore = localStorage.getItem(localStorage.key(i));
            console.log("Stored Key: " + init + ", Stored Value: " + highscore);
            userScore.push({text: init}, {text: highscore})
            uselist= document.createElement('li')
            uselist.innerText = init + ' score: ' + highscore
            scoreList.appendChild(uselist)
            
          }

console.log(userScore);
        
        //yourScore.push(storedscore)
       
        // for (let index = 0; index < localStorage.length; index++) {

        //     uselist= document.createElement('li')
        //     uselist.innerText = init + ' score: ' + highscore
        //     scoreList.appendChild(uselist)
            
        // } 
        
        scoreList.classList.remove('hide')
        
    }
    displayScores()
    
        
    
       
    
    
    var clearList = document.getElementById('clear')

    clearList.addEventListener('click', clearAll)

    function clearAll(e) {
        localStorage.clear()
        
            scoreList.classList.add('hide')
        }
    