var img = [];
img["Cauchin"] = "../assets/vaca.png";
img["Pokacho"] = "../assets/pollo.png";
img["Tocinauro"] = "../assets/cerdo.png";


let collection = [];
collection.push(new Pakiman("Cauchin", 100, 30));
collection.push(new Pakiman("Pokacho", 80, 50));
collection.push(new Pakiman("Tocinauro", 120, 40))


for (let x of collection) {
    x.see();
}