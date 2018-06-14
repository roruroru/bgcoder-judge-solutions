'use strict';

function findLexSmallest(obj) {
    let smallestLex = 'zzz';
    for (let prop in obj) {
        if (prop < smallestLex) {
            smallestLex = prop;            
        }
    }
    console.log('The lexicographically smallest property in ' + obj + ' is ' + smallestLex);
}
function findLexLargest(obj) {
    let largestLex = 'AAA';
    for (let prop in obj) {
        if (prop > largestLex) {
            largestLex = prop;            
        }
    }
    console.log('The lexicographically largest property in ' + obj + ' is ' + largestLex);
}

findLexSmallest(document);
findLexSmallest(window);
findLexSmallest(navigator);
findLexLargest(document);
findLexLargest(window);
findLexLargest(navigator);