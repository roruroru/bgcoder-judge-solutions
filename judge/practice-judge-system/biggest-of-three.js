// Write a program that finds the biggest of three numbers that are read from the console.

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '1',
    '5',
    '3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = parseFloat(gets());
const b = parseFloat(gets());
const c = parseFloat(gets());

print(Math.max(a, b, c));

quit(0);