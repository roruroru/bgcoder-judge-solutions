let arr = [2, 4, 8, 16, 64];
arr = arr.reverse();
console.log(arr);
const balls = 64;
let n = balls;
let step = 0;
let maxSteps = 0;
let totalBags = 1;

for (const bagCapacity of arr) {
    if (n % bagCapacity !== 0) {
        continue;
    }
    if (n === bagCapacity) {
        continue;
    }
    step += 1 * totalBags;
    totalBags = balls / bagCapacity;
    n = bagCapacity;
    if (maxSteps < step) {
        maxSteps = step;
    }
}

console.log(maxSteps);
