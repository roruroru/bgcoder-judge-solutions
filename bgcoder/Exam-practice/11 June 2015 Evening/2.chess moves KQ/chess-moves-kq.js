'use strict';

function solve(args) {
    let r = +args[0];
    //console.log(r);
    
    let board = args.slice(2, r + 2);
    //console.log(board);
    //console.log(board[0][1]);

    let moves = args.slice(r + 3);
    //console.log(moves);

    function parseMove(move) {
        move = move.split(' ');
        return {
            from: {
                r: r - move[0][1],
                c: move[0].charCodeAt(0) - 97
            },
            to: {
                r: r - move[1][1],
                c: move[1].charCodeAt(0) - 97
            }
        };
    }
    // moves.forEach(function (move) {
    //     console.log(parseMove(move), move);
    // });

    function canMoveKnight(from, to) {
        if ((from.r === to.r) && (from.c === to.c)) { // &&
            return false;
        }

        if ((Math.abs(from.r - to.r) !== 2 || Math.abs(from.c - to.c) !== 1) && 
                (Math.abs(from.r - to.r) !== 1 || Math.abs(from.c - to.c) !== 2)) {
            return false;
        }

        if (board[to.r][to.c] !== '-') {
            return false;
        }
        return true;
    }

    function canMoveQueenAsRook(from, to) {
        if ((from.r !== to.r) && (from.c !== to.c)) {
            return false;
        }

        if ((from.r === to.r) && (from.c === to.c)) {
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        if (from.r === to.r) {
            deltaR = 0;
        } else {
            deltaC = 0;
        }

        while ((from.r !== to.r) || (from.c !== to.c)) {
            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;
    }

    function canMoveQueenAsBishop(from, to) {
        if (Math.abs(from.r - to.r) !== Math.abs(from.c - to.c)) {
            return false;
        }

        if ((from.r === to.r) && (from.c === to.c)) {
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        while ((from.r !== to.r) && (from.c !== to.c)) { //&&
            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }
        return true;
    }
 
    function canMoveQueen(from, to) {
        return canMoveQueenAsBishop(from, to) || canMoveQueenAsRook(from, to);
    }

    for(let m of moves) {
        let move = parseMove(m);

        let piece = board[move.from.r][move.from.c];

        if (piece === 'K') {
            let canMove = canMoveKnight(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } 
        else if (piece === 'Q') {
            let canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        } else {
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