let vp = document.getElementById("villaPlatzi");
let paper = vp.getContext("2d");
let map = "tile.png";

let imageBackground = new Image();
imageBackground.src = map;
imageBackground.addEventListener("load", draw);

let cow = new Image();
cow.src = "vaca.png";
cow.addEventListener("load", drawCow);

let pig = new Image();
pig.src = "cerdo.png";
pig.addEventListener("load", drawPig);

let chicken = new Image();
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