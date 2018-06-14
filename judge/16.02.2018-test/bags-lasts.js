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
const bagsCapacity = gets().split(' ').map(Number);

let maxSteps = 0;

const calculateSteps = (stackSize, arrOfBags, ) => {
    
};

calculateSteps(bagsCapacity, balls, balls, 1, 0);

print(maxSteps);