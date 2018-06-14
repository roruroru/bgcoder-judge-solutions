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

// -------------------------------------

const generateCombinations = (n, k, index, currentComb, repeat) => {
    if (index === k) {
        // allComb.push([...currentComb]);
        print(currentComb.join(' '));
        return;
    }

    const addition = repeat ? 0 : 1;
    // let addition = 0;
    // if (!repeat) {
    //     addition = 1;
    // } else {
    //     addition = 0;
    // }
    const start = index ? currentComb[index - 1] + addition : 1;
    // let start = 1;

    // if (index === 0) {
    //     start = 1;
    // } else {
    //     start = currentComb[index - 1] + addition;
    // }

    for (let i = start; i <= n; i += 1) {
        currentComb[index] = i;
        generateCombinations(n, k, index + 1, currentComb, repeat);
    }
};

const [n, k] = gets().split(' ').map(Number);
// const result = [];

generateCombinations(n, k, 0, [], false);
// result.forEach((combination) => print(combination.join(' ')));
