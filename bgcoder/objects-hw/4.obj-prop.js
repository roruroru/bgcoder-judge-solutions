'use strict';

//Write a function that checks if a given object contains a given property.

let obj = { 0: 1,
            objecto: {value: 2},
            num: 4,
            string: 'asdf',
            bool: true,
            arr: [1, 2, 3]};

// if (!obj.boolit) {
//     console.log('Object does not have such property.');
// } else {
//     console.log('Object has such property.');
// }

function hasPropOrNot(ob, prop) {
    if (ob.hasOwnProperty(prop)) {
    console.log(`Object has property ${prop}.`);
    } else {
        console.log(`Object does not have property ${prop}.`);
    }
}

hasPropOrNot(obj, 'objecto');
hasPropOrNot(obj, 'num');
hasPropOrNot(obj, 'bool');
hasPropOrNot(obj, '[1, 2, 3]');
hasPropOrNot(obj, 'asdf');

console.log('----------------------------------------');

function containProp(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        return `${obj} has ${prop}`;
    } else {
        return `${obj} does NOT have ${prop}`;
    }
}

console.log(containProp(obj, 'objecto'));
console.log(containProp(obj, 'bool'));
console.log(containProp(obj, 'false'));