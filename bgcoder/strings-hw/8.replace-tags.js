'use strict';

// Write a JavaScript function that replaces in a HTML document given as string
//  all the tags <a href="…">…</a> with corresponding tags [TEXT](URL).

// function solve(args) {
//     let str = args[0];
//     let text = '',
//         url = '',
//         replaced = [];
//     //console.log(str);
//     let arr = str.split("<a href=");
//     //console.log(arr);
//     for(let item of arr) {
//         if (item.match(/^"[^"]*">[^<]*<\/a>/g)) {
//             url = item.replace(/^"/g, '')
//                         .replace(/">[^<]*<\/a>.*/g, '');
//             text = item.replace(/^"[^"]*">/g, '')
//                         .replace(/<\/a>.*/g, '');
//             replaced.push(item.replace(/^"[^"]*">[^<]*<\/a>/g, `[${text}](${url})`));
//         //console.log(item);
//         //console.log(url);
//         //console.log(text);
//         }
//         else {
//             replaced.push(item);
//         }
//     }
//     console.log(replaced.join(''));
// //let replaced = str.replace(/<a href="[^"]*"[^>]*>[^<]*<\/a>/g, )
//     // let text = str.match(/>[^<]*[^>]*<\/a>/g);
//     // console.log(text);
// }

function solve(args) {
    let text = args[0];
    let arr = text.split('<a href=');
    let replacedStr = '';
    let result = [];
    let regex = /^".+<\/a>/g;
    let regex2 = /^"([^"]*)">([^<]*)<[^>]*>/g;
    for(let str of arr) {
        if (str.match(regex)) {
            str = str.replace(regex2, '[$2]($1)');
            result.push(str);
        } else {
            result.push(str);
        }
    }
    console.log(result.join(''));
}



solve([ '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>' ]);