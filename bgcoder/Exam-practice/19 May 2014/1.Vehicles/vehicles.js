'use strict';

function solve(args) {
    let s = +args[0];
    let count = 0;
    
    for(let trucks = 0; trucks * 10 <= s; trucks += 1) {
        for(let cars = 0; trucks * 10 + cars * 4 <= s; cars += 1) {
            for(let trikes = 0; trikes * 3 + trucks * 10 + cars * 4 <= s; trikes += 1) {
                if ((trucks * 10) + (cars * 4) + (trikes * 3) === s) {
                    count += 1;
                }
            }
        }
    }
    console.log(count);
}
// function solve(args) {
//     let s = +args[0];
//     let count = 0;
    
//     for(let i = 0; i <= 20; i += 1) {
//         for(let j = 0; j <= 50; j += 1) {
//             for(let k = 0; k <= 66; k += 1) {
//                 if ((i * 10) + (j * 4) + (k * 3) === s) {
//                     count += 1;
//                 }
//             }
//         }
//     }
//     console.log(count);
// }

solve([7]);
solve([10]);
solve([40]);