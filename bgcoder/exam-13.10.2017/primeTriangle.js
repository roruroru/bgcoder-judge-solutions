'use strict';

function solve(args) {
    let n = +args[0];
    let str = '1';

    console.log(str);
    for (let i = 2; i <= n; i += 1) {
        if (i === 2 || i === 3) {
            str += '1';
            console.log(str);
        } else {
            let sqrt = Math.sqrt(i) | 0;
            for (let j = 2; j <= sqrt; j += 1) {
                if (i % j === 0) {
                    str += '0';
                    break;
                } 
                else if (i % j !== 0 && j < sqrt) {
                    continue;
                }
                else {
                    str += '1';
                    console.log(str);
                }
            }
        }
    }
}

solve(["7"]);