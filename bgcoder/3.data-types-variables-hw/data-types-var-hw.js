'use strict';

// 01. JavaScript Literals - Assign all the possible JavaScript literals to different variables.

// Integers:
const heightOfPesho = 179;
let doorHeight = 205;
let freeSpace = doorHeight - heightOfPesho;
console.log(freeSpace);

// Floating-point Literals:
const hundred = 100;
let percent = '20%';
let percentValue = 20;
console.log(percent = percentValue / hundred );

// Boolean Literals:
let PeshoCantPass = doorHeight < heightOfPesho;
let PeshoCanPass = doorHeight >= heightOfPesho;
console.log(PeshoCantPass);
console.log(PeshoCanPass);

// String Literals:
let age = '25 years';
const sex = 'Female';
let country = 'UK';
let city = 'London';
// let location = `London, ${country}`;
let location = 'London,' + ' ' + 'UK';
let questionAndAnswer = `Age: ${age}, Sex: ${sex}, location: ${location}`;
console.log(questionAndAnswer);

// Object Literals:
// const workingHours = 'during day';
let time = 'night';

// function stillWorking(time) { if (time === 'day') {
//     return 'We are working';
//     } else {
//         return 'Sorry, we are not working.';
//     }
// }
// // let time = {working: 'day', notWorking: 'night'};

// // console.log(time.working);
// // console.log(time.notWorking);
// console.log(stillWorking);
if (time == 'day') {
    console.log('We are working');
    } else {
        console.log('We are not working.');
    }

// RegExp Literals:
// let a = 3;
// let b = 4;
const c = /(a^2 + b^2)^0.5/;
console.log(c);
console.log(typeof c);

// Array Literals:
const seasons = ['winter', 'spring', 'summer', 'autumn'];
console.log(seasons);


// 02. Quoted Text - Create a string variable with quoted text in it.
const fidanka = 'Tsanka Ganeva';
let calumny = "He is mentally ill.";
let fidankaSlanders = `${fidanka} said "${calumny}"`;
console.log(fidankaSlanders);

// 03. Typeof variables - Try typeof on all variables you created.
console.log(typeof heightOfPesho);
console.log(typeof doorHeight);
console.log(typeof freeSpace);
console.log(typeof hundred);
console.log(typeof percent);
console.log(typeof percentValue);
console.log(typeof PeshoCanPass);
console.log(typeof PeshoCantPass);
console.log(typeof age);
console.log(typeof sex);
console.log(typeof country);
console.log(typeof city);
console.log(typeof location);
console.log(typeof questionAndAnswer);
console.log(typeof time);
console.log(typeof {});
console.log(typeof c);
console.log(typeof seasons);
console.log(typeof fidanka);
console.log(typeof calumny);
console.log(typeof fidankaSlanders);


// 04. Typeof null - Create null, undefined variables and try typeof on them.
let intelligenceOfPampersa;
console.log(intelligenceOfPampersa);
console.log(typeof intelligenceOfPampersa);

const worker1 = {
    name: 'Gonzo Vielicata',
    shift: 1,
    presence: 'present'
    };
const worker2 = {
    name: 'Todor Zhabata',
    shift: 2,
    presence: null
    };

console.log(worker2.presence);
console.log(typeof 'worker2.presence');
console.log(typeof null);