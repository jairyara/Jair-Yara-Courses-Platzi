class Pakiman {
    constructor(name, life, attack) {
        this.image = new Image();
        this.name = name;
        this.life = life;
        this.attack = attack;

        this.image.src = img[this.name];
    }

    speak() {
        alert(this.nombre);
    }

    see() {
        document.body.appendChild(this.image);
        document.write("<p>");
        document.write("<strong>" + this.name + "</strong><br>");
        document.write("Vida: " + this.life + "<br>");
        document.write("Ataque: " + this.attack + "<hr>");
        document.write("</p>");
    }
}