'use strict';

function solve(args) {
    let n = +args[0];
    let count = 0;
    while (n >= 0) {
        count += 1;
        n -= count;
    }
    console.log(count - 1);
}

solve(['5']);
solve(['8']);
solve(['20']);
solve(['21']);