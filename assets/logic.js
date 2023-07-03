// function to start quiz on the click of the start button

// start and display first question

// think of all the elements to target all of the answer events 
//and the id they will have


// logic to detect if correct answer and apply time deduction if incorrect.
// move onto next question



// loop back to question function until questtions are answered or the 
//timer reaches 0

// array of objects

//Q: "question"
//a1:
//a2:
//a3:
//a4:
//CA:


// stop to the question function log score - 
//read the interval value and request initials from user

// write response and time remaining value to local storage
/////////////////

//all the variables

var  start = document.getElementById("startButton");
var question = document.getElementById("Q");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
var timerEl = document.getElementById("countdown")

var button1 = document.querySelector("nav button")

var timeLeft = 100


// start the quiz with event listner
start.addEventListener("click", function(){
    var displayQuestion = question.style.display;
        if(displayQuestion == "none"){
        question.style.display = "flex";
        } else{
        question.style.display = "none";
        }

       

    var displayAnswers = answerA.style.display;
        if(displayAnswers == "none"){
        answerA.style.display = "flex";
        } else{
        answerA.style.display = "none";
        }
    var displayAnswers = answerB.style.display;
        if(displayAnswers == "none"){
        answerB.style.display = "flex";
        } else{
        answerB.style.display = "none";
        }
    var displayAnswers = answerC.style.display;
        if(displayAnswers == "none"){
        answerC.style.display = "flex";
        } else{
        answerC.style.display = "none";
        }
    var displayAnswers = answerD.style.display;
        if(displayAnswers == "none"){
        answerD.style.display = "flex";
        } else{
        answerD.style.display = "none";
        }
    


    var displayStart = button1.style.display;
        if(displayStart == "flex"){
            button1.style.display = "none"
        } else {
            button1.style.display = "flex"
        }
        
    

        function populateQ() {
            var Q1 = question.textContent;
        
            if (Q1 == "Questions") {
                question.textContent = questions[0];
            } else{
                question.textContent = "Question";
            }
            console.log(question);
        }

    populateQ()

 var timeInterval= setInterval(function(){
    timeLeft--;
    timerEl.textContent = "Timer: " + timeLeft;

    if (timeLeft === 0){
        clearInterval(timeInterval);

        start();

    }
 }, 1000);
    })
   

    function populateQ() {
        var Q1 = question.textContent;
    
        if (Q1 == "Questions") {
            question.textContent = questions[0];
        } else{
            question.textContent = "Question";
        }
        console.log(question);
    }