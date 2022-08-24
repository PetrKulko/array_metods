const items = ['item_1', 'item_2', 'item_3'];
const copy = [];

items.forEach(function(element, index, array) {
    copy.push(index + '_new_' + element);
})

console.log(copy);