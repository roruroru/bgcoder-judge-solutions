'use strict';

function solve(args) {
    let N = +args.shift(),
        x = args,
        rN = 0,
        rM = 0,
        rC = 1,
        i,
        j;
    for(i = 0; i < N; i += 1) {
        for(j = N - 1; j > i; j -= 1) {
            if (x[i] === x[j]) {
                rC += 1;
                x.splice(j, 1);
                N -= 1;
                if (rC > rM) {
                    rM = rC;
                    rN = +x[i];
                }
            } 
        }
    rC = 1;
    }
console.log(rN + ' (' + rM + ' times)');
}

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '4', '4', '3', '4', '4', '1', '2', '4', '4', '3']);
solve(['13', '4', '1', '1', '1', '1', '1', '1', '1', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '9', '2', '3', '9', '9', '1', '2', '4', '9', '3']);