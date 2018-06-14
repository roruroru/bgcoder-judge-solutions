// By given N and K, print all K-combinations of N elements.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '4 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const generateCombinations = (n, k, index, combination, allCombinations) => {
//     if (index === k) {
//         allCombinations.push([...combination]);
//         return;
//     }

//     const start = index ? combination[index - 1] + 1 : 1;
//     // let start = 1;
//     // if (index === 0) {
//     //     start = 1;
//     // } else {
//     //     start = combination[index - 1] + 1;
//     // }

//     for (let i = start; i <= n; i += 1) {
//         combination[index] = i;
//         generateCombinations(n, k, index + 1, combination, allCombinations);
//     }
// };

// const [a, b] = gets().split(' ').map(Number);
// // const index = 0;
// // const combination = Array.from({
// //     length: b,
// // });
// const allCombinations = [];

// generateCombinations(a, b, 0, [], allCombinations);

// allCombinations.forEach((comb) => print(comb.join(' ')));

const generateCombinations = (n, k, index, combination) => {
    if (index === k) {
        print(combination.join(' '));
        return;
    }

    const start = index ? combination[index - 1] + 1 : 1;
    // let start = 1;
    // if (index === 0) {
    //     start = 1;
    // } else {
    //     start = combination[index - 1] + 1;
    // }

    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinations(n, k, index + 1, combination);
    }
};

const [a, b] = gets().split(' ').map(Number);
// const index = 0;
// const combination = Array.from({
//     length: b,
// });
// const allCombinations = [];

generateCombinations(a, b, 0, []);

// allCombinations.forEach((comb) => print(comb.join(' ')));
