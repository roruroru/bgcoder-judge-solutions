'use strict';

function solve(args) {
    let n = +args[0];
    let counter = 0;
    
    while (n >= 0) {
        counter += 1;
        n -= counter;
    }
    console.log(counter - 1);
}

solve(['5']);
solve(['8']);
solve(['20']);
solve(['21']);