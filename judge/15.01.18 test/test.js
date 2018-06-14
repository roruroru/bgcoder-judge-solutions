// const getGets = (arr) => {
//     let index = 0;
//     return () => {
//         const toReturn = arr[index];
//         index += 1;
//         return toReturn;
//     };
// };
// const test = [
//     '7',
//     '8 4 7 5 6 10 9',
// ];
// const gets = this.gets || getGets(test);
// const print = this.print || console.log;

// // -------------------------------------------

// /* globals Map */

// let n = +gets();
// let packsLeft = n;
// const cookiesArr = gets().split(' ').map(Number);

// let cantEatMore = false;
// const cookieTable = new Map();
// const stack = [];
// let totalDays = 0;

// for (let i = 0; i < n; i += 1) {
//     cookieTable.set(i, cookiesArr[i]);
// }

// console.log(cookieTable);

// cookieTable.forEach((value, key) => console.log('key:' + key + ', value:' + value));

// for (const item of cookieTable) {
//     console.log(item);
//     console.log(item[0]);
// }

const result = new Set();

result.add(2);
result.add(5);
result.add(1);
result.add(8);
result.add(3);
result.add(10);
result.add(10);

console.log(result);

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
console.log(arr.filter((x, y) => x !== y));
console.log(arr.filter((x, y) => x !== y));
console.log(arr.filter((x, y) => x !== y));
console.log(arr.filter((x, y) => x !== y));