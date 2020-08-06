var text = document.getElementById("q_lines");
var buttons = document.getElementById("send");
buttons.addEventListener("click", drawForClick);

var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var color = "#1d2323";
var length = d.width;


//Border drawing

drawLine(color, 1, 1, 1, 499);
drawLine(color, 1, 499, 499, 499);
drawLine(color, 499, 499, 499, 1);
drawLine(color, 499, 1, 1, 1);

// draw line

function drawLine(colors, x_inicial, x_final, y_inicial, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = colors;
    lienzo.moveTo(x_inicial, x_final);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function drawForClick() {

    var lines = parseInt(text.value);

    var space = length / lines;


    var line = lines;
    var l = 0;
    var xi, yi;
    var xf, yf;
    var zxi, zyi;

    for (l = 0; l < line; l++) {

        yi = space * l;
        xf = space * (l + 1);
        xi = space * l;
        zyi = length - yi;
        zxi = length - xf;


        drawLine(color, 0, xf, yi, 500);
        drawLine("#34facd", 500, xi, xf, 0);
        drawLine("#34cdfa", zyi, 0, yi, xf);
        drawLine("#5643fa", xi, 500, 500, zxi)

    }
}