'use strict';

function solve(args) {
    const n = +args[0];
    let counter = 0;

    for(let i = 0; i <= n; i += 2) {
        for(let j = 0; j <= n - i; j += 5) {
            if (i + j === n) {
                counter += 1;
                counter += Math.min(i / 2, j / 5);
            }
        }
    }
    console.log(counter);
}

solve(['17']);
solve(['7']);