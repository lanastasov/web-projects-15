$(function () {
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function (event, ui) {
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
        }
    });

    var paint = false;
    var paint_erase = "paint";
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    var container = $("#container");
    var mouse = { x: 0, y: 0 };

    //onload load saved work from localStorage

    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    container.mousedown(function () {
        paint = true;
        window.alert(paint);
    });

    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');

    // draw a line
    // declare new path
    context.beginPath();
    // set line width
    context.lineWidth = 40;
    // set line color
    context.strokeStyle = '#42e565';
    //set cap to the line (round, butt, square)
    context.lineCap = "round";
    // set line join styleMedia(bevel, round, miter)
    context.lineJoin = "round";

    context.moveTo(50, 50);
    // draw a straight line from starting point to a new position
    context.lineTo(200, 200);

    context.lineTo(400, 100);

    //make line visible
    context.stroke();
});