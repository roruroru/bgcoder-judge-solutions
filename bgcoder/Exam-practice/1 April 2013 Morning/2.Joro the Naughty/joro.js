'use strict';

function solve(args) {
    let spl0 = args[0].split(' ').map(Number);
    const rows = spl0[0];
    const cols = spl0[1];
    const n = spl0[2];
    let jumps = 0;
    let sum = 0;
    let deltaRow;
    let deltaCol;
    let wh = 1;
    //console.log(rows, cols, n);
    args.shift();

    let field = new Array(rows);
    field.fill(0);
    for (let i = 0; i < rows; i += 1) {
        field[i] = new Array(cols);
        field[i].fill(-1);
    }

    //console.log(field);
    let counter = 1;
    for (let j = 0; j < rows; j += 1) {
        for (let k = 0; k < cols; k += 1) {
            field[j][k] = counter++;
        }
    }
    //console.log(field);

    const joroCoords = args[0].split(' ').map(Number);
    let joro = {
        row: joroCoords[0],
        col: joroCoords[1]
    };
    //console.log(joro);
    args.shift();
    sum = field[joro.row][joro.col];

    //console.log(args);
    while (wh > 0) {
        for (let item of args) {
            item = item.split(' ').map(Number);
            deltaRow = item[0];
            deltaCol = item[1];
            field[joro.row][joro.col] = 'X';
            joro.row += deltaRow;
            joro.col += deltaCol;
            if (field[joro.row][joro.col] === 'X') {
                console.log(`caught ${jumps}`);
                wh = - 1;
                break;
            }
            if ((joro.row >= rows || joro.row < 0) || (joro.col >= cols || joro.col < 0)) {
                console.log(`escaped ${sum}`);
                wh = - 1;
                break;
            }
                jumps += 1;
                sum += field[joro.row][joro.col];

            //console.log(joro);
            //console.log(sum);
        }
    }
}

solve(['6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1'
]);