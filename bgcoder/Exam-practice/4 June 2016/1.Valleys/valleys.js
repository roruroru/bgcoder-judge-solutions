'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let peaks = [];
    function isPeak(index) {
        if (index === 0 || index === heights.length -1) {
            return true;
        }
        if (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]) {
            return true;
        }
        return false;
    }
    heights.forEach(function(number, ind) {
        if (isPeak(ind)) {
            peaks.push(ind);
        }
    });
    console.log(peaks);
    let maxSum = 0;
    for(let j = 1; j < peaks.length; j += 1) {
        let startIndex = peaks[j - 1];
        let endIndex = peaks[j];
        let sum = 0;
        for(let k = startIndex; k <= endIndex; k += 1) {
            sum += heights[k];
        }
        if (sum > maxSum) {
        maxSum = sum;
        sum = 0;
        }
    }
    console.log(maxSum);
}
// function solve(args) {
//     let heights = args[0].split(' ').map(Number);
//     let len = heights.length;
//     //console.log(heights);
//     let peaks = [],
//         sum = 0,
//         maxSum = 0;
//     for(let i = 2; i < len - 2; i += 1) {
//         if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
//             peaks.push(i);
//         }
//     }
//     peaks.push(len - 1),
//     peaks.unshift(0);
//     //console.log(peaks);
//     for(let j = 1; j < peaks.length; j += 1) {
//         let startIndex = peaks[j - 1];
//         let endIndex = peaks[j];
//         for(let k = startIndex; k <= endIndex; k += 1) {
//             sum += heights[k];
//         }
//         if (sum > maxSum) {
//         maxSum = sum;
//         sum = 0;
//         }
//     }
//     console.log(maxSum);
// }

solve([
    "5 1 7 4 8"
]);
solve([
    "5 1 7 6 5 6 4 2 3 8"
]);