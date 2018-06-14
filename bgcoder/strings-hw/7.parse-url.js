'use strict';

//Write a script that parses an URL address given in the 
//format: [protocol]://[server]/[resource] and extracts 
//from it the [protocol], [server] and [resource] elements.

// function solve(args) {
//     let url = args[0];
//     console.log('protocol:', url.replace(/:\/{2}.+/, ''));
//     console.log('server:', url.match(/\/{2}[^/]+/g)
//                             .join('')
//                             .replace(/\/{2}/, ''));
//     console.log('resource:' , url.match(/\/{2}.+/g)
//                             .join('')
//                             .replace(/\/{2}[^/]+/, ''));
// }
// function solve(args) {
//     let url = args[0];
//     let protocol = url.replace(/:\/{2}.+/, '');
//     let server = url.match(/\/{2}[^/]+/g)
//                             .join('')
//                             .replace(/\/{2}/, '');
//     let resource = url.match(/\/{2}.+/g)
//                     .join('')
//                     .replace(/\/{2}[^/]+/, '');
//     console.log(`protocol: ${protocol}`);
//     console.log(`server: ${server}`);
//     console.log(`resource: ${resource}`);
// }

function solve(args) {
    let str = args[0];
    let protocol = str.split('://');
    let slashIndex = protocol[1].indexOf('/');
    let server = protocol[1].substring(0, slashIndex);
    let resource = protocol[1].substring(slashIndex);
    //console.log(slashIndex);
    console.log(`protocol: ${protocol[0]}`);
    console.log(`server: ${server}`);
    console.log(`resource: ${resource}`);
}

solve([ 'http://telerikacademy.com/Courses/Courses/Details/239' ]);