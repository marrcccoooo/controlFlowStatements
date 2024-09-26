const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}
let number = 100;
let lastsNumber = [];

function boucle() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] in lastsNumber) {
            return number;
        }
        if (numbers[i] % 2 === 0) {
            number -= numbers[i];
            lastsNumber.push(numbers[i]);
        }
        if (i === numbers.length / 2) {
            return number;
        }
        if (number === 50) {
            return number;
        }
    }
}

boucle();
console.log(number, lastsNumber);