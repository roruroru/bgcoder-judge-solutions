'use strict';

function solve(args) {
    [, ...args] = args.map(Number);
    console.log(args);

    const COEFF = 1024;

    let result = args[0],
        index = 2 - args[0] % 2;

    while (index < args.length) {
        if (args[index] % 2 === 0) {
            result += args[index];
        } else {
            result *= args[index];
        }
        index += 2 - args[index] % 2;
        result %= COEFF;
    }

    return result;
}

// function solve(args) {
//     [, ...args] = args.map(Number);
//     console.log(args);

//     const COEFF = 1 << 10;
//     console.log(COEFF);

//     let result = args[0],
//         index = 2 - args[0] % 2;

//     while (index < args.length) {
//         if (args[index] % 2 === 0) {
//             result += args[index];
//         } else {
//             result *= args[index];
//         }
//         index += 2 - args[index] % 2;
//         result %= COEFF;
//     }

//     return result;
// }


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