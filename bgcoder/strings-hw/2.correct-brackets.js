'use strict';

// Write a JavaScript function to check if in a given expression the brackets are put correctly.

// function solve(args) {
//     let str = args[0],
//     indexOp,
//     indexCl,
//     counterOp = 0,
//     counterCl = 0;
//     let arr = str.match(/\({1}|\){1}/g);
//     let arrLen = arr.length;
//     // let str2 = arr.join('');
//     // let len = str2.length;
//     // if (len % 2) {
//     //     console.log('Incorrect');
//     // }
//     // else if (str2[0] === ')') {
//     //     console.log('Incorrect');
//     // }
//     // else if (str2[len - 1] === '(') {
//     //     console.log('Incorrect');
//     // }
//     // else {
//     //     console.log('Correct');
//     // }
//     for(let i = 0; i < arrLen; i += 1) {
//         indexOp = arr.indexOf('(', i);
//         indexCl = arr.indexOf(')', i);
//         //console.log('iOp = ', indexOp);
//         //console.log('iCl = ', indexCl);
//         if (indexOp === i) {
//             counterOp += 1;
//             //console.log('cOp = ', counterOp);
//         }
//         if (indexCl === i) {
//             counterCl += 1;
//             //console.log('cCl = ', counterCl);            
//         }
//         if (counterOp < counterCl) {
//             console.log('Incorrect');
//             break;
//         }
//     }
//     if (counterOp === counterCl) {
//         console.log('Correct');
//     }
//     else if (counterOp > counterCl) {
//         console.log('Incorrect');
//     }
//     // else {
//     //     console.log('Incorrect');     
//     // }
//     console.log(arr);
//     //console.log(str2);
// }

function solve(args) {
    let str = args[0];
    let len = str.length;
    let openingBrCount = 0,
        closingBrCount = 0;

    for(let i = 0; i < len; i += 1) {
        if (str[i] === '(') {
            openingBrCount += 1;
        }
        if (str[i] === ')') {
            closingBrCount += 1;
        }
        if (openingBrCount < closingBrCount) {
            return 'Incorrect';
        }
    }
    if (openingBrCount === closingBrCount) {
        return 'Correct';
    }
    else {
        return 'Incorrect';
    }
}

solve([ '((a+b)/5-d)' ]);
solve([ '((a+b)/(5-d)' ]);
solve([ ')(a+b))' ]);
solve([ '(c+d)*(a+b))' ]);
solve([ '(c+d))*(a+b))' ]);