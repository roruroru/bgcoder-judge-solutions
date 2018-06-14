'use strict';

// Write a JavaScript function that reverses a string.

// function solve(args) {
//     let str = args[0];
//     let len = str.length;
//     let reversed = '';
//     for(let i = len - 1; i >= 0; i -= 1) {
//         reversed += str[i];
//     }
//     console.log(reversed);
// }

// function solve(args) {
//     let str = args[0];
//     let len = str.length;
//     let reversed = '';
//     for(let i = len - 1; i >= 0; i -= 1) {
//         reversed += str[i];
//     }
//     console.log(reversed);
// }

function solve(args) {
    let str = args[0];
    let arr = str.split('');
    console.log(arr.reverse().join(''));
}

solve(['sample']);
solve(['qwertytrewq']);
solve(['abcdef']);