'use strict';

function solve(args) {
    let text = args[0];
    let parsedArr = [];
    let arr = text.split('<');
    for(let str of arr) {
        console.log(str);
    if (str.match(/^orgcase>.*/)) {
            parsedArr.push(str.replace(/orgcase>/, ''));
        }
    else if (str.match(/^\/orgcase>.*/)) {
            parsedArr.push(str.replace(/\/orgcase>/, ''));
        }
    else if (str.match(/^lowcase>.*/)) {
            parsedArr.push(str
                            .toLowerCase()
                            .replace(/lowcase>/i, ''));
        }
    else if (str.match(/^\/lowcase>.*/)) {
            parsedArr.push(str.replace(/\/lowcase>/, ''));
        }
    else if (str.match(/^upcase>.*/)) {
            parsedArr.push(str
                            .toUpperCase()
                            .replace(/upcase>/i, ''));
        }
    else if (str.match(/^\/upcase>.*/)) {
            parsedArr.push(str.replace(/\/upcase>/, ''));
        }
    else {
        parsedArr.push(str);
    }
    }
    console.log(parsedArr.join(''));
}

//solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);
//solve([ 'We are <orgcase>liViNg</orgcase> in <orgcase>a <upcase>yellow submarine</upcase>. We</orgcase> <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);
solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow <orgcase>sub</orgcase>marine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);