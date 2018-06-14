// Write a method that checks if the element at given position in given array of integers
//  is larger than its two neighbours (when such exist).
//  Write program that reads an array of numbers and prints how many of them are larger than their neighbours.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6',
    '-26 -25 -28 31 2 27',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;