'use strict';

// Implement a javascript function that does the following:

//     Accepts an array containing a single integer number as string.
//     Stores in a variable if the number can be divided by 7 and 5 without remainder.
//     Prints on the console "true NUMBER" if the number is divisible without remainder by 7 and 5.
//      Otherwise prints "false NUMBER". In place of NUMBER print the value of the input number.


// function solve(args) {
//     let a = +args[0];
//     if (a % 7 === 0 && a % 5 ===0) {
//         console.log('true ' + a);
//     } else {
//         console.log('false ' + a);
//     }
// }


function solve(args) {
    let n = +args[0];
    (n % 5 === 0) && (n % 7 === 0) ? console.log(`true ${n}`) : console.log(`false ${n}`);
}

solve ([7]);
solve ([11]);
solve ([25]);
solve ([35]);
solve ([70]);
solve ([80]);
solve ([140]);
solve ([-140]);
solve ([0]);