// By given N, generate all permutations with numbers between 1 and N

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const getPermutations = (arr) => {
    const generatePermutations = (ind, currentPerm, usedNums, inputArr) => {
        if (ind === inputArr.length) {
            print(currentPerm.join(' '));
        }

        for (const value of inputArr) {
            if (usedNums[value] === true) {
                continue;
            }

            currentPerm[ind] = value;
            usedNums[value] = true;

            generatePermutations(ind + 1, currentPerm, usedNums, inputArr);
            usedNums[value] = false;
        }
    };

    generatePermutations(0, [], {}, arr);
};

const n = +gets();
const arrr = [];

for (let i = 0; i < n; i += 1) {
    arrr[i] = i + 1;
}

getPermutations(arrr);

// const getPermutations = (arr) => {
//     const generatePermutations = (ind, currentPerm, usedNums, inputArr, resultArr) => {
//         if (ind === inputArr.length) {
//             resultArr.push([...currentPerm]);
//         }

//         for (const value of inputArr) {
//             if (usedNums[value] === true) {
//                 continue;
//             }

//             currentPerm[ind] = value;
//             usedNums[value] = true;

//             generatePermutations(ind + 1, currentPerm, usedNums, inputArr, resultArr);
//             usedNums[value] = false;
//         }
//     };

//     const resultArr = [];

//     generatePermutations(0, [], {}, arr, resultArr);

//     return resultArr;
// };

// const n = +gets();
// const arrr = [];

// for (let i = 0; i < n; i += 1) {
//     arrr[i] = i + 1;
// }

// getPermutations(arrr)
//     .forEach((permutation) => print(permutation.join(' ')));
