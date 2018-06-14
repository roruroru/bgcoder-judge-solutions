'use strict';

// Implement a javascript function that by given coordinates of a point x and y
//  and using an expression checks if given point (x, y) is inside a circle 
//  K({0, 0}, 2) - the center has coordinates (0, 0) and the circle has radius 2. 
//  The program should then print "yes DISTANCE" if the point is inside the circle or "no DISTANCE"
//   if the point is outside the circle.

// function solve(args) {
//     let a = +args[0];
//     let b = +args[1];
//     let c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)), 2);
//     if (c <= 2) {
//         console.log('yes ' + c.toFixed(2));
//     } else {
//         console.log('no ' + c.toFixed(2));
//     }
// }

function solve(args) {
    let [x, y] = args.map(Number);
    let dist = Math.sqrt((x * x) + (y * y));
    dist <= 2 ? console.log(`yes ${dist.toFixed(2)}`) : console.log(`no ${dist.toFixed(2)}`);
}

solve (['-2', '0']);
solve (['2', '0']);
solve (['100', '0']);
solve (['4', '3']);
solve (['-4', '-3']);
solve (['6', '8']);
solve (['12', '16']);
solve (['2', '3']);
solve (['-5', '8']);