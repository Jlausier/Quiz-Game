let initials = (JSON.parse(localStorage.getItem('username')));
let storedscore = (JSON.parse(localStorage.getItem('highscore')));
    
    
    let userScore = [];
    let yourScore = [];
    
    const scoreList = document.getElementById('score-list')

    function displayScores(){

        
        userScore.push(initials)
        yourScore.push(storedscore)
       


        for (let index = 0; index < userScore.length; index++) {
            uselist= document.createElement('li')
            uselist.innerHTML = initials + ' score : ' + storedscore
            scoreList.appendChild(uselist)
            
        } 
        

        
    }
    displayScores()
    
        scoreList.classList.remove('hide')
    
       
    
    console.log(initials);
    console.log(storedscore);

    var clearList = document.getElementById('clear')

    clearList.addEventListener('click', clearAll)

    function clearAll(e) {
        localStorage.clear()
        
            scoreList.classList.add('hide')
        }
    