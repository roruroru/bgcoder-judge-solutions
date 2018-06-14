const [rows, cols] = gets().split(' ').map(Number);

const firstPlayerMatrix = Array.from({
    length: rows
});
const firstPlayerShootedMatrix = Array.from({
    length: rows
});

for (let i = 0; i < rows; i++) {
    firstPlayerMatrix[i] = gets().split(' ').map(Number);
    firstPlayerShootedMatrix[i] = [];
}

const secondPlayerMatrix = Array.from({
    length: rows
});
const secondPlayerShootedMatrix = Array.from({
    length: rows
});

for (let i = rows - 1; i > -1; i--) {
    secondPlayerMatrix[i] = gets().split(' ').map(Number).reverse();
    secondPlayerShootedMatrix[i] = [];
}

let firstPlayerTurn = true;
let command;
while ((command = gets()) !== 'END') {
    const [, row, col] = command.split(' ').map(Number);
    if (firstPlayerTurn) {
        if (firstPlayerShootedMatrix[row][col]) {
            print('You already shot there!')
        } else if (secondPlayerMatrix[row][col]) {
            print('Booom');
        } else {
            print('Missed');
        }

        firstPlayerShootedMatrix[row][col] = true;
        secondPlayerMatrix[row][col] = 0;
    } else {
        if (secondPlayerShootedMatrix[row][col]) {
            print('You already shot there!')
        } else if (firstPlayerMatrix[row][col]) {
            print('Booom');
        } else {
            print('Missed');
        }

        secondPlayerShootedMatrix[row][col] = true;
        firstPlayerMatrix[row][col] = 0;
    }

    firstPlayerTurn = !firstPlayerTurn;
}

const firstPlayerResult = firstPlayerMatrix.reduce((finalSum, row) => finalSum + row.reduce((rowSum, element) => rowSum + element), 0);
const secondPlayerResult = secondPlayerMatrix.reduce((finalSum, row) => finalSum + row.reduce((rowSum, element) => rowSum + element), 0);
print(`${firstPlayerResult}:${secondPlayerResult}`);