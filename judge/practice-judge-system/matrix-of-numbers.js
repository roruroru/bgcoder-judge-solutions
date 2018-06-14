// Write a program that reads from the console a positive integer number N and prints
//  a matrix like in the examples below. Use two nested loops.

//     _Challenge: achieve the same effect without nested loops_

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

];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = Array.from({
    length: n,
});

for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    for (let j = i; j < n + i; j += 1) {
        arr[i].push(j + 1);
    }
    print(arr[i].join(' '));
}
