// The Tribonacci sequence is a sequence in which every next element is made by
//  the sum of the previous three elements from the sequence.

// Write a computer program that finds the Nth element of the Tribonacci sequence,
//  if you are given the first three elements of the sequence and the number N.
//   Mathematically said: with given T1, T2 and T3 – you must find Tn.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2',
    '3',
    '4',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const tribonacci = [];

for (let i = 0; i < 3; i += 1) {
    tribonacci[i] = +gets();
}

const findTribonacci = (n) => {
    if (typeof tribonacci[n] === 'undefined') {
        tribonacci[n] = findTribonacci(n - 1) + findTribonacci(n - 2) + findTribonacci(n - 3);
    }

    return tribonacci[n];
};

const n = +gets();
// if (n === 1) {
//     print(tribonacci[0]);
// } else if (n === 2) {
//     print(tribonacci[3]);
// } else if (n === 3) {
//     print(tribonacci[0]);
// } else {
    print(findTribonacci(n - 1));
// }
