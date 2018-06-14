// Write a program that read a digit [0-9] from the console, and depending on the input,
//  shows the digit as a word (in English).

//     Print "not a digit" in case of invalid input.
//     Use a switch statement.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1.1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();

switch (n) {
    case '0':
        print('zero');
        break;
    case '1':
        print('one');
        break;
    case '2':
        print('two');
        break;
    case '3':
        print('three');
        break;
    case '4':
        print('four');
        break;
    case '5':
        print('five');
        break;
    case '6':
        print('six');
        break;
    case '7':
        print('seven');
        break;
    case '8':
        print('eight');
        break;
    case '9':
        print('nine');
        break;

    default:
        print('not a digit');
        break;
}
