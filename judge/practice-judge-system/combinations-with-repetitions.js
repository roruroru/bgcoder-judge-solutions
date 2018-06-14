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

const generateCombinations = (n, k, index, combination) => {
    if (index === k) {
        print(combination.join(' '));
        return;
    }

    const start = index ? combination[index - 1] : 1;

    for (let i = start; i <= n; i += 1) {
        combination[index] = i;
        generateCombinations(n, k, index + 1, combination);
    }
};

const [a, b] = gets().split(' ').map(Number);

generateCombinations(a, b, 0, []);
// quit(0);
