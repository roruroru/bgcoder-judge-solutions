'use strict';

// Implement a javascript function that takes an argument array as a parameter 
// and calculates rectangle’s area and perimeter by given width and height.
// The width and height will both be passed in the argument array.

// function solve(args) {
//     let a = +args[0];
//     let b = +args[1];
//     console.log((a * b).toFixed(2) + ' ' + ((a + b) * 2).toFixed(2));
// }


function solve(args) {
    let [a, b] = args.map(Number);
    // let area = a * b;
    // let perimeter = 2 * (a + b);
    console.log((a * b).toFixed(2) + ' ' + (2 * (a + b)).toFixed(2)); 
}


solve(['2.5', '3.9']);
solve([4, 3]);
solve([5, 3]);
solve([7, 3]);
solve([9.5, 3.8]);