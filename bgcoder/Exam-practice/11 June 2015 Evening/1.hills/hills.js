'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let peaksInd = [];
    let maxN = 0;
    let curN = 0;
    //console.log(heights);
    let len = heights.length;
    for(let i = 0; i <= len - 1; i += 1) {
        if (i === 0 || i === len - 1) {
            peaksInd.push(i);
        }
        else if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaksInd.push(i);
        }
    }
    //console.log(peaksInd);
    for(let j = 1; j < peaksInd.length; j += 1) {
        curN = peaksInd[j] - peaksInd[j - 1];
        if (maxN < curN) {
            maxN = curN;
            curN = 0;
        }
    }
    console.log(maxN);
}

solve(['5 1 7 4 8']);
solve(['5 1 7 6 3 6 4 2 3 8']);
solve(['10 1 2 3 4 5 4 3 2 1 10']);