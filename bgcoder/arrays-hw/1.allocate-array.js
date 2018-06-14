'use strict';

//Write a program that allocates array of N integers,
 //initializes each element by its index multiplied by 5 and the prints the obtained array on the console.

// function solve(args) {
//     let N = +args[0],
//         arr = [],
//         i;
//     for(i = 0; i < N; i += 1) {
//         arr[i] = i * 5;
//         console.log(arr[i]);
//     }
// }

function solve(args) {
    let arr = [];
    let n = Number(args[0]);
    for(let i = 0; i < n; i++) {
        arr[i] = i * 5;
    }
    console.log(arr.join('\n'));
}

solve(['3']);
solve(['5']);
solve(['6']);
solve(['8']);
solve(['10']);