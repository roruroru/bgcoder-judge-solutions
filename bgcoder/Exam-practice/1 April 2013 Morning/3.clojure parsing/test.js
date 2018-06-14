'use strict';

let a = 0;
let b = 5;
let arr = [];
arr['a'] = {};
arr.b = b;
arr['c'] = b;
console.log(arr);

let obj = {};
obj.a = [];
obj['b'] = b;
obj['c'] = b;

obj.a.push('123');
obj.a.push({name: 'Name' , age: 'age'});
console.log(obj);

let c = [];
let d = 'a';
let e = '123f';
c.push(parseInt(d));
c.push(parseInt(e));
console.log(c);