'use strict';

//Write a method that returns the maximal element in a portion of array of integers starting at given index. 
//Using it write another method that sorts an array in ascending / descending order. 
//Write a program that sorts a given array.

// function solve(args) {
//     let N = args.shift();
//     let s = args.join(" ");
//     let a = s.split(" ");
//     function maxElement(x, i) {
//         let mE = x[i];
//         for(i; i < N; i += 1) {
//             if (+mE < +x[i]) {
//                 mE = x[i];
//             }
//         }
//         return mE;
//     }
//         function sort(b) {
//         b = a;
//         for(let j = 0; j < N; j += 1) {
//             let sorted = maxElement(b, j);
//             let k = b.indexOf(sorted);
//             b.splice(k, 1);
//             b.unshift(+sorted);
//         }
//         b = b.join(" ");
//         console.log(b);
//     }
//     sort(a);
// }

function solve(args) {
    let arr = args[1].split(' ').map(Number);
    let sortedDesc = [];
    let sortedAsc = [];

    function maxElement(arr, index) {
        let max = arr[index];
        for(let i = index + 1; i < args[0]; i += 1) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    }
    
    function sortArr(arr) {
        for(let i = args[0] - 1; i >= 0; i -= 1) {
            sortedDesc.push(maxElement(arr, 0));
            sortedAsc.unshift(maxElement(arr, 0));
            let ind = arr.indexOf(maxElement(arr, 0));
            arr.splice(ind, 1);
        }
        console.log(sortedAsc.join(' '));
        //console.log(sortedDesc.join(' '));
    }
    sortArr(arr);
}


solve(['6','3 4 1 5 2 6']);
// solve(['10','36 10 1 34 28 38 31 27 30 20']);
// solve(['14','36 10 1 34 28 38 31 27 30 20 2 -1 5 6']);
// solve(['12','36 10 1 34 28 38 31 27 30 2060 700 300']);