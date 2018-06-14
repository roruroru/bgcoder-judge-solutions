'use strict';

// Implement a javascript function that uses an expression to check if given integer is odd or even,
//  and prints "even NUMBER" or "odd NUMBER", where you should print the input number's value instead of NUMBER.

// let min = -30;
// let max = 30;

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(-30);
//   max = Math.floor(30);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let args = (getRandomIntInclusive(min, max));

// function solve(args) {
//     let inputNumber = +args[0];
//     if ((inputNumber % 2) === 0) {
//         console.log('even' + ' ' + inputNumber);
//     } else  {
//         console.log('odd' + ' ' + inputNumber);
//     }
// }


function solve(args) {
    let n = +args[0];
    n % 2 === 0 ? console.log(`even ${n}`) : console.log(`odd ${n}`);
    // if (n % 2 === 0) {
    //     console.log(`even ${n}`);
    // } else {
    //     console.log(`odd ${n}`);
    // }
}

// console.log(solve(args));
solve (['2']);
solve (['-29']);