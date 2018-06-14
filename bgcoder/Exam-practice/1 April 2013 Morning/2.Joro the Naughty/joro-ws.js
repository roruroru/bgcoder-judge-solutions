'use strict';

function solve(args) {
    const rowColsAndJumps = parseNumbers(args[0]);
    const startPosition = parseNumbers(args[1]);
    //const rowColsAndJumps = args[0].split(' ').map(Number);
    //const startPosition = args[1].split(' ').map(Number);

    const rows = rowColsAndJumps[0];
    const cols = rowColsAndJumps[1];
    const allJumps = rowColsAndJumps[2];

    let currentRow = startPosition[0];
    let currentCol = startPosition[1];

    let field = initField();
    let jumps = readJumps();
    console.log(jumps);
    let jumpsIndex = 0;
    let escaped = false;
    let sumOfNumbers = 0;
    let totalJumps = 0;

    while (true) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            escaped = true;
            console.log(`escaped ${sumOfNumbers}`);
            break;
        }
        
        if (field[currentRow][currentCol] === 'X') {
            escaped = false;
            console.log(`caught ${totalJumps}`);    
            break;
        }

        sumOfNumbers += field[currentRow][currentCol];
        totalJumps ++;
        
        let currentJump = jumps[jumpsIndex];
        jumpsIndex += 1;
        if (jumpsIndex >= jumps.length) {
            jumpsIndex = 0;
        }    
            field[currentRow][currentCol] = 'X';
            
            currentRow += currentJump.row;
            currentCol += currentJump.col;
    }

    function initField() {
        let field = [];
        let counter = 1;
        for (let i = 0; i < rows; i += 1) {
            field[i] = [];
            for (let j = 0; j < cols; j += 1) {
                field[i][j] = counter++;
            }
        }
        return field;
    }

    function readJumps(params) {
        let jumps = [];
        
        for (let k = 2; k < 2 + allJumps; k += 1) {
            let parsedJump = parseNumbers(args[k]);
            let currentJump = {
                row: parsedJump[0],
                col: parsedJump[1]
            };
            jumps.push(currentJump);
        }
        return jumps;
    }

    function parseNumbers(input) {
        return input.split(' ').map(Number);
    }
}

solve(['6 7 3',
    '0 0',
    '2 2',
    '-2 2',
    '3 -1'
]);