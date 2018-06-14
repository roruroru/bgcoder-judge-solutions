'use strict';

function solve(args) {
    let arr = args[0].split('');
    let dotIndex = arr.indexOf('.');
    if (dotIndex > -1) {
        arr.splice(dotIndex, 1);
    }
    let dashIndex = arr.indexOf('-');
    if (dashIndex > -1) {
        arr.splice(dashIndex, 1);
    }
    let arrN = arr.map(Number);
    let sum;
    while (true) {
        sum = arrN.reduce((x, y) => x + y);
        if (sum > 9) {
            arrN = sum.toString().split('').map(Number);
        } else {
            console.log(sum);
            break;
        }
    }
}

solve(['102000034000567.00000800000900']);
solve(['-4321']);