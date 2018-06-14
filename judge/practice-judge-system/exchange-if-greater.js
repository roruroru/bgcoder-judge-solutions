// Write a program that reads two double values from the console A and B,
//  stores them in variables and exchanges their values if the first one
//   is greater than the second one. Use an if-statement. 
//   As a result print the values of the variables A and B, separated by a space.

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '5',
    '3',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let a = +gets();
let b = +gets();

if (a > b) {
    [a, b] = [b, a];
}
print(a, b);
