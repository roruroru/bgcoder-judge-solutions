const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2 2',
    '0 1',
    '1 1',
    '1 0',
    '1 1',
    'Shoot 1 1',
    'Shoot 0 1',
    'Shoot 0 0',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 0',
    'END',
    // '3 4',
    // '0 1 1 1',
    // '1 1 0 0',
    // '1 1 0 1',
    // '1 0 1 1',
    // '1 0 0 0',
    // '1 1 1 1',
    // 'Shoot 2 3',
    // 'Shoot 1 1',
    // 'Shoot 2 1',
    // 'Shoot 0 0',
    // 'Shoot 1 1',
    // 'Shoot 1 1',
    // 'Shoot 2 1',
    // 'Shoot 2 3',
    // 'END',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// --------------------------------------------

const [rows, cols] = gets().split(' ').map(Number);

const playerOneTable = Array.from({
    length: rows,
});
const playerTwoTable = Array.from({
    length: rows,
});
let playerOneBoats = 0;
let playerTwoBoats = 0;

for (let i = 0; i < rows; i += 1) {
    playerOneTable[i] = gets().split(' ').map(Number);

    playerOneBoats += playerOneTable[i].reduce((sum, number) =>
        sum + number, 0);
}

for (let i = 0; i < rows; i += 1) {
    playerTwoTable[i] = gets().split(' ').map(Number);

    playerTwoBoats += playerTwoTable[i].reduce((sum, number) =>
        sum + number, 0);
}

let command;
let turnCounter = 0;

while (command !== 'END') {
    command = gets();
    turnCounter += 1;

    if (command === 'END') {
        break;
    }
    const commandArr = command.split(' ');
    const rowToCheck = +commandArr[1];
    const colToCheck = +commandArr[2];

    if (turnCounter % 2 === 1) { // P1 turn
        if (playerTwoTable[rows - 1 - rowToCheck][cols - 1 - colToCheck] === 'X') {
            print('You already shot there!');
        } else if (playerTwoTable[rows - 1 - rowToCheck][cols - 1 - colToCheck] === 0) {
            playerTwoTable[rows - 1 - rowToCheck][cols - 1 - colToCheck] = 'X';
            print('Missed');
        } else {
            playerTwoTable[rows - 1 - rowToCheck][cols - 1 - colToCheck] = 'X';
            playerTwoBoats -= 1;
            print('Booom');
        }
        // console.log(playerTwoBoats);
        // console.log(playerTwoTable);
    } else {
        if (playerOneTable[rowToCheck][colToCheck] === 'X') {
            print('You already shot there!');
        } else if (playerOneTable[rowToCheck][colToCheck] === 0) {
            playerOneTable[rowToCheck][colToCheck] = 'X';
            print('Missed');
        } else {
            playerOneTable[rowToCheck][colToCheck] = 'X';
            playerOneBoats -= 1;
            print('Booom');
        }
    }
}

print(`${playerOneBoats}:${playerTwoBoats}`);
// quit(0);