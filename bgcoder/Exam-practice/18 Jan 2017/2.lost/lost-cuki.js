'use strict';

function solve(args) {
	const [rows, cols] = args.shift().split(' ').map(Number);
	const field = [];
	args.forEach(function(line) {
		field.push(line.split(' ').map(Number));
	});

	let currentRow = rows / 2 | 0;
	let currentCol = cols / 2 | 0;

	function escape() {
		console.log(`No rakiya, only JavaScript ${currentRow} ${currentCol}`);
	}
	function getCaught() {
		console.log(`No JavaScript, only rakiya ${currentRow} ${currentCol}`);
	}

	while(true) {
		const value = field[currentRow][currentCol];
		if(value & 1) { // can go up
			if(currentRow === 0) {
				return escape();
			}
			if(field[currentRow - 1][currentCol] >= 0) {
				field[currentRow][currentCol] = -1;
				currentRow -= 1;
				continue;
			}
		}
		if(value & 2) { // can go right
			if(currentCol === cols - 1) {
				return escape();
			}
			if(field[currentRow][currentCol + 1] >= 0) {
				field[currentRow][currentCol] = -1;
				currentCol += 1;
				continue;
			}
		}
		if(value & 4) { // can go down
			if(currentRow === rows - 1) {
				return escape();
			}
			if(field[currentRow + 1][currentCol] >= 0) {
				field[currentRow][currentCol] = -1;
				currentRow += 1;
				continue;
			}
		}
		if(value & 8) { // can go left
			if(currentCol === 0) {
				return escape();
			}
			if(field[currentRow][currentCol - 1] >= 0) {
				field[currentRow][currentCol] = -1;
				currentCol -= 1;
				continue;
			}
		}

		return getCaught();
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