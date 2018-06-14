'use strict';

function solve(args) {
    let r = +args[0];

    let board = args.slice(2, 2 + r);
    let moves = args.slice(3 + r);
    //console.log(board);
    //console.log(board[0][0]);
    //console.log(board[0][2]);
    //console.log(moves);

    function parseMove(move) {
        //move is in format 'a1 b6'
        let cells = move.split(' ');

        return {
            from: {
                r: r - Number(cells[0][1]),
                c: cells[0].charCodeAt(0) - 97
            },
            to: {
                r: r - Number(cells[1][1]),
                c: cells[1].charCodeAt(0) - 97
            }
        };
    }
    // moves.forEach(function (move) {
    //     console.log(parseMove(move), move);
    // });
    
    function canMoveRook(from, to) {
        if ((from.c !== to.c) && (from.r !== to.r)) {
            return false;
        }

        if ((from.c === to.c) && (from.r === to.r)) {
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
            //console.log(board[from.r][from.c]);
            //console.log('ks');
            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }

        return true;
    }

    function canMoveBishop(from, to) {
        if (Math.abs(from.r - to.r) !== Math.abs(from.c - to.c)) {
            return false;
        }

        if ((from.c === to.c) && (from.r === to.r)) {
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1,
            deltaC = from.c > to.c ? -1 : 1;
        
        while ((from.r !== to.r) || (from.c !== to.c)) {

            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== '-') {
                return false;
            }
        }

        return true;

    }


    function canMoveQueen(from, to) {
        return canMoveBishop(from, to) || canMoveRook(from, to);
    }

    for(let m of moves) {
        let move = parseMove(m);

        let piece = board[move.from.r][move.from.c];
        if (piece === 'R') {
            let canMove = canMoveRook(move.from, move.to);

            console.log(canMove ? 'yes' : 'no'); //, piece, m);
        }
        else if (piece === 'B') {
            let canMove = canMoveBishop(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
        else if (piece === 'Q') {
            let canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');
        }
        else {
            console.log('no');
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

solve('5',
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
'c2 c5');