'use strict';

function solve(args) {
    const rows = args[0].split(' ').map(Number)[0];
    const cols = args[0].split(' ').map(Number)[1];
    let currentRow = args[1].split(' ').map(Number)[0];
    let currentCol = args[1].split(' ').map(Number)[1];
    let lastRow, lastCol;

    let sum = 0;
    let count = 0;

    let field = [];
    let fieldMoves = [];
    let counter = 1;

    for (let i = 0; i < rows; i += 1) {
        field[i] = [];
        fieldMoves[i] = [];
        // let spl = args[i + 2].split(''); 
        // fieldMoves[i].push(args[i + 2]);

        for (let j = 0; j < cols; j += 1) {
            field[i][j] = counter++;
            fieldMoves[i][j] = args[i + 2][j];
        }
    }

     console.log(field);
     console.log(fieldMoves);
    // console.log(fieldMoves[currentRow][currentCol]);

    for (let k = 0; k < rows * cols; k += 1) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            console.log(`out ${sum}`);
            break;
        }
        if (fieldMoves[currentRow][currentCol] === 'x') {
            console.log(`lost ${count}`);
            break;
        }

        if (fieldMoves[currentRow][currentCol] === 'd') {
            sum += field[currentRow][currentCol];
            fieldMoves[currentRow][currentCol] = 'x';
            currentRow += 1;
            count++;
        }
        else if (fieldMoves[currentRow][currentCol] === 'u') {
            sum += field[currentRow][currentCol];
            fieldMoves[currentRow][currentCol] = 'x';
            currentRow -= 1;
            count++;
        }
        else if (fieldMoves[currentRow][currentCol] === 'r') {
            sum += field[currentRow][currentCol];
            fieldMoves[currentRow][currentCol] = 'x';
            currentCol += 1;
            count++;
        }
        else if (fieldMoves[currentRow][currentCol] === 'l') {
            sum += field[currentRow][currentCol];
            fieldMoves[currentRow][currentCol] = 'x';
            currentCol -= 1;
            count++;
        }
    }
}

solve([
    "3 4",
    "1 3",
    "lrrd",
    "dlll",
    "rddd"]
);
solve([
    "5 8",
    "0 0",
    "rrrrrrrd",
    "rludulrd",
    "durlddud",
    "urrrldud",
    "ulllllll"]
);
solve([
    "5 8",
    "0 0",
    "rrrrrrrd",
    "rludulrd",
    "lurlddud",
    "urrrldud",
    "ulllllll"]
);