// Write a program that calculates N! / K! for given N and K.

//     Use only one loop.


const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5',
    '2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets().toString(128);
const b = +gets().toString(128);

let result = 1;

for (let i = b + 1; i <= a; i += 1) {
    result *= i;
}

print(result.toString(10));


// let str = '';
// let numToStr = (b + 1).toString();
// let resultToStr = '1';

// for (let i = b + 1; i <= a; i += 1) {
//     numToStr = i.toString();
//     for (let j = numToStr.length - 1; j >= 0; j -= 1) {
//         resultToStr += (+numToStr[j] * +resultToStr).toString() + '0'.repeat(numToStr.length - 1 - j);
//     }
// }

// print(resultToStr);
