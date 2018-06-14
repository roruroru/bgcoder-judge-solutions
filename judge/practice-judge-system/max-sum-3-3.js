// Write a program that reads a rectangular matrix of size N x M and finds in it the square 3 x 3 that has maximal sum of its elements. Print that sum.
// Input
// 
// On the first line you will receive the numbers N and M separated by a single space
// On the next N lines there will be M numbers separated with spaces - the elements of the matrix

let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);
const arr = [];
let sum;
let maxSum = 0;
let currentRow = 0;
let currentCol = 0;

for (let i = 0; i < rows; i += 1) {
    arr[i] = gets().split(' ').map(Number);
}

// for(row) {
//     for(col) {
//         sum = sumOf(row, col);
//         best = Math.max(best, sum);
//     }
// }

for (let i = 0; i < (rows - 1) * (cols - 1); i += 1) {
    for (let row = currentRow; row < currentRow + 3; row += 1) {
        for (let col = currentCol; col < currentCol + 3; col += 1) {
            sum += arr[row][col];
            if (maxSum < sum) {
                maxSum = sum;
            }
        }
    }
    if (cols - currentCol === 3 && rows - currentRow > 3) {
        currentCol = 0; currentRow += 1;
    } else if (cols - currentCol > 3) {
        currentCol += 1;
    }
    sum = 0;
}
print(maxSum);
