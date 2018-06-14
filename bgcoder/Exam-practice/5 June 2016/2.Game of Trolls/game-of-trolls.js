'use strict';

function solve(args) {
    const arr = args[0].split(' ').map(Number);
    const rows = arr[0];
    const cols = arr[1];

    const EMPTY_CELL = -9;
    
    const field = new Array(rows);
    field.fill(0);
    for(let i in field) {
        field[i] = new Array(cols);
        field[i].fill(EMPTY_CELL);
    }
    
    let startingPositions = args[1].split(';');
    let wPos = startingPositions[0].split(' ').map(Number);
    let nPos = startingPositions[1].split(' ').map(Number);
    let lPos = startingPositions[2].split(' ').map(Number);

    let trollPositions = [
        {row: wPos[0], col: wPos[1]},
        {row: nPos[0], col: nPos[1]},
        {row: lPos[0], col: lPos[1]}
    ];

    for(let i in trollPositions) {
        field[trollPositions[i].row][trollPositions[i].col] = +i;
    }

    function moveTroll(id, dir) {
        let deltaRow = 0;
        let deltaCol = 0;

        if (dir === 'u') {
            deltaRow = -1;
        }
        else if (dir === 'd') {
            deltaRow = +1;
        }
        else if (dir === 'l') {
            deltaCol = -1;
        }
        else if (dir === 'r') {
            deltaCol = +1;
        }

        let trollRow = trollPositions[id].row;
        let trollCol = trollPositions[id].col;

        field[trollRow][trollCol] = EMPTY_CELL; //TODO CHECK if trapped or trap --> if...

        const newPositionRow = trollRow + deltaRow;
        const newPositionCol = trollCol + deltaCol;

        if (newPositionRow < 0 || newPositionRow > rows - 1) {
            trollPositions[id].row = trollRow;
        }
        if (newPositionCol < 0 || newPositionCol > cols - 1) {
            trollPositions[id].col = trollCol;
        }
        if (trapped) { //TO DO trap check
            trollPositions[id].row = trollRow;
            trollPositions[id].col = trollCol;            
        }

        if (condition) {
            
        }
    }
    console.log(field);
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
// solve([
//     '7 7',
//     '0 1;0 2;3 3',
//     'mv Lsjtujzbo l',
//     'lay trap',
//     'mv Lsjtujzbo r',
//     'lay trap',
//     'mv Lsjtujzbo r',
//     'lay trap',
//     'mv Lsjtujzbo d',
//     'mv Lsjtujzbo r',
//     'mv Lsjtujzbo r',
//     'mv Lsjtujzbo r',
//     'mv Lsjtujzbo r',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Wboup l',
//     'mv Wboup l',
//     'mv Nbslbub r',
//     'mv Nbslbub r',
//     'mv Nbslbub r',
//     'mv Nbslbub d',
//     'mv Lsjtujzbo d',
//     'mv Lsjtujzbo l',
//     'mv Lsjtujzbo l',
//     'mv Nbslbub l',
//     'mv Nbslbub d',
//     'mv Nbslbub d',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Wboup r',
//     'mv Lsjtujzbo d',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Wboup r',
//     'mv Lsjtujzbo r',
//     'mv Lsjtujzbo r'
// ]);
// solve([
//     '8 8',
//     '1 3;0 3;5 5',
//     'mv Lsjtujzbo l',
//     'mv Lsjtujzbo l',
//     'lay trap',
//     'mv Lsjtujzbo r',
//     'lay trap',
//     'mv Lsjtujzbo r',
//     'lay trap',
//     'mv Lsjtujzbo d',
//     'lay trap',
//     'mv Lsjtujzbo d',
//     'lay trap',
//     'mv Wboup r',
//     'mv Wboup r',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Wboup d',
//     'mv Nbslbub d',
//     'mv Nbslbub d',
//     'mv Lsjtujzbo l',
//     'mv Nbslbub d',
//     'mv Nbslbub r',
//     'mv Nbslbub r',
//     'mv Nbslbub d',
//     'mv Nbslbub d',
//     'mv Nbslbub d'
// ]);