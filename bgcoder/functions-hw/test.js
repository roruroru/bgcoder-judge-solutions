'use strict';

function solve(args) {
    let N = args.shift();
    let s = args.join(" ");
    let a = s.split(" ");
    let b = [];

    for(let i in a) {
        b[i] = +a[i];
    }
    b.sort(function(x, y) {
        return x-y;
    });
    console.log(b.join(" "));
}


solve(['6','3 4 1 5 2 6']);
solve(['10','36 10 1 34 28 38 31 27 30 20']);
solve(['14','36 10 1 34 28 38 31 27 30 20 2 -1 5 6']);
solve(['12','36 10 1 34 28 38 31 27 30 2060 700 300']);