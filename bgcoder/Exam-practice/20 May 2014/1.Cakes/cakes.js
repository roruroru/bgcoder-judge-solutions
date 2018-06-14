'use strict';

function solve(args) {
    let money = +args[0];
    let c1 = +args[1];
    let c2 = +args[2];
    let c3 = +args[3];
    let cur = 0;
    let max = 0;
    for(let i = 0; i <= (money / c1) | 0; i += 1) {
        for(let j = 0; j <= (money / c2) | 0; j += 1) {
            for(let k = 0; k <= (money / c3) | 0; k += 1) {
                cur = i  * c1 + j * c2 + k * c3;
                if (cur > money) {
                    break;
                }
                if (cur > max) {
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