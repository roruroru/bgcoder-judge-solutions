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

// ----------------------------------------

const [balls, bags] = gets().split(' ').map(Number);
const bagsCapacity = gets().split(' ').map(Number).sort((x, y) => y - x);
let maxSteps = 0;

const getAllPermutations = (arr) => {
    const generatePermutations = (index, currentPermutation, visitedObj, inputArr) => {
        if (index === inputArr.length) {
            print(currentPermutation);
            let stackSize = balls;
            let step = 0;
            let totalBags = 1;

            for (const bagCapacity of currentPermutation) {
                if (stackSize % bagCapacity !== 0) {
                    continue;
                }
                if (stackSize === bagCapacity) {
                    continue;
                }
                step += 1 * totalBags;
                totalBags = balls / bagCapacity;
                stackSize = bagCapacity;
                if (maxSteps < step) {
                    maxSteps = step;
                }
            }
            if ((currentPermutation[0] !== bagsCapacity[0]) && (currentPermutation[1] !== bagsCapacity[1]) && (currentPermutation[2] !== bagsCapacity[2])) {
                return;
            }
        }

        for (const value of inputArr) {
            if (visitedObj[value] === true) {
                continue;
            }

            currentPermutation[index] = value;
            visitedObj[value] = true;
            if ((currentPermutation[0] !== bagsCapacity[0]) && (currentPermutation[1] !== bagsCapacity[1]) && (currentPermutation[2] !== bagsCapacity[2])) {
                return;
            }

            generatePermutations(index + 1, currentPermutation, visitedObj, inputArr);

            visitedObj[value] = false;
        }
    };

    generatePermutations(0, [], {}, arr);

    return;
};

getAllPermutations([...bagsCapacity]);

print(maxSteps);