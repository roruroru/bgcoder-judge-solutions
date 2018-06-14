'use strict';

function solve(args) {
    let [n, k] = args[0].split(' ').map(Number);
    let arr = args[1].split(' ').map(Number);
    let sum = 0;
    arr.push(arr[0]);
    arr.unshift(arr[n - 1]);
    let arrT = [];
    //console.log(arr);

    while(k > 0) {
        arr.push(arr[0]);
        arr.unshift(arr[n - 1]);
        for(let i = 1; i < n + 1; i += 1) {
            if (arr[i] === 0) {
                arrT.push(Math.abs(arr[i - 1] - arr[i + 1]));
            }
            else if (arr[i] === 1) {
                arrT.push(arr[i - 1] + arr[i + 1]);
            }
            else if (arr[i] % 2 === 0) {
                arrT.push(Math.max(arr[i - 1], arr[i + 1]));
            }
            else if (arr[i] % 2 === 1) {
                arrT.push(Math.min(arr[i - 1], arr[i + 1]));
            }
            else {
                
            }
        }
        arr = arrT;
        arrT = [];
        k -= 1;
    }
    //console.log(arr.reduce((x, y) => x + y, 0));
    for(let i = 0; i < n; i += 1) {
        sum += arr[i];
    }
    console.log(sum);
}

// solve(['5 1',
// '9 0 2 4 1'
// ]);
solve(['10 3',
'1 9 1 9 1 9 1 9 1 9'
]);
// solve(['10 10',
// '0 1 2 3 4 5 6 7 8 9'
// ]);