'use strict';

let min = -30;
let max = 30;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(-30);
  max = Math.floor(30);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let args = (getRandomIntInclusive(min, max));

function solve(args) {
    if ((args % 2) === 0) {
        return ('Even' + ' ' + args);
    } else  {
        return ('Odd' + ' ' + args);
    }
}

console.log(solve(args));