'use strict';

// Implement a javascript function that accepts an array with a single element - 
// positive integer N as string and prints all the numbers from 1 to N inclusive, 
// on a single line, separated by a whitespace.

// function solve(args) {
//     let N = +args[0],
//         line = '';
//     for(let i = 1; i <= N; i += 1) {
//         line += i + ' ';
//     }
//     console.log(line);
// }

function solve(args) {
    let n = +args[0];
    let counter = 1;
    let result = '';
    while (counter <= n) {
        result += counter + ' ';
        counter += 1;
    }
    console.log(result);
}

solve(['1']);
solve(['4']);
solve(['6']);
solve(['8']);
solve(['11']);
solve(['16']);