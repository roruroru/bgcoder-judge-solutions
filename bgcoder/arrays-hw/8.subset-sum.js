'use strict';

//We are given an array of integers and a number S.
//Write a program to find if there exists a subset of the elements of the array that has a sum S.

// function solve(args) {
//     let N = args.shift(),
//     i,
//     j,
//     dif;
//     for(let i = 0; i < N; i += 1) {
//         dif = N - args[i];
//         if (dif === 0) {
//             console.log('Yes');
//         }
//         else if (dif < 0) {
//             dif = N;
//         }
//         else {
//             for(let j = i + 1; j < N; j += 1) {
//                 dif = dif - args[j];
//                 if (dif === 0) {
//                 console.log('Yes');
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
    let currentSum = sum;
    let arr = args.sort((x, y) => y - x);
    let n = arr.length;
    //console.log(arr, sum);
    for(let i = 0; i < n; i += 1) {
        currentSum = sum - arr[i];
        for(let j = 1; j < n; j += 1) {
            if (currentSum === 0) {
                console.log('yes');
                return; //else calculates all possible cases
            }
            currentSum -= arr[j];
            if (currentSum < 0) {
                currentSum += arr[j];
            }
        }
        if (i === arr.length - 1 && currentSum > 0) {
            console.log('no');
        }
    }
}

solve([14, 2, 1, 2, 4, 3, 5, 2, 6]);
solve([15, 2, 1, 2, 4, 3, 5, 2, 6]);
solve([55, 2, 1, 2, 4, 3, 5, 2, 6]);