'use strict';

// Write a function that puts the value of an object into
// the content/attributes of HTML tags.
// Add the function to the String.prototype

function solve(args) {
    let obj = JSON.parse(args[0]);
    let tags = args[1];
    //console.log(tags);

    String.prototype.bind = function(output, parameters) {
        let regexContent,
            regexHref,
            regexClass,
            prop;
            output = this;
        for(let prop in parameters) {
            // regexContent = new RegExp('(<.*?data-bind-content="' + contAttr + '".*?>)(.*?)(<\/.*?>)', 'g');
            // regexHref = new RegExp('(<.*?data-bind-href="' + contAttr + '".*?)>', 'g');
            // regexClass = new RegExp('(<.*?data-bind-class="(' + contAttr + ')".*?)>', 'g');

        output = output.replace((/(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\/.*?>)/g), "$1 + parameters[prop] + $2")
                    .replace((/(<.*?data-bind-href="' + prop + '".*?)>/g), '$1 + ' href="' + parameters[prop] + '">')
                    .replace((/(<.*?data-bind-class=" + prop + ".*?)>/g), '$1 + ' class="' + parameters[prop] + '">');
        }
        console.log(output);
    };
    tags.bind('', obj);
}

solve([
	'{ "name": "Steven" }',
	'<div data-bind-content="name"></div>'
]);
solve([
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);