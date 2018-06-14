'use strict';

function solve(args) {
    let n = +args[0];
    let counter = 0;

    for(let chicks = 0; chicks * 7 <= n; chicks++) {
        for(let humans = 0; humans * 5 + chicks * 7 <= n; humans++) {
            for(let bears = 0; bears * 2 + humans * 5 + chicks * 7 <= n; bears++) {
                let total = chicks * 7 + humans * 5 + bears * 2; 
                if (total === n) {
                    counter += 1;
                }
            }
        }
    }
    console.log(counter);
}

solve(['17']);
solve(['7']);