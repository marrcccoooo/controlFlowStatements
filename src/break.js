const numbers = [];
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    numbers.push(number);
    if (number > 50) {
        break;
    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

    if (numbers[i] > 50) {
        console.log('Nombre plus grand que 50');
        break;
    }
}