'use strict';

console.log('1. Make Person');

// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders

function makePerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    };
}

function generatePeople(n) {
    let people = [];
    for(let i = 0; i < n; i += 1) {
        let firstName = String.fromCharCode(65 + Math.random() * 26 | 0) + String.fromCharCode(97 + Math.random() * 26 | 0);
        let lastName = String.fromCharCode(65 + Math.random() * 26 | 0) + String.fromCharCode(97 + Math.random() * 26 | 0);
        let age = Math.random() * 120 | 0;
        let gender = (age % 2 === 1) ? true : false;
        people.push(makePerson(firstName, lastName, age, gender));
    }
    return people;
}

//console.log(generatePeople(10));
let arr = generatePeople(10);
// arr.forEach(x => console.log(x));

console.log('-----------------------------------------------------');
console.log('2. People of Age');

// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//  Use only array methods and no regular loops (for, while)

//console.log(arr);

//console.log(arr.every(x => x.age >= 18));

arr.forEach(function(person) {
    person.toString = function() {
        return this.age;
    };
});

//console.log(arr);

let result = arr.toString()
                .split(',')
                .every(x => x >= 18);

//console.log(result);
//console.log('All people are 18 or more years old: ' + arr.every(function(person){return person.age >= 18;}));

console.log('---------------------------------------------------');

console.log('3. Underage People');

// Write a function that prints all underaged persons of an array of person

//     Use Array#filter and Array#forEach
//     Use only array methods and no regular loops (for, while)

// arr.filter(x => x.age < 18)
//     .forEach(x => console.log(x));

console.log('---------------------------------------------------');

console.log('4. Average age of females');

// Write a function that calculates the average age of all females, extracted from an array of persons

//     Use Array#filter
//     Use only array methods and no regular loops (for, while)

//console.log(arr);

let femaleAges = [];
arr.filter(x => x.gender === true)
    .forEach(x => femaleAges.push(x.age));

//console.log(femaleAges);

let sumOfAges = femaleAges.reduce((x, y) => x + y, 0);
let averageAge = sumOfAges / femaleAges.length;
//console.log(averageAge.toFixed(1));

console.log('---------------------------------------------------');

console.log('5. Youngest person');

// Write a function that finds the youngest male person in a given array of people and prints his full name

//     Use only array methods and no regular loops (for, while)
//     Use Array#find

//arr.sort((x, y) => x.age - y.age);
//console.log(arr);

//let youngestMalePerson = arr.find(x => x.gender === false);
//console.log(youngestMalePerson.firstName + ' ' + youngestMalePerson.lastName);


console.log('---------------------------------------------------');

console.log('6. Group people');

// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object

//     Use Array#reduce
//     Use only array methods and no regular loops (for, while)

arr.sort((x, y) => x.firstName > y.firstName);
//console.log(arr);

let grouped = {};

arr.forEach(function(person) {
    let firstLetterGroup = person.firstName[0];

   if (grouped[firstLetterGroup]) {
       grouped[firstLetterGroup].push(person);
   } else {
       grouped[firstLetterGroup] = [person];
   } 
});

console.log(grouped);
