//Array Of Questions
var array = [
  {
    "question":"What does HTML stand for?",
    "option1":"Hyper Text Markup Language",
    "option2":"Hyperlinks and Text Markup Language",
    "option3":"Home Tool Markup Language",
    "option4":"Home Trade Making Language",
    "answer":"1"
  },
  {
    "question":"What Does PHP stand for ?",
    "option1":"Pre High Processor",
    "option2":"Hypertext Pre Processor",
    "option3":"Pre hyperlink Processor",
    "option4":"Post Hypertext Process",
    "answer":"2"
  },
  {
    "question":"What does CSS stand for ?",
    "option1":"Clear Style Sheet",
    "option2":"Cascading Style Sheet",
    "option3":"Clever Style Sheet",
    "option4":"Cascading stand Sheet",
    "answer":"2"
  }
];

//Global Variables
var index=0;
var score=0;
var totalquestion=array.length;
var quizcontainer = document.getElementById('quizcontainer');
var questions = document.getElementById('questions');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextbutton = document.getElementById('nextbutton');
var nextquestion=document.getElementById('nextquestion');
var outofquestion=document.getElementById('outofquestion');
var notification1=document.getElementById('notification');
var startquiz1=document.getElementById('startquiz1');
var resetquiz=document.getElementById('resetquiz');

//Show Question Function
function showquestions(index) {
  var ques=array[index];
  questions.innerHTML ="Question "+(index+1)+":-    "+ques.question;
  opt1.innerHTML = ques.option1;
  opt2.innerHTML = ques.option2;
  opt3.innerHTML = ques.option3;
  opt4.innerHTML = ques.option4;
  outofquestion.innerHTML="question "+(index+1)+" of "+totalquestion;
}

//Load Next Question Function
function nextquestion1() {
  var tickans=document.querySelector('input[type=radio]:checked');
  if(!tickans){
    notification1.style.visibility = 'visible';
    notification1.innerHTML = "Please Select Your Answer";
    return;
  }
  tickans.checked=false;
  if(tickans.value==array[index].answer){
    score++;
  }
  index=index+1;
  notification1.style.visibility = 'hidden';
  if(index==totalquestion-1) {
    nextquestion.innerHTML="Finish";
  }
  if(index==totalquestion) {
    quizcontainer.style.display='none';
    nextbutton.innerHTML="Score is "+score+" Out of "+totalquestion;
    resetquiz.style.visibility='visible';
  }
  showquestions(index);
}

//Start Question Function
function startquiz() {
  startquiz1.style.display='none';
  nextbutton.style.visibility='visible'
  quizcontainer.style.visibility='visible';
  showquestions(index);
}
