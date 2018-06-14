const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    'a3{cd2{a}f}ef',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Stack {
    constructor() {
        this.arr = [];
    }

    get count() {
        return this.arr.length;
    }

    push(element) {
        this.arr.push(element);

        return this;
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    heightAtPeek() {
        return this.arr[this.arr.length - 1].height;
    }

    jumpsAtPeek() {
        return this.arr[this.arr.length - 1].jumps;
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

const stack = new Stack();
const code = gets().split('');

for (let i = 0; i < code.length; i += 1) {
    if (code[i] === '{') {
        stack.push(i);
    }
    if (code[i] === '}') {
        const startIndex = stack.pop();
        let j = startIndex - 1;
        let multiplier = '';
        let counter = 0;
        while (!isNaN(+code[j])) {
            multiplier = code[j] + multiplier;
            j -= 1;
            counter += 1;
        }
        if (multiplier === '') {
            multiplier = 1;
        }

        for (let l = startIndex - counter; l <= startIndex; l += 1) {
            code[l] = '';
        }

        let encoded = '';
        for (let k = startIndex + 1; k < i; k += 1) {
            encoded += code[k];
        }

        code[i] = encoded.repeat(+(multiplier));
        for (let m = startIndex; m < i; m += 1) {
            code[m] = '';
        }
    }
}
print(code.join(''));
// quit(0);