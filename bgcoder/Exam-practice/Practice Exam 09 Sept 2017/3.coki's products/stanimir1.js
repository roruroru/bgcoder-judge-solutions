'use strict';

function solve(args) {
    
       const nN = +args[0];
       let pWp = args.slice(1, nN + 1);
       const mM = +args[nN + 1];
       let pL = args.slice(nN + 2);
       let pricelist = {};
    
       for (let i = 0; i < nN; i += 1) { 
           let element = pWp[i].split(' ');
           let price = parseFloat(element.pop());
           let name = element.join(' ');
           pricelist[name] = price;
    
       }
       console.log(pricelist);
       for (let i = 0; i < mM; i += 1) { 
           let elementArr = pL[i].split(', ');
           let rowValue = 0;
           console.log(elementArr);
    
           for (let j = 0; j < elementArr.length; j += 1) {
               let element = elementArr[j].split(' ');
               let count = 1;
               let a = parseFloat(element[0]);
               let name;
               console.log(a);
    
               if (a >= 0) {
                   count = a;
                   name = element.slice(1).join(' ');
               } else {
                   name = element.join(' ');
               }
               console.log(name);
               rowValue += count*pricelist[name];
           }
           //console.log(rowValue.toFixed(2));
       }
    
   }

   solve([
	"5",
	"milk 1.2",
	"orange juice 2.9",
	"icecream 2",
	"cake 5.1",
	"beer 1.2",
	"5",
	"2 beer, 3 orange juice",
	"milk, cake",
	"icecream, 2 cake",
	"icecream, icecream, 3 icecream",
	"5 orange juice, 3 orange juice, orange juice, orange juice"
]);