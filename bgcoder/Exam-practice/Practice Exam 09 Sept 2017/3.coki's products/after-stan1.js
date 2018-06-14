'use strict';

function solve(args) {
    let arr = args;
    let n = +arr[0];
    let m = +arr[n + 1];
    let priceListArr = arr.slice(1, n + 1);
    let shoppingListsArr = arr.slice(n + 2);
    let priceListObj = {};
    // console.log(n);
    // console.log(m);
    //console.log(priceListArr);
    // console.log(shoppingListsArr);
    
    for(let i = 0; i < n; i++) {
        let line = priceListArr[i].split(' ');
        let price = parseFloat(line.pop());
        let itemName = line.join(' ');
        priceListObj[itemName] = price;
    }
    //console.log(priceListObj);

    for(let i = 0; i < m; i ++) {
        let listArr = shoppingListsArr[i].split(', ');
        let sum = 0;
        //console.log(listArr);

        let len = listArr.length;
        for(let j = 0; j < len; j++) {
            let list = listArr[j].split(' ');
            //console.log(list);
            let quantity = 1;
            let a = parseFloat(list[0]);
            let name;

            if (a >= 0) {
                quantity = a;
                name = list.slice(1).join(' ');
            }
            else {
                name = list.join(' ');
            }

            sum += quantity * priceListObj[name];
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