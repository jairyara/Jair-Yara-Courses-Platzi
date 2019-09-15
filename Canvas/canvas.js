var text = document.getElementById("lines-q");
var button = document.getElementById("buttons");
button.addEventListener("click", drawForClick)

var d = document.getElementById("draw");
var width = d.width;
var canva = d.getContext("2d");


drawLine(border_color, 1, 1, 1, 499);
drawLine(border_color, 499, 1, 1, 1);
drawLine(border_color, 1, 499, 499, 499);
drawLine(border_color, 499, 499, 499, 1);

function drawLine(color, xi,yi, xf, yf) {
    canva.beginPath();
    canva.strokeStyle = color;
    canva.moveTo(xi, yi);
    canva.lineTo(xf, yf);
    canva.stroke();
    canva.closePath();
}

function drawForClick() {
    var lines = parseInt(text.value);
    var l = 0;
    var y_i, x_i, x_f, y_f;
    var border_color = "#52de97"
    var space = width / lines;

    for (l = 0; l < lines; l++) {
        y_i = space * l;
        x_f = space * (1 + l);
        drawLine("aquamarine", 0, y_i, x_f, width);
    }
    for (l = 0; l < lines; l++) {
        x_f = space * l;
        y_i = space * (1 + l);
        drawLine("#bbb", width, y_i, x_f, 0);
    }

    for (l = 0; l < lines; l++) {
        x_f = width - (space * (l + 1));
        y_i = space * l;
        drawLine("#333", width, y_i, x_f, width);
    }

    for (l = 0; l < lines; l++) {
        y_f = space * (l + 1);
        x_i = width - (space * (l + 1));
        drawLine("red", x_i, 0, 0, y_f);
    }
}