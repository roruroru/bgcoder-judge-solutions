'use strict';

// Problem 1. Format with placeholders

// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype

// function solve(args) {
//     //console.log(typeof args[0]);
//     //console.log(args[0]);
//     let obj = JSON.parse(args[0]);
//     let template = args[1];
//     let formatted = '';
//     console.log(obj);
//     //console.log(typeof obj);
//     String.prototype.format = function(obj) {
//         for(let prop in obj) {
//             let regex = new RegExp('#{' + prop + '}', 'g');
//             template = template.replace(regex, obj[prop]);
//         }
//         console.log(template);
//     };
//     template.format(obj);
// }

function solve(args) {
    let obj = JSON.parse(args[0]);
    let template = args[1];

    String.prototype.format = function(obj) {
        for(let prop in obj) {
            let regex = new RegExp(`#{${prop}}`, 'g');
            template = template.replace(regex, obj[prop]);
        }
        return template;
    };
    console.log(template.format(obj));
}

solve([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
    ]);
solve([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
    ]);