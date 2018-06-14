'use strict';

function solve(args) {
    let N = +args.slice(0, 1),
        x = args.slice(1),
        mN,
        i;
    for(let i = 0; i < N; i += 1) {
        mN = +x[i];
        for(let j = i; j < N; j += 1) {
            if (mN > +x[j]) {
                mN = x[j],
                x[j] = x[i],
                x[i] = mN;
            }
        }
    }
    console.log(x.join('\n'));
}

solve(['6', '3', '4', '1', '5', '2', '6']);
solve(['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20']);