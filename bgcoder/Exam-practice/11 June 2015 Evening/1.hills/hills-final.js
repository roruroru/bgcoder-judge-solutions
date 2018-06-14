'use strict';

function solve(args) {
    const heights = args[0].split(' ').map(Number);
    const len = heights.length;
    let peaksIndexArr = [];
    let rocks = 0,
        maxRocks = 0;

    peaksIndexArr.push(0);
    for(let i = 1; i < len - 1; i += 1) {
        if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) {
            peaksIndexArr.push(i);
        }
    }
    peaksIndexArr.push(len - 1);

    for(let i = 1; i < peaksIndexArr.length; i += 1) {
        rocks = peaksIndexArr[i] - peaksIndexArr[i - 1];
        if (maxRocks < rocks) {
            maxRocks = rocks;
        }
    }
    console.log(maxRocks);
}

solve(['5 1 7 4 8']);
solve(['5 1 7 6 3 6 4 2 3 8']);
solve(['10 1 2 3 4 5 4 3 2 1 10']);