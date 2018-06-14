'use strict';

function solve(args) {
    let x = args,
        N = +x[0],
        rN = 0,
        rM = 0,
        rC = 1,
        i,
        j;
    for(i = 1; i < N; i += 1) {
        for(j = i + 1; j <= N; j += 1) {
            if (x[i] === x[j]) {
                rC += 1;
                if (rC > rM) {
                    rM = rC;
                    rN = +x[i];
                }
            }
        }
        rC = 1;
    }
console.log(rN + ' (' + rM + ' times)');
}

// function solve(args) {
//     let N = +args.shift(),
//         x = [],
//         y = [],
//         xx = x.length,
//         yy = y.length,
//         fN,
//         counter = 0,
//         rep = 1,
//         index;
//     for(let i = 0; i < N; i += 1) {
//         index = args.indexOf(args[i]);
//         x.push(index);
//         while ((index >= 0) && (index <= N)){
//             index = args.indexOf(args[i], index);
//         }
//             if (xx > yy) {
//                 y = x;
//             }
//             else {
//                 x = [];
//             }
//         // for(let j = 0; j < N; j += 1) {
//         //     if (fN === (+args[j])) {
//         //         counter += 1;
//         //         if (counter > rep) {
//         //             rep = counter;
//         //         }
//         //     }
//         //     else {
//         //         counter = 1;
//         //     }
//         // }
//         // console.log(rep);
//     }
//         console.log(yy);
// }

// function solve(args) {
//     let N = +args.shift(),
//         index,
//         freqNum,
//         rep = 1,
//         x = [],
//         counter = 1;

//     for(freqNum = 0; freqNum <= 10000; freqNum += 1) {
//     index = args.indexOf(freqNum);
//         for(index; index < N; index += 1) {
            
//         //     if (freqNum === +(args[i])) {
//         //         counter += 1;
//         //         if (counter > rep) {
//         //             rep = counter;
//         //         }
//         //     }
//         //     else {
//         //         counter = 1;
//         //     }
//         // // while ((index >= 0) && (index <= N)) {
//         //     index = args.indexOf(freqNum, index + 1),
//         //     x.push(freqNum);
//         // console.log(index);
//         // }
//         }
//     }
//     console.log(rep);
//     console.log(args, N);
// }

solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '4', '4', '3', '4', '4', '1', '2', '4', '4', '3']);
solve(['13', '4', '1', '1', '1', '1', '1', '1', '1', '1', '2', '4', '9', '3']);
solve(['13', '4', '1', '1', '9', '2', '3', '9', '9', '1', '2', '4', '9', '3']);