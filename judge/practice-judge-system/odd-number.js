/* globals Map */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
    '2',
    '-1',
    '2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const numberCounter = new Map();

const n = +gets();

for (let i = 0; i < n; i += 1) {
    const number = gets();
    const count = 0;

    if (numberCounter.has(number)) {
        numberCounter.delete(number);
    } else {
        numberCounter.set(number, count + 1);
    }
}

print(Array.from(numberCounter.keys())[0]);
