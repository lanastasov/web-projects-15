$(function () {
    //variables
    // App mode 
    // time counter
    // lap counter
    // variable for setInterval
    // Number of Laps
    // minutes, seconds, centiseconds for time and lap

    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var lapNumber = 0;

    var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;


    // On App load show start and lap buttons
    hideshowButtons("#startButton", "#lapButton");
    // click n startButton
    $("#startButton").click(function () {
        mode = 1;
        hideshowButtons("#stopButton", "#lapButton");
        startAction();
    });
    // mode on
    // show stop and lap buttons
    // start counter

    // click on stopButton
    //   show resume and reset buttons
    //   stop counter

    // click on resumeButton
    //   show stop and lap buttons
    //   start action

    // click on resetButton
    //   reload the page

    // click on lapButton
    //   if mode is On
    //     stop action
    //     resetLap and print lap details
    //     start action

    // functions
    //hideshowButtons function shows two buttons
    function hideshowButtons(x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }
    // start the counter
    function startAction() {
        action = setInterval(function () {
            timeCounter++;
            lapCounter++;
            updateTime();
        }, 10);

    }

    //updateTime: converts countes to min,sec,centisec
    function updateTime() {
        // 1min=60*100centiseconds=6000centiseconds
        timeMinutes = Math.floor(timeCounter / 6000);
    }
});