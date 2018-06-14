'use strict';

// Using bitwise operators, write a javascript function(that accepts a single array with arguments as a parameter)
//  that uses an expression to find the value of the bit at index 3 of an unsigned integer read from the console.

//     The bits are counted from right to left, starting from bit 0.
//     The result of the expression should be either 1 or 0. Print it on the console.


// function solve(args) {
//     let a = +(args[0]);
//     let b = (a >> 3).toString(2);
//     let c = b.substr(b.length - 1);
//     console.log(c);    
// }

// function solve(args) {
//     let a = +(args[0]);
//     let b = (a >> 3).toString(2);
//     console.log(b.slice(-1));    
// }

function solve(args) {
    let n = +args[0];
    let N = n >> 3;
    N & 1 === 1 ? console.log('1') : console.log('0');
}

solve (['15']);
solve (['1024']);
solve (['12']);
solve (['16']);
solve (['20']);
solve (['32']);
solve (['36']);
solve (['64']);
solve (['68']);

