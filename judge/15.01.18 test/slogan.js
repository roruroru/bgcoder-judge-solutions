const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '2',
    'baba mama bebe kaka',
    'babababababamamakakamamakakabebebebe',
    'baba mama bebe kaka',
    'babababababamamakakamamatatikakabebebebe',
    'we telerik academy are',
    'wearetelerikacademy',
    'we are telerik academy',
    'wearenottelerikacademy',
    // 'test it here now',
    // 'testhere',
    // 'hello world my',
    // 'hellomyworldhello',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -----------------------------------------

/* globals Set */

const n = +gets();
const words = new Set();
let slogan;
let valid = true;

for (let j = 0; j < n; j += 1) {
    for (let i = 0; i < 2; i += 1) {
        if (i % 2 === 0) {
            const wordsArr = gets().split(' ');
            for (const word of wordsArr) {
                words.add(word);
            }
        } else {
            slogan = gets();
        }
    }

    // console.log(words);
    // console.log(slogan);

    for (const word of words) {
        if (slogan.match(word)) {
            const regex = new RegExp(word, 'gmi');
            // console.log(word);
            slogan = slogan.replace(regex, `${word} `);
        }
    }
    slogan = slogan.trim();
    const sloganArr = slogan.split(' ');
    // console.log(sloganArr);

    for (const exp of sloganArr) {
        if (!words.has(exp)) {
            valid = false;
            print('NOT VALID');
            break;
        }
    }

    if (valid === true) {
        print(slogan);
    }
}

// quit(0);