'use strict';

// Write a function that formats a string using placeholders.
//  The function should work with up to 30 placeholders and all types.

// var str = stringFormat('Hello {0}!', 'Peter'); 
// // str = 'Hello Peter!';

// var frmt = '{0}, {1}, {0} text {2}';
// var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
// // str = '1, Pesho, 1 text Gosho'

// function solve(args) {
//     let str = args.shift(),
//         arr = args,
//         placeholder,
//         formatted = '';
//     console.log(args);
//     console.log(str);

//     for(let i = 0; i < arr.length; i += 1) {
//         placeholder = '{' + i + '}';
//         while (str.indexOf(placeholder) > -1) {
//             str = str.replace(placeholder, arr[i]);
//         }
//     }
//     console.log(str);
// }

function solve(args) {
    let frmt = args[0];
    let x = args[1];
    let y = args[2];
    let z = args[3];

    function stringFormat(frmt, x, y, z) {
        let str = frmt.replace(/\{0\}/gm, x)
                        .replace(/\{1\}/gm, y)
                        .replace(/\{2\}/gm, z);
        return str;
    }

    console.log(stringFormat(frmt, x, y, z));
}

solve(['{0}, {1}, {0} text {2}',  1, 'Pesho', 'Gosho']);