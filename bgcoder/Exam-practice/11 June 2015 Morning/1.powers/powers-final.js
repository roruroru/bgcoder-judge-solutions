'use strict';

function solve(args) {
    const [n, k] = args[0].split(' ').map(Number);
    let arr = args[1].split(' ').map(Number);
    let result = 0;
    
    arr.push(arr[0]);
    arr.unshift(arr[n - 1]);
    //console.log(arr);

    for(let i = 0; i < k; i += 1) {
        let arrT = arr.slice(0);
        for(let j = 1; j <= n; j += 1) {
            if (arr[j] === 0) {
                arrT[j] = Math.abs(arr[j - 1] - arr[j + 1]);
            }
            else if (arr[j] === 1) {
                arrT[j] = arr[j - 1] + arr[j + 1];
            }
            else if (arr[j] % 2 === 0 && arr[j] !== 0) {
                arrT[j] = Math.max(arr[j - 1], arr[j + 1]);
            }
            else if (arr[j] % 2 === 1 && arr[j] !== 1) {
                arrT[j] = Math.min(arr[j - 1], arr[j + 1]);
            }
        }
        arrT[0] = arrT[n];
        arrT[n + 1] = arrT[1];
        arr = arrT;
        //console.log(arrT);
    }
    arr.pop();
    arr.shift();
    result = arr.reduce((x, y) => (x + y), 0);
    console.log(result);
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