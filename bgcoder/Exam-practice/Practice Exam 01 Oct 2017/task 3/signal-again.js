'use strict';

function solve(args) {
    let str = args[0];
    let arr = str.split('');
    let message = [];
    message.push(arr[0]);
    let len = arr.length;
    for(let i = 1; i < len; i += 1) {
        if (arr[i] === arr[i - 1]) {
            continue;
        } else {
            message.push(arr[i]);
        }
    }
    console.log(message.join(''));
}

solve(['Hello']);
solve(['hoboobbo422222Aaao']);