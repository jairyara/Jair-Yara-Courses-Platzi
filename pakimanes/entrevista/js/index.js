let number = 100;
let fizz = 3;
let buzz = 5;

for (let i = 1; i <= number; i++) {
    if (divisible(i, fizz)) {
        document.write("Fizz");
    }
    if (divisible(i, buzz)) {
        document.write("Buzz");
    }

    if (!divisible(i, fizz) && !divisible(i, buzz)) {
        document.write(i);
    }

    document.write("<br>")
}

function divisible(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}