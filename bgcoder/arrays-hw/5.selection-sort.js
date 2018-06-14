'use strict';

// Sorting an array means to arrange its elements in increasing order.
//  Write a program to sort an array. Use the Selection sort algorithm:
//   Find the smallest element, move it at the first position, 
//   find the smallest from the rest, move it at the second position, etc.

// function solve(args) {
//     let x = args,
//         N = x.shift(),
//         mI,
//         i,
//         j;
//     for(i = 0; i < N - 1; i += 1) {
//         mI = i;
//         for(j = i + 1; j < N; j += 1) {
//             if (+x[mI] > +x[j]) {
//                 mI = j;
//             }
//         }
//     [x[i], x[mI]] = [x[mI], x[i]];
//     }
//     console.log(x.join('\n'));
// }

function solve(args) {
    let arr = args.map(Number);
    let n = arr.shift();
    let z, y, x, ind;

    for(let i = n - 1; i >= 0; i--) {
        let arrS = arr.slice(0, i + 1);
        y = findSmallest(arrS.slice());
        ind = arr.indexOf(y);
        x = arr.splice(ind, 1);
        arr.push(x[0]);
    }

    console.log(arr.join('\n'));

    function findSmallest(arr) {
        z = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < z) {
                z = arr[i];
            }
        }
        return z;
    }
}

solve(['6', '3', '4', '1', '5', '2', '6']);
solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);