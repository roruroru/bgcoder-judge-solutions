'use strict';

function solve(args) {
    let globalPriority = 0;
    let insideSelector = false;
    let selectorReference;

    let bindings = {}; // create {} for selectors
    
    args.forEach(function(line) {
        line = line.trim();
        if(line[0] === '@'){
            let newPriority = 0; //TODO: parse priority
            if (insideSelector) {
                //override local priority
            } else {
                //override global priority
            }
        }
        else if (line[0] === '}') {
            insideSelector = false;
        }
        else {
            const braceIndex = line.indexOf('{');
            if (braceIndex < 0) {
                //binding
                const spl = line.split(/[:;]/g);
                const property = spl[0].trim();
                const value = spl[1].trim();
                // TODO check for @
                if (!selectorReference.hasOwnProperty(property)) {  //create {} for properties and values
                    selectorReference[property] = {
                        value: value,
                        priority: 0 //TODO set correct priority
                    };
                }
                else {
                    //TODO: override if higher priority
                }
            } else {
                insideSelector = true;
                const selectorName = line.substring(0, braceIndex).trim();
                //console.log(selectorName);
                if (!bindings.hasOwnProperty(selectorName)) {  // create {} for selector properties
                    bindings[selectorName] = {};
                }
                selectorReference = bindings[selectorName];
                //TODO check for @
            }
        }
    });

    //console.log(bindings);
    //console.log(bindings.div['font-size'].value);

    let result = [];
    for(let selector in bindings) {
        selectorReference = bindings[selector];
        //console.log(selector);
        for(let property in selectorReference) {
            //console.log(selector, property);
            const value = selectorReference[property].value;
            const line = `${selector} { ${property}: ${value}; }`;
            result.push(line);
        }
    }
    result.sort();
    console.log(result.join('\n'));
}

solve([
    'li {',
    '    font-size: 2px;',
    '    font-weight: bold;',
    '}',
    'div {',
    '    font-size: 20px; @5',
    '}',
    'div { @4',
    '    font-size: 17px;',
    '}',
    '@19',
    'li {',
    '    font-size: 42px;',
    '    color: red; @9',
    '}'
]);