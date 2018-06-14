'use strict';

//Write a method that returns the last digit of given integer as an English word.
//Write a program that reads a number and prints the result of the method.

// function solve(args) {
//     function lastDigit(x) {
//         if (x % 10 === 0) {
//             console.log('zero');
//         }
//         else if (x % 10 === 1) {
//             console.log('one');            
//         }
//         else if (x % 10 === 2) {
//             console.log('two');            
//         }
//         else if (x % 10 === 3) {
//             console.log('three');            
//         }
//         else if (x % 10 === 4) {
//             console.log('four');            
//         }
//         else if (x % 10 === 5) {
//             console.log('five');            
//         }
//         else if (x % 10 === 6) {
//             console.log('six');            
//         }
//         else if (x % 10 === 7) {
//             console.log('seven');            
//         }
//         else if (x % 10 === 8) {
//             console.log('eight');            
//         }
//         else if (x % 10 === 9) {
//             console.log('nine');            
//         }
//     }
//     lastDigit(args);
// }

function solve(args) {
    function lastDigit(x) {
        switch (x % 10) {
            case 0: console.log('zero'); break;
            case 1: console.log('one'); break;
            case 2: console.log('two'); break;
            case 3: console.log('three'); break;
            case 4: console.log('four'); break;
            case 5: console.log('five'); break;
            case 6: console.log('six'); break;
            case 7: console.log('seven'); break;
            case 8: console.log('eight'); break;
            case 9: console.log('nine'); break;
        
            default: break;
        }
    }
    lastDigit(args);
}



solve(42);
solve(1150);
solve(427);