//global variables
    //setting vaibles for HTML elements
var questionAsk = document.getElementById("questions");
var timer = document.getElementById("time");
var scoreBoard = document.getElementById("score");
var start = document.getElementById("strtButton");

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");

// variables for functions
var questionOptions = 0;
var timerSetting = 60;
var timerInterval;
var correct;
var score = 1;

//function to start the game and timer

function startApp(){
    
    timerInterval = setInterval(function() {
        timerSetting--;
        timer.textContent = "Time: " + timerSetting;

        if(timerSetting === 0) {
            clearInterval(timerInterval);
            alert("Game Over!");
            alert("Your score is: " + score);
            prompt("Enter your initials: " );
        }
    }, 1000);
    questionSelect()

    }

    // use event listener to listen for click on the start button
start.addEventListener("click", startApp);

//function to select question from array and text for question HTML

function questionSelect() {
    var currentQuestion = questionsArray[questionOptions];
    questionAsk.innerHTML = "<h2>" + currentQuestion.question;
    button1.innerHTML = currentQuestion.answer1;
    button2.innerHTML = currentQuestion.answer2;
    button3.innerHTML = currentQuestion.answer3;
    button4.innerHTML = currentQuestion.answer4;
};

//checking if asnwer is correct and adjusting score and time and then moving to next question

function confirmAnswer(answer){
    correct = questionsArray[questionOptions].correctAnswer
        if(answer === correct){
            questionOptions++;
            alert("You are right!");
            scoreBoard.textContent = "Score: "  + score++;
            questionSelect()
           
        }
        else if(answer !== correct){
            questionOptions++;
            alert("Wrong answer!");
            timerSetting -= 5;
            questionSelect()
            
        }
}



