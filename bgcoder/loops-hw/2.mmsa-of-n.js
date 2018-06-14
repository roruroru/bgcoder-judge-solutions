'use strict';

// Implement a javascript function that accepts an array of floating-point numbers as strings and
//  returns the minimal, the maximal number, the sum and the average of all numbers (displayed with 2 digits 
//     after the decimal point).

// function solve(args) {
//     let array = args,
//         i = 0,
//         sum = 0;       
//     while (i < array.length) {
//         sum += +array[i];
//             i += 1;            
//     }
//         console.log('min=' + Math.min(...array).toFixed(2));
//         console.log('max=' + Math.max(...array).toFixed(2));
//         console.log('sum=' + sum.toFixed(2));
//         console.log('avg=' + ((sum) / (array.length)).toFixed(2));
// }

function solve(args) {
    let arr = args.map(Number)
    let min = arr[0],
        max = arr[0],
        sum = 0,
        avg = 0,
        len = arr.length;

    for(let item of arr) {
        if (min > item) {
            min = item;
        }
        if (max < item) {
            max = item;
        }
        sum += item;
    }
    avg = sum/len;
    console.log(`min=${min.toFixed(2)}\nmax=${max.toFixed(2)}\nsum=${sum.toFixed(2)}\navg=${avg.toFixed(2)}`);
}

solve (['2', '5', '1']);
solve (['2', '-1', '4']);