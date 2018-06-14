const multiply = (a, b) => {
    if ((a | 0) === 0 || (b | 0) === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; a[i] >= 0; i++) {
        for (let j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    }

    for (let i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
};

console.log(multiply('10', '10'));

const c = multiply('1010101001010101010101010101', '101001010101010101010101010101010101001');

console.log(c);
console.log(multiply('10000000000000000', '10000000000000000'));
console.log(typeof c);