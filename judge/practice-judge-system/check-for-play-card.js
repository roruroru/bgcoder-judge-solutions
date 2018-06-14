// Classical play cards use the following signs to designate the 
// card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A.
//  Write a program that enters a string and prints
//   "yes CONTENT_OF_STRING" if it is a valid card sign or "no CONTENT_OF_STRING" otherwise.

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
    'q',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const card = gets();

const cards = ['2', '3', '4', '5', '6', '7', '8', '9',
 '10', 'J', 'Q', 'K', 'A'];

if (cards.indexOf(card) > -1) {
    print(`yes ${card}`);
} else {
    print(`no ${card}`);
}
