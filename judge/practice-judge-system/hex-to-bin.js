// The task is simple: convert a number in hexadecimal to a number in binary

//     Do it without conversion to decimal

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1A2B3C4D5E6F',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const hexStr = gets();
let binStr = '';

for (let i = 0; i < hexStr.length; i += 1) {
    switch (hexStr[i]) {
        case '0':
            binStr += '0000';
            break;
        case '1':
            binStr += '0001';
            break;
        case '2':
            binStr += '0010';
            break;
        case '3':
            binStr += '0011';
            break;
        case '4':
            binStr += '0100';
            break;
        case '5':
            binStr += '0101';
            break;
        case '6':
            binStr += '0110';
            break;
        case '7':
            binStr += '0111';
            break;
        case '8':
            binStr += '1000';
            break;
        case '9':
            binStr += '1001';
            break;
        case 'A':
            binStr += '1010';
            break;
        case 'B':
            binStr += '1011';
            break;
        case 'C':
            binStr += '1100';
            break;
        case 'D':
            binStr += '1101';
            break;
        case 'E':
            binStr += '1110';
            break;
        case 'F':
            binStr += '1111';
            break;

        default:
            break;
    }
}
const index = binStr.indexOf('1');

print(binStr.substring(index));
