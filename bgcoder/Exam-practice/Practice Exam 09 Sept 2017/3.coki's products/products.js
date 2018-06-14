'use strict';

function solve(args) {
    let n = +args[0];
    let m = +args[1 + n];
    let priceList = [];
    for(let i = 1; i < n + 1; i += 1) {
        let productName = args[i].replace(/\d+\.*\d*/g, '').trim();
        let productPrice = parseFloat(args[i].replace(/\D+\s*\D*\s/g, ''));
        //console.log(productName);
        //console.log(productPrice);
        priceList.push( { name: productName, price: productPrice } );
    }
    //console.log(priceList);
    //console.log(m);
    let quantity, item, price, sum = 0;
    for(let i = 2 + n; i < args.length; i += 1) {
        let spl = args[i].split(', ');
        for(let j = 0; j < spl.length; j += 1) {
            if(spl[j].match(/\d/g)) {
                quantity = +spl[j].replace(/\D*/g, '').trim()
                quantity = parseFloat(quantity);
            }
            else {
                quantity = 1;
            }
            //console.log(quantity);
                item = spl[j].replace(/\d*/g, '').trim();
            //console.log(item);

            for(let k = 0; k < priceList.length; k += 1) {
                if (item === priceList[k].name) {
                        price = +priceList[k].price;
                    //console.log(price);
                }
            }
            sum += quantity*price;
        }
        console.log(sum.toFixed(2));
        sum = 0;
        //console.log(spl);
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