'use strict';

function solve(args) {
    const [rows, cols] = args[0].split(' ').map(Number);
    let playerCoords = args[1].split(/[; ]/g).map(Number);
    //console.log(playerCoords);
    let trollW = {
            row: playerCoords[0],
            col: playerCoords[1],
            trapped: false
        };
    let trollN = {
            row: playerCoords[2],
            col: playerCoords[3],
            trapped: false
        };
    let princess = {
            row: playerCoords[4],
            col: playerCoords[5],
            trapped: false
        };

    let traps = [];
    for(let i = 0; i < rows; i += 1) {
        let rows = new Array(cols);
        rows.fill(false);
        traps.push(rows);
    }

    args.shift();
    args.shift();

    args.forEach(function(command) {
        if (command === 'lay trap') {
            traps[princess.row][princess.col] = true;
        }
        else {
            let spl = command.split(' ');
            let unitToMove;
            if (spl[1][0] === 'L') {
                unitToMove = princess;
            }
            else if (spl[1][0] === 'N') {
                unitToMove = trollN;
            }
            else if (spl[1][0] === 'W') {
                unitToMove = trollW;
            }
            else {

            }

            if (unitToMove.trapped) {
                return;
            }

            if (spl[2] === 'u' && unitToMove.row > 0) {
                unitToMove.row -= 1;
            }
            else if (spl[2] === 'd' && unitToMove.row < rows - 1) {
                unitToMove.row += 1;
            }
            else if (spl[2] === 'l' && unitToMove.col > 0) {
                unitToMove.col -= 1;
            }
            else if (spl[2] === 'r' && unitToMove.col < cols - 1) {
                unitToMove.col += 1;
            }

            if (trollW.row === trollN.row && trollW.col === trollN.col) {
                trollN.trapped = false;
                trollW.trapped = false;
                traps[trollN.row][trollN.col] = false;
            }

            if (spl[1][0] !== 'L' && traps[unitToMove.row][unitToMove.col]) {
                unitToMove.trapped = true;
            }

            if (princess.row === rows - 1 && princess.col === cols - 1) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else if (trollW.trapped && trollN.trapped) {
                console.log(`Lsjtujzbo is saved! ${trollW.row} ${trollW.col} ${trollN.row} ${trollN.col}`);
            }
            else {
                if (Math.abs(princess.row - trollW.row) < 2 && Math.abs(princess.col - trollW.col) < 2) {
                    console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
                }
                else if (Math.abs(princess.row - trollN.row) < 2 && Math.abs(princess.col - trollN.col) < 2) {
                    console.log(`The trolls caught Lsjtujzbo at ${princess.row} ${princess.col}`);
                }
            }
        }
    });
}

solve([
    '5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d'
]);

solve([
    '7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r'
]);

solve([
    '8 8',
    '1 3;0 3;5 5',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Lsjtujzbo l',
    'mv Nbslbub d',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d'
]);