const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '4{a}2{xz}',
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

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    enqueue(jedi) {
        if (this.head === null) {
            this.head = jedi;
            this.tail = jedi;
        } else {
            this.tail.next = jedi;
            this.tail = this.tail.next;
        }
        this.count += 1;

        return this;
    }

    dequeue() {
        if (this.head === null) {
            return null;
        }

        const value = this.head.value;

        this.head = this.head.next;

        this.count -= 1;

        return value;
    }

    isEmpty() {
        return this.count === 0;
    }
};

const stack = new Stack();
// const queue = new Queue();
let code = gets().split('');
console.log(code);
let result = '';

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
            // console.log(counter);
        }
        // const subStr = code.substring(startIndex - counter, i + 1);
        if (multiplier === '') {
            multiplier = 1;
        }
        console.log(multiplier);
        code[startIndex - counter] = '';
        code[startIndex] = '';
        code[i] = '';
        let encoded = '';
        for (let k = startIndex + 1; k < i; k += 1) {
            encoded += code[k];
        }
        console.log(encoded);
        code[startIndex + 1] = encoded.repeat(+(multiplier));
        // console.log(subStr);
        // code = code.replace(subStr, ((code.substring(startIndex + 1, i)).repeat(+multiplier)));
        // if (code.indexOf('{') > -1) {
        //     i = code.indexOf('{') + 1;
        // }
    }
}
// console.log(code.trim());
console.log(code);
// quit(0);
// const stack = new Stack();
// const queue = new Queue();
// let code = gets();
// console.log(code);
// let result = '';

// for (let i = 0; i < code.length; i += 1) {
//     if (code[i] === '{') {
//         stack.push(i);
//     }
//     if (code[i] === '}') {
//         const startIndex = stack.pop();
//         let j = startIndex - 1;
//         let multiplier = '';
//         let counter = 0;
//         while (!isNaN(+code[j])) {
//             multiplier = code[j] + multiplier;
//             j -= 1;
//             counter += 1;
//             // console.log(counter);
//         }
//         const subStr = code.substring(startIndex - counter, i + 1);
//         if (multiplier === '') {
//             multiplier = 1;
//         }
//         console.log(multiplier);
//         console.log(subStr);
//         code = code.replace(subStr, ((code.substring(startIndex + 1, i)).repeat(+multiplier)));
//         if (code.indexOf('{') > -1) {
//             i = code.indexOf('{') + 1;
//         }
//     }
// }
// // console.log(code.trim());
// console.log(code);
// quit(0);
// const stack = new Stack();
// const queue = new Queue();
// let code = gets().split('');
// console.log(code);
// let result = '';

// for (let i = 0; i < code.length; i += 1) {
//     if (code[i] === '{') {
//         stack.push(i);
//     }
//     if (code[i] === '}') {
//         queue.enqueue({
//             value: i,
//             next: null,
//         });
//     }
// }

// console.log(stack);
// console.log(queue);

// while (!stack.isEmpty()) {
//     const startIndex = stack.pop();
//     console.log(startIndex);
//     const endIndex = queue.dequeue();
//     console.log(endIndex);
// }

