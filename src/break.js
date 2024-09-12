const numbers = [];
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    numbers.push(number);
    if (number > 50) {
        console.log(`Nous avon eviter ${9-i} repetition de boucle inutile`);
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