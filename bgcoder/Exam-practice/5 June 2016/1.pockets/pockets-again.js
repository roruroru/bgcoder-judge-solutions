'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    let peaksIndex = [];
    let sum = 0;

    function isPeak(index) {
        if (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]) {
            return true;
        }
        return false;
    }

    for(let i = 0; i < len; i += 1) {
        if (isPeak(i)) {
            peaksIndex.push(i);
        }
    }
    
    for(let i = 1; i < peaksIndex.length; i += 1) {
        if (peaksIndex[i] - peaksIndex[i - 1] === 2) {
            let pocketIndex = (peaksIndex[i] + peaksIndex[i - 1]) / 2;
            sum += heights[pocketIndex];
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