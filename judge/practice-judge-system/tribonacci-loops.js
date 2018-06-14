const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2',
    '3',
    '4',
    '2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = [];
arr[0] = +gets();
arr[1] = +gets();
arr[2] = +gets();

const n = +gets();

for (let i = 3; i < n; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

print(arr[n - 1]);