// if we click on the star/reset
// if we are playing relaod page
// if we are not playing 
// set score to 0
// show the countdown box
// reduce time by 1sec in loops
// timeleft? 
// yes ->continue
// no -> gameover
// change button to reset
// generate new Q&A

// if we clck on answer box
// if we are playing
// correct?
// yes
// increase score by 1
// show correct box for 1sec
// generate new Q&A
// no
// show try again box for 1sec

var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick = function() {
    if(playing == true) {
        location.reload(); //reload page
    } else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
        timeremaining = 5;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        // hide game over box
        hide("gameOver");
        document.getElementById("startreset").innerHTML = "Reset Game";
        startCountdown();

        // generate a new Q&A
        generateQA();
    }
}

//functions


// start counter
function startCountdown() {
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0 ) {
            //game over
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over</p><p>Your score is " + score + ".</p>"
            document.getElementById("timeremaining").style.display = "none";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000)
}

// stop counter

function stopCountdown() {
    clearInterval(action);
}

// hide an element
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

// shown an element
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

// generate question and multiple answers

function generateQA() {
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+Math.round(3*Math.random());
    // fill one box with correct answer
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    // fill other boxes with wrong answers

    var answers = [correctAnswer];
    
    for (i=1; i<5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));     
            } while (answers.indexOf(wrongAnswer) >-1)                 
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}