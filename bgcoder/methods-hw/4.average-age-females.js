'use strict';

let people = [];

function createPerson(firstName, lastName, age, gender) {
    people.push({
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    });
}
//console.log(people);
createPerson('Ivan', 'Ivanov', 42, false);
createPerson('Iva', 'Ivanova', 33, true);
createPerson('Georgi', 'Todorov', 49, false);
createPerson('Dido', 'Didov', 67, false);
createPerson('Ganyo', 'Gliganov', 32, false);
createPerson('Niki', 'Nikov', 11, false);
createPerson('Mima', 'Taneva', 87, true);
createPerson('Lora', 'Daneva', 65, true);
createPerson('Mircho', 'Dinev', 5, false);
createPerson('Sisa', 'Simeonova', 2, true);

//console.log(people);
let females = people.filter(function(person){return person.gender === true;});
//let females = people.filter(person => person.gender === true);

console.log(females);

let sum = females.reduce((sum, person) => sum + person.age, 0);
console.log(sum);
let avg = sum / females.length;
console.log(avg);

// people.filter(person => person.gender === true)
//     .reduce(function(sum, person, i){return (sum + person.age);}, 0);

