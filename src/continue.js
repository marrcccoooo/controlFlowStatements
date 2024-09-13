const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let bigNumber = 0;
let result = 0;


for (let i = 0; i < numbers.length; i++) {
    if (bigNumber < numbers[i]) {
        bigNumber = numbers[i];
        result += numbers[i];
        continue;
    }
}


console.log(bigNumber, result);