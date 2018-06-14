'use strict';

//Write a program that finds the most frequent number in an array of N elements.

// function solve(args) {
//     let N = +args.shift(),
//         rC = 1,
//         rN = 0,
//         rM = 0;
//     let x = args.slice().sort();
//     for(let i = 0; i < N; i += 1) {
//         if (x[i] === x[i + 1]) {
//             rC += 1;
//             if (rM < rC) {
//                 rM = rC;
//                 rN = +x[i];
//             }
//         } else {
//             rC = 1;
//         }
//     }
//     console.log(`${rN} (${rM} times)`);
// }

function solve(args) {
    let n = args.shift();
    let arr = args.map(Number).sort();
    let counter = 1;
    let max = 0,
        rep = 0;
    
    for(let i = 0; i < n; i += 1) {
        if (arr[i] === arr[i + 1]) {
            counter += 1;
            if (max < counter) {
                max = counter;
                rep = arr[i];
            }
        }
        else {
            counter = 1;
        }
    }
    console.log(`${rep} (${max} times)`);
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '4', '4', '3', '4', '4', '1', '2', '4', '4', '3']);
solve(['13', '4', '1', '1', '1', '1', '1', '1', '1', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '9', '2', '3', '9', '9', '1', '2', '4', '9', '3']);