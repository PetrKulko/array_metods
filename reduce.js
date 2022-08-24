const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(accumulator, element) {
    console.log('accumulator: ', accumulator, 'current element: ', element);
    return accumulator + element;
}, 0);

console.log(result);