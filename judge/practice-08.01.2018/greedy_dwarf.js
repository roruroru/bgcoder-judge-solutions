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
    '4 3',
    '3 2 4',
    '2 0 3',
    '1 1 5',
    '2 2 5'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

const [n, m] = gets().split(' ').map(Number);
const matrix = [];
let [startRow, startCol] = [-1, -1];

matrix.push(Array.from({
    length: m + 2
}).fill(0));

for (let i = 0; i < n; i++) {
    const row = gets().split(' ').map(Number);
    const indexOfZero = row.indexOf(0);
    if (indexOfZero !== -1) {
        startRow = i + 1;
        startCol = indexOfZero + 1;
    }

    matrix.push([0, ...row, 0]);
}

matrix.push(Array.from({
    length: m + 2
}).fill(0));

let result = 0;
while (true) {
    const left = matrix[startRow][startCol - 1];
    const right = matrix[startRow][startCol + 1];
    const up = matrix[startRow - 1][startCol];
    const down = matrix[startRow + 1][startCol];

    const max = Math.max(left, right, up, down);    
    if (max === 0) {
        break;
    }
    
    if (max === left) {
        startCol--;
    } else if (max === right) {
        startCol++;
    } else if (max === up) {
        startRow--;
    } else {
        startRow++;
    }

    matrix[startRow][startCol]--;
    result++;
}

print(result);