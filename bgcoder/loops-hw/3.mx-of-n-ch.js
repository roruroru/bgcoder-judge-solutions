'use strict';

function solve(args) {
    let N = +args[0];
    for(let i = 0, j = 0; i < N , j < N;) {
        let line = '';
        let row = '';
        let column = '';
            row += i + j + 1 + '';
            column += i + j + 1 + '';
        i += 1;
            console.log(row,column);
        j += 1;
    }
}

solve([2]);
// solve([3]);
// solve([4]);
// solve([5]);
// solve([6]);