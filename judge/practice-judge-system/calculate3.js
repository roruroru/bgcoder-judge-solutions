// In combinatorics, the number of ways to choose N different members out of
//  a group of N different elements (also known as the number of combinations)
//   is calculated by the following formula: formula For example, there are 2598960 ways
//    to withdraw 5 cards out of a standard deck of 52 cards. 
//    Your task is to write a program that calculates N! / (K! * (N - K)!) for given N and K.

//     _Try to use only two loops._

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '52',
    '5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const k = +gets();

let nK = 1;
let nMinusKFact = 1;

for (let i = 1; i <= n - k; i += 1) {
    nMinusKFact *= i;
}
for (let i = k + 1; i <= n; i += 1) {
    nK *= i;
        if (nK > nMinusKFact) {
            nK = nK / nMinusKFact;
            nMinusKFact = 1;
        }
}

print(nK.toFixed());
