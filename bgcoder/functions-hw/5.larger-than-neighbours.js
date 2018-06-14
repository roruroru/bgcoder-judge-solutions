'use strict';

//Write a method that checks if the element at given position in given array of integers is
// larger than its two neighbours (when such exist).
 //Write program that reads an array of numbers and prints how many of them are larger than their neighbours.

// function solve(args) {
//     let N = +args.shift();
//     let s = args.join(" ");
//     let a = s.split(" ");
//     function largerThanNeighbours(x) {
//         let counter = 0;
//         for(let i = 1; i < N - 1; i += 1) {
//             if ((+a[i] > a[i-1]) && (+a[i] > a[i+1])) {
//                 counter += 1;
//             }
//         }
//         console.log(counter);
//     }
// largerThanNeighbours(a);
// }

function solve(args) {
    function largerThanNeighbours(str) {
        let arr = str.split(' ').map(Number);
        let counter = 0;
        for(let i = 1; i < args[0] - 1; i += 1) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                counter++;
            }
        }
        console.log(counter);
    }
    largerThanNeighbours(args[1]);
}

solve(['6','-26 -25 -28 31 2 27']);
solve(['15','-26 -25 -28 31 2 27 1 3 1 3 1 3 1 3 1']);
solve(['10','-26 -25 -28 31 2 27 28 27 35 30']);