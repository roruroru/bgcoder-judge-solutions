'use strict';

// Implement a javascript function that accepts an array containing an integer N as string 
// (which will always be less than 100 or equal) and uses an expression to check if given N is 
// prime (i.e. it is divisible without remainder only to itself and 1).

// function solve(args) {
//     let N = +args[0];
//     if (N === 2 || N === 3 || N === 5 || N === 7 || ((N > 7) && (((N % 10) !== 0) && ((N % 9) !== 0) && ((N % 8) !== 0) && 
//     ((N % 7) !== 0) && ((N % 6) !== 0) && ((N % 5) !== 0) && 
//     ((N % 4) !== 0) && ((N % 3) !== 0) && ((N % 2) !== 0)))) {
//         console.log('true');
//     } else {console.log('false');}
// }


function solve(args) {
    let n = +args[0];
    let sqrtN = Math.sqrt(n);

    if ((n === 2 || n === 3 || n === 5 || n === 7) ||  (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0)) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

solve(['2']);
solve(['3']);
solve(['4']);
solve(['-2']);
solve(['5']);
solve(['7']);
solve(['13']);
solve(['11']);