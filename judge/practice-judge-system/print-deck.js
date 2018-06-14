// Write a program that reads a card sign(as a string) from the console and generates and prints
//  all possible cards from a standard deck of 52 cards up to the card
//   with the given sign(without the jokers).
//    The cards should be printed using the classical
//     notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).

//     The card faces should start from 2 to A(10 is 10).
//     Print each card face in its four possible suits: clubs, diamonds, hearts and spades.

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;


const card = gets();

const deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardIndex = deck.indexOf(card);

for (let i = 0; i <= cardIndex; i += 1) {
    print(`${deck[i]} of spades, ${deck[i]} of clubs, ${deck[i]} of hearts, ${deck[i]} of diamonds`);
}

// quit(0);