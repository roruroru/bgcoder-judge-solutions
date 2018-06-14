const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '7',
    'P4 P2 P3 M1 K2 P1 K1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const order = gets().split(' ');

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
}

const masterQueue = new Queue;
const knightQueue = new Queue;
const padawanQueue = new Queue;

for (let i = 0; i < n; i += 1) {
    if (order[i][0] === 'M') {
        masterQueue.enqueue({
            value: order[i],
            next: null,
        });
    } else if (order[i][0] === 'K') {
        knightQueue.enqueue({
            value: order[i],
            next: null,
        });
    } else {
        padawanQueue.enqueue({
            value: order[i],
            next: null,
        });
    }
}

// console.log(masterQueue);
// console.log(knightQueue);
// console.log(padawanQueue);

let result = '';

while (masterQueue.count > 0) {
    result += masterQueue.dequeue() + ' ';
}
while (knightQueue.count > 0) {
    result += knightQueue.dequeue() + ' ';
}
while (padawanQueue.count > 0) {
    result += padawanQueue.dequeue() + ' ';
}
print(result.trim());
// quit(0);

// console.log(masterQueue);

// const jedi = {
//     name: 'M100',
//     next: null,
// };
// const jedi2 = {
//     name: 'M1000',
//     next: null,
// };

// masterQueue.enqueue(jedi);
// console.log(masterQueue);
// masterQueue.enqueue(jedi2);
// console.log(masterQueue);