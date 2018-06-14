'use strict';

// Implement a javascript function that takes an array with a single element -
// an integer N as parameter and prints true if the third digit of N is 7, or "false THIRD_DIGIT", 
// where you should print the third digits of N.

// function solve(args) {
//     let N = +args[0];
//     let thirdDigit = Math.trunc((N / 100) % 10);
//     if (thirdDigit === 7) {
//         console.log('true');
//     } else {
//         console.log('false ' + thirdDigit);
//     }
// }

    // let thirdDigitString = String(N).charAt(0);
    // let thirdDigit = Number(thirdDigitString);

// function solve(args) {
//     let n = args[0];
//     let len = n.length;
//     let thirdDigit = n[len - 3];
//     thirdDigit === '7' ? console.log(`true`) : console.log(`false ${thirdDigit}`);
// }

function solve(args) {
    let n = +args[0];
    let thirdDigit = Math.trunc((n / 100) % 10);
    thirdDigit === 7 ? console.log('true') : console.log(`false ${thirdDigit}`);
}

    
solve(['777']);
solve(['1777']);
solve(['7177']);
solve(['7277']);
solve(['777022']);
solve(['7']);
solve(['722']);