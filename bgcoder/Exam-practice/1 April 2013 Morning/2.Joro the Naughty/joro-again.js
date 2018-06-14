'use strict';

function solve(args) {
    const [rows, cols, jumps] = args[0].split(' ').map(Number);
    let [currentRow, currentCol] = args[1].split(' ').map(Number);
    let jumpsArr = args.slice(2);

    let field = [];
    for (let i = 0; i < rows; i += 1) {
        field[i] = [];
        for (let j = 0; j < cols; j += 1) {
            field[i][j] = j + 1 + i * cols;
        }
    }
    //console.log(field);

    let moves = [];
    let movesIndex = 0;
    for (let i = 0; i < jumps; i += 1) {
        moves.push({
            row: jumpsArr[i].split(' ').map(Number)[0],
            col: jumpsArr[i].split(' ').map(Number)[1]
        });
    }
    //console.log(moves);

    let sum = 0,
        count = 0;

    while (true) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            console.log(`escaped ${sum}`);
            break;
        }
        if (field[currentRow][currentCol] === 'x') {
            console.log(`caught ${count}`);
            break;
        }

        count += 1;
        sum += field[currentRow][currentCol];

        let currentMove = moves[movesIndex];
        movesIndex += 1;
        if (movesIndex >= moves.length) {
            movesIndex = 0;
        }

        field[currentRow][currentCol] = 'x';

        currentRow += currentMove.row;
        currentCol += currentMove.col;
    }
}

solve(['6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1'
]);