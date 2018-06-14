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
// const test = [
//     '1 2',
//     '1 2',
// ];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------------------------

const [balls, bags] = gets().split(' ').map(Number);
const bagsCapacity = gets().split(' ').map(Number);
// console.log(bagsCapacity);

let maxSteps = 0;

const calculateSteps = (typesOfBags, totalBalls, stackSize, totalBags, step, visited) => {
    if (stackSize <= Math.min([...typesOfBags])) {
        return;
    }
    for (let i = typesOfBags.length - 1; i >= 0; i -= 1) {
        if (stackSize % typesOfBags[i] !== 0) {
            continue;
        }
        if (stackSize === typesOfBags[i]) {
            continue;
        }
        if (visited[typesOfBags[i]]) {
            continue;
        }
        step += 1 * totalBags;
        // console.log(step, totalBags);
        totalBags = totalBalls / typesOfBags[i];
        stackSize = typesOfBags[i];
        // console.log(typesOfBags[i], stackSize, totalBags);
        if (maxSteps < step) {
            maxSteps = step;
            // console.log(maxSteps);
        }
        // const newBagsArr = [...typesOfBags];
        // for (let j = newBagsArr.length - 1; j >= i; j -= 1) {
        //     newBagsArr.pop();
        // }
        // const newCountOfBags = typesOfBags[i];
        visited[typesOfBags[i]] = true;
        calculateSteps(typesOfBags, totalBalls, stackSize, totalBags, step, visited);
        visited[typesOfBags[i]] = false;
    }
    // return maxSteps;
};

calculateSteps(bagsCapacity, balls, balls, 1, 0, {});

print(maxSteps);