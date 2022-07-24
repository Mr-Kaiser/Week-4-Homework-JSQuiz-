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
        question:"what is HTMK?",
        choices:["Hyper","text","Hyper text markup Language","lang"],
        answer:3
    },
    {
        question:"what is HTML?",
        choices:["Hyper","text","Hyper text markup Language","lang"],
        answer:3
    },
    {
        question:"what is HTMKLLL?",
        choices:["Hyper","text","Hyper text markup Language","lang"],
        answer:1
    },
    {
        question:"what is HTMK?",
        choices:["Hyper","text","Hyper text markup Language","lang"],
        answer:2
    },
    {
        question:"what is HTMK?",
        choices:["Hyper","text","Hyper text markup Language","lang"],
        answer:4
    },
]
var quiz_index = 0;
var score = 0;
var timerObject;
var timerCounter = 30;


startbutton.addEventListener('click',function(){
   container.style.display = "block";
   startbutton.style.display = "none";
   timerObject = setInterval(function(){
    timer.textContent =  "Timer :"+ timerCounter;
    timerCounter--;
    if(timerCounter >0){
        timerCounter --;
    }else{
        clearInterval(timerObject);
        end()
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
  console.log("User answer")
  if(userAnswer == questionsList[quiz_index].answer){
    score += 1;
    evaluate.textContent = "Correct!"

  }else{
    evaluate.textContent = "Incorrect!"
    timerCounter -=5;
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