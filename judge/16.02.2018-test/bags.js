const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// const test = [
//     '12 4',
//     '4 2 3 5',
// ];
const test = [
    '64 5',
    '2 4 8 16 64',
];
// const test = [
//     '1 2',
//     '1 2',
// ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------------------------const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// const test = [
//     '12 4',
//     '4 2 3 5',
// ];
const test = [
    '64 5',
    '2 4 8 16 64',
];
// const test = [
//     '1 2',
//     '1 2',
// ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------------------------

const [balls, bags] = gets().split(' ').map(Number);
const bagsCapacity = gets().split(' ').map(Number);

let maxSteps = 0;

const calculateSteps = (typesOfBags, totalBalls, stackSize, totalBags, step) => {
    // if (stackSize <= Math.min([...typesOfBags])) {
    //     return;
    // }
    for (let i = 0; i < typesOfBags.length; i += 1) {
        const bagCapacity = typesOfBags[i];
        if (stackSize % bagCapacity !== 0) {
            continue;
        }
        if (stackSize === bagCapacity) {
            continue;
        }
        step += 1 * totalBags;
        // console.log(step, totalBags);
        const newTotalBags = totalBalls / bagCapacity;
        const newStackSize = bagCapacity;
        const newStep = step;
        // console.log(bagCapacity, stackSize, totalBags);
        if (maxSteps < step) {
            maxSteps = step;
            // console.log(maxSteps);
        }
        // const newCountOfBags = bagCapacity;
        const newTypesOfBags = [...typesOfBags];
        newTypesOfBags.splice(i, 1);
        calculateSteps(newTypesOfBags, totalBalls, newStackSize, newTotalBags, newStep);
        step = 0;
    }
    // return maxSteps;
};

calculateSteps(bagsCapacity, balls, balls, 1, 0);

print(maxSteps);