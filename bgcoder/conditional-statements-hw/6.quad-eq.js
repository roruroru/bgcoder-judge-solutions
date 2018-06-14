'use strict';

// function solve(args) {
//     let a = +args[0],
//         b = +args[1],
//         c = +args[2];
//     let d = Math.pow(b, 2) - 4 * a * c,
//         x1 = ((-b + Math.sqrt(d, 2)) / (2 * a)),
//         x2 = ((-b - Math.sqrt(d, 2)) / (2 * a));
//     if (d > 0) {
//         if (x1 > x2) {
//             console.log('x1=' + x2.toFixed(2) + '; ' + 'x2=' + x1.toFixed(2));
//         } else {
//             console.log('x1=' + x1.toFixed(2) + '; ' + 'x2=' + x2.toFixed(2));
//         }
//     }
//     else if (d === 0) {
//         console.log('x1=x2=' + x1.toFixed(2));
//     }
//     else {
//         console.log('no real roots');
//     }
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let x, y;

    let d = (b * b) - (4 * a * c);
    if (d < 0) {
        console.log('no real roots');
    } 
    else if (d === 0) {
        x = -b / (2 * a);
        console.log(`x1=x2=${x.toFixed(2)}`);
    }
    else {
        x = (-b + Math.sqrt(d)) / (2 * a);
        y = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`x1=${y.toFixed(2)}; x2=${x.toFixed(2)}`);
    }
}

solve(['2', '5', '-3']);
solve(['-1', '3', '0']);
solve(['-0.5', '4', '-8']);
solve(['5', '2', '8']);
solve(['0.2', '9.572', '0.2']);