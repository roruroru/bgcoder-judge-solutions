'use strict';

// Write a function that extracts the content of a html page given as text. 
// The function should return anything that is in a tag, without the tags.

// function solve(args) {
//     let text = args.join('');
//     console.log(text);
//     let result = '';
//     function extractHtml(text) {
//         for(let i = 0; i < text.length; i += 1) {
//             if (text[i] === '<') {
//                 i = text.indexOf('>', i);
//             }
//             if (text[i] !== '>') {
//                 result += text[i];
//             }
//         }
//         return result;
//     }
//     let str = extractHtml(text);
//     console.log(str.replace(/\s\s+/gm, ''));
// }

function solve(args) {
    let output = '';
    let matchTags = /<.*?>/ig;

    for (let line of args) {
        output += line.replace(matchTags, '').trim();
    }

    console.log(output);
}

solve([
	'<html>',
	'  <head>',
	'    <title>Sample site</title>',
	'  </head>',
	'  <body>',
	'    <div>text',
	'      <div>more text</div>',
	'      and more...',
	'    </div>',
	'    in body',
	'  </body>',
	'</html>'
]);