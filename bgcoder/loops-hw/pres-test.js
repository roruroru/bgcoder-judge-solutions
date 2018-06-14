let n = 123,
    sum = 0,
    operands = 'The sum 123';

while(n > 120) {
    sum += n;
    console.log(sum);
    n -= 1;
    operands += '+' + n;
}

console.log(operands + ' = ' + sum);
