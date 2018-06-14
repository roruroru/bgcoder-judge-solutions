'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let peaksInd = [];
    let result = 0;
    function isPeak(index) {
        if (heights[index] > heights[index - 1] && heights[index] > heights[index + 1]) {
            return true;
        }
        return false; 
    }
    heights.forEach(function(number, ind) {
        if (isPeak(ind)) {
            peaksInd.push(ind);
        }
    });
    //console.log(peaksInd);
    for(let i = 0; i < peaksInd.length; i += 1) {
        if (peaksInd[i + 1] - peaksInd[i] === 2) {
            result += heights[((peaksInd[i] + peaksInd[i + 1]) / 2)];
        }
    }
    console.log(result);
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