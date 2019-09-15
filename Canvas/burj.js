/*var text = document.getElementById("q_lines");
var buttons = document.getElementById("send");
buttons.addEventListener("click", drawForClick);*/

var d = document.getElementById("drawing");
var lienzo = d.getContext("2d");
var color = "#1d2323";
var length = d.width;


//Border drawing

drawLine(color, 1, 1, 1 , 499);
drawLine(color, 1, 499, 499,499);
drawLine(color, 499,499, 499, 1);
drawLine(color, 499, 1, 1, 1);

// draw line

var line = 50;
var l = 0;
var xi, yi;
var xf, yf;
var zxf, zyf;

for(l = 25; l<line; l++){
	yi = 10 * (l+1);
	xf = 10 * l;
	xi = 10 * l;
	yf = 10 * (l+1);

	drawLine("red", 250, yi, xf, 500);
	drawLine("blue", 0,);
}




function drawLine(colors, x_inicial, x_final, y_inicial, y_final){
	lienzo.beginPath();
	lienzo.strokeStyle = colors;
	lienzo.moveTo(x_inicial,x_final);
	lienzo.lineTo(x_final,y_final);
	lienzo.stroke();
	lienzo.closePath();
}
