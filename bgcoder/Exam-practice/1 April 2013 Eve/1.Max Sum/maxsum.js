'use strict';

function solve(args) {
    let n = args.shift();
    let arr = args.map(Number);
    let curSum = 0,
        maxSum = -20000000000;

    //console.log(n);
    //console.log(arr);
    for(let i = 0; i < n; i += 1) {
        curSum = 0;
        for(let k = i; k < n; k += 1) {
            curSum += arr[k];
            if (curSum > maxSum) {
                maxSum = curSum;
                //console.log(maxSum);
            }
        }
    }
    console.log(maxSum);
}

solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']);
solve(['6', '1', '3', '-5', '8', '7', '-6']);


