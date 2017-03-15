"use strict";
var questionArray=new Array();
var totalQuestion;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    questionArray = JSON.parse(this.responseText);
    totalQuestion=questionArray.length;
    showQuestions(index);
    startQuiz1.style.display='none';
    quiztype.style.display='none';
    nextButton.style.visibility='visible';
    quizContainer.style.visibility='visible';
  }
};

//Global Variables
var index=0;
var score=0;
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
  questions.innerHTML ="Question "+(index+1)+":-    "+ques.title;
  opt1.innerHTML = ques.field_option_1;
  opt2.innerHTML = ques.field_option_2;
  opt3.innerHTML = ques.field_option_3;
  opt4.innerHTML = ques.field_option_4;
  outOfQuestion.innerHTML="question "+(index+1)+" of "+totalQuestion;
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
  if(tickans.value==questionArray[index].field_correct_answ){
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
  var quiztype=document.getElementById('quiztype').value;
  xmlhttp.open("GET", "http://drupal.intern/question/json?question_type=" + quiztype, true);
  xmlhttp.send();

}

