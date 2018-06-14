'use strict';

function solve(args) {
    let len = args.length;
    let sum = 0;

    for(let i = 0; i < len; i += 1) {
        if ((+args[i][1]) == (+args[i][0]) + (+args[i][2])) {
            sum += +args[i];
        }
        else {
            console.log(sum);
            break;
        }
    }
}

solve(['132', '123']);
solve(['275', '693', '110', '742']);