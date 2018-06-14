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
    '26',
    '2 1 2 4 3 5 2 6',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const s = +gets();
// const arr = gets().split(' ').map(Number);

// const possibleSums = Array.from({
//         length: s + 1,
//     })
//     .fill(false);

// possibleSums[0] = true;

// for (const number of arr) {
//     for (let sum = s; sum >= 0; sum -= 1) {
//         if (possibleSums[sum]) {
//             const newSum = sum + number;
//             if (newSum > s) {
//                 continue;
//             }
//             possibleSums[newSum] = true;
//         }
//     }
// }
// print(possibleSums[s] === true ? 'yes' : 'no');

const s = +gets();
const arr = gets().split(' ').map(Number);
const sums = Array.from({
    length: s,
}).fill(0);

sums[0] = true;

for (const number of arr) {
    for (let i = s; i >= 0; i -= 1) {
        if (sums[i]) {
            const newSum = i + number;
            if (newSum > s) {
                continue;
            }
            sums[newSum] = true;
        }
    }
}
print(sums[s] === true ? 'yes' : 'no');
