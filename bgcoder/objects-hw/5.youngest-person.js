'use strict';

//Write a function that finds the youngest person in a given array of people and prints his/hers full name.
//Each person has properties firstname, lastname and age.

// function solve(args) {
//     let a = args,
//         N = a.length,
//         people = [];
//     function createPerson(b) {
//         for(let i = 0; i < N ; i += 3) {
//             people.push({
//                 firstName: a[i],
//                 lastName: a[i + 1],
//                 age: a[i + 2]
//             });
//         }
//     }
//     createPerson(a);
//     console.log(people);
//     people.sort((x, y) => x.age - y.age); // === people.sort(function(x, y){return x.age - y.age });
//     console.log(people[0].firstName + ' ' + people[0].lastName);
// }

function solve(args) {
    let arr = args;
    let ages = [];
    function findYoungestPerson(arr) {
        let len = arr.length;
        let ages = [];
        for(let i = 2; i < len; i += 3) {
            ages.push(arr[i]);
        }
        ages.sort((x, y) => x - y);
        //console.log(ages);
        let youngestAgeIndex = arr.indexOf(ages[0]);
        console.log(`${arr[youngestAgeIndex - 2]} ${arr[youngestAgeIndex - 1]}`);
    }
    findYoungestPerson(arr);
}

solve(['Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42']);

solve([
  'Penka', 'Hristova', '61',
  'System', 'Failiure', '88',
  'Bat', 'Man', '16',
  'Malko', 'Kote', '72'
]);