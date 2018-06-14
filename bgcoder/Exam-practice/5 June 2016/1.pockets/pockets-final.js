'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    let peaksIndexArr = [];
    let sum = 0;

    for(let i = 1; i < len - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaksIndexArr.push(i);
        }
    }
    for(let i = 0; i < peaksIndexArr.length - 1; i += 1) {
        if (peaksIndexArr[i + 1] - peaksIndexArr[i] === 2) {
            sum += heights[peaksIndexArr[i] + 1];
        }
    }
    console.log(sum);
}

solve([
    "53 20 1 30 2 40 3 10 1"
]);
solve([
    "53 20 1 30 30 2 40 3 10 1"
]);
solve([
    "53 20 1 30 2 40 3 3 10 1"
]);