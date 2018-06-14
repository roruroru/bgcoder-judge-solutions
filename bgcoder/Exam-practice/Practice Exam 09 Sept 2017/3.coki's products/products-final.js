'use strict';

function solve(args) {
    const n = +args[0];
    const priceListArr = args.slice(1, n + 1);
    const m = +args[n + 1];
    const shoppingListsArr = args.slice(n + 2);
    let priceListObj = {};
    let quantity;

    for(let row of priceListArr) {
        let arr = row.split(' ');
        let price = arr[arr.length - 1];
        let item = row.replace(' ' + price, '');
        priceListObj[item] = parseFloat(price);
    }

    for(let list of shoppingListsArr) {
        let arr = list.split(', ');
        let sum = 0;
        for(let products of arr) {
            let splArr = products.split(' ');
            let product;
            if (Number(splArr[0])) {
                quantity = parseFloat(splArr[0]);
                product = products.replace(quantity + ' ', '');
            } else {
                quantity = 1;
                product = products;
            }
            sum += quantity * priceListObj[product];
        }
        console.log(sum.toFixed(2));
    }
}

solve([
	"5",
	"milk 1.2",
	"orange juice 2.9",
	"icecream 2",
	"cake 5.1",
	"beer 1.2",
	"5",
	"2 beer, 3 orange juice",
	"milk, cake",
	"icecream, 2 cake",
	"icecream, icecream, 3 icecream",
	"5 orange juice, 3 orange juice, orange juice, orange juice"
]);