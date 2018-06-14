'use strict';

//Write a program that finds in given array of integers a sequence of given sum S (if present).

// function solve(args) {
//     let N = args.shift(),
//     i,
//     j,
//     dif;
//     for(let i = 0; i < N; i += 1) {
//         dif = N - args[i];
//         if (dif === 0) {
//             console.log('Yes', args[i]);
//         }
//         else if (dif < 0) {
//             dif = N;
//         }
//         else {
//             for(let j = i + 1; j < N; j += 1) {
//                 dif = dif - args[j];
//                 if (dif === 0) {
//                 console.log('Yes', args[i], 'at index', i,',', args[j], 'at index', j);
//                 }
//                 else if (dif < 0) {
//                 dif = N - args[i];
//                 }
//             }
//         }
//     }
// }

function solve(args) {
    let sum = args.shift();
    let arr = args;
    let len = arr.length;
    let currentSum;
    let isSum = false;

    for(let i = 0; i < len; i += 1) {
        currentSum = sum - arr[i];
        for(let j = i + 1; j < len; j += 1) {
            if (currentSum === 0) {
                console.log(`Yes, from ${arr[i]} at index ${i} to ${arr[j - 1]} at index ${j - 1}`);
                j = len - 1;
                isSum = true;
            }
            if (currentSum > 0) {
                currentSum -= arr[j];
            }
            if (currentSum < 0) {
                j = len - 1;
            }
        }
    }
    if (!isSum) {
        console.log('No.');
    }
}

solve([14, 2, 1, 2, 4, 3, 5, 2, 6]);
//solve([15, 2, 1, 2, 4, 3, 5, 2, 6]);
//solve([11, 4, 3, 1, 4, 2, 5, 8]);