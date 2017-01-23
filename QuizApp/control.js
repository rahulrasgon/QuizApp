//Array Of Questions
var questionArray = [
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
var totalQuestion=questionArray.length;
var quizContainer = document.getElementById('quiz-container');
var questions = document.getElementById('questions');
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
var opt3 = document.getElementById('option3');
var opt4 = document.getElementById('option4');
var nextButton = document.getElementById('next-button');
var nextQuestion=document.getElementById('next-question');
var outOfQuestion=document.getElementById('out-of-question');
var notification1=document.getElementById('notification');
var startQuiz1=document.getElementById('start-quiz');
var resetQuiz=document.getElementById('reset-quiz');

//Show Question Function
function showQuestions(index) {
  var ques=questionArray[index];
  questions.innerHTML ="Question "+(index+1)+":-    "+ques.question;
  opt1.innerHTML = ques.option1;
  opt2.innerHTML = ques.option2;
  opt3.innerHTML = ques.option3;
  opt4.innerHTML = ques.option4;
  outOfQuestion.innerHTML="question "+(index+1)+" of "+totalquestion;
}

//Load Next Question Function
function nextQuestion1() {
  var tickans=document.querySelector('input[type=radio]:checked');
  if(!tickans){
    notification1.style.visibility = 'visible';
    notification1.innerHTML = "Please Select Your Answer";
    return;
  }
  tickans.checked=false;
  if(tickans.value==questionArray[index].answer){
    score++;
  }
  index=index+1;
  notification1.style.visibility = 'hidden';
  if(index==totalQuestion-1) {
    nextQuestion.innerHTML="Finish";
  }
  if(index==totalQuestion) {
    quizContainer.style.display='none';
    nextButton.innerHTML="Score is "+score+" Out of "+totalQuestion;
    resetQuiz.style.visibility='visible';
  }
  showQuestions(index);
}

//Start Question Function
function startQuiz() {
  startQuiz1.style.display='none';
  nextButton.style.visibility='visible'
  quizContainer.style.visibility='visible';
  showQuestions(index);
}
