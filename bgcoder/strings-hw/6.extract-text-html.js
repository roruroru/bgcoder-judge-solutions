'use strict';

function solve(args) {
    let arr = args,
        extracted = [],
        arrr = [];
    let st = arr.join('');
    //console.log(st);
    arrr.push(st.replace(/[ ]*<[^>]*[^<]*>[ ]*/g, ''));
    console.log(arrr.join(''));
    // for(let str of arr) {
    // if (str.match(/[^<]*[^>]*<[^>]*>/)) {
    //         extracted.push(str.replace(/<[^>]*>/, ''));
    //     }
    // if (str.match(/[^<]*[^>]*<\/[^>]*>/)) {
    //         extracted.push(str.replace(/<\/[^>]*>/, ''));
    //     }
    // else {
    //     extracted.push(str);
    // }
    // }
    // console.log(extracted);
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