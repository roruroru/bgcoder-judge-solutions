'use strict';

function solve(args) {
    let year = +args[0];
    let month = +args[1];
    let day = +args[2];

    if (day === 1) {
        switch (month) {
            case 1: month = 12; year -= 1; day = 31; break;
            case 2: month -= 1; day = 31; break;
            case 3: month -= 1; if (year % 4 === 0) {
                day = 29;
            } else {
                day = 28;
            } break;
            case 4: month -= 1; day = 31; break;
            case 5: month -= 1; day = 30; break;
            case 6: month -= 1; day = 31; break;
            case 7: month -= 1; day = 30; break;
            case 8: month -= 1; day = 31; break;
            case 9: month -= 1; day = 31; break;
            case 10: month -= 1; day = 30; break;
            case 11: month -= 1; day = 31; break;
            case 12: month -= 1; day = 30; break;
            default: break;
        }
    }
    else {
        day -= 1;
    }

    switch (month) {
        case 1: console.log(`${day}-Jan-${year}`); break;    
        case 2: console.log(`${day}-Feb-${year}`); break;    
        case 3: console.log(`${day}-Mar-${year}`); break;    
        case 4: console.log(`${day}-Apr-${year}`); break;    
        case 5: console.log(`${day}-May-${year}`); break;    
        case 6: console.log(`${day}-Jun-${year}`); break;    
        case 7: console.log(`${day}-Jul-${year}`); break;    
        case 8: console.log(`${day}-Aug-${year}`); break;    
        case 9: console.log(`${day}-Sep-${year}`); break;    
        case 10: console.log(`${day}-Oct-${year}`); break;    
        case 11: console.log(`${day}-Nov-${year}`); break;    
        case 12: console.log(`${day}-Dec-${year}`); break;    
        default: break;
    }
}

solve(['2016',
    '1',
    '1']);