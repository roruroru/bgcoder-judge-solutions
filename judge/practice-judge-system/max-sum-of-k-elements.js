// Write a program that reads two integer numbers N and K and an array of N elements from the console. Find the maximal sum of K elements in the array.
// Input
// 
    // On the first line you will receive the number N
    // On the second line you will receive the number K
    // On the next N lines the numbers of the array will be given

const n = +gets();
const k = +gets();
let sum = 0;

const arr = Array.from({
    length: n
});

for(let i = 0; i < n; i += 1) {
    arr[i] = +gets();
}

arr.sort((x, y) => y - x);

for(let i = 0; i < k; i += 1) {
    sum += arr[i];
};

print(sum);





