let initials = (JSON.parse(localStorage.getItem(user)));
//let storedscore = (JSON.parse(localStorage.getItem('highscore')));
    
    
    let userScore = [];
    //let yourScore = [];
    
    const scoreList = document.getElementById('score-list')

    function displayScores(){

        for (var i = 0; i < localStorage.length; i++) {
            var init = localStorage.key(i);
            var score = localStorage.getItem(key);
            console.log("Stored Key: " + init + ", Stored Value: " + score);
            userScore.push(init, score)
          }


        
        //yourScore.push(storedscore)
       


        for (let index = 0; index < userScore.length; index++) {
            uselist= document.createElement('li')
            uselist.innerHTML = init + 'score: ' + score;
            scoreList.appendChild(uselist)
            
        } 
        
        scoreList.classList.remove('hide')
        
    }
    displayScores()
    
        
    
       
    
    console.log(initials);
    console.log(storedscore);

    var clearList = document.getElementById('clear')

    clearList.addEventListener('click', clearAll)

    function clearAll(e) {
        localStorage.clear()
        
            scoreList.classList.add('hide')
        }
    