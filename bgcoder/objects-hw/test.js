let value = 3;

let arr = [1, 2, 3, 4, 5, 3];

arr = arr.filter(item => item !== value);
arr = arr.filter(function(item)){return item !== value;}

console.log(arr);

// let z = function(a, b) {return a + b;}; === let z = (a, b) => a + b;



//console.log(z(5, 6));