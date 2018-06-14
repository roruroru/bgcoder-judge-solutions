'use strict';

function solve(args) {
    let n = +args[0];
    let k = +args[1];
    let numbers = args[2].split(' ').map(Number);
    let result = [];
    let max = 0, min = 0, cur;
    let res = [];
    //let kk = k;
    //console.log(numbers);
    for(let j = 0; j <= n - k; j += 1) {
   
        for(let i = j; i < k + j; i += 1) {
            res.push(numbers[i]);
        }
        //kk -= 1;
        //console.log(res);
        //console.log(res.sort());
        res.sort((x, y) => x - y);
        //console.log(res);
        let sum = res[0] + res[res.length - 1];
        result.push(sum);
        res = [];
    }
    console.log(result.join(','));
}

solve([4,
    2,
    '1 3 1 8'
    ]);
solve([5,
    3,
    '7 7 8 9 10'
    ]);
solve([8,
    4,
    '1 8 8 4 2 9 8 11'
    ]);