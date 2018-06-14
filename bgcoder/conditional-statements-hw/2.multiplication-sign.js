'use strict';

// Write a script that shows the sign (+, - or 0) of the product of three real numbers,
//  without calculating it. Use a sequence of if operators.

// function solve(args) {
//     let a = +args[0],
//         b = +args[1],
//         c = +args[2];
//     if ((!a) || (!b) || (!c)) {
//         console.log('0');        
//     }
//     if (((a > 0) && (b > 0) && (c > 0)) || 
//         ((a < 0) && (b < 0) && (c > 0)) || 
//         ((a < 0) && (b > 0) && (c < 0)) || 
//         ((a > 0) && (b < 0) && (c < 0))) {
//         console.log('+');
//     }
//     if (((a < 0) && (b < 0) && (c < 0)) || 
//         ((a < 0) && (b > 0) && (c > 0)) || 
//         ((a > 0) && (b < 0) && (c > 0)) || 
//         ((a > 0) && (b > 0) && (c < 0))) {
//         console.log('-');
//     }
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];

    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    }
    else if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0)) {
        console.log('+');
    } else {
        console.log('-');
    }
}

solve (['5', '2', '2']);
solve (['-2', '-2', '1']);
solve (['-2', '4', '3']);
solve (['0', '-2.5', '4']);
solve (['-1', '-0.5', '-5.1']);