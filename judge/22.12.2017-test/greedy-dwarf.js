const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2 3',
    '0 5 2',
    '2 5 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
const labyrinth = [];
let currentRow;
let currentCol;
let escaped = false;
let collectedCoins = 0;

const checkNeighbouringCells = (matrix, row, col) => {
    let coinsL;
    let coinsR;
    let coinsU;
    let coinsD;
    let max = 0;
    if (col > 0) {
        coinsL = matrix[row][col - 1];
        if (max < coinsL) {
            max = coinsL;
        }
    }
    //  else {
    //     coinsL = -1;
    // }
    if (col < m - 1) {
        coinsR = matrix[row][col + 1];
        if (max < coinsR) {
            max = coinsR;
        }
    }
    //  else {
    //     coinsR = -1;
    // }
    if (row > 0) {
        coinsU = matrix[row - 1][col];
        if (max < coinsU) {
            max = coinsU;
        }
    }
    //  else {
    //     coinsU = -1;
    // }
    if (row < n - 1) {
        coinsD = matrix[row + 1][col];
        if (max < coinsD) {
            max = coinsD;
        }
    }
    // else {
    //     coinsD = -1;
    // }
    // let max = Math.max(coinsL, coinsR, coinsU, coinsD);
    // const coins = [coinsL, coinsR, coinsU, coinsD];
    // let counter = 0;
    // for (let i = 0; i < 4; i += 1) {
    //     if (coins[i] === max) {
    //         counter += 1;
    //     }
    // }
    // if (counter > 1) {
    //     if (coinsL !== 0) {
    //         max = coinsL;
    //         return max;
    //     } else if (coinsR !== 0) {
    //         max = coinsR;
    //         return max;
    //     } else if (coinsU !== 0) {
    //         max = coinsU;
    //         return max;
    //     } else if (coinsD !== 0) {
    //         max = coinsD;
    //         return max;
    //     }
    //     // max = coinsL;
    //     // return max;
    // }

    return max;
};

const moveToMostCoins = (matrix, row, col) => {
    const maxCoins = checkNeighbouringCells(matrix, row, col);
    if (maxCoins <= 0) {
        escaped = true;
        return [-1, -1];
    }
    let nextRow;
    let nextCol;
    if ((col > 0) && (matrix[row][col - 1] === maxCoins) && (maxCoins !== 0)) {
        nextRow = row;
        nextCol = col - 1;
    } else if ((col < m - 1) && (matrix[row][col + 1] === maxCoins) && (maxCoins !== 0)) {
        nextRow = row;
        nextCol = col + 1;
    } else if ((row > 0) && (matrix[row - 1][col] === maxCoins) && (maxCoins !== 0)) {
        nextRow = row - 1;
        nextCol = col;
    } else if ((row < n - 1) && (matrix[row + 1][col] === maxCoins) && (maxCoins !== 0)) {
        nextRow = row + 1;
        nextCol = col;
    }
    return [nextRow, nextCol];
};

for (let i = 0; i < n; i += 1) {
    labyrinth[i] = gets().split(' ').map(Number);
    for (let j = 0; j < m; j += 1) {
        // if (currentRow || currentCol) {
        //     break;
        // }
        if (labyrinth[i][j] === 0) {
            currentRow = i;
            currentCol = j;
            break;
        }
    }
}

while (escaped === false) {
    const arr = moveToMostCoins(labyrinth, currentRow, currentCol);
    if (arr[0] === -1) {
        escaped = true;
        break;
    }
    currentRow = +arr[0];
    currentCol = +arr[1];
    labyrinth[currentRow][currentCol] -= 1;
    collectedCoins += 1;
}

print(collectedCoins);
// quit(0);