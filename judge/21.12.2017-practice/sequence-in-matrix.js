const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6 6',
    '92 11 23 42 59 48',
    '09 92 23 72 56 14',
    '17 63 92 46 85 95',
    '34 12 52 69 23 95',
    '26 88 78 71 29 95',
    '26 34 16 63 39 95',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------

const readMatrix = () => {
    const [rows, cols] = gets().split(' ').map(Number);
    const matrix = Array.from({
        length: rows,
    });
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = gets().split(' ').map(Number);
    }

    return {
        matrix,
        rows,
        cols,
    };
};

const matrixContainer = readMatrix();
let bestCount = 1;

const checkSequenceAndReturnCount = (previous, next, currentBestCount) => {
    if (next === previous) {
        currentBestCount += 1;

        if (currentBestCount > bestCount) {
            bestCount = currentBestCount;
        }
    } else {
        previous = next;
        currentBestCount = 1;
    }

    return {
        previous,
        currentBestCount,
    };
};

const moveRight = (i, j, matrix, cols) => { // TO DO clear mistakes
    let [row, col] = [i, j];
    let currentBestCount = 0;
    let previous = matrix[i][j];
    for (let col = j; col < cols; col += 1) {
        ({previous, currentBestCount} =
        checkSequenceAndReturnCount(previous, matrix[i][col], currentBestCount));
        // if (matrix[i][col] === current) {
        //     currentCount += 1;
        //     if (currentCount > bestCount) {
        //         bestCount = currentCount;
        //     }
        // } else {
        //     current = matrix[i][col];
        //     currentCount = 1;
        // }
    }
};

const moveDown = (i, j, matrix, rows) => {
    let currentCount = 0;
    let current = matrix[i][j];
    for (let row = i; row < rows; row += 1) {
        if (matrix[row][j] === current) {
            currentCount += 1;
            if (currentCount > bestCount) {
                bestCount = currentCount;
            }
        } else {
            current = matrix[row][j];
            currentCount = 1;
        }
    }
};

const moveRightDiagonalUnder = (i, j, matrix, rows) => {
    let [row, col] = [i, j];
    while (row < rows) {
        console.log(matrix[row][col]);
            // matrix[row][col]
            row += 1;
            col += 1;
    }
};
const moveRightDiagonalOver = (i, j, matrix, cols) => {
    let [row, col] = [i, j];
    while (col < cols) {
        console.log(matrix[row][col]);
        // matrix[row][col]
        row += 1;
        col += 1;
    }
};
const moveLeftDiagonalUnder = (i, j, matrix, rows) => {
    let [row, col] = [i, j];
    while (col < cols) {
        console.log(matrix[row][col]);
        // matrix[row][col]
        row -= 1;
        col += 1;
    }
};
const moveLeftDiagonalOver = (i, j, matrix) => {
    let [row, col] = [i, j];
    while (row > -1) {

        // matrix[row][col]
        row -= 1;
        col += 1;
    }
};

console.log(moveRight(0, 0, matrixContainer.matrix, matrixContainer.cols));

// moveRightDiagonalOver(0, 0, matrixContainer.matrix, matrixContainer.cols);
