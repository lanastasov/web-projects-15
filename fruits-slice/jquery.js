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

            // change button text to reset game
            $("#startreset").html("Reset Game");

            // start sending fruits
            startAction();
        }
    });
});

function addHearts() {
    for (i=0; i<trialsLeft; i++) {
        $("#trialsLeft").append('<img src="images/heart.png" class="life">' );
    }
}

function startAction() {
    //$("#fruitsContainer").append('<img src="images/aplle.png" class="fruits">');
    $("#fruit1").show();
    chooseFruit(); // choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
}

// generate a random fruit
function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}