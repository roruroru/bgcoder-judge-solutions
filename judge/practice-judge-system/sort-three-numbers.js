// Write a program that enters 3 real numbers and prints them sorted in descending order.

//     Use nested if statements.
//     _Don’t use arrays and the built-in sorting functionality._

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1',
    '5',
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();

if (a >= b) {
    if (b >= c) {
        print(a, b, c);
    } else {
        if (a >= c) {
            print(a, c, b);
        } else {
            print(c, a, b);
        }
    }
} else {
    if (a >= c) {
        print(b, a, c);
    } else {
        if (b >= c) {
            print(b, c, a);
        } else {
            print(c, b, a);
        }
    }
}
