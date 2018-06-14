'use strict';

function solve(args) {
    let n = +args[0];
    let arr = args.slice(1).map(Number);
    let counter = 1;
    
    for(let i = 1; i < n; i += 1) {
        if (arr[i] < arr[i - 1]) {
            counter += 1;
        }
    }
    console.log(counter);
}

solve(['7', '1', '2', '-3', '4', '4', '0', '1']);
solve(['9', '1', '8', '8', '7', '6', '5', '7', '7', '6']);
