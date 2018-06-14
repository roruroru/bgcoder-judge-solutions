const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '4 3',
    '3 2 4',
    '2 0 3',
    '1 1 5',
    '2 2 5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
const lab = Array.from({
    length: 0;
})