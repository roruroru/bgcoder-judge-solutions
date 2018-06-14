const add = (a, b) => {
    if ((a | 0) === 0 && (b | 0) === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; (a[i] >= 0) || (b[i] >= 0); i++) {
        const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
};

console.log(add('111111111111111111111', '22222222222222222222'));
