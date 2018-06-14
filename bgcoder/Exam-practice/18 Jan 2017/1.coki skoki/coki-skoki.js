'use strict';

// function solve(args) {
//     let n = +args[0];
//     let nums = args.map(Number);
//     nums.shift();
//     //console.log(nums);
//     let result = nums[0];
//     for(let i = (2 - nums[0] % 2); i < n; i += 1) {
//         if (nums[i] % 2 === 1) {
//             result *= nums[i]; 
//         }
//         else {
//             result += nums[i];
//             i += 1;
//         }
//         result = result % 1024;
//     }
//     console.log(result);
// }
function solve(args) {
    let n = +args[0];
    let nums = args.map(Number);
    nums.shift();
    //console.log(nums);
    let result = 1;
    if (nums[0] % 2 === 1) {
        result = 1; 
    }
    else {
        result = 0;
    }
    for(let i = 0; i < n; i += 1) {
        if (nums[i] % 2 === 1) {
            result *= nums[i]; 
        }
        else {
            result += nums[i];
            i += 1;
        }
        result = result % 1024;
    }
    console.log(result);
}

solve([
    '10',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0'
  ]);

solve([
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9',
    '9'
  ]);