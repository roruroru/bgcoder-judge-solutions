'use strict';

//Write a method that asks the user for his name and prints Hello, <name>!. 
//Write a program to test this method.

// function solve(args) {
//     let name = args;
//     console.log(`Hello, ${name}!`);
// }

// function solve(args) {
//     function helloName(name) {
//         console.log('Hello, ' + name + '!');
//     }
//     helloName(args);
// }

function solve(args) {
    function helloName(name) {
        console.log(`Hello, ${name}!`);
    }
    helloName(args);
}

solve('Peter');