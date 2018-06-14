// We are given a matrix of strings of size N x M. Sequences in the matrix we define
//  as sets of several neighbour elements located on the same line, column or diagonal.
//  Write a program that finds the longest sequence of equal strings in the matrix and prints its length.

let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);
let counter = 1;
let oppositeCounter = 1;
let maxSum = 1;
const arr = [];

for (let i = 0; i < rows; i += 1) {
    arr[i] = gets().split(' ').map(Number);
}

for (let i = 0; i < rows; i += 1) {
    counter = 1;
    for (let j = 0; j < cols - 1; j += 1) {
        if (arr[i][j] === arr[i][j + 1]) {
            counter += 1;
            if (maxSum < counter) {
                maxSum = counter;
            }
        } else {
            counter = 1;
        }
    }
}


for (let i = 0; i < cols; i += 1) {
    counter = 1;
    for (let j = 0; j < rows - 1; j += 1) {
        if (arr[j][i] === arr[j + 1][i]) {
            counter += 1;
            if (maxSum < counter) {
                maxSum = counter;
            }
        } else {
            counter = 1;
        }
    }
}

for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
        counter = 1;
        oppositeCounter = 1;
        for (let k = 0; k < Math.min(rows, cols); k += 1) {
            if (i + k >= 0 && i + k < rows && j + k >= 0 && j + k < cols &&
                i + k + 1 >= 0 && i + k + 1 < rows &&
                j + k + 1 >= 0 && j + k + 1 < cols &&
                arr[i + k][j + k] === arr[i + k + 1][j + k + 1]) {
                counter += 1;
                if (maxSum < counter) {
                    maxSum = counter;
                }
            } else {
                counter = 1;
            }
            if (i + k >= 0 && i + k < rows &&
                j - k >= 0 && j - k < cols &&
                i + k + 1 >= 0 && i + k + 1 < rows &&
                j - k - 1 >= 0 && j - k - 1 < cols &&
                arr[i + k][j - k] === arr[i + k + 1][j - k - 1]) {
                oppositeCounter += 1;
                if (maxSum < oppositeCounter) {
                    maxSum = oppositeCounter;
                }
            } else {
                oppositeCounter = 1;
            }
        }
    }
}

print(maxSum);
