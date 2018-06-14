const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '4{a}2{xz}'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

const encoded = [...gets()];
let decoded = '';
let repeat = 0;
const previousStack = [];
encoded.forEach(char => {
    if (char === '{') {
        previousStack.push({
            decoded,
            repeat
        });

        decoded = '';
        repeat = 0;
    } else if (char === '}') {
        const previous = previousStack.pop();
        decoded = previous.decoded + decoded.repeat(previous.repeat);
    } else if (!isNaN(char)) {
        repeat = repeat * 10 + (+char);
    } else {
        decoded += char;
    }
});

print(decoded);