'use strict';

// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
//  Use only array methods and no regular loops (for, while)


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

people.forEach(function(person) {
    person.toString = function() {
        return this.age;
    };
});

let result = people.toString()
                .split(',')
                .every(x => x >= 18);

console.log(result);

console.log('All people are 18 or more years old: ' + people.every(function(person){return person.age >= 18;}));