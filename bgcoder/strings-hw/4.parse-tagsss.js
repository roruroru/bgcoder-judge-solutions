'use strict';

function solve(args) {
    let text = args[0];
    let parsedArr = [];
    let arr = text.split('<');
    arr.push('');
    //console.log(arr);
    for (let i = 0; i < arr.length - 1; i += 1) {
        //console.log(arr[i]);
        if (arr[i].match(/^orgcase>.*/)) { //begins with orgcase
            parsedArr.push(arr[i].replace(/orgcase>/, ''));
        }
        else if (arr[i].match(/^\/orgcase>.*/)) { //begins with /orgcase
            if (arr[i + 1].match(/^\/lowcase>.*/)) {  //begins with /lowcase
                parsedArr.push(arr[i]
                    .toLowerCase()
                    .replace(/\/orgcase>/i, ''));
            }
            else if (arr[i + 1].match(/^\/upcase>.*/)) {  //begins with /upcase
                parsedArr.push(arr[i]
                    .toUpperCase()
                    .replace(/\/orgcase>/i, ''));
            }
            else {
                parsedArr.push(arr[i].replace(/\/orgcase>/, ''));
            }
        }
        else if (arr[i].match(/^lowcase>.*/)) {  //begins with lowcase
            parsedArr.push(arr[i]
                .toLowerCase()
                .replace(/lowcase>/i, ''));
        }
        else if (arr[i].match(/^\/lowcase>.*/)) {  //begins with /lowcase
            if (arr[i + 1].match(/^\/orgcase>.*/)) {  //begins with lowcase --> orgcase
                parsedArr.push(arr[i].replace(/\/lowcase>/i, ''));
            }
            else if (arr[i + 1].match(/^\/upcase>.*/)) {  //begins with /upcase
                parsedArr.push(arr[i]
                    .toUpperCase()
                    .replace(/\/lowcase>/i, ''));
            }
            else {
                parsedArr.push(arr[i].replace(/\/lowcase>/, ''));
            }
        }
        else if (arr[i].match(/^upcase>.*/)) { //begins with upcase
            parsedArr.push(arr[i]
                .toUpperCase()
                .replace(/upcase>/i, ''));
        }
        else if (arr[i].match(/^\/upcase>.*/)) { //begins with /upcase
            if (arr[i + 1].match(/^\/lowcase>.*/)) { //begins with /lowcase
                parsedArr.push(arr[i]
                    .toLowerCase()
                    .replace(/\/upcase>/i, ''));
            }
            else if (arr[i + 1].match(/^\/orgcase>.*/)) { //begins with /upcase --> orgcase
                parsedArr.push(arr[i].replace(/\/upcase>/i, ''));
            }
            else {
                parsedArr.push(arr[i].replace(/\/upcase>/, ''));
            }
        }
        else {
            parsedArr.push(arr[i]);
        }
    }
    console.log(parsedArr.join(''));
}

//solve([ 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);
//solve([ 'We are <orgcase>liViNg</orgcase> in <orgcase>a <upcase>yellow submarine</upcase>. We</orgcase> <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.' ]);
solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow <orgcase>sub</orgcase>marine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);