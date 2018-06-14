'use strict';

function solve(args) {
    let [rows, cols]  = args[0].split(' ').map(Number);
    //console.log(rows);
    //console.log(cols);
    let field = [],
        fieldMoves = [];
    let obj = {
        row: 0,
        col: 0,
        outside: false,
        repeat: false
    };
    let sum = 0;

    let moves = args.slice(1);
    for(let i = 0; i < moves.length; i += 1) {
        fieldMoves.push(moves[i].split(' '));
    }
    //console.log(fieldMoves[0][1]);

    //console.log(fieldMoves);
    for(let i = 0; i < rows; i += 1) {
        field[i] = [];
        for(let j = 0; j < cols; j += 1) {
            field[i][j] = Math.pow(2, i) + j;
        }
    }
    //console.log(field);
    //console.log(fieldMoves);

    while (!obj.repeat || !obj.outside) {
        //console.log(i);
        if (((obj.row < 0) || (obj.row > rows - 1)) || ((obj.col < 0 || obj.col > cols - 1))) {
            console.log(`successed with ${sum}`);
            obj.outside = true;
            break;
        }

        sum += field[obj.row][obj.col];
        field[obj.row][obj.col] = 0;
        //console.log(field);
        //console.log(fieldMoves[obj.row][obj.col]);
        if (fieldMoves[obj.row][obj.col] === 'dr') {
            fieldMoves[obj.row][obj.col] = 'X';
            obj.row += 1;
            obj.col += 1;
        }
        else if (fieldMoves[obj.row][obj.col] === 'dl') {
            fieldMoves[obj.row][obj.col] = 'X';
            obj.row += 1;
            obj.col += -1;
        }
        else if (fieldMoves[obj.row][obj.col] === 'ul') {
            fieldMoves[obj.row][obj.col] = 'X';
            obj.row += -1;
            obj.col += -1;
        }
        else if (fieldMoves[obj.row][obj.col] === 'ur') {
            fieldMoves[obj.row][obj.col] = 'X';
            obj.row += -1;
            obj.col += 1;
        }
        else {
            console.log(`failed at (${obj.row}, ${obj.col})`);
            obj.repeat = true;
            break;
        }
    }

    // function parseMove(move) {
    //     if (move === 'dr') {
    //         obj.row += 1;
    //         obj.col += 1;
    //     }
    //     else if (move === 'dl') {
    //         obj.row += 1;
    //         obj.col += -1;
    //     }
    //     else if (move === 'ul') {
    //         obj.row += -1;
    //         obj.col += -1;
    //     }
    //     else if (move === 'ur') {
    //         obj.row += -1;
    //         obj.col += 1;
    //     }
    // }

    // parseMove(fieldMoves[0][0]);
    // console.log(obj);
}

solve([
    '3 5',
    'dr dl dr ur ul',
    'dr dr ul ur ur',
    'dl dr ur dl ur'   
  ]);
solve([
    '3 5',
    'dr dl dl ur ul',
    'dr dr ul ul ur',
    'dl dr ur dl ur'   
  ]);