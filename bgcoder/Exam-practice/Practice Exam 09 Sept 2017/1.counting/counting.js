'use strict';

function solve(args) {
    let N = parseInt(args[0].trim());
    let arr = [];
    for(let i = 0; i < 10; i += 1) {
        N += 1;
        arr.push(N);
    }
    console.log(arr.join('\n'));
}

solve(["3"]);
solve(["90"]);
solve(["996"]);