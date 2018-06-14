'use strict';

function solve(args) {
    let n = +args[0];
    let counter = 0;

    for(let i = 0; i * 3 <= n; i += 1) {
        for(let j = 0; j * 4 <= n - i * 3; j += 1) {
            if (i * 3 + j * 4 === n) {
                counter += 1;
                if (i >= 2 && j >= 1) {
                    counter += Math.floor(Math.min(i / 2, j));
                }
            }
        }
    }
    console.log(counter);
}

solve(['7']);
solve(['10']);
solve(['40']);