'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    let peaksIndexArr = [];
    let currentSum = 0;
    let maxSum = 0;
    
    peaksIndexArr.push(0);
    for(let i = 1; i < len - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaksIndexArr.push(i);
        }
    }
    peaksIndexArr.push(len - 1);
    
    for(let i = 0; i < peaksIndexArr.length - 1; i += 1) {
        currentSum = 0;
        for(let j = peaksIndexArr[i]; j <= peaksIndexArr[i + 1] ; j += 1) {
            currentSum += heights[j];
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
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