'use strict';


// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders


// let people = [];

// function createPerson(firstName, lastName, age, gender) {
//     people.push({
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         gender: gender
//     });
// }
// console.log(people);
// createPerson('Ivan', 'Ivanov', 42, false);
// createPerson('Iva', 'Ivanova', 33, true);
// createPerson('Georgi', 'Todorov', 49, false);
// createPerson('Dido', 'Didov', 67, false);
// createPerson('Ganyo', 'Gliganov', 32, false);
// createPerson('Niki', 'Nikov', 11, false);
// createPerson('Mima', 'Taneva', 87, true);
// createPerson('Lora', 'Daneva', 65, true);
// createPerson('Mircho', 'Dinev', 5, false);
// createPerson('Sisa', 'Simeonova', 2, true);

// console.log(people);

// let people = Array.apply(null, new Array(10))
//                 .map(function(_, index){
//                 return {
//                     firstName: String.fromCharCode(65 + index % 2) + 'f#' + index,
//                     lastName: String.fromCharCode(67 + index % 2) + 'l#' + index,
//                     age: 14 + index,
//                     isFemale: Boolean(index % 2)};
//                 }
// );
// people.forEach(function (person) {console.log(person);});
// console.log(people);

// console.log('All people are 18 or more years old: ' + people.every(function(person){return person.age >= 18;}));

// people.filter(function(person){return person.age < 18;})
//     .forEach(function (person) {console.log(person);});

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
arr.forEach(x => console.log(x));