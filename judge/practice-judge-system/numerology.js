const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '18790314',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------

const calculateOperation = (a, b) => {
    return (a + b) * (a ^ b) % 10;
};

const updateResult = (digit) => {
    result[digit] += 1;
};

const generateAbilities = (inputArr) => {
    if (inputArr.length === 1) {
        updateResult(inputArr[0]);
        return;
    }
    for (let i = 0; i < inputArr.length - 1; i += 1) {
        const operationResult = calculateOperation(inputArr[i], inputArr[i + 1]);
        const operationArr = [...inputArr];
        operationArr.splice(i, 2, operationResult);
        generateAbilities(operationArr);
    }
};

const result = Array.from({
    length: 10,
}, () => 0);

const numbers = gets().split('').map(Number);

generateAbilities(numbers);
print(result.join(' '));
