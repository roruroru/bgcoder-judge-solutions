'use strict';

function solve(args) {
    let n = +args[0];
    let arr = args.slice(1).map(Number);
    let result;

    if (arr[0] % 2 === 1) {
        result = 1;
    } else {
        result = 0;
    }

    for(let i = 0; i < n; i += 1) {
        if (arr[i] % 2 === 1) {
            result *= arr[i];
        } else {
            result += arr[i];
            i += 1;
        }
        
        if (result > 1024) {
            result %= 1024;
        }
    }
    console.log(result);
}

solve([
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
  ]);

solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
  ]);