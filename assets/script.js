var instructions = document.getElementById('instructions')
var startbutton = document.getElementById('start')
var container = document.getElementById('quiz-container')
var question = document.getElementById('question')
var button1 = document.getElementById('1')
var button2 = document.getElementById('2')
var button3 = document.getElementById('3')
var button4 = document.getElementById('4')
var timer = document.getElementById('timer')
var evaluate = document.getElementById('evaluate')
var scorecontainer = document.getElementById('Score-container')
var score = document.getElementById('score')
var userinitials = document.getElementById('userinitials')
var save = document.getElementById('save')



container.style.display = 'none'
scorecontainer.style.display = "none"
const questionsList = [
    {
        question:"What is HTML?",
        choices:["Hyper Table Math Language","Hidden Tacos Meeting Llamas","Hyper text markup Language","Hiccups Take My Life"],
        answer:3
    },
    {
        question:"What is CSS?",
        choices:["Cascading Style Sheets","Comrade Soviet Sniper","Cynical Sidious Steve","Corn, Salt & Sauce"],
        answer:1
    },
    {
        question:"What is JS?",
        choices:["Just Saying","Juniper Sauce","Jumbo Shrimp","Javascript"],
        answer:4
    },
    {
        question:"What is an API?",
        choices:["Apple Pie Injection","Application Programming Interface","All Possums Indicate","Arithmatic 3.1415926535"],
        answer:2
    },
    {
        question:"How many bits are in a byte?",
        choices:["8","1024","2","1,024,000"],
        answer:1
    },
]
var quiz_index = 0;
var score = 0;
var timerObject;
var timerCounter = 30;


startbutton.addEventListener('click',function(){
   container.style.display = "block";
   startbutton.style.display = "none";
   instructions.style.display = "none";
   timerObject = setInterval(function(){
    timer.textContent =  "Timer :"+ timerCounter;
    timerCounter--;
    if(timerCounter >0){
        timerCounter -1;
    }else{
        clearInterval(timerObject);
        end()
    }
    if (timerCounter >= 20) {
      timer.style.color = "Green"
    }
    if (timerCounter <= 20) {
      timer.style.color = "Yellow"
    }
    if (timerCounter <= 10) {
      timer.style.color = "Red"
    }
   },1000)
   render_question()
})

function render_question(){
    question.textContent = questionsList[quiz_index].question
    button1.textContent = questionsList[quiz_index].choices[0]
    button2.textContent = questionsList[quiz_index].choices[1]
    button3.textContent = questionsList[quiz_index].choices[2]
    button4.textContent = questionsList[quiz_index].choices[3]
}


function nextquestion(){

  var userAnswer = this.getAttribute("id")
  console.log(userAnswer)
  if(userAnswer == questionsList[quiz_index].answer){
    score += 1;
    evaluate.textContent = "Correct!"
    evaluate.style.color = "Green"
  }else{
    evaluate.textContent = "Incorrect!"
    timerCounter -=5;
    evaluate.style.color = "Red"
  }
  if(quiz_index < questionsList.length-1){
    quiz_index++;
    render_question()
  }else{
    console.log(score);
    clearInterval(timerObject)
    end()
  }
}


function end(){
    scorecontainer.style.display="block"
    container.style.display="none"
}
button1.addEventListener('click',nextquestion)
button2.addEventListener('click',nextquestion)
button3.addEventListener('click',nextquestion)
button4.addEventListener('click',nextquestion)