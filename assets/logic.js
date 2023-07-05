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

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')


const questionEl = document.getElementById('question')
const answersButtonEl = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex

// added listner to start quiz
startButton.addEventListener('click',startgame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// added function to hide start button on start and display questions randomly
function startgame(){
startButton.classList.add('hide')
shuffleQuestions = questions.sort(() => Math.random()- .5)
currentQuestionIndex = 0
questionContainerEl.classList.remove('hide')
setNextQuestion()
}
//shows next question till there are none
function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

    }

//function to set answer and qustion text
function showQuestion(question){
questionEl.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
       button.dataset.correct =answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answersButtonEl.appendChild(button)
    })
}
// reset body state per question
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answersButtonEl.firstChild){
        answersButtonEl.removeChild
        (answersButtonEl.firstChild)
    }
}

// trigger when and answer is selected
function selectAnswer(e){
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answersButtonEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
 })
 if(shuffleQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
 }
}

// change color when answer selected
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
// reset colors
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// object with all the questions
const questions = [
    {
        question: "What is the tree called where we can interact with the entire webpage?" ,
        answers: [
         {text: "palm tree", correct: false},
         {text: "yggdrisil", correct: false},
         {text: "the dom tree", correct: true},
         {text: "the html tree", correct: false}]

    },
    {
        question: "What command can we input into git bash to check if we are up to date with the github repository?",
        answers: [
            {text: "git Status", correct: true},
            {text: "git pull", correct: false},
            {text: "git push origin main", correct: false},
            {text: "git checkout", correct:false}]
    },
    {
        question: "How can one check if the branch they are working in is up to date?",
        answers: [
            {text: "git Status", correct: true},
            {text: "git push", correct: false},
            {text: "git pull origin main", correct: false},
            {text: "git checkout", correct: false}]
    },
    {
        question: "How many commits should one shoot for in there repository?",
        answers: [
            {text: "One", correct: false},
            {text: "20-25", correct: true},
            {text: "never commit", correct: false},
            {text: "As manny as it takes", correct:false}]
    }


]