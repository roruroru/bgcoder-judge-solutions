// Write a program that reads a rectangular matrix of size N x M and finds in it the square 3 x 3 that has maximal sum of its elements. Print that sum.
// Input
// 
// On the first line you will receive the numbers N and M separated by a single space
// On the next N lines there will be M numbers separated with spaces - the elements of the matrix

let gets = this.gets || require('readline-sync').question;
let print = this.print || console.log;

const [rows, cols] = gets().split(' ').map(Number);
const arr = [];
let sum = 0;
let maxSum = -10000;

for (let i = 0; i < rows; i += 1) {
    arr[i] = gets().split(' ').map(Number);
}

for (let startCornerRow = 0; startCornerRow <= rows - 3; startCornerRow += 1) {
    for (let startCornerCol = 0; startCornerCol <= cols - 3; startCornerCol += 1) {
        for (let calcRow = startCornerRow; calcRow < startCornerRow + 3; calcRow += 1) {
            for (let calcCol = startCornerCol; calcCol < startCornerCol + 3; calcCol += 1) {
                sum += arr[calcRow][calcCol];
            }
        }
        if (maxSum < sum) {
            maxSum = sum;
        }
        sum = 0;
    }
}

print(maxSum);
