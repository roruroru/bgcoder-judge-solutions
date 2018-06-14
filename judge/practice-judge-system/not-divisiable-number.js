// Write a program that reads from the console a positive integer N
//  and prints all the numbers from 1 to N not divisible by 3 or 7,
//   on a single line, separated by a space.

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
    '10',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

let str = '';

for (let i = 1; i <= n; i += 1) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        str += i + ' ';
    }
}

print(str.trim());
