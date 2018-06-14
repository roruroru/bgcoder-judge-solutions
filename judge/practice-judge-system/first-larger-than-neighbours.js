// Write a method that returns the index of the first element in array
//  that is larger than its neighbours, or -1, if there is no such element.

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
    '-26 -25 -28 31 2 27',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const len = +gets();
const arr = gets().split(' ').map(Number);
let index = -1;

for (let i = 1; i < len - 1; i += 1) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        index = i;
        break;
    }
}
print(index);
