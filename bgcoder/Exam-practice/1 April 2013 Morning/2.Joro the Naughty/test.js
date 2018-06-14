function solve(args) {
    const [rows, cols, jumps] = args[0].split(' ').map(Number);
    let [currentRow, currentCol] = args[1].split(' ').map(Number);
    let jumpsArr = args.slice(2);
    
    let field = [];
    for(let i = 0; i < rows; i += 1) {
        field[i] = [];
        for(let j = 0; j < cols; j += 1) {
            field[i][j] = j + 1 + i * cols;
        }
    }
    //console.log(field);

    let moves = {
        row: currentRow,
        col: currentCol
    };
    let deltaRow,
        deltaCol,
        sum = 0,
        count = 0;
    let gameOver = false;

    while (gameOver === false) {
        for(let i = 0; i < jumps; i += 1) {
            if (moves.row < 0 || moves.row >= rows || moves.col < 0 || moves.col >= cols) {
                console.log(`escaped ${sum}`);
                gameOver = true;
                break;
            }
            if (field[moves.row][moves.col] === 'x') {
                console.log(`caught ${count}`);
                gameOver = true;
                break;
            }
            [deltaRow, deltaCol] = jumpsArr[i].split(' ').map(Number);
            //console.log(deltaRow, deltaCol);
            count += 1;
            sum += field[moves.row][moves.col];
            field[moves.row][moves.col] = 'x';
            moves.row += deltaRow;
            moves.col += deltaCol;
            //console.log(moves);
            //console.log(field);

        }
    }
}