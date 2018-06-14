'use strict';

// Sort 3 real values in descending order. Use nested if statements.

// Note: Don’t use arrays and the built-in sorting functionality

// function solve(args) {
//     let a = +args[0],
//         b = +args[1],
//         c = +args[2];
//     if ((a >= b) && (a >= c)) {
//         if (b >= c) {
//             console.log(a + ' ' + b + ' ' + c);
//         } else {
//             console.log(a + ' ' + c + ' ' + b);
//         }
//     } else if ((b > a) && (b >= c)) {
//         if (a >= c) {
//             console.log(b + ' ' + a + ' ' + c);
//         } else {
//             console.log(b + ' ' + c + ' ' + a);
//         }
//     } else {
//         if (a >= b) {
//             console.log(c + ' ' + a + ' ' + b);
//         } else {console.log(c + ' ' + b + ' ' + a);}
//     }
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let max = a,
        mid, min;

    if (max < b) {
        max = b;
        if (max < c) {
            max = c;
            mid = b;
            min = a;
        }
        else {
            if (a < c) {
                min = a;
                mid = c;
            } else {
                mid = a;
                min = c;
            }
        }
    }
    else {
        if (max < c) {
            max = c;
            mid = a;
            min = b;
        } 
        else {
            if (b < c) {
                mid = c;
                min = b;
            } 
            else {
                mid = b;
                min = c;
            }
        }
    }
    console.log(max + ' ' + mid + ' ' + min);
}

solve(['5', '1', '2']);
solve(['-2', '-2', '1']);
solve(['-2', '4', '3']);
solve(['0', '-2.5', '5']);
solve(['-1.1', '-0.5', '-0.1']);
solve(['10', '20', '30']);
solve(['1', '1', '1']);