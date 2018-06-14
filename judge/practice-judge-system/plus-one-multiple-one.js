// We are given the following sequence:

//     S1 = N;
//     S2xx = S1 + 1;
//     S3 = 2*S1 + 1;
//     S4 = S1 + 2;
//     S5 = S2xx + 1;
//     S6 = 2*S2 + 1;
//     S7 = S2 + 2;

// Your task is to write a program, that by given N and M, finds the Mth member of the sequence

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

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

    peakValue() {
        return this.head.value;
    }
}

const [n, m] = gets().split(' ').map(Number);
// const arr = [];

// arr[0] = n;
// arr[1] = arr[1] + 1;
// arr[2] = 2 * arr[1] + 1;
// arr[3] = arr[1] + 2;
// arr[4] = arr[2] + 1;
// arr[5] = 2 * arr[2] + 1;
// arr[6] = arr[2] + 2;

const queue = new Queue;
let last = n;
queue.enqueue({
    value: n,
    next: null,
});

for (let i = 1; i < m; i += 1) {
    // console.log(last);
    if (i % 3 === 1) {
        queue.enqueue({
            value: queue.peakValue() + 1,
            next: null,
        });
        last = queue.peakValue() + 1;
    } else if (i % 3 === 2) {
        queue.enqueue({
            value: queue.peakValue() * 2 + 1,
            next: null,
        });
        last = queue.peakValue() * 2 + 1;
    } else {
        queue.enqueue({
            value: queue.peakValue() + 2,
            next: null,
        });
        last = queue.peakValue() + 2;
        queue.dequeue();
    }
}
print(last);
