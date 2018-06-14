'use strict';

//Write a function that removes all elements with a given value.
//Attach it to the array type. Read about prototype and how to attach methods.

// function solve(args) {
//     let arr = args;
//     let a = arr[0];
//     //console.log(a);
//     function removeElement(b){
//         return b !== a;
//     }
//     console.log(arr.filter(removeElement).join("\n"));
// }

// function solve(args) {
//     let arr = args;
//     let a = args[0];
//     //console.log(a);
//     Array.prototype.remove = function(num) {
//         let i,
//         l = this.length;
//         for(let i = l - 1; i >= 0 ; i -= 1) {
//             if (this[i] === a) {
//                 this.splice(i, 1);
//             }
//         }
//     };
//     arr.remove(a);
//     console.log(arr.join('\n'));
// }

function solve(args) {
    let arr = args;
    let len = arr.length;
    let n = arr[0];
    let arrRem;

    function removeElement(n, arr) {
        arrRem = arr.filter(x => x !== n);
        return arrRem;
    }

    console.log(removeElement(n, arr).join('\n'));
    // Array.prototype.removeEl = function(element, arr) {
    //     let arrLen = arr.length;
    //     for(let i = 0; i < arrLen; i += 1) {
    //         if (arr[i] === element) {
    //             arr.splice(i, 1);
    //             i -= 1;
    //         }
    //     }
    //     return arr.join('\n');
    // };

    // console.log(arr.removeEl(n, arr));
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);
solve([
  '_h/_',
  '^54F#',
  'V',
  '^54F#',
  'Z285',
  'kv?tc`',
  '^54F#',
  '_h/_',
  'Z285',
  '_h/_',
  'kv?tc`',
  'Z285',
  '^54F#',
  'Z285',
  'Z285',
  '_h/_',
  '^54F#',
  'kv?tc`',
  'kv?tc`',
  'Z285'
]);