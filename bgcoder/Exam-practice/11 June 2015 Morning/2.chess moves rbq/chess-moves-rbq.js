'use strict';

function solve(args) {
    let rows = +args[0];
    let cols = +args[1];
    //console.log(rows, cols);
    let n = +args[rows + 2],
        moves;

    let field = [],
        fieldFigures = [];
    for(let i = 0; i < rows; i += 1) {
        field[i] = [];
        fieldFigures[i] = [];
        for(let j = 0; j < cols; j += 1) {
            let letter = String.fromCharCode(97 + j);
            field[i][j] = letter + (rows - i);
            fieldFigures[i][j] = args[i + 2][j];
        }
    }
    console.log(field);
    console.log(fieldFigures);

    for(let k = 0; k < n; k += 1) {
        moves = args[rows + 3 + k].split(' ');
        //console.log(moves);
        //console.log(moves[0].charCodeAt(0));
        let startingCol = moves[0].charCodeAt(0) - 97;
        let startingRow = rows - Number(moves[0][1]);
        let endCol = moves[1].charCodeAt(0) - 97;
        let endRow = rows - Number(moves[1][1]);
        let deltaRow = endRow - startingRow;
        let deltaCol = endCol - startingCol;
        let upper, lower;

        //console.log(endRow, endCol, moves);
        if (fieldFigures[startingRow][startingCol] === '-') {
            console.log('no');
        }
        if (fieldFigures[endRow][endCol] !== '-') {
            console.log('no');
        }
        if (fieldFigures[startingRow][startingCol] === 'R') {
            if (deltaRow !== 0 && deltaCol !== 0) {
                console.log('no');
            }
            else {
                if (deltaRow !== 0) {
                    upper = Math.max(startingRow, endRow);
                    lower = Math.min(startingRow, endRow);
                }
                else {
                    upper = Math.max(startingCol, endCol);
                    lower = Math.min(startingCol, endCol);
                }
                while (lower < upper) {
                    if (condition) {
                        
                    }
                }
            }
        }

    }
}

solve(['3',
'4',
'--R-',
'B--B',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 b3',
'd2 c1',
'b1 b2',
'c3 b1',
'a2 a3',
'd1 d3',
]);