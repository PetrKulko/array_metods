const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, element) {
    console.log('accumulator: ', accumulator, 'current element: ', element);
    return accumulator + element;
}, 0);

console.log(sum);

const colors = ['White', 'Dark', 'Red', 'Green'];

const figma = colors.reduce(function (accumulator, element) {
    accumulator[element] = 1;
    return accumulator;
}, {});

console.log(figma);

const cards = ['White', 'Red', 'Dark', 'White'];

const cardAll = cards.reduce(function (accumulator, element) {
   if (accumulator[element]) {
       accumulator[element] = accumulator[element] + 1;
   } else {
       accumulator[element] = 1;
   }
   return accumulator;
}, []);

console.log(cardAll);

const initialValue = 0;
const matrix = [{ x: 1 }, { x: 2 }, { x: 3 }];

const total = matrix.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.x;
}, initialValue);

console.log(total);

const arrays = [[1, 2], [2, 3], [3, 4]];

const total2 = arrays.reduce((accumulator, element) => {
   return accumulator.concat(element);
});

console.log(total2);

const friends = [
    { name: 'Olya', books: ["Lord of the ring", "Harry Potter"], age: 18 },
    { name: 'Max', books: ["Learn easy Bootstrap", "Bible"], age: 26 },
    { name: 'Peter', books: ["Anna Karenina", "Kobzar"], age: 26 }
];

const result = friends.reduce(function(prev, curr) {
   return [...prev, ...curr.books];
}, []);

console.log(result);