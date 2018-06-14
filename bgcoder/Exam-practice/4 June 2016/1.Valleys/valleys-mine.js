'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    //console.log(heights);
    let peaks = [],
        sum = 0,
        maxSum = 0;
        peaks.push(0);
    for(let i = 0; i < len - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaks.push(i);
        }
    }
    peaks.push(len - 1);
    //console.log(peaks);
    for(let j = 1; j < peaks.length; j += 1) {
        let startIndex = peaks[j - 1];
        let endIndex = peaks[j];
        let sum = 0;
        for(let k = startIndex; k <= endIndex; k += 1) {
            sum += heights[k];
        }
        if (sum > maxSum) {
        maxSum = sum;
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