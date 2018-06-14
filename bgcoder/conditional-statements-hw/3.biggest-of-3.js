'use strict';

// Write a script that finds the biggest of three numbers. Use nested if statements.

// function solve(args) {
//     let a = +args[0];
//     let b = +args[1];
//     let c = +args[2];
//     if (a >= b) {
//         if (a >= c) {
//             console.log(a);
//         } else {
//             console.log(c);
//         }
//     } 
//     else if (b >= c) {
//         console.log(b);
//     }
//     else { 
//         console.log(c);        
//     }
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let max = a;

    if (max < b) {
        max = b;
        if (max < c) {
            max = c;
        }
    }
    else {
        max < c ? max = c : max = a;
    }
    console.log(max);
}

solve (['5', '2', '2']);
solve (['-2', '-2', '1']);
solve (['-2', '4', '3']);
solve (['0', '-2.5', '5']);
solve (['-0.1', '-0.5', '-1.1']);