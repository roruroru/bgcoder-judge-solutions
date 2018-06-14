const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 * (123 * (1 + 3) + ((4 - 3) / 6))',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ------------------------------------

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
        // const val = this.arr[this.arr.length - 1];
        // this.arr.pop();

        // return val;
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

const str = gets();

for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
        stack.push(i);
    }
    if (str[i] === ')') {
        const startIndex = stack.pop();
        print(str.substring(startIndex, i + 1));
    }
}

