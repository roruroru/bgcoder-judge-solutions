const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '6',
    '1 4 2 6 3 4',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// const n = +gets();
// const buildings = gets().split(' ').map(Number);

// let max = 0;
// let result = '';
// for (let i = 0; i < n; i += 1) {
//     let counter = 0;
//     let startingPosition = i;
//     for (let j = i + 1; j < n; j += 1) {
//         if (buildings[startingPosition] < buildings[j]) {
//             counter += 1;
//             startingPosition = j;
//             if (max < counter) {
//                 max = counter;
//             }
//         } else {
//             continue;
//         }
//     }
//     result += counter + ' ';
// }

// print(max);
// print(result.trim());

const n = +gets();
const buildings = gets().split(' ').map(Number).reverse();

// console.log(buildings);
// console.log(buildings.reverse());

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

const result = Array.from({
    length: buildings.length,
}).fill(0);

stack.push({
    height: buildings[0],
    jumps: 0,
});
result[n - 1] = 0;

// n = result.lenght -1

for (let i = 1; i < buildings.length; i += 1) {
    if (buildings[i] < buildings[i - 1]) {
        result[n - 1 - i] = 1 + result[n - i];
        stack.push({
            height: buildings[i],
            jumps: result[n - 1 - i],
        });
    } else {
        while (true) {
            stack.pop();
            if (stack.isEmpty()) {
                result[n - 1 - i] = 0;
                break;
            }
            if (buildings[i] < stack.heightAtPeek()) {
                result[n - 1 - i] = stack.jumpsAtPeek() + 1;
                break;
            }
        }
        // result[n - 1 - i] = stack.jumpsAtPeek() ? 0 + stack.jumpsAtPeek() : 0;
        // } else {
        //     result[n - 1 - i] = stack.jumpsAtPeek() + 1;
        // }
        stack.push({
            height: buildings[i],
            jumps: result[n - 1 - i],
        });
    }
    // console.log(stack.peek().height);
}

// console.log(result);
// console.log(buildings.reverse())
print(Math.max(...result));
print(result.join(' '));
// quit(0);