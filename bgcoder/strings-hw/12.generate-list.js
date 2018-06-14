'use strict';

// Problem 12. Generate list

// Write a function that creates a HTML <ul> using a template for every HTML <li>.
// The source of the list should be an array of elements.
// Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.


function generateList(people) {
    console.log(people[1].name);
    console.log(people.length);
    let ul = '<ul>';
    let ulEnd = '</ul>';
    let template = '<li><strong>NAME</strong> <span>AGE</span></li>';
    console.log(ul);
    for(let i = 0; i < people.length; i += 1) {
        template = template.replace('NAME', people[i].name)
                            .replace('AGE', people[i].age);
        console.log(template);
        template = '<li><strong>NAME</strong> <span>AGE</span></li>';
    }
    console.log(ulEnd);
}

generateList([{
    name: 'Nikki',
    age: 20
}, {
    name: 'Tanq',
    age: 24
}, {
    name: 'Mariq',
    age: 19
}, {
    name: 'Vikki',
    age: 21
}, {
    name: 'Todor',
    age: 23
}]);
