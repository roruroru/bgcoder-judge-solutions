'use strict';

// Write a javascript function that prints a matrix like in the examples below by a given integer N.
//  Use two nested loops.

//     Challenge: achieve the same effect without nested loops.


// function solve(args) {
//     let N = +args[0];
//     for(let i = 0; i < N; i += 1) {
//         let line = '';
//         for(let j = 0; j < N; j += 1) {
//             line += i + j + 1 + ' ';
//         }
//     console.log(line);
//     }
// }

// function solve(args) {
//     let n = +args[0];
//     let line = '';
//     for(let i = 0; i < n; i += 1) {
//         for(let j = 0; j < n; j += 1) {
//             line += i + j + 1 + ' ';
//         }
//         console.log(line);
//         line = '';
//     }
// }

function solve(args) {
    let n = +args[0];
    let line = '';
    for(let i = 1; i <= n; i += 1) {
        line += i + ' ';
    }
    console.log(line);
}

solve([2]);
solve([3]);
solve([4]);
solve([5]);
solve([6]);