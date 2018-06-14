const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    // '6',
    // '7 1 1 2 3 1',
    '7',
    '8 4 7 5 6 10 9',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------------

/* globals Map */

const n = +gets();
// let packsLeft = n;
const cookiesArr = gets().split(' ').map(Number);

let cantEatMore = false;
const cookieTable = new Map();
const stack = [];
let totalDays = 0;

for (let i = 0; i < n; i += 1) {
    cookieTable.set(i, cookiesArr[i]);
}

let left;
let right;

// console.log(cookieTable);
// console.log(cookieTable.get(0));
while (cantEatMore === false) {
    for (const item of cookieTable) {
        if (item[0] === 0) {
            right = item[1];
            continue;
        }
        left = item[1];

        if (left > right) {
            // packsLeft -= 1;
            stack.push(item[0]);
        }
        right = item[1];
        // console.log(stack);
    }
    if (stack.length === 0) {
        cantEatMore = true;
        break;
    } else {
        // n -= stack.length;
        while (stack.length > 0) {
            const keyOfEatenPack = stack.pop();
            // console.log(keyOfEatenPack);
            cookieTable.delete(keyOfEatenPack);
        }
        totalDays += 1;
        // console.log(cookieTable, totalDays);
    }
}

print(totalDays);
// quit(0);