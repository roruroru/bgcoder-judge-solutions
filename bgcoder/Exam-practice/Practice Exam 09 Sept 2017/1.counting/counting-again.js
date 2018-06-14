'use strict';

function solve(args) {
    let arr = args[0].split('').map(Number);
    let len = arr.length;
    let j = 10;
    let indexOfNine = -1;

    for (let i = len - 2; i >= 0; i -= 1) {
        if (arr[i] === 9) {
            indexOfNine = i;
        }
        else {
            break;
        }
    }
    //console.log(indexOfNine);
    while (j > 0) {
        arr[len - 1] += 1;
        j -= 1;
        if (arr[len - 1] === 10) {
            arr[len - 1] = 0;
            arr[len - 2] += 1;
            if (arr[len - 2] === 10) {
                for (let i = len - 2; i >= indexOfNine; i -= 1) {
                    arr[i] = 0;
                }
                if (indexOfNine === 0) {
                    arr.unshift(1);
                    len += 1;    
                }
                else {
                    arr[indexOfNine - 1] += 1;                  
                }
            }
        }
        console.log(arr.join(''));
    }
}

solve(['999999']);
solve(['123999']);