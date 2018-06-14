// Write a program that enters from the console a positive integer n and prints all 
// the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

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
    10,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();
let str = '';

for (let i = 0; i < n; i += 1) {
    str += i + 1 + ' ';
}

print(str.trim());
