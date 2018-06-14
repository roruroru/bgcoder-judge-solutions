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
});

for (let i = 2; i < n; i += 1) {
    shuffleMap.set(i, {
        previous: i - 1,
        next: i + 1,
    });
}

shuffleMap.set(n, {
    previous: n - 1,
    next: null,
});


let first = 1;
let last = n - 1;

const calculateNewPosition = (shuffler, size) => {
    let numberToMoveAfter = -1;
    if (shuffler % 2 === 0) {
        numberToMoveAfter = shuffler / 2;
    } else {
        numberToMoveAfter = shuffler * 2;
        if (numberToMoveAfter > size) {
            numberToMoveAfter = size;
        }
    }
    return numberToMoveAfter;
};

const updatePreviousAndNextOfShuffler = (shuffler, map, size) => {
    const newPrevious = calculateNewPosition(shuffler, size);
    if (newPrevious === shuffler) {
        return;
    }
    const previous = map.get(shuffler).previous;
    const next = map.get(shuffler).next;
    if (previous !== null && next !== null) {
        map.get(previous).next = next;
        map.get(next).previous = previous;
    } else if (previous === null) {
        map.get(next).previous = null;
        first = next;
    } else if (next === null) {
        map.get(previous).next = null;
        // return;
    }
};
const updateShufflerAndNewNeighbours = (shuffler, map, size) => {
    const newPrevious = calculateNewPosition(shuffler, size);
    if (newPrevious === shuffler) {
        return;
    }
    const newNext = map.get(newPrevious).next;
    if (newNext === null) {
        map.get(shuffler).next = null;
        map.get(shuffler).previous = newPrevious;
        map.get(newPrevious).next = shuffler;
        last = shuffler;
    } else {
        map.get(shuffler).next = newNext;
        map.get(shuffler).previous = newPrevious;
        map.get(newPrevious).next = shuffler;
        map.get(newNext).previous = shuffler;
    }
};

for (const shuffler of numbersToShuffle) {
    updatePreviousAndNextOfShuffler(shuffler, shuffleMap, n);
    updateShufflerAndNewNeighbours(shuffler, shuffleMap, n);
}

let next = first;
const result = [];
for (let i = 0; i < n; i += 1) {
    result.push(next);
    next = shuffleMap.get(next).next;
}
print(result.join(' '));