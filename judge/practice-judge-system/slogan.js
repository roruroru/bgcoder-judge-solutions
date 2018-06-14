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
    'we telerik academy are',
    'wearetelerikacademy',
    'we are telerik academy',
    'wearenottelerikacademy',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -----------------------------------------

const n = +gets();
for (let i = 0; i < n; i += 1) {
    const words = gets().split(' ');
    const letters = gets();
    const notPossibleSet = new Set();
    const findSlogan = (dict, mixedLetters, result, notPossible) => {
        if (mixedLetters.length === 0) {
            return true;
        }
        if (notPossible.has(letters)) {
            return false;
        }
        for (const word of dict) {
            if (mixedLetters.startsWith(word)) {
                mixedLetters = mixedLetters.substring(word.length);
                // findSlogan(dict, mixedLetters, result, notPossible);
                // result.push(word);
                // return true;
                if (findSlogan(dict, mixedLetters, result, notPossible)) {
                    result.push(word);
                    return true;
                }
            }
        }

        notPossible.add(letters);
        return false;
    };
    const result = [];
    findSlogan(words, letters, result, notPossibleSet);
    if (notPossibleSet.has(letters)) {
        print('NOT VALID');
    } else {
        print(result.reverse().join(' '));
    }
}
