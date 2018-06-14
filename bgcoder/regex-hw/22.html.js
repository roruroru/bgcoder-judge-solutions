'use strict';

// Write a function that puts the value of an object into
// the content/attributes of HTML tags.
// Add the function to the String.prototype

function solve(args) {
    let obj = JSON.parse(args[0]);
    let tags = '' + args[1];
    tags = tags.replace(/'/g, '"');


    String.prototype.bind = function(output, parameters) {
        var regexContent,
            regexHref,
            regexClass,
            prop;
        output = this;

        for (prop in parameters) {
            regexContent = new RegExp('(<)([a-z]+)(.*?data-bind-content="' + prop + '".*?>)(.*?)(</.*?>)', 'g');
            regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
            regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');

            output = output.replace(regexContent, '$1$2$3' + parameters[prop] + '$1/$2>')
                        .replace(regexHref, '$1' + ' href="' + parameters[prop] + '">')
                        .replace(regexClass, '$1' + ' class="' + parameters[prop] + '">');
        }

        if (output.match(/<.*?(class="[A-Z]{1}[a-z]*?") (href=".*?")>/g)) {
            output = output.replace(/(class="[A-Z]{1}[a-z]*?") (href=".*?")/g, '$2 $1');
        }
        return output;
    };
    console.log(tags.bind('', obj));
}

solve([
	'{ "name": "Steven" }',
	'<div data-bind-content="name"></div>'
]);
solve([
	'{ "name": "Elena", "link": "http://telerikacademy.com" }',
	'<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>'
]);