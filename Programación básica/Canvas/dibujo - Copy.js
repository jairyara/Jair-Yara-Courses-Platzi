var text = document.getElementById("q_lines");
var buttons = document.getElementById("send");
buttons.addEventListener("click", drawForClick);


var d = document.getElementById("dibujado");
var lienzo = d.getContext("2d");
var color = "red";
var length = d.width;



/* Bucle with while
while(l < line)
	yi = 10 * l;
	xf = 10 * (l+1);
	xi = 0;
	yf = 500;
	drawLine("blue", xi, yi, xf, yf);
	l ++;
}

*/

/* Bucle with do and while, apply only once time

let x = 0;
do{
	x ++;
	console.log(x);
}
while (false);
*/


// Border drawing
drawLine(color, 1, 0, 1, 500);
drawLine(color, 1, 499, 499, 499);
drawLine(color, 499, 499, 499, 1);
drawLine(color, 1, 1, 499, 1)

	
function drawLine(colors,  x_inicial, y_inicial, x_final, y_final){
	lienzo.beginPath();
	lienzo.strokeStyle = colors;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath();
}

function drawForClick(){
	
	//drawing
var line = parseInt(text.value);
var l = 0;
var xf, yi;
var xi, yf;
var zxf, zyf;
var space = length / line;


for( l=0; l < line; l++){
	yi = space * (l+1);
	xf = space * l;
	xi = space * l;
	yf = space * (l+1);
	zxf = 500 - xf; 
	zyf =  500 - yf;
	drawLine("red", 0, xf, zxf, 0);
	drawLine("cyan", 0, yi, xf, 500);
	drawLine("blue", xi, 500, 500, zyf);
	drawLine("magenta", yi, 0, 500, yf);
}
}