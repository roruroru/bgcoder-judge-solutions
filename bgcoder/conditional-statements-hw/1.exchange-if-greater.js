'use strict';

// Write an if statement that takes two double variables a and b and exchanges their values
//  if the first one is greater than the second. As a result print the values a and b, separated by a space.

// function solve(args) {
//     let a = +args[0],
//     b = +args[1],
//     exch;
//     if (a > b) {
//         exch = a;
//         a = b;
//         b = exch;
//     }
// console.log(a + ' ' + b);
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1], 
        min = a;
    if (a > b) {
        min = b;
        b = a;
    }
    console.log(min + ' ' + b);
}

solve(['5', '2']);
solve(['3', '4']);
solve(['5.5', '4.5']);