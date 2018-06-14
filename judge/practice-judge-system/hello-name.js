// Write a method that asks the user for his name and prints Hello, <name>!. Write a program to test this method.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    'Doncho',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const sayHi = (name) => {
    print(`Hello, ${name}!`);
};

sayHi(gets());
