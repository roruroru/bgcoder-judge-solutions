function countWords(words) {
  let word,
      wordsCount = {};
  for (let i in words) {
    word = words[i].toLowerCase();
    if (!wordsCount[word]) { wordsCount[word] = 0; }
    wordsCount[word] += 1;
  }
  console.log(wordsCount);
}
let words = 'word pesho number word pesho number word word monkey whatever'.split(' ');
console.log(words);
countWords(words);