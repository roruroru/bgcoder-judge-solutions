'use strict';

function solve(args) {
    let heights = args[0].split(' ').map(Number);
    let len = heights.length;
    let peaksIndex = [];
    let stones = 0;
    let maxStones = 0;

    peaksIndex.push(0);
    for(let i = 1; i < len - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaksIndex.push(i);
        }
    }
    peaksIndex.push(len - 1);
    for(let i = 1; i < peaksIndex.length; i += 1) {
        stones = peaksIndex[i] - peaksIndex[i - 1];
        if (maxStones < stones) {
            maxStones = stones;
        }
    }
    console.log(maxStones);
}

solve(['5 1 7 4 8']);
solve(['5 1 7 6 3 6 4 2 3 8']);
solve(['10 1 2 3 4 5 4 3 2 1 10']);