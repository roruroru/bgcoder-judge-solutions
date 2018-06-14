'use strict';

function solve(args) {
    let arr = args[0].split('').map(Number);
    let len = arr.length;
    let nineInARowIndex;
    
    for(let i = len - 1; i >= 0; i -= 1) {
        if (arr[i] === 9) {
            nineInARowIndex = i;
        } else {
            break;
        }
    }
    
    for(let i = 1; i <= 10; i += 1) {
        arr[len - 1] += 1;
        if (arr[len - 1] === 10) {
            arr[len - 1] = 0;
            if (nineInARowIndex < len - 1) {
                for(let j = len - 2; j >= nineInARowIndex; j -= 1) {
                    arr[j] = 0;
                    if (nineInARowIndex === 0) {
                        arr[0] = 10;
                    }
                    else {
                        arr[j - 1] += 1;
                    }
                }
            } else {
                arr[len - 2] += 1;
            }
        }
        console.log(arr.join(''));
    }
}

solve(['999999']);
solve(['123999']);
solve(['123']);