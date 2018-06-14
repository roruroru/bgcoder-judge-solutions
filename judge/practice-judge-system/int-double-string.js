// Write a program that, depending on the first line of the input, reads an int, double or string variable.

//     If the variable is int or double, the program increases it by one.
//     If the variable is a string, the program appends * at the end.
//     Print the result at the console. Use switch statement.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    'real',
    '-1.5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const type = gets();
const input = gets();

switch (type) {
    case 'integer':
        print(Number(input) + 1);
        break;
    case 'real':
        print((parseFloat(input) + 1).toFixed(2));
        break;
    case 'text':
        print(input + '*');
        break;

    default:
        break;
}
