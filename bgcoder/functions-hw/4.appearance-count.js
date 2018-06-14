'use strict';

//Write a method that counts how many times given number appears in a given array.
// Write a test program to check if the method is working correctly.

// function solve(args) {
//     let x = +(args.pop());
//     let N = +(args.shift());
//     let c = args.join(" ");
//     let a = c.split(" ");
//     function appCount(x) {
//         let counter = 0;
//         for(let b of a) {
//             if (+b === x) {
//                 counter += 1;
//             }
//         }
//         console.log(counter);
//     }
//     appCount(x);
// }

function solve(args) {
    function appCount(str, num) {
        let arr = str.split(' ');
        let counter = 0;
        for(let i = 0; i < args[0]; i += 1) {
            if (arr[i] === num) {
                counter ++;
            }
        }
        console.log(counter);
    }
    appCount(args[1], args[2]);
}

solve(['8',
'28 6 21 6 -7856 73 73 -56',
'73']);
