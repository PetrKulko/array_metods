const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isBigNumbers = (element) => element > 4;

const result = numbers.filter(isBigNumbers);

console.log(result);