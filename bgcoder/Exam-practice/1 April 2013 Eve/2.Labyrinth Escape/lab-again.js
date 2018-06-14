'use strict';

function solve(args) {
    let [rows, cols] = args[0].split(' ').map(Number);
    let [currentRow, currentCol] = args[1].split(' ').map(Number);
    let field = args.slice(2);
    for(let i = 0; i < rows; i += 1) {
        field[i] = field[i].split('');
    }
    console.log(field);

    let sum = 0;
    let numberOfVisited = 0;

    while (true) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            console.log(`out ${sum}`);
            break;
        }
        if (field[currentRow][currentCol] === 'x') {
            console.log(`lost ${numberOfVisited}`);
            break;
        }
        switch (field[currentRow][currentCol]) {
            case 'u': sum += currentCol + 1 + currentRow * cols;
                numberOfVisited += 1;
                field[currentRow][currentCol] = 'x';
                currentRow -= 1;
                break;
            case 'd': sum += currentCol + 1 + currentRow * cols;
                numberOfVisited += 1;
                field[currentRow][currentCol] = 'x';
                currentRow += 1;
                break;
            case 'l': sum += currentCol + 1 + currentRow * cols;
                numberOfVisited += 1;
                field[currentRow][currentCol] = 'x';
                currentCol -= 1;
                break;
            case 'r': sum += currentCol + 1 + currentRow * cols;
                numberOfVisited += 1;
                field[currentRow][currentCol] = 'x';
                currentCol += 1;
                break;
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