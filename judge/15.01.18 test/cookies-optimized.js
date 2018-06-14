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
const cookiesArr = gets().split(' ').map(Number);

let cantEatMore = false;
const cookieTable = new Map();
let totalDays = 0;

cookieTable.set(n - 1, {
    bisuits: cookiesArr[n - 1],
    previous: n - 2,
    next: null,
});

for (let i = n - 2; i > 0; i -= 1) {
    cookieTable.set(i, {
        bisuits: cookiesArr[i],
        previous: i - 1,
        next: i + 1,
    });
}


cookieTable.set(0, {
    bisuits: cookiesArr[0],
    previous: null,
    next: 1,
});
let previousNode;
let currentNode;
let nextNode;

// console.log(cookieTable);

while (cantEatMore === false) {
    cantEatMore = true;
    for (const item of cookieTable) {
        // console.log(item);
        if (item[1].next === null) {
            continue;
        }
        // if (item[1].previous === null) {
        //     continue;
        // }

        previousNode = item[1].previous || null;
        currentNode = item[0];
        nextNode = item[1].next || null;

        if (cookieTable.get(currentNode).bisuits >= cookieTable.get(nextNode).bisuits) {
            continue;
        } else {
            cookieTable.get(currentNode).next = cookieTable.get(nextNode).next;
            const nextToUpdate = cookieTable.get(nextNode).next;
            if (nextToUpdate !== null) {
                cookieTable.get(nextToUpdate).previous = currentNode;
            }
            cookieTable.delete(nextNode);
            cantEatMore = false;
        }
    }
    if (cantEatMore !== true) {
        totalDays += 1;
        // break;
    }
}
print(totalDays);
