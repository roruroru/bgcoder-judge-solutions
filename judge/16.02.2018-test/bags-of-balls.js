const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '12 4',
    '4 2 3 5',
];
// const test = [
//     '64 5',
//     '2 4 8 16 64',
// ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------------------------

const [balls, bags] = gets().split(' ').map(Number);
const bagsCapacity = gets().split(' ').map(Number);

let steps = 0;
let maxSteps = 0;

const calculateSteps = (typesOfBags, numberOfBalls, totalBags, step) => {
    for (const bagCapacity of typesOfBags) {
        if (numberOfBalls % bagCapacity !== 0) {
            continue;
        }
        if (numberOfBalls === bagCapacity) {
            continue;
        }
        const stackSize = numberOfBalls % bagCapacity;
        step += 1 * totalBags;
        if (maxSteps < step) {
            maxSteps = step;
        }
        const newCountOfBags = bagCapacity;
        calculateSteps(typesOfBags, stackSize, newCountOfBags, step);
    }
    return maxSteps;
};

calculateSteps(bagsCapacity, balls, 1);

console.log(maxSteps);