'use strict';

function solve(args) {

    let m = +args[1];
    let maxSum = -1000000000;

    for (let i = 2; i < m + 2; i += 1) {
        let field = args[0].split(', ').map(Number);
        let l = field.length;
        let arr = args[i].split(', ').map(Number);
        //console.log(args[i]);
        //console.log(arr);
        let len = arr.length;
        let j = 0;
        let sum = 0;
        let currentIndex = 0;

        while (true) {
            if (currentIndex < 0 || currentIndex >= l) {
                if (maxSum < sum) {
                    maxSum = sum;
                }
                break;
            }
            if (field[currentIndex] === 'x') {
                if (maxSum < sum) {
                    maxSum = sum;
                }
                break;
            }

            sum += field[currentIndex];
            field[currentIndex] = 'x';
            currentIndex += arr[j];
            if (j === len - 1) {
                j = 0;
            } else {
                j += 1;
            }
            //console.log(sum, i);
        }
    }
    console.log(maxSum);
}

solve(['2, -4, -6, 10, 2, 1, 5',
    '3',
    '3, 2, -1',
    '2, 2, -4',
    '2, -3'
]);