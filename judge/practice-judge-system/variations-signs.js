// const generateVariations = (n, k, index, variation, used, result) => {
//     if (index === k) {
//         result.push([...variation]);
//         return;
//     }

//     for (let i = 0; i < n; i += 1) {
//         // if (used[i]) {
//         //     continue;
//         // }

//         variation[index] = i + 1;
//         used[i] = true;

//         generateVariations(n, k, index + 1, variation, used, result);

//         used[i] = false;
//     }
// };

// const n = 3;
// const k = 3;
// const index = 0;
// const variation = Array.from({
//     length: k,
// });
// const used = Array.from({
//     length: n,
// });
// const result = [];

// generateVariations(n, k, index, variation, used, result);

// result.forEach((possibleVariation) => console.log(possibleVariation));


const generateSignsVariations = (signsArr, k, index, variation, used, result) => {
    if (index === k) {
        result.push([...variation]);
        return;
    }

    for (let i = 0; i < signsArr.length; i += 1) {
        variation[index] = signsArr[i];

        used[i] = true;

        generateSignsVariations(signsArr, k, index + 1, variation, used, result);

        used[i] = false;
    }
};

const signsArr = ['+', '-', '*', '""'];
const k = 13;
const index = 0;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: signsArr.length,
});
const result = [];

generateSignsVariations(signsArr, k, index, variation, used, result);

result.forEach((possibleVariation) => console.log(possibleVariation));
