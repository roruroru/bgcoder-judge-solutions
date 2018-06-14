function solve(args) {
    let enumName;
    let namesList = [];
    let usedValues = {};
    let result = [];

   args.forEach(function(line) {
       line = line.trim();
       if (line === '</>') {
           let currentValue = 0;
           namesList.forEach(function(item) {
               if(item.value < 0) {
               
                    while (usedValues[currentValue]) {
                        currentValue += 1;
                    }
                    item.value = currentValue;
                    currentValue += 1;
                }

                result.push(`${item.name} = ${item.value} :: ${enumName};`);
           });
           //get out
       }
       else if (line[0] === '<') {
           //regex or substring
           enumName = line.substring(1, line.length - 1);
           namesList = [];
           usedValues = {};
       }
       else {
           const spl = line.split((/[=;]/g));
           const name = spl[0].trim();
           let value = -1;
           if (spl.length === 3) {
               value = +spl[1].trim();
               usedValues[value] = true; // !!!!
           }
           namesList.push({
            name: name,
            value: value
           });
       }
   });
   console.log(result.sort().join('\n'));
   //result.sort().forEach(x => console.log(x));
   
}

solve([
    '<Fruit>',
    '  Apple;',
    '  Banana;',
    '  Pineapple;',
    '</>',
    '<Vegetable>',
    '  Cucumber = 1;',
    '  Cabage;',
    '</>'
]);

// solve([
//     '<@Languages>',
//     '   CSharp;',
//     '   JavaScript;',
//     '   Haskell = 42;',
//     '   Rust = 4;',
//     '   CPP;',
//     '</>',
//     '<Result>',
//     '   Failed;',
//     '   Passed;',
//     '   Excellence;',
//     '</>',
//     '<@Insects>',
//     '   Ant;',
//     '   Mosquito = 2;',
//     '</>'
// ]);