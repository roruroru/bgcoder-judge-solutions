const generateVariationsWithoutRep = (n, k, index, variation, used, allVariations) => {
    if (index === k) {
        allVariations.push([...variation]);
        return;
    }

    for (let i = 0; i < n.length; i += 1) {
        // if (used[i]) {
        //     continue; // comment to work with repetition
        // }

        variation[index] = n[i];
        used[i] = true;

        generateVariationsWithoutRep(n, k, index + 1, variation, used, allVariations);
        used[i] = false;
    }
};

const n = ['+', '-', '*'];
const k = 3;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: n.length,
});
const allVariations = [];

generateVariationsWithoutRep(n, k, 0, variation, used, allVariations);

allVariations.forEach((variation) => console.log(variation.join(' ')));
