'use strict';

function solve(args) {
    let N = +args[0],
        arr = [1, 2, 3];
    // for(let i = 0; i < N; i += 1) {
    //     arr[i] = i + 1;
    // }
        for(let j = 0; j < N - 1; j += 1) {
            let res = arr;
                let splice = res.splice(j, 1);
            for(let k = 0; k < N - 1; k += 1) {
                res.splice(k, 0, +splice);
                console.log(res);
                res = [1, 2, 3];
            }
        }
}

//solve([2]);
solve([3]);
//solve([4]);
//solve([5]);

                // console.log('res.spl = ' + res.splice(j, 1));
                // console.log('spl = ' + splice);