'use strict';

// function solve(args) {
//     let N = args,
//         i,
//         j,
//         isPrime,
//         value;
//     for(let i = N; i >= 2; i -= 1) {
//         isPrime = true;
//             for(let j = 2; j <= Math.sqrt(N); j += 1) {
//                 if (i % j === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }
//         if (isPrime) {
//             console.log(i);
//             break;
//             }
//         }
// }

function solve(args) {
    let n = +args[0];
    //console.log(n);
    let m = Math.sqrt(n);
    //console.log(m);
    let arr = new Array(n + 1);
    arr.fill(true);
    //console.log(arr);
    for(let i = 2; i <= m; i += 1) {
        if (arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    // for(let i = n; i >= 0; i -= 1) {
    //     if (arr[i] === true) {
    //         return i;
    //     }
    // }
    let maxPrime = arr.lastIndexOf(true);
    console.log(maxPrime);
}

solve(['13']);
solve(['126']);
solve(['26']);
