'use strict';

function solve(args) {
    let N = args,
        sieve = [],
        primes = [],
        i,
        j;
    for(let i = 2; i <= N; i += 1) {
        if (!sieve[i]) {
            primes.push(i);
            for(let j = i << 1; j <= N; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes[primes.length-1]);
}

solve(13);
solve(126);
solve(26);