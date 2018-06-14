const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '000',
    '0',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const digits = gets().split('').map(Number);
const expected = +gets();

const generateSignsVariations = (digitsArr, signsArr, k, index, variation, used) => {
    if (index === k) {
        let stringRes = '';
        for (let i = 0; i < k; i += 1) {
            // if (digitsArr[i] === 0 && variation[i] === '') {
            //     continue;
            // }
            stringRes += digitsArr[i] + variation[i];
        }
        stringRes += digitsArr[k];
        if (stringRes.match(/0[0-9]/g)) {
            stringRes = '';
        }
        const sum = eval(stringRes);
        // console.log(stringRes + '=' + sum);
        if (sum === expected) {
            counter += 1;
        }
        // result.push(sum);
        return;
    }

    for (let i = 0; i < signsArr.length; i += 1) {
        variation[index] = signsArr[i];

        used[i] = true;

        generateSignsVariations(digitsArr, signsArr, k, index + 1, variation, used);

        used[i] = false;
    }
};

const signsArr = ['+', '-', '*', ''];
const k = digits.length - 1;
const index = 0;
const variation = Array.from({
    length: k,
});
const used = Array.from({
    length: signsArr.length,
});

let counter = 0;

generateSignsVariations(digits, signsArr, k, index, variation, used);

// result.forEach((possibleVariation) => console.log(possibleVariation));

print(counter);
// quit(0);

