'use strict';

// Write functions for working with shapes in standard Planar coordinate system.

//     Points are represented by coordinates
//     Lines are represented by two points, marking their beginning and ending You will be given three line segments. 
//     Calculate their length. Check if the line segments can form a triangle.


// function solve(args) {
//     function lines(a, b, c, d) {
//         return {
//             startPointX: a,
//             startPointY: b,
//             endPointX: c,
//             endPointY: d,
//             lineLength: function () {
//                 return (Math.sqrt(Math.pow(a - c, 2) + Math.pow(b -d, 2)).toFixed(2));
//             }
//         };
//     }
//     let line1 = lines(+args[0], +args[1], +args[2], +args[3]);
//     let line2 = lines(+args[4], +args[5], +args[6], +args[7]);
//     let line3 = lines(+args[8], +args[9], +args[10], +args[11]);
//     let line1L = +line1.lineLength();
//     let line2L = +line2.lineLength();
//     let line3L = +line3.lineLength();
//     console.log(line1L.toFixed(2));
//     console.log(line2L.toFixed(2));
//     console.log(line3L.toFixed(2));
//     let maxLength = Math.max(line1L, line2L, line3L);
//     let p = line1L + line2L + line3L;
//     if (maxLength < p - maxLength) {
//         console.log('Triangle can be built');
//     } else {
//         console.log('Triangle can not be built');
//     }
// }

function solve(args) {
    let arr = args.map(Number);
    function coordsToObj(arr, startIndex) {
        return {
            startPointX: arr[startIndex],
            endPointX: arr[startIndex + 2],
            startPointY: arr[startIndex + 1],
            endPointY: arr[startIndex + 3]
        };
    }

    let line1 = coordsToObj(arr, 0);
    let line2 = coordsToObj(arr, 4);
    let line3 = coordsToObj(arr, 8);

    function calculateLength(line) {
        line.length = Math.sqrt((Math.pow(line.endPointX - line.startPointX, 2)) + (Math.pow(line.endPointY - line.startPointY, 2)));
        return line.length;
    }

    calculateLength(line1);
    calculateLength(line2);
    calculateLength(line3);

    let arrLen = [];
    arrLen.push(line1.length, line2.length, line3.length);
    arrLen.sort((x, y) => y - x);

    //console.log(arrLen);

    function areOkForTriangle(arr) {
        // if (arr[0] < arr[1] + arr[2]) {
        //     return 'Triangle can be built';
        // }
        // else {
        //     return 'Triangle can not be built';
        // }
        return (arr[0] < arr[1] + arr[2]) ? 'Triangle can be built' : 'Triangle can not be built'; 
    }

    function printResult(arr) {
        console.log(line1.length.toFixed(2));
        console.log(line2.length.toFixed(2));
        console.log(line3.length.toFixed(2));
        console.log(areOkForTriangle(arr));
    }

    printResult(arrLen);
}

solve(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']);
solve(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123']);