let div = 0;
let paper = 0;
let balance = 0;
let op;
let cash;
let r = document.getElementById("result");
let b = document.getElementById("balance");
let received = 0;


let img = [];
img["100"] = "../assets/100.jpg";
img["50"] = "../assets/50.jpg";
img["20"] = "../assets/20.jpg";
img["10"] = "../assets/10.jpg";

let box = [];
let send = [];

box.push(new Bill(100, 10, "100"));
box.push(new Bill(50, 10, "50"));
box.push(new Bill(20, 10, "20"));
box.push(new Bill(10, 10, "10"));

var button = document.getElementById("sol");
button.addEventListener("click", sendCash);


function sendCash() {

    var t = document.getElementById("cash");

    cash = parseInt(t.value);

    for (let bill of box) {
        if (cash > 0) {
            100
            div = Math.floor(cash / bill.value);

            if (div > bill.quantity) {
                paper = bill.quantity;
            } else {
                paper = div;
            }

            send.push(new Bill(bill.value, paper, bill.image));
            cash -= (bill.value * paper);
        }
    }

    if (cash > 0) {
        r.innerHTML = "No hay plata";
    } else {
        for (var e of send) {

            if (e.quantity > 0) {
                r.innerHTML += e.quantity + " billetes de $ " + e.value + "<br>" +  e.image + "<br/>";
                received += ((parseInt(e.quantity)) * (parseInt(e.value)));
            }

        }
        for (let total of box) {
            op = total.quantity * total.value;
            balance += op;
        }

        b.innerHTML = "Saldo en cajero $ " + (balance - received);
    }

    balance = b;

}