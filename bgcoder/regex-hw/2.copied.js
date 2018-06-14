'use strict';

// Write a function that puts the value of an object into the content/attributes of HTML tags.

//     Add the function to the String.prototype and use it in the following way:


function solve(args) {
    var obj = JSON.parse(args[0]);
    //console.log(obj);
    var text = '' + args[1];
    //console.log(text);
    text = text.replace(/'/, '"');
    var regex = /data-bind-(.*?)="(.*?)"/gmi;
    var currentMatch;
    while (currentMatch = regex.exec(text)) {
        console.log(currentMatch);
        var index = text.indexOf('>');
        if (text[index - 1] === '/') { // if tag is self closing
            index--;
        }
        var field = currentMatch[1];
        //console.log(field);
        if (field.toLowerCase() === 'content') {
            var arr = text.split('');
            var x = arr.splice(index + 1, 0, obj[currentMatch[2]]);
            text = arr.join('');
        }
        else {
            var arr2 = text.split('');
            var x2 = arr2.splice(index, 0, " " + field + '="' + obj[currentMatch[2]] + '"');
            text = arr2.join('');
        }
    }

    console.log(text);
}

// solve([
// 	'{ "name": "Steven" }',
// 	'<div data-bind-content="name"></div>'
// ]);
solve([
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);