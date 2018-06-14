'use strict';

//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

let obj = { 0: 1,
            objecto: {value: 2},
            num: 4,
            string: 'asdf',
            bool: true,
            arr: [1, 2, 3]
        };

// const deepCopiedObj = JSON.parse(JSON.stringify(obj));


function deepCopy(ob) {
    return JSON.parse(JSON.stringify(ob));
}

let deepCopiedObj = deepCopy(obj);

obj[0] = 111;
obj.objecto = {value: 5};
obj.num = 44444;
obj.string = 'ffffff';
obj.bool = false;
obj.arr = [5, 6, 7];

console.log(obj);
console.log(deepCopiedObj);


let object = {
    bool: false,
    number: 1,
    string: 'str',
    array: [1, 2, 3],
    obje: {a: 5, b: 6}
};

let objectDeepCopy = JSON.parse(JSON.stringify(object));

object.bool = true;
object.number = 99999;
object.array = ['5'];
object.string = 'FFFFFF';
object.obje = {nothing: 'to show'};

console.log(object);
console.log(objectDeepCopy);