let str = '123 567 asda';
//console.log('123'.test(str));
let rep = str.replace(/12(3) (5)6/g, '($2 $1)');
console.log(rep);
let sfdf = str.replace('123', '1');
console.log(sfdf);