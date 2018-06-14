// Write a program that finds the maximal sum of consecutive elements in a given array of N numbers.

//     _Can you do it with only one loop (with single scan through the elements of the array)?_

// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given


const n = +gets();
let sum;
let maxSum = 0;

const arr = Array.from({
    length: n
});

for(let i = 0; i < n; i += 1) {
    arr[i] = +gets();
}

for(let i = 0; i < n; i += 1) {
    sum = arr[i];
    for(let j = i + 1; j < n; j += 1) {
        sum += arr[j];
        if (maxSum < sum) {
            maxSum = sum;
        }
    }
}

print(maxSum);