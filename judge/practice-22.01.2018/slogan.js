const generateSlogan = (slogan, availableWords, usedWords, impossibleSlogans) => {
    if (slogan === '') {
        return true;
    }

    if (impossibleSlogans.has(slogan)) {
        return false;
    }

    for (const word of availableWords) {
        if (slogan.startsWith(word)) {
            const restOfSlogan = slogan.substring(word.length);
            if (generateSlogan(restOfSlogan, availableWords, usedWords, impossibleSlogans)) {
                usedWords.push(word);
                return true;
            }
        }
    }

    impossibleSlogans.add(slogan);
    return false;
}

const n = +gets();
for (let i = 0; i < n; i++) {
    const availableWords = gets().split(' ');
    const slogan = gets();

    const usedWords = [];
    const impossibleSlogans = new Set();
    if (generateSlogan(slogan, availableWords, usedWords, impossibleSlogans)) {
        print(usedWords.reverse().join(' '));
    } else {
        print('NOT VALID')
    }
}