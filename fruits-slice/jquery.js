// click start reset button
// are we playing?
// yes
// reload the page
// no
// show trials left box
// change button text to reset game
// 1. create a random fruits
// define a random step  
// 2. move fruit down one step every 30sec
// is fruit too low?
// no -> repeat nb2
// yes -> do we have any trials left
  // yes-> repeat nb1
  // no -> show game over, button text: start game

  // slice a fruit
    // play sound
    // explode fruit
var playing = false;
var score;
var trialsLeft;
var step;
var action; // used for setInterval function
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function(){
    $("#startreset").click(function() {
        if (playing == true) {
            location.reload();
        } else {
            playing = true; 
            score = 0;
            $("#scorevalue").html(score);

            // show trials left
            $("#trialsLeft").show();
            trialsLeft = 3;
            // for (i=0; i<trialsLeft; i++) {
            //     $("#trialsLeft").append(" X ");
            // }
            addHearts();

            // hide game over box
            $("#gameOver").hide();

            // change button text to reset game
            $("#startreset").html("Reset Game");

            // start sending fruits
            startAction();
        }
    });
});

function addHearts() {
    $("#trialsLeft").empty();
    for (i=0; i<trialsLeft; i++) {
        $("#trialsLeft").append('<img src="images/heart.png" class="life">' );
    }
}

function startAction() {
    //$("#fruitsContainer").append('<img src="images/aplle.png" class="fruits">');
    // generate a fruit
    $("#fruit1").show();
    chooseFruit(); // choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});

    // generate a random step
    step = 1+Math.round(5*Math.random());

    // Move fruit down by one step every 10ms
    action = setInterval(function() {
        $("#fruit1").css('top', $("#fruit1").position().top + step); // move fruit by one step
        // check if the fruit is too low
        if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
             // check if we have trials left
             if (trialsLeft > 1) {
                // generate a fruit
                $("#fruit1").show();
                chooseFruit(); // choose a random fruit
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});

                // generate a random step
                step = 1+Math.round(5*Math.random());

                // reduce trials by one
                trialsLeft --;

                // populate trialsLeft box
                addHearts();
             } else { // game over
                playing = false; // we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your Score is ' + score + '</p>');
                $("#trialsLeft").hide();
                stopAction();
             }
        }
    }, 10)
}

// generate a random fruit
function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}

// stop dropping fruits

function stopAction() {
    clearInterval(action);
    $("#fruit1").hide();
}