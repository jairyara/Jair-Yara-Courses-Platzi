var vp = document.getElementById("villaPlatzi");
var paper = vp.getContext("2d");
var map = "tile.png";

var imageBackground = new Image();
imageBackground.src = map;
imageBackground.addEventListener("load", draw);

var cow = new Image();
cow.src = "vaca.png";
cow.addEventListener("load", drawCow);

var pig = new Image();
pig.src = "cerdo.png";
pig.addEventListener("load", drawPig);

var chicken = new Image();
chicken.src = "pollo.png";
chicken.addEventListener("load", drawChicken);


function draw() {
    paper.drawImage(imageBackground, 0, 0);
}




function randomNumber(min, maxi) {
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}