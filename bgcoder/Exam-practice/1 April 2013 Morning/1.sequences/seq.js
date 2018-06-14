'use strict';

function solve(args) {
    let n = +args.shift();
    let arr = args.map(Number);
    let inSeq = 0;
    let globSeq = 0;
    let res = 1;
    //console.log(n);
    //console.log(arr);
    for(let i = 0; i < n; i += 1) {
        if (arr[i + 1] < arr[i]) {
            res += 1;
        }
    }
    console.log(res);
}

solve(['7', '1', '2', '-3', '4', '4', '0', '1']);
solve(['9', '1', '8', '8', '7', '6', '5', '7', '7', '6']);