'use strict';

function solve(args) {
    let message = args[0];
    let len = message.length;
    let resultArr = [];

    resultArr.push(message[0]);
    for(let i = 1; i < len; i += 1) {
        if (message[i] === message[i - 1]) {
            continue;
        }
        else {
            resultArr.push(message[i]);
        }
    }
    console.log(resultArr.join(''));
}

solve(['Hello']);
solve(['hoboobbo422222Aaao']);