// Write a method that counts how many times given number appears in a given array.
// Write a test program to check if the method is working correctly.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '8',
    '28 6 21 6 -7856 73 73 -56',
    '73',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const appCount = (arr, number) => {
    let counter = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === number) {
            counter += 1;
            if (max < counter) {
                max = counter;
            }
        }
    }
    return max;
};

const len = +gets();
const arr = gets().split(' ').map(Number);
const number = +gets();

print(appCount(arr, number));
