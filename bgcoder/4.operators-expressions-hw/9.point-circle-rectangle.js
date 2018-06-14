'use strict';

// Implement a javascript function that accepts an array with a pair of coordinates x and y
// and uses an expression to checks for given point (x, y) if it is within the circle K({1, 1}, 1.5) 
// and out of the rectangle R(top=1, left=-1, width=6, height=2).

function solve(args) {
    let x = +args[0];
    let y = +args[1];
    let c = Math.sqrt((Math.pow((x - 1), 2) + Math.pow((y - 1), 2)), 2);
    if ( (c <= 1.5) && (((x >= -1) && (x <= 5)) && ((y >= -1) && (y <= 1))) ) {
        console.log('inside circle inside rectangle');
    }
    if ( (c > 1.5) && (((x >= -1) && (x <= 5)) && ((y >= -1) && (y <= 1))) ) {
        console.log('outside circle inside rectangle');
    }
    if ( (c <= 1.5) && (((x < -1) || (x > 5)) || ((y < -1) || (y > 1))) ) {
        console.log('inside circle outside rectangle');
    } 
    if ( (c > 1.5) && (((x < -1) || (x > 5)) || ((y < -1) || (y > 1))) ) {
        console.log('outside circle outside rectangle');
    }     
}

solve (['2.5', '2']);
solve (['0', '1']);
solve (['2.5', '1']);
solve (['1', '2']);
solve (['11', '22']);