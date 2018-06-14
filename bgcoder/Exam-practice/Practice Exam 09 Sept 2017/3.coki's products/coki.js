function solve(args) {
    let n = +args[0];
    let m = +args[n + 1];
    let priceList = args.slice(1, n + 1);
    let shoppingLists = args.slice(n + 2);
    let currentDigit = '';
    let item = '';
    let priceListObj = {};

    // console.log(n);
    // console.log(m);
    // console.log(priceList);
    // console.log(shoppingLists);

    for(let i = 0; i < priceList.length; i += 1) {
        let currentRow = priceList[i].trim();

        for(let j = 0; j < currentRow.length; j += 1) {
            let currentSymbol = currentRow[j];

            if (isNumber(currentSymbol) || currentSymbol === '.') {
                currentDigit += currentSymbol;
            }
            else {
                item += currentSymbol;
            }
        }
        item = item.trim();
        console.log(item, currentDigit);
        priceListObj[item] = Number(currentDigit);
        item = '';
        currentDigit = '';
    }
    console.log(priceListObj);

    for(let i = 0; i < shoppingLists.length; i += 1) {
        let currentList = shoppingLists[i].trim();
        let currentSum = 0;
        let currentQuantity = 1;
        let currentItem = '';

        for(let j = 0; j < currentList.length; j += 1) {
            let currentSymbol = currentList[j];
            let list = {};

            if (isNumber(currentSymbol)) {
                currentQuantity = Number(currentSymbol);
            }
            else if (currentSymbol === ',') {
                currentItem = currentItem.trim();
                currentSum += currentQuantity * priceListObj[currentItem];
                // console.log(currentQuantity);
                // console.log(priceListObj.currentItem);
                // console.log(currentItem);
                // console.log(currentSum);
                currentQuantity = 1;
                currentItem = '';
                continue;
            }
            else if (j == currentList.length - 1) {
                currentItem += currentSymbol;
                currentItem = currentItem.trim();
                currentSum += currentQuantity * priceListObj[currentItem];
                currentQuantity = 1;
                currentItem = '';
                continue;
            }
            else {
                currentItem += currentSymbol;
            }
        }
        console.log(currentSum.toFixed(2));
    }
    

    function isNumber(symbol) {
        if (symbol == ' ') {
            return false;
        } 
        else {
            return symbol == Number(symbol);
        }
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