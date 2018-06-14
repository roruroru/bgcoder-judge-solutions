'use strict';

//Write a program that reads a number N and generates and prints all the permutations of the numbers [1 … N].

// function solve(args) {
//     let N = +args[0],
//         arr = [],
//         res = [],
//         a = [],
//         resSt = [],
//         resFin = [];
//     for(let i = 0; i < N; i += 1) {
//         arr[i] = i + 1;
//     }
//  //   console.log(arr);
//         for(let j = 0; j < N; j += 1) {  
//             let char = arr[j];
//  //           console.log(arr);
//             if (arr.length < 2) {
//                 console.log(arr);
//             } else {
//             //else if (arr.indexOf(char) !== j) {
//                 let resSt = [arr.slice(0, j)];
//                 console.log('resst = ' + resSt); 
//                 let resFin = [arr.slice((j + 1), N)];
//                 console.log('resfin = ' + resFin);
//                 a.push.apply(resSt, resFin);
//                 console.log(a);
//                 console.log(arr);
//         }
//                 //                for(let subPerm of remainingArr) {
//  //                   res.push(char + subPerm);
//    //         console.log(res);
//   //              }
//            // }
//         }
//         //res = (current.slice().concat(next));
//         //console.log(next);
//         //console.log(res);
    
// }

function solve(args) {
    let n = +args[0];
    console.log(n);
    let arr = [];
    for(let i = 0; i < n; i += 1) {
        arr[i] = i + 1;
    }
    //console.log(arr);
    let perm = arr.slice();
    for(let i = 0; i < n; i += 1) {
        for(let j = 0; j < n; j += 1) {
            let spl = perm.splice(i, 1).map(Number);
            perm.splice(j, 0, spl[0]);
            console.log(perm);
            perm = arr.slice();
        } 
    }
}

//solve([2]);
solve([3]);
//solve([4]);
//solve([5]);