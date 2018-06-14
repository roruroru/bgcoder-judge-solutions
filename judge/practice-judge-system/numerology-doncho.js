const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '18790314',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -------------------------------------

const transform = (a, b) => {
    return (a + b) * (a ^ b) % 10;
};

const defaultCounts = Array.from({
    length: 10,
}, () => 0);

const solve = (digits, counts = defaultCounts) => {
    if (digits.length === 1) {
        const digit = digits[0];
        counts[digit] = counts[digit] || 0;
        counts[digit] += 1;
        return;
    }

    for (let i = 0; i < digits.length - 1; i += 1) {
        const a = digits[i];
        const b = digits[i + 1];
        const result = transform(a, b);
        const newDigits = [...digits];
        newDigits.splice(i, 2, result);
        solve(newDigits, counts);
    }

    return counts.map((digit) => digit || 0);
};

print(solve(gets().split('').map(Number)));
