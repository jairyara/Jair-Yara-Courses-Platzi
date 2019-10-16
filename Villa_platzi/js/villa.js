var z;

for (var i = 0; i < 10; i++) {
    z = randomNumber(-100, 200);
    document.write(z + ", ");

}




function randomNumber(min, maxi) {
    var result;
    result = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}