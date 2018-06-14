'use strict';

// Write a function that groups an array of people by age.
// The function must return an associative array, with keys - 
// the groups, and values - arrays with people in this groups Use function overloading (i.e. just one function)

// let people = [
//   { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
//   { firstname: 'Bay', lastname: 'Ivan', age: 81 },
//   { firstname: 'John', lastname: 'Doe', age: 42 },
//   { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
//   { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
//   { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
// ];
// let N = people.length,
//     groupedByAge = {},
//     person = {},
//     ageGroup = '';

// console.log(people[1].age);
// people.sort(function(a1, a2) {
//     return a1.age > a2.age;
// });
// console.log(people);

// for(let i = 0; i < N; i += 1) {
//     ageGroup += people[i].age + ' ';
//     console.log(people[i].age);
// }
// console.log(ageGroup);
// let ageArr = ageGroup.split(' ');
// ageArr.pop();
// console.log(ageArr);
// for(let j = 0; j < N ; j += 1) {

// }

// function sortByAge(x) {

// }
// for(let i of people) {
//     console.log(i.age);
//     let ageS = i.age;
//     console.log(i);
//     groupedByAge += {
//         ageS: i
//     };
// }
// console.log(groupedByAge);

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];

let groupedByAge = {};
let len = people.length;

people.sort((x, y) => x.age - y.age);
console.log(people);

for (let i = 0; i < len; i += 1) {
    let ageGroup = people[i].age;

    if (groupedByAge[ageGroup]) {
        groupedByAge[ageGroup].push(people[i]);
    } else {
        groupedByAge[ageGroup] = [people[i]];
    }
    //groupedByAge[ageGroup] = [people[i]];
}

console.log(groupedByAge);