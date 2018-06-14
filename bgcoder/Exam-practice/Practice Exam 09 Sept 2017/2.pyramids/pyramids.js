'use strict';

function solve(args) {
    let n = Number(args[0]);
    let counter = 0;
    let index = 1;

    while (n >= 0) {
        counter++;
        n -= index;
        index++;
    }
    console.log(counter - 1);
}

solve(['5']);
solve(['8']);
solve(['21']);
solve(['20']);