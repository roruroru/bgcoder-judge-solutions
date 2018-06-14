'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);
    const n = +args[2];
    const commands = args.slice(3);

    const field = [];
    for (let i = 0; i < rows; i += 1) {
        field[i] = [];
        for (let j = 0; j < cols; j += 1) {
            field[i][j] = -5;
        }
    }

    let tankPositions = [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: rows - 1, col: cols - 1 },
        { row: rows - 1, col: cols - 2 },
        { row: rows - 1, col: cols - 3 },
        { row: rows - 1, col: cols - 4 }
    ];
    for (let i = 0; i < 8; i += 1) {
        field[tankPositions[i].row][tankPositions[i].col] = i;
    }

    let kTanks = 4;
    let cTanks = 4;

    const debrisCoord = args[1].split(';');
    for (let i = 0; i < debrisCoord.length; i += 1) {
        let spl = debrisCoord[i].split(' ');
        field[spl[0]][spl[1]] = 'D';
    }

    for (let i = 0; i < n; i += 1) {
        //console.log(field);
        //console.log(commands[i]);
        let spl = commands[i].split(' ');
        let tankId, distance, direction, currentRow, currentCol, deltaRow, deltaCol;
        if (spl[0] === 'mv') {
            tankId = +spl[1];
            distance = +spl[2];
            direction = spl[3];
            currentRow = tankPositions[tankId].row;
            currentCol = tankPositions[tankId].col;

            switch (direction) {
                case 'r':
                    deltaRow = 0;
                    deltaCol = 1;
                    break;
                case 'd':
                    deltaRow = 1;
                    deltaCol = 0;
                    break;
                case 'l':
                    deltaRow = 0;
                    deltaCol = -1;
                    break;
                case 'u':
                    deltaRow = -1;
                    deltaCol = 0;
                    break;
            }

            while (distance > 0) {
                let nextCell = field[currentRow + deltaRow][currentCol + deltaCol];
                if (currentRow + deltaRow < 0 || currentRow + deltaRow >= rows ||
                    currentCol + deltaCol < 0 || currentCol + deltaCol >= cols) {
                    tankPositions[tankId].row = currentRow;
                    tankPositions[tankId].col = currentCol;
                    break;
                }
                if (nextCell === 'D') {
                    tankPositions[tankId].row = currentRow;
                    tankPositions[tankId].col = currentCol;
                    break;
                }
                if (nextCell >= 0) {
                    tankPositions[tankId].row = currentRow;
                    tankPositions[tankId].col = currentCol;
                    break;
                }
                field[currentRow][currentCol] = -5;
                currentRow += deltaRow;
                currentCol += deltaCol;
                distance -= 1;
                field[currentRow][currentCol] = tankId;
                tankPositions[tankId].row = currentRow;
                tankPositions[tankId].col = currentCol;
            }
        }
        if (spl[0] === 'x') {
            tankId = spl[1];
            direction = spl[2];

            switch (direction) {
                case 'r':
                    deltaRow = 0;
                    deltaCol = 1;
                    break;
                case 'd':
                    deltaRow = 1;
                    deltaCol = 0;
                    break;
                case 'l':
                    deltaRow = 0;
                    deltaCol = -1;
                    break;
                case 'u':
                    deltaRow = -1;
                    deltaCol = 0;
                    break;
            }

            let shotRow = tankPositions[tankId].row + deltaRow;
            let shotCol = tankPositions[tankId].col + deltaCol;

            while (0 <= shotRow && shotRow < rows && 0 <= shotCol && shotCol < cols) {
                if (field[shotRow][shotCol] === 'D') {
                    field[shotRow][shotCol] = -5;
                    break;
                }
                if (field[shotRow][shotCol] >= 0) {
                    console.log(`Tank ${field[shotRow][shotCol]} is gg`);
                    // tankPositions[field[shotRow][shotCol]].row = -5;
                    // tankPositions[field[shotRow][shotCol]].col = -5;
                    if (field[shotRow][shotCol] < 4) {
                        kTanks -= 1;
                        if (kTanks === 0) {
                            console.log(`Koceto is gg`);
                        }
                    }
                    else {
                        cTanks -= 1;
                        if (cTanks === 0) {
                            console.log(`Cuki is gg`);
                        }
                    }
                    field[shotRow][shotCol] = - 5;
                    break;
                }
                shotRow += deltaRow;
                shotCol += deltaCol;
            }
        }
    }
}

solve([
    '5 5',
    '2 0;2 1;2 2;2 3;2 4',
    '13',
    'mv 7 2 l',
    'x 7 u',
    'x 0 d',
    'x 6 u',
    'x 5 u',
    'x 2 d',
    'x 3 d',
    'mv 4 1 u',
    'mv 4 4 l',
    'mv 1 1 l',
    'x 4 u',
    'mv 4 2 r',
    'x 2 d'
]);

solve([
    '10 10',
    '1 0;1 1;1 2;1 3;1 4;4 1;4 2;4 3;4 4',
    '8',
    'mv 4 9 u',
    'x 4 l',
    'x 4 l',
    'x 4 l',
    'x 0 r',
    'mv 0 9 r',
    'mv 5 1 r',
    'x 5 u'
]);

solve([
    '10 5',
    '1 0;1 1;1 2;1 3;1 4;3 1;3 3;4 0;4 2;4 4',
    '43',
    'mv 6 5 r',
    'mv 0 6 d',
    'x 0 d',
    'x 0 d',
    'x 6 u',
    'x 6 u',
    'x 6 u',
    'x 6 u',
    'x 6 u',
    'x 7 u',
    'x 7 u',
    'x 7 u',
    'x 7 u',
    'x 7 u',
    'x 3 d',
    'x 3 d',
    'x 3 d',
    'x 3 d',
    'x 3 d',
    'x 4 u',
    'x 4 u',
    'x 4 u',
    'x 4 u',
    'x 4 u',
    'x 0 r',
    'mv 0 6 d',
    'mv 0 9 r',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d',
    'mv 0 1 l',
    'x 0 d'
]);