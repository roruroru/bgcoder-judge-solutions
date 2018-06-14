const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2,1,0,2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const arr = gets().split(',').map(Number);
let result = '';
let oddNumber;
let evenNumber;

for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 1) {
        oddNumber = arr[i].toString(2);
        oddNumber = '0'.repeat(8 - oddNumber.length) + oddNumber.toString();
        for (let j = 0; j < 8; j += 2) {
            result += oddNumber[j];
        }
        // console.log(oddNumber);
    } else {
        evenNumber = arr[i].toString(2);
        evenNumber = '0'.repeat(8 - evenNumber.length) + evenNumber.toString();
        for (let j = 1; j < 8; j += 2) {
            result += evenNumber[j];
        }
        // console.log(evenNumber);
    }
}
print(result);
// quit(0);