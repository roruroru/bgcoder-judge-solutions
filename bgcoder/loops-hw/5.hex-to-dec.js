'use strict';

// Using loops implement a javascript function that converts a hex number number to its decimal representation.

// function solve(args) {
//     let stringSplit = (args[0]).split(''),
//         dec = 0,
//         deci;
//     for (let i = (stringSplit.length - 1); i >= 0 ; i -= 1) {
//         if (stringSplit[i] == 'A') {
//             deci = 10;            
//         }
//         else if (stringSplit[i] == 'B') {
//             deci = 11;            
//         }
//         else if (stringSplit[i] == 'C') {
//             deci = 12;            
//         }
//         else if (stringSplit[i] == 'D') {
//             deci = 13;            
//         }
//         else if (stringSplit[i] == 'E') {
//             deci = 14;            
//         }
//         else if (stringSplit[i] == 'F') {
//             deci = 15;            
//         }
//         else {
//             deci = +stringSplit[i];
//         }
//         dec += deci * Math.pow(16, (stringSplit.length - i - 1));
//     }
//     console.log(dec);
// }

function solve(args) {
    let str = args[0];
    let len = str.length,
        decimal = 0, 
        converter = 0;

    for (let i = 0; i < len; i += 1) {
        //console.log(converter);
        switch (str[i]) {
            case 'A': converter = 10; break;
            case 'B': converter = 11; break;
            case 'C': converter = 12; break;
            case 'D': converter = 13; break;
            case 'E': converter = 14; break;
            case 'F': converter = 15; break;
            default: converter = +str[i]; break;
        }
        decimal += (Math.pow(16, (len - 1 - i))) * converter;
    }
    console.log(decimal);
}


solve(['FE']);
solve(['1AE3']);
solve(['4ED528CBB4']);