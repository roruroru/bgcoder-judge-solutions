'use strict';

function solve(args) {
    let output = '';
    let match = /<.*?>/gi;

    for(let line of args) {
        line = line.replace(match, '').trim();
        output += line;
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