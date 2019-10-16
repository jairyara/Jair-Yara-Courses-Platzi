var key = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", drawKeyboard);
var square = document.getElementById("area");
var paper = square.getContext("2d");
var x = 250;
var y = 250;
var xf = 0;
var yf = 0;
var state = false;


document.addEventListener("mouseup", disabled);
document.addEventListener("mousedown", activated);
document.addEventListener("mousemove", drawing);



function drawLine(color, xi, yi, xf, yf, canva) {
    canva.beginPath();
    canva.strokeStyle = color;
    canva.lineWidth = 3;
    canva.moveTo(xi, yi);
    canva.lineTo(xf, yf);
    canva.stroke();
    canva.closePath();
}


function drawing(event) {
    if(state) {
        xf = event.offsetX;
        yf = event.offsetY;
        drawLine("green", x, y, xf, yf, paper);
        if (event.srcElement.id != "area") {
            state = false;
        }
        x = xf;
        y = yf;
    }
}

function activated(event) {
    if (event.srcElement.id == "area"){
        x = event.offsetX;
        y = event.offsetY;
        state = true;
    }
}

function disabled(event) {
    state = false;
}


function drawKeyboard(event) {
    var lineColor = "blue";
    var move = 10;
    switch (event.keyCode) {
        case key.UP:
            drawLine(lineColor, x, y, x, y - move, paper);
            y = y - move;
            break;
        case key.DOWN:
            drawLine(lineColor, x, y, x, y + move, paper);
            y = y + move;
            break;
        case key.LEFT:
            drawLine(lineColor, x, y, x - move, y, paper);
            x = x - move;
            break;
        case key.RIGHT:
            drawLine(lineColor, x, y, x + move, y, paper);
            x = x + move;
            break;
    }
}