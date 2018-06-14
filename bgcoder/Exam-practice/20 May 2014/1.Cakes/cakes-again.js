'use strict';

function solve(args) {
    let s = +args[0];
    let a = +args[1];
    let b = +args[2];
    let c = +args[3];
    let max = 0;
    let cur = 0;

    for (let i = 0; i <= s / a; i += 1) {
        for (let j = 0; j <= s / b; j += 1) {
            for (let k = 0; k <= s / c; k += 1) {
                cur = a*i + b*j + c*k;
                if (cur > s) {
                    break;
                }
                if (max < cur) {
                    max = cur;
                }
            }
        }
    }
    console.log(max);
}

solve(['110', '13', '15', '17']);
solve(['20', '11', '200', '300']);
solve(['110', '19', '29', '39']);