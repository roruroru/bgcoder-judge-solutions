// Write a program that finds the most frequent number in an array of N elements.
// Input
//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const n = +gets();
const arr = [];
let counter = 1;
let max = 1;
let number;

for (let i = 0; i < n; i += 1) {
    arr[i] = +gets();
}

arr.sort((x, y) => x - y);

for (let i = 0; i < n - 1; i += 1) {
    if (arr[i] === arr[i + 1]) {
        counter += 1;
        if (max < counter) {
            max = counter;
            number = arr[i];
        }
    } else {
        counter = 1;
    }
}

print(`${number} (${max} times)`);
