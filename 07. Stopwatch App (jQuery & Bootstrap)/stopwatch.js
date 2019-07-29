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
            if (timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
            updateTime();
        }, 10);

    }

    //updateTime: converts countes to min,sec,centisec
    function updateTime() {
        // 1min=60*100centiseconds=6000centiseconds
        timeMinutes = Math.floor(timeCounter / 6000);
        //1sec = 100centiseconds
        timeSeconds = Math.floor((timeCounter % 6000) / 100);
        timeCentiseconds = (timeCounter % 6000) % 100;
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timecentisecond").text(format(timeCentiseconds));

        // 1min=60*100centiseconds=6000centiseconds
        lapMinutes = Math.floor(lapCounter / 6000);
        //1sec = 100centiseconds
        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        lapCentiseconds = (lapCounter % 6000) % 100;
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapcentisecond").text(format(lapCentiseconds));
    }

    //foramt numbers
    function format(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }
});