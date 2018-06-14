'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);

    let maze = [];
    for (let i = 1; i <= rows; i += 1) {
        let rowArr = args[i].split(' ').map(Number);
        maze.push(rowArr);
    }
    //console.log(maze);

    let currentRow = Math.floor(rows / 2);
    let currentCol = Math.floor(cols / 2);

    while (true) {
        const cell = maze[currentRow][currentCol];
        if (cell & 1) {
            if (currentRow === 0) {
                return escaped();
            }
            if (maze[currentRow - 1][currentCol] !== 'x') {
                maze[currentRow][currentCol] = 'x';
                currentRow -= 1;
                continue;
            }
        }
        if (cell & 2) {
            if (currentCol === cols - 1) {
                return escaped();
            }
            if (maze[currentRow ][currentCol + 1] !== 'x') {
                maze[currentRow][currentCol] = 'x';
                currentCol += 1;
                continue;
            }
        }
        if (cell & 4) {
            if (currentRow === rows - 1) {
                return escaped();
            }
            if (maze[currentRow + 1][currentCol] !== 'x') {
                maze[currentRow][currentCol] = 'x';
                currentRow += 1;
                continue;
            }
        }
        if (cell & 8) {
            if (currentCol === 0) {
                return escaped();
            }
            if (maze[currentRow][currentCol - 1] !== 'x') {
                maze[currentRow][currentCol] = 'x';
                currentCol -= 1;
                continue;
            }
        }

        return caught();
    }

    function caught() {
        console.log(`No JavaScript, only rakiya ${currentRow} ${currentCol}`);
    }
    function escaped() {
        console.log(`No rakiya, only JavaScript ${currentRow} ${currentCol}`);
    }
}

solve([
    '5 7',
    '9 5 3 11 9 5 3',
    '10 11 10 12 4 3 10',
    '10 10 12 7 13 6 10',
    '12 4 3 9 5 5 2',
    '13 5 4 6 13 5 6'
]);
solve([
    '7 5',
    '9 3 11 9 3',
    '10 12 4 6 10',
    '12 3 13 1 6',
    '9 6 11 12 3',
    '10 9 6 13 6',
    '10 12 5 5 3',
    '12 5 5 5 6'
]);