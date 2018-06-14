'use strict';

function solve(args) {
    const s = +args[0];
    const a = +args[1];
    const b = +args[2];
    const c = +args[3];
    let maxSum = 0,
        sum = 0;

    for(let i = 0; i <= s; i += a) {
        for(let j = 0; j <= s - i; j += b) {
            for(let k = 0; k <= s - i - j; k += c) {
                sum = i + j + k;
                if (maxSum < sum) {
                    maxSum = sum;
                }
            }
        }
    }
    console.log(maxSum);
}

solve(['110', '13', '15', '17']);
solve(['20', '11', '200', '300']);
solve(['110', '19', '29', '39']);