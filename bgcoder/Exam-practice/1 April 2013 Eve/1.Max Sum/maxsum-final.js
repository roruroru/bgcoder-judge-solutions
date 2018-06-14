'use strict';

function solve(args) {
    let n = +args[0];
    let arr = args.slice(1).map(Number);
    let sum = 0;
    let maxSum = -2000001;

    for(let i = 0; i < n; i += 1) {
        sum = 0;
        for(let j = i; j < n; j += 1) {
            sum += arr[j];
            if (maxSum < sum) {
                maxSum = sum;
            }
        }
    }
    console.log(maxSum);
}

solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']);
solve(['6', '1', '3', '-5', '8', '7', '-6']);