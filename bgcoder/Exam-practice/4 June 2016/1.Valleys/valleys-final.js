'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    let sum = 0,
        maxSum = 0;

    for(let i = 0; i < len; i += 1) {
        sum += heights[i];
        if (maxSum < sum) {
            maxSum = sum;
        }
        if (i > 0 && i < len - 1 && heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            sum = heights[i];
        }
    }
    console.log(maxSum);
}

solve([
    "5 1 7 4 8"
]);
solve([
    "5 1 7 6 5 6 4 2 3 8"
]);