'use strict';

// Write a function for extracting all email addresses from given text.
//  All sub-strings that match the format <identifier>@<host>…<domain> should be recognized as emails.
//   Return the emails as array of strings.

// function solve(args) {
//     let text = args[0];
//     let arr = text.split(' ');
//     let emails = [];
//     console.log(arr);
//     for(let item of arr){
//         if (item.match(/[\w.-]+@[\w.-]+\.[\w.]+/)) {
//             emails.push(item);
//         }
//         // if (item.match(/^[^@]+@{1}[^@]+\.[^@]+/)) {
//         //     emails.push(item);
//         // }
//     }
//     console.log(emails);
// }

function solve(args) {
    let text = args[0];
    let arr = text.split(' ');
    let res = [];
    for(let str of arr) {
        if (str.match(/^[^@.]\w+@[^@.]*\w+\.[^@.]*\w+/gi)) {
            res.push(str);
        }
    }
    console.log(res);
}

solve(['asdad asdads thgfhgfh tttt@abv.bg urru@turtu uk@uk.uk sj.dd@j.a.s rokladf @@.com @@.c@om lubo@penev.co.uk']);