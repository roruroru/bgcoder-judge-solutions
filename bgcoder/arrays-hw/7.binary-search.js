'use strict';

// function solve(args) {
//     let N = +args.shift(),
//         Y = args.pop(),
//         X = +Y,
//         //mid = Math.floor(N / 2),
//         minI = 0,
//         maxI = N - 1,
//         i,
//         el,
//         ind = args.indexOf(Y);
//     while (minI <= maxI) {
//         i = Math.floor((maxI + minI) / 2);
//         el = +args[i];
//         if (X > el) {
//             minI = i + 1;
//         }
//         else if (X < el) {
//             maxI = i - 1;
//         }
//         else if (X !== el) {
//             console.log(-1);
//         }
//         else if (X === el) {
//             console.log(i);
//             break;
//         }
//     }
//     if (ind == -1) {
//         console.log(ind);
//     }
// }

function solve(args) {
    let n = +args.shift();
    let x = +args.pop();
    let arr = args.map(Number)
                    .sort((a, b) => a - b);
    let startInd = 0;
    let endInd = n - 1;
    let midInd = Math.floor((startInd + endInd) / 2);

    while (startInd < endInd) {
        //console.log(midInd);
        if (arr[midInd] < x) {
            startInd = midInd + 1;
            midInd = Math.floor((startInd + endInd) / 2);
        }
        else if (arr[midInd] > x) {
            endInd = midInd - 1;
            midInd = Math.floor((startInd + endInd) / 2);
        }
        else if (arr[midInd] === x) {
            break;
        }
        // else if (arr[startInd] === x) {
        //     console.log(startInd);
        //     break;
        // }
        // else if (arr[endInd] === x) {
        //     console.log(endInd);
        //     break;
        // }
        // else {
        //     console.log('-1');
        // }
    }
    if (x === arr[midInd]) {
        console.log(midInd);
    }
    else {
        console.log(-1);
    }
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '33']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '99']);
solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '1']);