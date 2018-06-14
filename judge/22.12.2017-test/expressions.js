const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '105',
    '5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const digits = gets().split('').map(Number);
const wantedResult = +gets();
const operators = ['+', '-', '*'];

console.log(digits);
console.log(wantedResult);

// result vector, input string, current expression string, target value,
// position till which input is processed, current evaluated value and last value in evaluation

