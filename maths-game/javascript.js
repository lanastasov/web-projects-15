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
document.getElementById("startreset").onclick = function() {
    if(playing == true) {
        location.reload(); //reload page
    } else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";
        document.getElementById("startreset").innerHTML = "Reset Game";
    }
}

