'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    //let peaks = [];
    function isPeak(index) {
        if (index === 0 || index === heights.length -1) {
            return true;
        }
        if (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]) {
            return true;
        }
        return false;
    }
    // heights.forEach(function(number, ind) {
    //     if (isPeak(ind)) {
    //         peaks.push(ind);
    //     }
    // });
    //console.log(peaks);
    let maxSum = 0;
    let currentSum = 0;
    heights.forEach(function(num, ind) {
        currentSum += num;
        if (isPeak(ind)) {
            if (maxSum < currentSum) {
                maxSum = currentSum;
            }
            currentSum = num;
        }
    });
    console.log(maxSum);
}

solve([
    "5 1 7 4 8"
]);
solve([
    "5 1 7 6 5 6 4 2 3 8"
]);