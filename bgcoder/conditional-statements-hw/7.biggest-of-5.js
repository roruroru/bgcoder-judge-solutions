'use strict';

// Write a script that finds the biggest of given 5 variables. Use nested if statements.
// The input will consist of an array containing five values represented as strings

// function solve(args) {
//     let a = +args[0],
//         b = +args[1],
//         c = +args[2],
//         d = +args[3],
//         e = +args[4];
//     if (a >= b) {
//         if (a >= c) {
//             if (a >= d) {
//                 if (a >= e) {
//                     console.log(a);
//                 } else {
//                     console.log(e);
//                 }
//             } else {
//                 if (d >= e) {
//                     console.log(d);
//                 } else {
//                     console.log(e);
//                 }
//             }
//         } else {
//             if (c >= d) {
//                 if (c >= e) {
//                     console.log(c);
//                 } else {
//                     console.log(e);
//                 }
//             } else {
//                 if (d >= e) {
//                     console.log(d);
//                 } else {
//                     console.log(e);
//                 }
//             }
//         }
//     } else {
//         if (b >= c) {
//             if (b >= d) {
//                 if (b >= e) {
//                     console.log(b);
//                 } else {
//                     console.log(e);
//                 }
//             } else {
//                 if (d >= e) {
//                     console.log(d);
//                 } else {
//                     console.log(e);
//                 }
//             }
//         } else {
//             if (c >= d) {
//                 if (c >= e) {
//                     console.log(c);
//                 } else {
//                     console.log(e);
//                 }
//             } else {
//                 if (d >= e) {
//                     console.log(d);
//                 } else {
//                     console.log(e);
//                 }
//             }
//         }
//     }
// }

function solve(args) {
    let a = +args[0];
    let b = +args[1];
    let c = +args[2];
    let d = +args[3];
    let e = +args[4];

    let max = a;

    if (max >= b) {
        if (max >= c) {
            if (max >= d) {
                if (max >= e) {
                    max = a;
                } 
                else {
                    max = e;
                }
            } 
            else {
                max = d;
                if (max >= e) {
                    max = d;
                } 
                else {
                    max = e;    
                }
            }
        }
        else {
            max = c;
            if (max >= d) {
                if (max >= e) {
                    max = c;
                }
                else {
                    max = e;
                }
            }
            else {
                max = d;
                if (max >= e) {
                    max = d;
                } 
                else {
                    max = e;
                }
            }
        }
    } 
    else {
        max = b;
        if (max >= c) {
            if (max >= d) {
                if (max >= e) {
                    max = b;
                } 
                else {
                    max = e;    
                }
            }
            else {
                max = d;
                if (max >= e) {
                    max = d;
                } 
                else {
                    max = e;    
                }
            }
        }
        else {
            max = c;
            if (max >= d) {
                if (max >= e) {
                    max = c;
                }
                else {
                    max = e;    
                }
            }
            else {
                max = d;
                if (max >= e) {
                    max = d;
                }
                else {
                    max = e;
                }
            }
            
        }
    }
    console.log(max);
}

solve (['5', '2', '2', '4', '1']);
solve (['-2', '-22', '1', '0', '0']);
solve (['-2', '4', '3', '2', '0']);
solve (['0', '-2.5', '0', '5', '5']);
solve (['-3', '-0.5', '-1.1', '-2', '-0.1']);