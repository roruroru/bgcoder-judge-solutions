const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '7 4',
    '1 5 4 7',
];
// const test = [
//     '10 5',
//     '10 2 1 6 8',
// ];
// const test = [
//     '5 5',
//     '1 2 1 2 5',
// ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// --------------------------------------

/* globals Map */

const [n, k] = gets().split(' ').map(Number);
const numbersToShuffle = gets().split(' ').map(Number);

const shuffleMap = new Map();

shuffleMap.set(1, {
    previous: null,
    next: 2,
    // odd: true,
});

for (let i = 2; i < n; i += 1) {
    shuffleMap.set(i, {
        previous: i - 1,
        next: i + 1,
        // odd: i % 2 ? true : false,
    });
}

shuffleMap.set(n, {
    previous: n - 1,
    next: null,
    // odd: n % 2 ? false : true,
});

// console.log(shuffleMap);

for (const number of numbersToShuffle) {
    // console.log(number);
    if (number % 2 === 0) {
        const moveAfter = number / 2;
        const nextOfMoveAfter = shuffleMap.get(moveAfter).next;
        const nextNumber = shuffleMap.get(number).next;
        const previousNumber = shuffleMap.get(number).previous;
        // console.log(number, nextNumber, previousNumber, moveAfter);
        // connect numbers around shuffle
        if (previousNumber !== null) {
            shuffleMap.get(previousNumber).next = shuffleMap.get(number).next;
        }
        // console.log(number, nextNumber);
        if (nextNumber !== null) {
            shuffleMap.get(nextNumber).previous = shuffleMap.get(number).previous;
        }
        // make shuffle.previous = number to move after
        shuffleMap.get(number).previous = moveAfter;
        // make shuffle.next = moveafter.next
        shuffleMap.get(number).next = shuffleMap.get(moveAfter).next;
        // make moveafter.next.prev = number
        shuffleMap.get(nextOfMoveAfter).previous = number;
        // make moveafter.next = number
        shuffleMap.get(moveAfter).next = number;
    } else {
        let moveAfter = number * 2;
        if (moveAfter > n) {
            moveAfter = n;
            if (number === n) {
                break;
            }
        }
        const nextOfMoveAfter = shuffleMap.get(moveAfter).next;
        const nextNumber = shuffleMap.get(number).next;
        const previousNumber = shuffleMap.get(number).previous;
        // console.log(number, nextNumber, previousNumber, moveAfter);
        // connect numbers around shuffle
        if (previousNumber !== null) {
            shuffleMap.get(previousNumber).next = shuffleMap.get(number).next;
        }
        shuffleMap.get(nextNumber).previous = shuffleMap.get(number).previous;
        // make shuffle.previous = number to move after
        shuffleMap.get(number).previous = moveAfter;
        // make shuffle.next = moveafter.next
        shuffleMap.get(number).next = shuffleMap.get(moveAfter).next;
        // make moveafter.next.prev = number
        // console.log(nextOfMoveAfter);
        if (nextOfMoveAfter !== null) {
            shuffleMap.get(nextOfMoveAfter).previous = number;
        }
        // make moveafter.next = number
        shuffleMap.get(moveAfter).next = number;
    }
}
let start = 0;
const result = [];
for (const row of shuffleMap) {
    if (row[1].previous === null) {
        start = row[0];
        for (let i = 0; i < n; i += 1) {
            result.push(start);
            start = shuffleMap.get(start).next;
        }
        break;
    }
}
// console.log(result);
print(result.join(' '));
// console.log([...shuffleMap].sort((x, y) => x[1].previous - y[1].previous));
