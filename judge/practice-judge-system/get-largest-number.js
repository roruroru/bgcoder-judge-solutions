// Write a method GetMax() with two parameters that returns the larger of two integers.
// Write a program that reads 3 integers from the console and prints
// the largest of them using the method GetMax().

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1 5 123',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const getMax = (x, y) => {
    return Math.max(x, y);
};

const arr = gets().split(' ').map(Number);

let max = getMax(arr[0], arr[1]);
max = getMax(max, arr[2]);
print(max);
