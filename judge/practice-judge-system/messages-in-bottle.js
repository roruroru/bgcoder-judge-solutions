const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1122',
    'B12C11D2A1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

/* globals Set */

const secretMessage = gets();
const cypherStr = gets();
const cypherObj = {};
let numbersInCypher = '';
let letterInCypher = '';

for (let i = 0; i < cypherStr.length; i += 1) {
    if (isNaN(+cypherStr[i])) {
        letterInCypher = cypherStr[i];
    } else if (!isNaN(cypherStr[i])) {
        numbersInCypher += cypherStr[i];
        if (isNaN(+cypherStr[i + 1])) {
            cypherObj[letterInCypher] = numbersInCypher;
            letterInCypher = '';
            numbersInCypher = '';
        }
    }
}

const encodingMessages = (dict, encodedMessage, decodedMessage, collection) => {
    if (decodedMessage.length === 0) {
        // collection.add(encodedMessage);
        collection.push(encodedMessage);
    }
    for (const cypher in cypherObj) {
        if (decodedMessage.startsWith(cypherObj[cypher])) {
            encodingMessages(dict, encodedMessage + cypher, decodedMessage.substring(cypherObj[cypher].length), collection);
        }
    }
};

// const result = new Set();
const result = [];

encodingMessages(cypherObj, '', secretMessage, result);

// const resultArr = Array.from(result).sort();

// print(result.size);
print(result.length);
print(result.sort().join('\n'));
// for (const m of resultArr) {
//     print(m);
// }
// quit(0);