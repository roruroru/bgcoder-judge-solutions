'use strict';

function solve(args) {
    let n = +args[0];
    let m = +args[n + 1];
    let priceListArr = args.slice(1, n + 1);
    let shoppingListArr = args.slice(n + 2);

    let priceListObj = {};
    let quantity = 1;

    for(let i = 0; i < n; i += 1) {
        let spl = priceListArr[i].split(' ');
        let len = spl.length;
        let item = priceListArr[i].replace(' ' + spl[len - 1], '');
        priceListObj[item] = +spl[len - 1];        
    }
    
    for(let i = 0; i < m; i += 1) {
        let sum = 0;
        let listArr = shoppingListArr[i].split(', ');
        //console.log(listArr);
        for(let list of listArr) {
            //console.log(list);
            let purchase = list.split(' ');
            //console.log(purchase);
            if (Number(purchase[0])) {
                quantity = purchase[0];
                let product = list.replace(quantity + ' ', '');
                sum += (+quantity) * priceListObj[product];
                //console.log(quantity, product);
            } else {
                sum += priceListObj[list];
            }
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