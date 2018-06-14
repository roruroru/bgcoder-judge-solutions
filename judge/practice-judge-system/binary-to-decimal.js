// Using loops write a program that converts a binary integer number to its decimal form.

//     The input is entered as string. The output should be a variable of type long.
//     _Do not use the built-in .NET functionality._

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1010101010101011',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const binary = gets().split('').map(Number);
let decimal = 0;

for (let i = binary.length - 1; i >= 0; i -= 1) {
    decimal += Math.pow(2, binary.length - 1 - i) * binary[i];
}

print(decimal);
