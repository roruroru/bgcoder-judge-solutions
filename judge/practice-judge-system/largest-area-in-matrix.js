const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 6',
    '1 3 2 2 2 4',
    '3 3 3 2 4 4',
    '4 3 1 2 3 3',
    '4 3 1 3 3 1',
    '4 3 3 3 1 1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);

const matrix = Array.from({
    length: n,
});

for (let i = 0; i < n; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
}

// const stack = [];

let result = 1;
let max = 0;
const compareElements = (row, col, arr) => {
    if (arr[row][col] === 'x') {
        result = 1;
        return max;
    }
    if ((row > 0) && (arr[row][col] === arr[row - 1][col]) && (arr[row - 1][col] !== 'x')) {
        result += 1;
        arr[row][col] = 'x';
        // stack.push([row - 1, col]);
        compareElements(row - 1, col, arr);
    }
    if ((row < n - 1) && (arr[row][col] === arr[row + 1][col]) && (arr[row + 1][col] !== 'x')) {
        result += 1;
        arr[row][col] = 'x';
        // stack.push([row + 1, col]);
        compareElements(row + 1, col, arr);
    }
    if ((col > 0) && (arr[row][col] === arr[row][col - 1]) && (arr[row][col - 1] !== 'x')) {
        result += 1;
        arr[row][col] = 'x';
        // stack.push([row, col - 1]);
        compareElements(row, col - 1, arr);
    }
    if ((col < m - 1) && (arr[row][col] === arr[row][col + 1]) && (arr[row][col + 1] !== 'x')) {
        result += 1;
        arr[row][col] = 'x';
        // stack.push([row, col + 1]);
        compareElements(row, col + 1, arr);
    }
    // arr[row][col] = 'x';
    if (max < result) {
        max = result;
    }
    // const nextCell = stack.pop();
    // const nextRow = nextCell[0];
    // const nextCol = nextCell[1];
    // compareElements(nextRow, nextCol, matrix);

    return max;
};

// const searchForEqualElements = (element) => {
//     let result = 1;

// }

let largestArea = 0;
for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
        if (matrix[i][j] === 'x') {
            break;
        }
        const area = compareElements(i, j, matrix);
        if (largestArea < area) {
            largestArea = area;
        }
    }
}

print(largestArea);


// const [n, m] = gets().split(' ').map(Number);

// const matrix = Array.from({
//     length: n,
// });

// for (let i = 0; i < n; i += 1) {
//     matrix[i] = gets().split(' ').map(Number);
// }

// const stack = [];

// let result = 1;
// let max = 0;
// const compareElements = (row, col, arr) => {
//     if ((row > 0) && (arr[row][col] === arr[row - 1][col]) && (arr[row - 1][col] !== 'x')) {
//         result += 1;
//         stack.push([row - 1, col]);
//         // compareElements(row - 1, col, arr);
//     }
//     if ((row < n - 1) && (arr[row][col] === arr[row + 1][col]) && (arr[row + 1][col] !== 'x')) {
//         result += 1;
//         stack.push([row + 1, col]);
//         // compareElements(row + 1, col, arr);
//     }
//     if ((col > 0) && (arr[row][col] === arr[row][col - 1]) && (arr[row][col - 1] !== 'x')) {
//         result += 1;
//         stack.push([row, col - 1]);
//         // compareElements(row, col - 1, arr);
//     }
//     if ((col < m - 1) && (arr[row][col] === arr[row][col + 1]) && (arr[row][col + 1] !== 'x')) {
//         result += 1;
//         stack.push([row, col + 1]);
//         // compareElements(row, col + 1, arr);
//     }
//     arr[row][col] = 'x';
//     if (max < result) {
//         max = result;
//     }
//     if (stack.length === 0) {
//        result = 1;
//        return max;
//     }
//     const nextCell = stack.pop();
//     const nextRow = nextCell[0];
//     const nextCol = nextCell[1];
//     compareElements(nextRow, nextCol, matrix);

//     return max;
// };

// // const searchForEqualElements = (element) => {
// //     let result = 1;

// // }

// let largestArea = 0;
// for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j < m; j += 1) {
//         if (matrix[i][j] === 'x') {
//             break;
//         }
//         const area = compareElements(i, j, matrix);
//         if (largestArea < area) {
//             largestArea = area;
//         }
//     }
// }

// print(largestArea);
// // quit(0);