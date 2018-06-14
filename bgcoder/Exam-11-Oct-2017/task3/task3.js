'use strict';

function solve(args) {
    let arr = args[0].split(' ').map(Number);
    let distance;
    let distances = 0;
    let len = arr.length;

    for(let i = 1; i < len; i += 1) {
        distance = Math.abs(arr[i] - arr[i - 1]);
        if (distance % 2 === 0) {
            distances += distance;
            i += 1;
        }
    }
    console.log(distances);
}

solve(['1 6 8 10 3 1 1']);
solve(['-5 5 1 8 -4 1 2']);