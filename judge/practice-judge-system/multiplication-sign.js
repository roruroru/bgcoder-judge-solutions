// Write a program that shows the sign (+, - or 0) of 
// the product of three real numbers, without calculating it.

//     Use a sequence of if operators.

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
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();

if (a === 0 || b === 0 || c === 0) {
    print(0);
} else if (a > 0 && b > 0 && c > 0) {
    print('+');
} else if (a < 0 && b < 0 && c > 0) {
    print('+');
} else if (a < 0 && b > 0 && c < 0) {
    print('+');
} else if (a > 0 && b < 0 && c < 0) {
    print('+');
} else {
    print('-');
}
