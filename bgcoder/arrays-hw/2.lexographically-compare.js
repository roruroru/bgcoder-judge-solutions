'use strict';

//Write a program that compares two char arrays lexicographically (letter by letter).

// function solve(args) {
//     let arr1 = args[0],
//         arr2 = args[1];

//     if (arr1 > arr2) {
//         console.log('>');
//     }
//     else if (arr1 < arr2) {
//         console.log('<');
//     }
//     else {
//         console.log('=');        
//     }
// }

function solve(args) {
    let str1 = args[0];
    let str2 = args[1];
    if (str1 > str2) {
        console.log('>');
    }
    else if (str1 < str2) {
        console.log('<');
    }
    else {
        console.log('=');
    }
}

solve(['hello', 'halo']);
solve(['Hello', 'halo']);
solve(['food', 'food']);
solve(['food', 'Food']);
solve(['Food', 'food']);

if ('A' > 'z') {
    console.log('A > z');
}
else {
    console.log('A < z');
}
if ('A' > 'a') {
    console.log('A > a');
}
else {
    console.log('A < a');
}
if ('a' > 'z') {
    console.log('a > z');
}
else {
    console.log('a < z');
}
if ('g' > 'd') {
    console.log('g > d');
}
else {
    console.log('g < d');
}
if ('g' > 'h') {
    console.log('g > h');
}
else {
    console.log('g < h');
}
if ('G' > 'd') {
    console.log('G > d');
}
else {
    console.log('G < d');
}