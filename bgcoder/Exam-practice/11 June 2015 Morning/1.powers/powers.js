'use strict';

function solve(args) {
    
    let nk = args[0].split(' ').map(Number);
    let seq = args[1].split(' ').map(Number);
    let trans = nk[1];
    let nums = nk[0];
    console.log(trans);
    console.log(nums);
    console.log(seq);
    let s = seq;
    let res = [];
    let sum = 0;

    s.push(seq[0]);
    s.unshift(seq[nums - 1]);

    //console.log(s);
    let len = s.length;

    for(let k = 0; k < trans; k += 1) {
        for(let i = 1; i < len - 1; i += 1) {
            if (s[i] === 0) {
                res.push(Math.abs(s[i - 1] - s[i + 1]));
            }
            else if (s[i] === 1) {
                let onePush = s[i - 1] + s[i + 1];
                res.push(onePush);
            }
            else if (s[i] % 2 === 0) {
                res.push(Math.max(s[i - 1], s[i + 1]));
            }
            else if (s[i] % 2 === 1) {
                res.push(Math.min(s[i - 1], s[i + 1]));
            }
            else {
                //nope
            }
        }
        //console.log(res);
        res.push(res[0]);
        res.unshift(res[nums - 1]);
        //console.log(res);
        s = res;
        res = [];
    }
    //console.log(s);
    for(let j = 1; j < len - 1; j += 1) {
        sum += s[j];
    }
    console.log(sum);
}

solve(['5 1',
    '9 0 2 4 1'
]);
solve(['10 3',
    '1 9 1 9 1 9 1 9 1 9'
    ]);
solve(['10 10',
    '0 1 2 3 4 5 6 7 8 9'
    ]);