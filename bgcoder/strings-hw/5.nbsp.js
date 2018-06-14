'use strict';

// Write a function that replaces non breaking white-spaces in a text with &nbsp.

// function solve(args) {
//     let str = args[0];
//     let nbsp = str.replace(/\s/g, '&nbsp;');
//     console.log(nbsp);    
// }

function solve(args) {
    let str = args[0];
    let arr = str.split(' ');
    let len = arr.length;
    let replaced = '';
    for(let i = 0; i < len - 1; i += 1) {
        replaced += arr[i] + '&nbsp;';
    }
    replaced += arr[len - 1];

    // let replaced = str.replace(' ', '&nbsp');
    console.log(replaced);
}

solve([ 'hello world' ]);
solve([ 'This text contains 4 spaces!!' ]);