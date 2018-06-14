const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '0',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 1',
    '3 forward 2',
    '3 backwards 2',
    'exit',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// --------------------------------------

let startIndex = +gets();
const arr = gets().split(',').map(Number);
const len = arr.length;
let forwardSum = 0;
let backwardsSum = 0;
let command;


while ((command = gets()) !== 'exit') { // () pay attention otherwise true
    const args = command.split(' ');
    const stepsCount = +args[0];
    const direction = args[1];
    const stepSize = +args[2];

    for (let i = 0; i < stepsCount; i += 1) {
        if (direction === 'forward') {
            startIndex = (startIndex + stepSize) % len;
            forwardSum += arr[startIndex];
        } else {
            startIndex = len - startIndex - 1;
            startIndex = (startIndex + stepSize) % len;
            startIndex = len - startIndex - 1;
            backwardsSum += arr[startIndex];
        }
    }
}

print(`Forward: ${forwardSum}`);
print(`Backwards: ${backwardsSum}`);
