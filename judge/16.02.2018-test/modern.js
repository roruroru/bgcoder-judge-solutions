const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// const test = [
//     '4',
//     'Harry Potter',
//     'm',
//     '3',
//     'quidditch,defeating dark wizards,magic brooms',
//     'Albus Dumbledore',
//     'm',
//     '3',
//     'teaching,magic cookies,quidditch',
//     'Professor McGonagall',
//     'f',
//     '2',
//     'magic cookies,teaching',
//     'Ginny Weasley',
//     'f',
//     '2',
//     'quidditch,magic brooms',
// ];
// const test = [
//     '4',
//     'Bay Tele, the big Rik',
//     'm',
//     '3',
//     'salatka,rakia,salatka',
//     'Master Windu',
//     'm',
//     '2',
//     'The Force,Purple Lightsabers',
//     'Aunt Penka',
//     'f',
//     '3',
//     'rakia,salatka,salatka',
//     'Uncle Gosho',
//     'm',
//     '2',
//     'rakia,salatka',
// ];
const test = [
    '6',
    'Bay Rik, the big Tele',
    'm',
    '2',
    'chalga,cars',
    'Anakin Skywalker',
    'm',
    '2',
    'The Force,Galaxy Domination',
    'Wonder Woman',
    'f',
    '3',
    'heels,Ares,world peace',
    'Batman',
    'm',
    '3',
    'Beating bad guys,technology,world peace',
    'Jane',
    'f',
    '3',
    'heels,cars,chalga',
    'Harmayani',
    'f',
    '3',
    'books,learning,magic',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ------------------------------------

const n = +gets();
const males = {};
const females = {};
for (let i = 0; i < n; i += 1) {
        const name = gets();
        const gender = gets();
        const m = gets();
        const interests = gets().split(',');
        if (gender === 'm') {
            males[name] = interests;
        } else {
            females[name] = interests;
        }
}

console.log(males);
console.log(females);
let maxMatches = 0;
let bestMale = '';
let bestFemale = '';
let result = [];

for (let malePerson in males) {
    const maleInterests = males[malePerson];
    // console.log(maleInterests);
    for(let femalePerson in females) {
        let count = 0;
        const femaleInterests = females[femalePerson];
        // console.log(femaleInterests);
        for (const mI of maleInterests) {
            for (const fI of femaleInterests) {
                if (mI === fI) {
                    count += 1;
                    // console.log(count);
                    // if (maxMatches < count) {
                    //     maxMatches = count;
                    //     bestMale = malePerson;
                    //     bestFemale = femalePerson;
                    // }
                }
            }
        }
        if (maxMatches <= count) {
            maxMatches = count;
            bestMale = malePerson;
            bestFemale = femalePerson;
            result.push({
                bestMale,
                bestFemale,
                maxMatches,
            });
        }
    }
}

// console.log(maxMatches);
// console.log(result.filter((x) => x.maxMatches === maxMatches).sort((x, y) => y.bestMale < x.bestMale));
result = result
            .filter((x) => x.maxMatches === maxMatches)
            .sort((x, y) => y.bestMale < x.bestMale);
// console.log(result);
print(`${result[0].bestMale} and ${result[0].bestFemale} have ${maxMatches} common interests!`);
