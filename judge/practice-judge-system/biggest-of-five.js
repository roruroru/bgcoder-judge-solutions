// Write a program that finds the biggest of 5 numbers that are read from the console, 
// using only 5 if statements.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1',
    '5',
    '3',
    '14',
    '-17',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

let max = a;

if (max < b) {
    max = b;
}
if (max < c) {
    max = c;
}
if (max < d) {
    max = d;
}
if (max < d) {
    max = d;
}
if (max < e) {
    max = e;
}

print(max);
