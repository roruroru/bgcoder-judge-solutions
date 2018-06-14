'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);

    let me = {
        r: Math.floor(rows/2),
        c: Math.floor(cols/2),
        stuck: false,
        escaped: false
    };

    let lastCellCoords = {
        r: 0,
        c: 0
    };

    let lastCellRow, lastCellCol;

    let field = [],
        fieldB = [];
    for(let i = 1; i < rows + 1; i += 1) {
        field.push(args[i].split(' ').map(Number));
    }
    //console.log(field);

    while (!me.stuck || !me.escaped) {
        //console.log(field[me.r][me.c]);
        //console.log(me);

        lastCellRow = me.r;
        lastCellCol = me.c;
        let col = me.c;
        let row = me.r;
        let rowMinus = me.r - 1;
        let rowPlus = me.r + 1;
        let colMinus = me.c - 1;
        let colPlus = me.c + 1;

        if (field[me.r][me.c].toString(2).match(/^[01]*1$/g)) {
            if ((rowMinus >= 0) && (rowMinus < rows)) {
                if (field[rowMinus][col] >= 4) {
                field[rowMinus][col] += -4;
                }
            }
            if ((colPlus >= 0) && (colPlus < cols)) {
                if (field[row][colPlus] >= 8) {
                field[row][colPlus] += -8;
                }
            }
            if ((rowPlus >= 0) && (rowPlus < rows)) {
                if ((field[rowPlus][col] >= 1)) {
                field[rowPlus][col] += -1;
                }
            }
            if ((colMinus >= 0) && (colMinus < cols)) {
                if ((field[row][colMinus] >= 2) && ((colMinus >= 0) && (colMinus < cols))) {
                field[row][colMinus] += -2;
                }
            }
            me.r += -1;
            if ((me.r < 0) || (me.r > rows - 1) || (me.c < 0) || (me.c > cols - 1)) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${lastCellRow} ${lastCellCol}`);
                break;
            }
        }
        else if (field[me.r][me.c].toString(2).match(/^[01]*1[01]$/g)) {
            if ((rowMinus >= 0) && (rowMinus < rows)) {
                if (field[rowMinus][col] >= 4) {
                field[rowMinus][col] += -4;
                }
            }
            if ((colPlus >= 0) && (colPlus < cols)) {
                if (field[row][colPlus] >= 8) {
                field[row][colPlus] += -8;
                }
            }
            if ((rowPlus >= 0) && (rowPlus < rows)) {
                if ((field[rowPlus][col] >= 1)) {
                field[rowPlus][col] += -1;
                }
            }
            if ((colMinus >= 0) && (colMinus < cols)) {
                if ((field[row][colMinus] >= 2) && ((colMinus >= 0) && (colMinus < cols))) {
                field[row][colMinus] += -2;
                }
            }
            me.c += +1;
            if ((me.r < 0) || (me.r > rows - 1) || (me.c < 0) || (me.c > cols - 1)) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${lastCellRow} ${lastCellCol}`);
                break;
            }
        }
        
        else if (field[me.r][me.c].toString(2).match(/^[01]*1[01]{2}$/g)) {
            if ((rowMinus >= 0) && (rowMinus < rows)) {
                if (field[rowMinus][col] >= 4) {
                field[rowMinus][col] += -4;
                }
            }
            if ((colPlus >= 0) && (colPlus < cols)) {
                if (field[row][colPlus] >= 8) {
                field[row][colPlus] += -8;
                }
            }
            if ((rowPlus >= 0) && (rowPlus < rows)) {
                if ((field[rowPlus][col] >= 1)) {
                field[rowPlus][col] += -1;
                }
            }
            if ((colMinus >= 0) && (colMinus < cols)) {
                if ((field[row][colMinus] >= 2) && ((colMinus >= 0) && (colMinus < cols))) {
                field[row][colMinus] += -2;
                }
            }
            me.r += +1;
            if ((me.r < 0) || (me.r > rows - 1) || (me.c < 0) || (me.c > cols - 1)) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${lastCellRow} ${lastCellCol}`);
                break;
            }
        }

        else if (field[me.r][me.c].toString(2).match(/^1[01]{3}$/g)) {
            if ((rowMinus >= 0) && (rowMinus < rows)) {
                if (field[rowMinus][col] >= 4) {
                field[rowMinus][col] += -4;
                }
            }
            if ((colPlus >= 0) && (colPlus < cols)) {
                if (field[row][colPlus] >= 8) {
                field[row][colPlus] += -8;
                }
            }
            if ((rowPlus >= 0) && (rowPlus < rows)) {
                if ((field[rowPlus][col] >= 1)) {
                field[rowPlus][col] += -1;
                }
            }
            if ((colMinus >= 0) && (colMinus < cols)) {
                if ((field[row][colMinus] >= 2) && ((colMinus >= 0) && (colMinus < cols))) {
                field[row][colMinus] += -2;
                }
            }
            me.c += -1;
            if ((me.r < 0) || (me.r > rows - 1) || (me.c < 0) || (me.c > cols - 1)) {
                me.escaped = true;
                console.log(`No rakiya, only JavaScript ${lastCellRow} ${lastCellCol}`);
                break;
            }
        }

        else {
            me.stuck = true;
            console.log(`No JavaScript, only rakiya ${me.r} ${me.c}`);
            break;
        }
        
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