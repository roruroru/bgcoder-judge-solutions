// Write a program that applies bonus score to given score in the range [1…9] by the following rules:

//     If the score is between 1 and 3, the program multiplies it by 10.
//     If the score is between 4 and 6, the program multiplies it by 100.
//     If the score is between 7 and 9, the program multiplies it by 1000.
//     If the score is less than 0 or more than 9, the program prints "invalid score".

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
    8,
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = gets();

if (1 <= n && n <= 3) {
    print(n * 10);
} else if (4 <= n && n <= 6) {
    print(n * 100);
} else if (7 <= n && n <= 9) {
    print(n * 1000);
} else {
    print('invalid score');
}
