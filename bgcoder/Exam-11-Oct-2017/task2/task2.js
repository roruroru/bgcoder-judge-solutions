'use strict';

function solve(args) {
    let b1 = +args[0];
    let b2 = +args[1];
    let b3 = +args[2];
    let layers = +args[3];
    let bricks = [];

    console.log(b1);
    console.log(b2 + ' ' + b3);
    for(let i = 2; i < layers ; i += 1) {
        for(let j = 0; j <= i ; j += 1) {
            bricks[j] = b1 + b2 + b3;
            b1 = b2;
            b2 = b3;
            b3 = bricks[j];
        }
        console.log(bricks.join(' '));
    }
}

solve(['1',
    '4',
    '2',
    '3']);
solve(['1',
    '-1',
    '1',
    '4']);