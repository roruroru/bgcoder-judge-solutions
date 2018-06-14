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

    function canMoveQueenAsRook(from, to) {
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
        }
        else {
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

    function canMoveQueenAsBishop(from, to) {
        if (Math.abs(from.row - to.row) !== Math.abs(from.col - to.col)) {
            return false;
        }
        if ((from.row === to.row) && (from.col === to.col)) {
            return false;
        }

        let deltaRow = from.row > to.row ? -1 : 1;
        let deltaCol = from.col > to.col ? -1 : 1;

        while ((from.row !== to.row) && (from.col !== to.col)) {
            from.row += deltaRow;
            from.col += deltaCol;

            if (field[from.row][from.col] !== '-') {
                return false;
            }

        }
        return true;
    }

    function canMoveKnight(from, to) {
        let deltaRow = Math.abs(from.row - to.row);
        let deltaCol = Math.abs(from.col - to.col);

        if (field[to.row][to.col] !== '-') {
            return false;
        }
        if ((deltaRow !== 2 || deltaCol !== 1) && (deltaRow !== 1 || deltaCol !== 2)) {
            return false;
        }
        return true;
    }

    for(let m of moves) {
        let move = parseMoves(m);
        let chessPiece = field[move.from.row][move.from.col];

        if (chessPiece === 'Q') {
            let isMovePossible = canMoveQueenAsRook(move.from, move.to) || canMoveQueenAsBishop(move.from, move.to);
            console.log(isMovePossible ? 'yes' : 'no');
        }
        else if (chessPiece === 'K') {
            let isMovePossible = canMoveKnight(move.from, move.to);
            console.log(isMovePossible ? 'yes' : 'no');
        }
        else {
            console.log('no');
        }
    }
}

solve(['3',
'4',
'--K-',
'K--K',
'Q--Q',
'12',
'd1 b3',
'a1 a3',
'c3 b2',
'a1 c1',
'a1 b2',
'a1 c3',
'a2 c1',
'd2 b1',
'b1 b2',
'c3 a3',
'a2 a3',
'd1 d3']);

// solve(['5',
// '5',
// 'Q---Q',
// '-----',
// '-K---',
// '--K--',
// 'Q---Q',
// '10',
// 'a1 a1',
// 'a1 d4',
// 'e1 b4',
// 'a5 d2',
// 'e5 b2',
// 'b3 d4',
// 'b3 c1',
// 'b3 d1',
// 'c2 a3',
// 'c2 b4']);