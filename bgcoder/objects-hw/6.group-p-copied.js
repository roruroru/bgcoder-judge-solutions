'use strict';

function group(people, criterion) {
    var arr = [];

    for (var i in people) {
        for (var prop in people[i]) {
            if (people[i][prop] === criterion) {
                arr.push(people[i]);
            }
        }
    }

    if (arr.length > 0) {
        return {age: criterion, people: arr};
    } else {
        return "There's no person with such data.";
    }
}

let people = [
  { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'John', lastname: 'Doe', age: 42 },
  { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
  { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
  { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];
let ageGroup,
    ageArr = [];
let N = people.length;
for(let i = 0; i < N; i += 1) {
    ageArr.push(people[i].age);
    //console.log(people[i].age);
}
ageArr.sort(function(a, b) {
    return a > b;
});
console.log(ageArr);
var unique = ageArr.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});
console.log(unique);
for(let k of unique){
    console.log(group(people, k));
}