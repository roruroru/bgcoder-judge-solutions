'use strict';

function solve(args) {
    let n = +args[0];
    let counter = 0;

    for (let i = 0; i <= n; i += 2) {
        for (let j = 0; j <= n - i; j += 5) {
            if (n === i + j) {
                let addition = Math.min(i / 2, j / 5);
                counter += 1 + addition;
            }
        }
    }
    console.log(counter);
}

solve(['17']);
solve(['7']);