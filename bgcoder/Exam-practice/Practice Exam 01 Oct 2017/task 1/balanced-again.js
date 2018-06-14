'use strict';

function solve(args) {
    let sum = 0;
    for(let num of args) {
        let numArr = num.split('').map(Number);
        if (numArr[1] === numArr[0] + numArr[2]) {
            sum += +num;
        } else {
            break;
        }
    }
    console.log(sum);
}

solve(['132', '123']);
solve(['275', '693', '110', '742']);