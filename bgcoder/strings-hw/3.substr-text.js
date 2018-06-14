'use strict';

function solve(args) {
    let exp = args[0],
        text = args[1];
    let expR = new RegExp(exp, "gmi");
    console.log(text.split(expR).length - 1);
}

solve([
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]);