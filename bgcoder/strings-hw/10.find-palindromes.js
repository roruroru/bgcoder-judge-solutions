'use strict';

// Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

// function solve(args) {
//     let text = args[0];
//     let arr = text.split(' ');
//     let result = [],
//         strReversed = '';
//     console.log(arr);
//     for(let str of arr) {
//         for(let i = str.length - 1; i >= 0; i -= 1) {
//             strReversed += str[i];
//         }
//         if (str === strReversed) {
//             result.push(str);
//             strReversed = '';
//         }
//         else {
//             strReversed = '';            
//         }
//     }
//     console.log(result);
// }

function solve(args) {
    let text = args[0];
    let arr = text.split(' ');
    let reversedString = '';
    let reversingArr = [];
    let result = [];
    for(let str of arr) {
        reversingArr = str.split('');
        reversedString = reversingArr.reverse()
                                    .join('');
        if (reversedString === str) {
            result.push(str);
        }
    }
    console.log(result);
}

solve(['ABBA eat asddsa fghjkl kdskkdfkjd exe lamal hdhhdsfhd ksakdsakd krakra kraark']);