const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '8',
    '5 4 7',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------------------------

/* globals Map */

const n = +gets();
const swappers = gets().split(' ').map(Number);
const map = new Map();

map.set(1, {
    prev: null,
    next: 2,
});

for (let i = 2; i < n; i += 1) {
    map.set(i, {
        prev: i - 1,
        next: i + 1,
    });
}

map.set(n, {
    prev: n - 1,
    next: null,
});

let firstKey = 1;
let lastKey = n;
// const firstObj = map.get(1);
// const lastObj = map.get(n);

// console.log(map);
// console.log(swappers);
// console.log(firstObj, lastObj);

for (const swap of swappers) {
    // console.log(map);
    const next = map.get(swap).next;
    const prev = map.get(swap).prev;
    if (swap === firstKey) {
        map.get(swap).prev = lastKey;
        map.get(swap).next = null;
        map.get(lastKey).next = firstKey;
        map.get(next).prev = null;
        firstKey = next;
        lastKey = swap;
        // console.log(firstKey);
        // console.log(lastKey);
    } else if (swap === lastKey) {
        map.get(swap).next = firstKey;
        map.get(swap).prev = null;
        map.get(firstKey).prev = lastKey;
        map.get(prev).next = null;
        firstKey = swap;
        lastKey = prev;
    } else {
        map.get(swap).next = firstKey;
        map.get(firstKey).prev = swap;
        map.get(prev).next = null;
        map.get(swap).prev = lastKey;
        map.get(lastKey).next = swap;
        map.get(next).prev = null;
        firstKey = next;
        lastKey = prev;
    }
}
// console.log(map);
const result = [];
for (let i = 0; i < n; i += 1) {
    // console.log(firstKey);
    result.push(firstKey);
    firstKey = map.get(firstKey).next;
}
print(result.join(' '));
// quit(0);