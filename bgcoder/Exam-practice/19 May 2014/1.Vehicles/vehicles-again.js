'use strict';

function solve(args) {
    let n = +args[0];
    let result = 0;

    for(let i = 0; i <= n; i += 10) {
        for(let j = 0; j <= n; j += 4) {
            for(let k = 0; k <= n; k += 3) {
                if (i + j + k === n) {
                    result += 1;
                }
            }
        }
    }
    console.log(result);
}

solve(['7']);
solve(['10']);
solve(['40']);