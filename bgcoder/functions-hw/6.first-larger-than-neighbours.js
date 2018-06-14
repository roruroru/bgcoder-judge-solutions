'use strict';

//Write a method that returns the index of the first element in array that is larger than its neighbours,
// or -1, if there is no such element.

// function solve(args) {
//     let N = +args.shift();
//     let s = args.join(" ");
//     let a = s.split(" ");
//     function firstLargerThanNeighbours(x) {
//         let counter = 0;
//         for(let i = 1; i < N - 1; i += 1) {
//             if ((+a[i] > +a[i-1]) && +a[i] > +a[i+1]) {
//                 counter += 1;
//                 console.log(i);
//                 break;
//             }
//         }
//         if (counter === 0) {
//             console.log(-1);
//         } 
//     }
//     firstLargerThanNeighbours(a);
// }

function solve(args) {
    function firstLargerThanNeighbours(str) {
        let arr = str.split(' ').map(Number);
        for(let i = 1; i < args[0] - 1; i += 1) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                arr.push(arr[i]);
            }
        }
        console.log(arr.indexOf(arr[args[0]]));
    }
    firstLargerThanNeighbours(args[1]);
}

solve(['6', '-26 -25 -28 31 2 27']);
solve(['6', '-26 -27 -28 31 2 27']);
solve(['6', '-26 -27 -28 31 32 33']);