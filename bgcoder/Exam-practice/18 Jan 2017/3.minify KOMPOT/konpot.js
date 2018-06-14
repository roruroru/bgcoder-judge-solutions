'use strict';

function solve(args) {
    let konpotLength = 0;

    const minifyWhiteSpace = args.join('').replace(/\s/g, '');
    //console.log(minifyWhiteSpace);

    const identifiers = {};
	// minifyWhiteSpace.split(/[{};]+/)
    //                 .forEach(ident => identifiers[ident] = (identifiers[ident] || 0) + 1);
    // //console.log(identifiers);
    // identifiers[''] = 0;
    // console.log(identifiers);

    let spl =  minifyWhiteSpace.split(/[{};]+/);
    //console.log(spl);
    spl.forEach(function(ident) {
        identifiers[ident] = (identifiers[ident] || 0) + 1;
    });
    identifiers[''] = 0;
    //console.log(identifiers);

    const identifierList = [];
	for(let ident in identifiers) {
		identifierList.push(identifiers[ident]);
    }
    //console.log(identifierList);

    identifierList.sort((x, y) => y - x)
                .forEach((count, index) => konpotLength += count * (index < 63 ? 1 : 2));

    let konpot = minifyWhiteSpace;
    console.log(konpotLength);

}


solve([
    'hello;',
    '{this; is',
    ' ; an;;;example;',
    '}',
    'of;',
    '{',
    'KONPOT;',
    '{',
    'Some_numbers;',
    '42;5;3}',
    '_}'
]);