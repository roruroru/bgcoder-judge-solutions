// Write a program that finds the length of the maximal increasing sequence in an array of N integers.
// Input

//     On the first line you will receive the number N
//     On the next N lines the numbers of the array will be given

const n = +gets();
const arr = Array.from({
    length: n
});

arr[0] = +gets();
let counter = 1;
let max = 1;

for(let i = 1; i < n; i += 1) {
    arr[i] = +gets();
    if (arr[i] > arr[i - 1]) {
        counter += 1;
        if (max < counter) {
            max = counter;
        }
    }
    else {
        counter = 1;
    }
}
print(max);