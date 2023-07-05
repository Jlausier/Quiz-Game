
var scoreList = document.getElementById('score-list')
var highScores = [];

    for (var i =0; i< highScores.length; i++){
        
    
    var li = document.createElement("li")
    li.textContent = user + ":" + score;
    li.setAttribute("data-index", i)
    scoreList.appendChild(li)
    }


 
    displayScores()