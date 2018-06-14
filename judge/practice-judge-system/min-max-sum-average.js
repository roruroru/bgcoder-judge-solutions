// Write a program that reads from the console a sequence of N real numbers and returns the minimal,
// the maximal number, the sum and the average of all numbers (displayed with 2 digits after the decimal point).

//     The input starts by the number N (alone in a line) followed by N lines, each holding an real number.
//     The output is like in the examples below.

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
    3,
    2,
    5,
    1,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();
const arr = [];
let sum = 0;

for (let i = 0; i < n; i += 1) {
    arr.push(+gets());
    sum += arr[i];
}

const min = Math.min(...arr).toFixed(2);
const max = Math.max(...arr).toFixed(2);
sum = sum.toFixed(2);
const average = (sum / n).toFixed(2);

print(`min=${min}`);
print(`max=${max}`);
print(`sum=${sum}`);
print(`avg=${average}`);
