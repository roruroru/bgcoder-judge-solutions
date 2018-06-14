'use strict';

//Write a method GetMax() with two parameters that returns the larger of two integers.
//Write a program that reads 3 integers from the console and prints the largest of them using the method GetMax().

function solve(args) {
    function GetMax(x, y) {
        let max = x;
        if (max < y) {
            max = y;
        }
        console.log(max);
    }
    let b = args.join(" ");
    let a = args.split(' ');
    let x = +a[0],
        y = +a[1],
        z = +a[2];
    if (y < z) {
        y = z;
    }
    GetMax(x, y);
}

solve(`8 7 6`);
solve(`7 9 19`);
//solve(7 9 19);