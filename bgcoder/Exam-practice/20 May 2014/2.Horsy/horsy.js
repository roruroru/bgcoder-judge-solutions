'use strict';

function solve(args) {
    let [rows, cols] = args[0].split(' ').map(Number);
    //console.log(rows, cols);

    let fieldMoves = [], 
        field = [];

    let horse = {
        r: rows - 1,
        c: cols - 1,
        repeat: false,
        outside: false
    };

    let sum = 0;
    let jumps = 0;

    for(let i = 1; i < rows + 1; i += 1) {
        fieldMoves.push(args[i].split('').map(Number));
    }

    for(let i = 0; i < rows; i += 1) {
        field[i] = [];
        for(let j = 0; j < cols; j += 1) {
            field[i][j] = Math.pow(2, i) - j;
        }
    }
    //console.log(fieldMoves);
    //console.log(field);

    while (!horse.outside && !horse.repeat) {
        if (horse.r < 0 || horse.r > rows -1 || horse.c < 0 || horse.c > cols - 1) {
            console.log(`Go go Horsy! Collected ${sum} weeds`);
            horse.outside = true;
            break;
        }

        
        sum += field[horse.r][horse.c];
        field[horse.r][horse.c] = 0;

        switch (fieldMoves[horse.r][horse.c]) {
            case 8:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += -2;
                horse.c += -1;
                break;
            case 1:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;       
                horse.r += -2;
                horse.c += +1;
                break;
            case 2:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += -1;
                horse.c += +2;
                break;
            case 3:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += +1;
                horse.c += +2;
                break;
            case 4:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += +2;
                horse.c += +1;
                break;
            case 5:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += +2;
                horse.c += -1;
                break;
            case 6:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += +1;
                horse.c += -2;
                break;
            case 7:
                fieldMoves[horse.r][horse.c] = 'X';
                jumps += 1;
                horse.r += -1;
                horse.c += -2;
                break;
            case 'X':
                console.log(`Sadly the horse is doomed in ${jumps} jumps`);
                horse.repeat = true;
                break;
        
            default:
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