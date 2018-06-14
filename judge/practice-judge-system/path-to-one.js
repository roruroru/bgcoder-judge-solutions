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
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let counter = 0;

const divideByTwo = (number) => {
    return (number / 2);
};
const incrementByOne = (number) => {
    return (number + 1);
};
const decrementByOne = (number) => {
    return (number - 1);
};
while (n > 1) {
    if (n % 2 === 0) {
        n = divideByTwo(n);
        counter += 1;
    } else {
        if (n === 3) {
            n = decrementByOne(n);
            counter += 1;
        } else if ((n + 1) % 4 === 0) {
            n = incrementByOne(n);
            counter += 1;
        } else {
            n = decrementByOne(n);
            counter += 1;
        }
    }
}
print(counter);