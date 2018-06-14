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
    'A1B12C11D2',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------

/* globals Map Set */

const secretMessage = gets();
const cypherStr = gets();
const cypherMap = new Map();
let numbersInCypher = '';
let letterInCypher = '';

for (let i = 0; i < cypherStr.length; i += 1) {
    if (isNaN(+cypherStr[i])) {
        letterInCypher = cypherStr[i];
    } else if (!isNaN(cypherStr[i])) {
        numbersInCypher += cypherStr[i];
        if (isNaN(+cypherStr[i + 1])) {
            cypherMap.set(letterInCypher, numbersInCypher);
            letterInCypher = '';
            numbersInCypher = '';
        }
    }
}

const encodingMessages = (dict, encodedMessage, decodedMessage, collection) => {
    for (const cypher of cypherMap) {
        if (decodedMessage.length === 0) {
            collection.add(encodedMessage);
        }

        if (decodedMessage.startsWith(cypher[1])) {
            encodingMessages(dict, encodedMessage + cypher[0], decodedMessage.substring(cypher[1].length), collection);
        }
    }
};

const result = new Set();

encodingMessages(cypherMap, '', secretMessage, result);

const resultArr = Array.from(result).sort();

print(result.size);
for (const m of resultArr) {
    print(m);
}
// quit(0);