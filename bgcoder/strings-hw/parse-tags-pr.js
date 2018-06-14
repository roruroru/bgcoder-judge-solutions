'use strict';

function solve(args) {
    let text = args[0];
    let len = text.length;
    let inTag = false;
    let result = [];
    let tags = [];
    let currentTag = '';

    for (let i = 0; i < len; i += 1) {
        if (text[i] === '<') {
            inTag = true;
        }

        else if (text[i] === '>' && inTag) {
            inTag = false;
            currentTag += text[i];
            tags.push(currentTag);
            currentTag = '';
        }

        else if (!inTag) {
            if (tags.length === 0) {
                result.push(text[i]);
            }
            else if (tags.length !== 0 && tags[tags.length - 1].indexOf('upcase') !== -1) {
                result.push(text[i].toUpperCase());
            }
            else if (tags.length !== 0 && tags[tags.length - 1].indexOf('lowcase') !== -1) {
                result.push(text[i].toLowerCase());
            }
            else {
                result.push(text[i]);
            }
        }

        if (text[i] === '>' || inTag) {
            currentTag += text[i];
        }

        if (tags.length !== 0 && tags[tags.length - 1].indexOf('</') !== -1) {
            tags.pop();
            tags.pop();
        }
    }
    console.log(result.join(''));
}



// solve([
//     'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
// ]);
solve([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow <orgcase>sub<upcase>mar</upcase>ine</orgcase></upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
]);
