'use strict';

// Write a JavaScript function that finds how many times a substring is contained in
//  a given text (perform case insensitive search).

// function solve(args) {
//     let exp = args[0],
//         text = args[1];
//     let len = text.length,
//         lenExp = exp.length,
//         counter = 0;
//     let index,
//         dif;
//     // while (index >= 0) {
//     //     console.log(index);
//     //     index = text.indexOf(exp, index + lenExp);
//     // }
//     for(let i = 0; i < len - 1; i = dif + lenExp) {
//         index = text.indexOf(exp, index + 1);
//         dif = index - i;
//         console.log(index);
//         if (index >= 0) {
//             counter += 1;
//         }
//         else {
//             break;
//         }
//     }
//     console.log(counter);
//     //console.log(text.search(exp));
//     console.log(exp);
//     console.log(text);
//     console.log(len);
// }

function solve(args) {
    let exp = args[0];
    let text = args[1];
    let regex = new RegExp(exp, 'gmi');
    let arr = text.split(regex);
    let len = arr.length;
    console.log(len - 1);
}


solve([
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);