// Write a program that, for a given two numbers N and x,
//  calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.

//     Use only one loop. Print the result with 5 digits after the decimal point.

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
    '3',
    '2',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const x = +gets();

let sum = 1;
let pow = 1;
let fact = 1;

for (let i = 1; i <= n; i += 1) {
    fact *= i;
    pow *= x;
    sum += fact / pow;
}

print(sum.toFixed(5));
