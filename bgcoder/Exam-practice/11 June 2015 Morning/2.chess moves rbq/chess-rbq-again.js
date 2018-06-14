'use strict';

function solve(args) {
    const rows = +args[0];
    const cols = +args[1];
    const field = args.slice(2, rows + 2);
    const moves = args.slice(rows + 3);
    
    function parseMoves(move) {
        let spl = move.split(' ');
        return {
            from: {
                row: rows - spl[0][1],
                col: spl[0].charCodeAt(0) - 97
            },
            to: {
                row: rows - spl[1][1],
                col: spl[1].charCodeAt(0) - 97
            }
        };
    }

    function canMoveRook(from, to) {
        if ((from.row !== to.row) && (from.col !== to.col)) {
            return false;
        }
        if ((from.row === to.row) && (from.col === to.col)) {
            return false;
        }

        let deltaRow = from.row > to.row ? -1 : 1;
        let deltaCol = from.col > to.col ? -1 : 1;

        if (from.row === to.row) {
            deltaRow = 0;
        } else {
            deltaCol = 0;
        }

        while ((from.row !== to.row) || (from.col !== to.col)) {
            from.row += deltaRow;
            from.col += deltaCol;
            
            if (field[from.row][from.col] !== '-') {
                return false;
            }
        }

        return true;
    }

    function canMoveBishop(from, to) {
        if (Math.abs(from.row - to.row) !== Math.abs(from.col - to.col)) {
            return false;
        }
        if ((from.row === to.row) && (from.col === to.col)) {
            return false;
        }

        let deltaRow = from.row > to.row ? -1 : 1;
        let deltaCol = from.col > to.col ? -1 : 1;

        while ((from.row !== to.row) || (from.col !== to.col)) {
            from.row += deltaRow;
            from.col += deltaCol;

            if (field[from.row][from.col] !== '-') {
                return false;
            }
        }

        return true;
    }

    function canMoveQueen(from, to) {
        return canMoveBishop(from, to) || canMoveRook(from, to);
    }

    for(let m of moves) {
        let move = parseMoves(m);

        let chessPiece = field[move.from.row][move.from.col];

        if (chessPiece === 'R') {
            let moveIsPossible = canMoveRook(move.from, move.to);
            console.log(moveIsPossible ? 'yes' : 'no');
        }
        else if (chessPiece === 'B') {
            let moveIsPossible = canMoveBishop(move.from, move.to);
            console.log(moveIsPossible ? 'yes' : 'no');
        }
        else if (chessPiece === 'Q') {
            let moveIsPossible = canMoveQueen(move.from, move.to);
            console.log(moveIsPossible ? 'yes' : 'no');
        }
        else {
            console.log('no');
        }
    }
}

// solve(['3',
// '4',
// '--R-',
// 'B--B',
// 'Q--Q',
// '12',
// 'd1 b3',
// 'a1 a3',
// 'c3 b2',
// 'a1 c1',
// 'a1 b2',
// 'a1 c3',
// 'a2 b3',
// 'd2 c1',
// 'b1 b2',
// 'c3 b1',
// 'a2 a3',
// 'd1 d3',
// ]);

solve(['5',
'5',
'Q---Q',
'-----',
'-B---',
'--R--',
'Q---Q',
'10',
'a1 a1',
'a1 d4',
'e1 b4',
'a5 d2',
'e5 b2',
'b3 d5',
'b3 a2',
'b3 d1',
'b3 a4',
'c2 c5']);