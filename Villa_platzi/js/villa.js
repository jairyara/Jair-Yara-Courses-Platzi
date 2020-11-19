let villa = document.getElementById("villaPlatzi");
let paper = villa.getContext("2d");

let backgroundImg = {
    url: "tile.png",
    cargaOK: false
}

let cow = {
    url: "vaca.png",
    cargaOK: false
}


let pig = {
    url: "cerdo.png",
    cargaOK: false
}


let chicken = {
    url: "pollo.png",
    cargaOK: false
}

var qCow = randomNumber(0, 10);
var qChicken = randomNumber(0, 5);

backgroundImg.image = new Image();
backgroundImg.image.src = backgroundImg.url;
backgroundImg.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);

function loadBackground() {
    backgroundImg.cargaOK = true;
    draw();
}


function loadCow() {
    cow.cargaOK = true;
    draw();
}


function loadPig() {
    pig.cargaOK = true;
    draw();
}

function loadChicken() {
    chicken.cargaOK = true;
    draw();
}


function draw() {

    if (backgroundImg.cargaOK) {
        paper.drawImage(backgroundImg.image, 0, 0);
    }
    if (cow.cargaOK) {
        for (var i = 0; i < qCow; i++) {
            var xCow = randomNumber(0, 7);
            var yCow = randomNumber(0, 7);
            var xCow = xCow * 60;
            var yCow = yCow * 60;
            paper.drawImage(cow.image, xCow, yCow);
        }
    }
    if (pig.cargaOK) {
        paper.drawImage(pig.image, 100, 50);
    }
    if (chicken.cargaOK) {
        for (var i = 0; i < qChicken; i++) {
            var xChicken = randomNumber(0, 7);
            var yChicken = randomNumber(0, 7);
            var xChicken = xChicken * 60;
            var yChicken = yChicken * 60;
            paper.drawImage(chicken.image, xChicken, yChicken);
        }
    }
}


function randomNumber(min, max) {
    var result;
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}