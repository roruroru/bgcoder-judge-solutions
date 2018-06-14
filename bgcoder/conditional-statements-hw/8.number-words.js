'use strict';

// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function solve(args) {
    let a = +args[0];
    let b = Math.trunc(a / 100),
        c = a % 100,
        d = Math.trunc(c / 10),
        e = a % 10,
        f = '',
        g = '',
        h = '';
    if (a >= 100) {
        switch (b) {
            case 1: f = 'One hundred'; break;
            case 2: f = 'Two hundred'; break;
            case 3: f = 'Three hundred'; break;
            case 4: f = 'Four hundred'; break;
            case 5: f = 'Five hundred'; break;
            case 6: f = 'Six hundred'; break;
            case 7: f = 'Seven hundred'; break;
            case 8: f = 'Eight hundred'; break;
            case 9: f = 'Nine hundred'; break;
            default: f = ''; break;
        }
        if (c >=20) {
            switch (d) {
                case 2: g = ' and twenty'; break;
                case 3: g = ' and thirty'; break;
                case 4: g = ' and forty'; break;
                case 5: g = ' and fifty'; break;
                case 6: g = ' and sixty'; break;
                case 7: g = ' and seventy'; break;
                case 8: g = ' and eighty'; break;
                case 9: g = ' and ninety'; break;
                default: g = ''; break;
            }
            switch (e) {
                case 1: h = ' one'; break;
                case 2: h = ' two'; break;
                case 3: h = ' three'; break;
                case 4: h = ' four'; break;
                case 5: h = ' five'; break;
                case 6: h = ' six'; break;
                case 7: h = ' seven'; break;
                case 8: h = ' eight'; break;
                case 9: h = ' nine'; break;
                default: h = ''; break;
            }
        } 
        else if (c < 20) {
            switch (c) {
                case 1: g = ' and one'; break;
                case 2: g = ' and two'; break;
                case 3: g = ' and three'; break;
                case 4: g = ' and four'; break;
                case 5: g = ' and five'; break;
                case 6: g = ' and six'; break;
                case 7: g = ' and seven'; break;
                case 8: g = ' and eight'; break;
                case 9: g = ' and nine'; break;
                case 10: g = ' and ten'; break;
                case 11: g = ' and eleven'; break;
                case 12: g = ' and twelve'; break;
                case 13: g = ' and thirteen'; break;
                case 14: g = ' and fourteen'; break;
                case 15: g = ' and fifteen'; break;
                case 16: g = ' and sixteen'; break;
                case 17: g = ' and seventeen'; break;
                case 18: g = ' and eighteen'; break;
                case 19: g = ' and nineteen'; break;             
                default: g = ''; break;
            }
        }
    } else if ((a < 100) && (a >= 20)) {
        switch (d) {
            case 2: g = 'Twenty'; break;
            case 3: g = 'Thirty'; break;
            case 4: g = 'Forty'; break;
            case 5: g = 'Fifty'; break;
            case 6: g = 'Sixty'; break;
            case 7: g = 'Seventy'; break;
            case 8: g = 'Eighty'; break;
            case 9: g = 'Ninety'; break;
            default: g = ''; break;
        }
        switch (e) {
            case 1: h = ' one'; break;
            case 2: h = ' two'; break;
            case 3: h = ' three'; break;
            case 4: h = ' four'; break;
            case 5: h = ' five'; break;
            case 6: h = ' six'; break;
            case 7: h = ' seven'; break;
            case 8: h = ' eight'; break;
            case 9: h = ' nine'; break;
            default: h = ''; break;
        }
    }
    else {
         switch (a) {
                case 0: g = 'Zero'; break;
                case 1: g = 'One'; break;
                case 2: g = 'Two'; break;
                case 3: g = 'Three'; break;
                case 4: g = 'Four'; break;
                case 5: g = 'Five'; break;
                case 6: g = 'Six'; break;
                case 7: g = 'Seven'; break;
                case 8: g = 'Eight'; break;
                case 9: g = 'Nine'; break;
                case 10: g = 'Ten'; break;
                case 11: g = 'Eleven'; break;
                case 12: g = 'Twelve'; break;
                case 13: g = 'Thirteen'; break;
                case 14: g = 'Fourteen'; break;
                case 15: g = 'Fifteen'; break;
                case 16: g = 'Sixteen'; break;
                case 17: g = 'Seventeen'; break;
                case 18: g = 'Eighteen'; break;
                case 19: g = 'Nineteen'; break;             
                default: g = ''; break;
            }
    }
    console.log(f+g+h);
}
solve (['456']);
solve (['88']);
solve (['19']);
solve (['0']);


let ss = 'One hundred';
console.log(Math.trunc(456/100));
console.log(456%100);
console.log(Math.trunc(56/10));
console.log(456%10);
console.log(ss);