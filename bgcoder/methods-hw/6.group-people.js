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

let groups = people.reduce(function(group, person) {
    let firstLetter = person.firstName[0];

    if (group[firstLetter]) {
        group[firstLetter].push('firstname: ' + person.firstName);
    }
    else {
        group[firstLetter] = ['firstname: ' + person.firstName];
    }
    return group;
}, {});

console.log(groups);
