const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();

const matrix = [];

for (let i = 0; i < n; i += 1) {
    const row = Array.from({
        length: n,
    });
    matrix.push(row);
}

let dir = 0;
let row = 0;
let col = 0;

const rowDir = [0, 1, 0, -1];
const colDir = [1, 0, -1, 0];

for (let i = 1; i <= n * n; i += 1) {
    matrix[row][col] = i;

    const nextRow = row + rowDir[dir];
    const nextCol = col + colDir[dir];

    if (nextRow >= n || nextRow < 0 ||
        nextCol >= n || nextCol < 0 ||
        typeof matrix[nextRow][nextCol] !== 'undefined') {
        dir += 1;
        dir %= 4;
    }
    row += rowDir[dir];
    col += colDir[dir];
}
for (const row of matrix) {
    print(row.join(' '));
}
// quit(0);