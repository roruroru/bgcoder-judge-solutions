'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);
    let field = args.slice(1);
    for (let i = 0; i < rows; i += 1) {
        field[i] = field[i].split(' ');
    }

    let sum = 0;
    let currentRow = 0;
    let currentCol = 0;

    while (true) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            console.log(`successed with ${sum}`);
            break;
        }
        if (field[currentRow][currentCol] === 'x') {
            console.log(`failed at (${currentRow}, ${currentCol})`);
            break;
        }

        switch (field[currentRow][currentCol]) {
            case 'dr':
                sum += Math.pow(2, currentRow) + currentCol;
                field[currentRow][currentCol] = 'x';
                currentRow += 1;
                currentCol += 1;
                break;
            case 'dl':
                sum += Math.pow(2, currentRow) + currentCol;
                field[currentRow][currentCol] = 'x';
                currentRow += 1;
                currentCol -= 1;
                break;
            case 'ul':
                sum += Math.pow(2, currentRow) + currentCol;
                field[currentRow][currentCol] = 'x';
                currentRow -= 1;
                currentCol -= 1;
                break;
            case 'ur':
                sum += Math.pow(2, currentRow) + currentCol;
                field[currentRow][currentCol] = 'x';
                currentRow -= 1;
                currentCol += 1;
                break;
        }
    }
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