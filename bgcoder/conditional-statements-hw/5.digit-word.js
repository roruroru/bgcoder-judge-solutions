'use strict';

// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
//  Print not a digit in case of invalid input. Use a switch statement.

// function solve(args) {
//     let digit = +args[0];
//     switch (digit) {
//         case 0:
//             console.log('zero');
//             break;
//         case 1:
//             console.log('one');
//             break;
//         case 2:
//             console.log('two');
//             break;
//         case 3:
//             console.log('three');
//             break;
//         case 4:
//             console.log('four');
//             break;
//         case 5:
//             console.log('five');
//             break;
//         case 6:
//             console.log('six');
//             break;
//         case 7:
//             console.log('seven');
//             break;
//         case 8:
//             console.log('eight');
//             break;
//         case 9:
//             console.log('nine');
//             break;
//         default: console.log('not a digit');
//             break;
//     }
// }

function solve(args) {
    let n = +args[0];

    switch (n) {
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
    
        default: console.log('not a digit'); break;
    }
}

solve(['1']);
solve(['2']);
solve(['3']);
solve(['4']);
solve(['5']);
solve(['6']);
solve(['7']);
solve(['8']);
solve(['9']);
solve(['0']);
solve(['11']);
solve(['-2']);
solve(['hi']);
solve(['0.5']);
solve(['seven']);