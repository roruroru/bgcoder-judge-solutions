'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);

    let me = {
        r: Math.floor(rows/2),
        c: Math.floor(cols/2),
        stuck: false,
        escaped: false
    };


    let field = [],
        fieldB = [];
    for(let i = 1; i < rows + 1; i += 1) {
        field.push(args[i].split(' ').map(Number));
    }
    //console.log(field);

    while (!me.stuck || !me.escaped) {
        //console.log(field[me.r][me.c]);
        //console.log(me);

        if (field[me.r][me.c] & 1) {
            if (me.r === 0) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${me.r} ${me.c}`);
                break;
            }
            if (field[me.r - 1][me.c] >= 0) {
                field[me.r][me.c] = -1;
                me.r += -1;
                continue;
            }
        }
        if (field[me.r][me.c] & 2) {
            if (me.c === cols - 1) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${me.r} ${me.c}`);
                break;
            }
            if (field[me.r][me.c + 1] >= 0) {
                field[me.r][me.c] = -1;
                me.c += +1;
                continue;
            }
        }
        if (field[me.r][me.c] & 4) {
            if (me.r === rows - 1) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${me.r} ${me.c}`);
                break;
            }
            if (field[me.r + 1][me.c] >= 0) {
                field[me.r][me.c] = -1;
                me.r += +1;
                continue;
            }
        }
        if (field[me.r][me.c] & 8) {
            if (me.c === 0) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${me.r} ${me.c}`);
                break;
            }
            if (field[me.r][me.c - 1] >= 0) {
                field[me.r][me.c] = -1;
                me.c += -1;
                continue;
            }
        }
        
        me.stuck = true;
        console.log(`No JavaScript, only rakiya ${me.r} ${me.c}`);
        break;
        
    }

}

solve([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);
solve([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);