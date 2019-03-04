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
trialsLeft;
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
        }
    });
});

function addHearts() {
    for (i=0; i<trialsLeft; i++) {
        $("#trialsLeft").append(" X ");
    }
}