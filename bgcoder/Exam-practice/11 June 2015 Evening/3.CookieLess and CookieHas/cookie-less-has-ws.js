'use strict';


function solve(args) {
    let selectors = [];
    let current = null;

    for(let line of args) {
        if (isSelector(line)) {
            line = line.trim();
            let selector = line.substr(0, line.length - 1)
                                .trim()
                                .replace(/\s\s+/, ' ');
            if (current) {
                let between = ' ';
                if (selector[0] === '$') {
                    between = '';
                    selector = selector.substr(1);
                }
                selector = `${current.selector}${between}${selector}`;
            }
            selectors.push({
                'selector':selector,
                'parent': current,
                'props': []
            });
            current = selectors[selectors.length - 1];
        }
        else if (isProperty(line)) {
            line = line.trim();
            line = line.substr(0, line.length - 1)
                        .trim();
            let propertyValueArray = line.split(':')
                                        .map(x => x.trim());

            let propertyValuePair = {
                'property': propertyValueArray[0],
                'value': propertyValueArray[1]
            };
            //console.log(propertyValuePair);
            current.props.push(propertyValuePair);
        }
        else {
            // }
            current = current.parent;
        }
    }

    //console.log(selectors);
    for(let selector of selectors) {
        console.log(`${selector.selector} {`);

        for(let propertyValuePair of selector.props) {
            console.log(`  ${propertyValuePair.property}: ${propertyValuePair.value};`);
        }

        console.log(('}'));
    }

    function isSelector(line) {
        return line.indexOf('{') >= 0;
    }

    function isProperty(line) {
        return line.indexOf(':') >= 0;
    }
}

solve([
'    #the-big-b{',
'    color: big-yellow;',
'    .little-bs {',
'             color: little-yellow;',
'        $.male            {',
'               color: middle-yellow;',
'  }',
'  }',
'  }',
'             .muppet           {',
'               skin        :        fluffy;',
'    $.water-spirit    {',
'      powers    :     water;',
'                       }',
'    $>thread{',
'       color: depends;',
'     }',
'    powers    :      all-muppet-powers;',
'  }',
  ]);