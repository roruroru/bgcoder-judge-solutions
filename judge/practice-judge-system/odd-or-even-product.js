// You are given N integers (given in a single line, separated by a space).

//     Write a program that checks whether the product of the odd elements is
//      equal to the product of the even elements.
//     Elements are counted from 1 to N, so the first element is odd, the second is even, etc.

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
    '4 3 2 5 2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map(Number);
let oddProduct = 1;
let evenProduct = 1;

for (let i = 0; i < n; i += 1) {
    if (i % 2 === 1) {
        evenProduct *= numbers[i];
    } else {
        oddProduct *= numbers[i]
    }
}

if (oddProduct === evenProduct) {
    print(`yes ${evenProduct}`);
} else {
    print(`no ${oddProduct} ${evenProduct}`);
}
