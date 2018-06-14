'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let peaksInd = [];
    let result = 0;
    //console.log(heights);
    // heights.forEach(function(height, ind) {
    //    if (height[ind] > height[ind + 1] && height[ind] > height[ind - 1]) {
    //        peaksInd.push(ind);
    //    } 
    // });
    for(let i = 0; i < heights.length - 1; i += 1) {
        if (heights[i] > heights[i + 1] && heights[i] > heights[i - 1]) {
            peaksInd.push(i);
        } 
    }
    for(let d = 0; d < peaksInd.length - 1; d += 1) {
        if (peaksInd[d + 1] - peaksInd[d] === 2) {
            let pocketInd = (peaksInd[d + 1] + peaksInd[d]) / 2;
            //console.log(pocketInd);
            result += heights[pocketInd];
        }
    }
    //console.log(peaksInd);
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