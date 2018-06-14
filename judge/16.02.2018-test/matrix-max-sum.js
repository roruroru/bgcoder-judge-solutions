const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// const test = [
//     '6',
//     '1 2 3 4 5 6',
//     '2 3 4 5 6 7',
//     '6 5 4 3 2 1',
//     '3 4 5 6 7 8',
//     '4 5 6 7 8 9',
//     '9 8 7 6 5 4',
//     '3 5 3 -5 -4 -2',
// ];
const test = [
    '5',
    '1 22 3 41 5 2',
    '2 13 4 -5 6 5',
    '-6 5 9 31 2 8',
    '3 14 5 -6 7 4',
    '4 -5 6 -7 8 7',
    '-3 -3 3 3 4 -3 -4 3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------

const calculatePositiveRows = (matrix, row, col) => {
    const rowIndex = Math.abs(row) - 1;
    const colIndex = Math.abs(col) - 1;
    let sum = 0;
    for (let i = 0; i <= colIndex; i += 1) {
        sum += matrix[rowIndex][i];
    }
    return sum;
}

const calculateNegativeRows = (matrix, row, col) => {
    const rowIndex = Math.abs(row) - 1;
    const colIndex = Math.abs(col) - 1;
    let sum = 0;
    for (let i = matrix[rowIndex].length - 1; i >= colIndex; i -= 1) {
        sum += matrix[rowIndex][i];
    }
    return sum;
}

const calculatePositiveCols = (matrix, row, col) => {
    const rowIndex = Math.abs(row) - 1;
    const colIndex = Math.abs(col) - 1;
    let sum = 0;
    for (let i = rowIndex - 1; i >= 0; i -= 1) {
        sum += matrix[i][colIndex];
    }
    return sum;
}

const calculateNegativeCols = (matrix, row, col) => {
    const rowIndex = Math.abs(row) - 1;
    const colIndex = Math.abs(col) - 1;
    let sum = 0;
    for (let i = rowIndex + 1; i < n; i += 1) {
        sum += matrix[i][colIndex];
    }
    return sum;
}
const n = +gets();
const matrix = Array.from({
    length: n,
});
for (let i = 0; i < n; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
}
// console.log(matrix);

const coordinatesForCalculation = gets().split(' ').map(Number);
let bestSum = -200000000000000000000;

// console.log(coordinatesForCalculation);
for (let j = 0; j <= coordinatesForCalculation.length - 1; j += 2) {
    let currentSum = 0;
    let row = coordinatesForCalculation[j];
    let col = coordinatesForCalculation[j + 1];
    if (row > 0) {
        currentSum = calculatePositiveRows(matrix, row, col);
    } else {
        currentSum = calculateNegativeRows(matrix, row, col);
    }
    if (col > 0) {
        currentSum += calculatePositiveCols(matrix, row, col);
    } else {
        currentSum += calculateNegativeCols(matrix, row, col);
    }
    // console.log(currentSum);
    if (bestSum < currentSum) {
        bestSum = currentSum;
    }
}

print(bestSum);
