'use strict';

//Write a program that finds the length of the maximal sequence of equal elements in an array of N integers.

// function solve(args) {
//     let N = args.shift(),
//         j = 1,
//         smax = 1;
//     for(let i = 0; i < N; i += 1) {
//         if ((+args[i]) === (+args[i+1])) {
//             j += 1;
//             if (j > smax) {
//             smax = j;                
//             }
//         } else {
//             j = 1;
//         }
//     }
// console.log(smax);
// }

// if ('2' > '1') {
// console.log('2 > 1');
// }

function solve(args) {
    let n = args[0];
    let arr = args;
    //console.log(arr);
    let s = 1;
    let sMax = 1;
    for(let i = 1; i < n; i += 1) {
        if (arr[i] === arr[i + 1]) {
            s++;
            if (sMax < s) {
                sMax = s;
            }
        }
        else {
            s = 1;
        }
    }
    console.log(sMax);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
solve(['10', '2', '2', '2', '2', '3', '3', '2', '2', '2', '1']);
solve(['10', '2', '2', '2', '2', '2', '3', '2', '2', '2', '1']);