'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);
    let field = args.slice(1);
    for(let i = 0; i < rows; i += 1) {
        field[i] = field[i].split('').map(Number);
    }

    let sum = 0,
        jumps = 0,
        currentRow = rows - 1,
        currentCol = cols - 1;

    while (true) {
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            console.log(`Go go Horsy! Collected ${sum} weeds`);
            break;
        }
        if (field[currentRow][currentCol] === 'x') {
            console.log(`Sadly the horse is doomed in ${jumps} jumps`);
            break;
        }
        switch (field[currentRow][currentCol]) {
            case 1:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow -= 2;
                currentCol += 1;                
                break;
            case 2:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow -= 1;
                currentCol += 2;                
                break;
            case 3:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow += 1;
                currentCol += 2;                
                break;
            case 4:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow += 2;
                currentCol += 1;                
                break;
            case 5:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow += 2;
                currentCol -= 1;                
                break;
            case 6:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow += 1;
                currentCol -= 2;                
                break;
            case 7:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow -= 1;
                currentCol -= 2;                
                break;
            case 8:
                sum += Math.pow(2, currentRow) - currentCol;
                jumps += 1;
                field[currentRow][currentCol] = 'x';
                currentRow -= 2;
                currentCol -= 1;                
                break;
        }
    }
}

solve([
    '3 5',
    '54561',
    '43328',
    '52388',
  ]);
solve([
    '3 5',
    '54361',
    '43326',
    '52188',
  ]);