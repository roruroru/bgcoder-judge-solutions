'use strict';

//Write a program that finds the length of the maximal increasing sequence in an array of N integers.

// function solve(args) {
//     let N = args.shift(),
//         j = 1,
//         maxs = 1;
//     for(let i = 0; i < N; i += 1){
//         if ((+args[i]) < (+args[i + 1])) {
//             j += 1;
//             if(j > maxs){
//                 maxs = j;
//             }
//         } else {
//             j = 1;
//         }
//     }
// console.log(maxs);
// }

function solve(args) {
    let arr = args.map(Number);
    let n = arr.shift();
    let counter = 1;
    let max = 1;
    for(let i = 1; i < n; i += 1) {
        if (arr[i] > arr[i - 1]) {
            counter += 1;
            if (max < counter) {
                max = counter;
            }
        } else {
            counter = 1;
        }
    }
    console.log(max);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
solve(['8', '7', '1', '2', '3', '4', '2', '2', '4']);
solve(['8', '7', '1', '2', '3', '4', '5', '6', '4']);
solve(['8', '7', '0', '2', '3', '4', '5', '2', '4']);