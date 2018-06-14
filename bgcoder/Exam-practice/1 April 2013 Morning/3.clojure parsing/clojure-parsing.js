'use strict';

function solve(args) {
    let answer = 0;
    let arr = args;

    arr.forEach(function(line) {
        line = line.split(/\s+/g);
        console.log(line);
        
        if (line[0] === '(def') {
            //if nested -> how many -> extract -> calculate
            //calculate
            //if division by 0 -> clg   
        }
        else {
            //if nested -> how many -> extract -> calculate
            //calculate
            //if division by 0 -> clg   
        }
    });
}

solve(['(def func 10)',
    '(def newFunc (+  func 2))',
    '(def sumFunc (+ func func newFunc 0 0 0))',
    '(* sumFunc 2)'
    ]);
// solve(['(def func (+ 5 2))',
//     '(def func2 (/  func 5 2 1 0))',
//     '(def func3 (/ func 2))',
//     '(+ func3 func)',
//     ]);