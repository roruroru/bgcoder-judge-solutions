'use strict';

function solve(args) {

    let finalResult;

    let functions = [];

    for(let i = 0; i < args.length; i += 1) {
        let currentRow = args[i].trim();

        let operator = '';
        let nestedOperator = '';
        let currentDigit = '';
        let currentFunctionName = '';
        let currentNewFunction = '';

        let parameters = [];
        let nestedParameters = [];

        let inCommand = false;
        let inNestedCommand = false;

        for(let j = 0; j < currentRow.length; j += 1) {
            let currentSymbol = currentRow[j];
            
            if (currentSymbol == ' ' || currentSymbol == ')') {

                if (currentFunctionName !== '') {
                    //console.log(currentFunctionName);
                    if (functions[currentFunctionName] || functions[currentFunctionName] === 0) {
                        let functionResult = functions[currentFunctionName];
                        if (inNestedCommand) {
                            nestedParameters.push(functionResult);
                        }
                        else {
                            parameters.push(functionResult);
                        }
                    }
                    else {
                        currentNewFunction = currentFunctionName;
                    }

                    currentFunctionName = '';
                }

                if (currentDigit !== '') {
                    if (inNestedCommand) {
                        nestedParameters.push(parseInt(currentDigit));
                    }
                    else {
                        parameters.push(parseInt(currentDigit));
                    }
                    currentDigit = '';
                }

                if (currentSymbol == ')' && currentNewFunction !== '') {
                    let result;
                    if (inNestedCommand) {
                        result = calculate(nestedOperator, nestedParameters);
                    }
                    else {
                        result = calculate(operator, parameters);
                    }

                    if (result == 'Error') {
                        return 'Division by zero! At Line:' + (i + 1);
                    }

                    if (currentNewFunction !== 'def') {
                        functions[currentNewFunction] = result;

                    }
                    //console.log(result);

                    currentNewFunction = '';
                }
                
                if (inNestedCommand && currentSymbol == ')') {
                    let nestedResult = calculate(nestedOperator, nestedParameters);
                    parameters.push(nestedResult);

                    nestedParameters = [];
                    nestedOperator = '';
                    inNestedCommand = false;
                }

                continue;
            }

            if (currentSymbol == '(') {
                if (inCommand) {
                    inNestedCommand = true;
                }
                else {
                    inCommand = true;
                }

                continue;
            }

            if (isMathOperator(currentSymbol)) {
                if (currentSymbol == '-' && j + 1 < currentRow.length && isNumber(currentRow[j + 1])) {
                    currentDigit += currentSymbol;
                    //console.log(currentDigit);
                }

                else {
                    if (inNestedCommand) {
                        nestedOperator = currentSymbol;
                    }
                    else {
                        operator = currentSymbol;
                    }
                }

                continue;
            }

            if (isNumber(currentSymbol)) {
                if (currentFunctionName !== '') {
                    currentFunctionName += currentSymbol;
                }
                else {
                    currentDigit += currentSymbol;
                }

                continue;
            }

            currentFunctionName += currentSymbol;

        }

        finalResult = calculate(operator, parameters);

        if (finalResult == 'Error') {
            return 'Division by zero! At Line:' + (i + 1);
        }
        
    }

    //console.log(functions);

    return finalResult;

    function isMathOperator(symbol) {
        if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
            return true;
        }

        return false;
    }

    function isNumber(symbol) {
        if (symbol == ' ') {
            return false;
        }
        //if (!isNaN(symbol)) { //(!isNaN(symbol)) symbol == Number(symbol)
        return symbol == Number(symbol); //return !isNaN(symbol); 
        //}
    }

    function calculate(operator, parameters) {
        if (parameters.length == 1) {
            return parameters[0];
        }

        let result = parameters[0];
        for(let i = 1; i < parameters.length; i += 1) {
            switch (operator) {
                case '+': result += parameters[i]; break;
                case '-': result -= parameters[i]; break;
                case '*': result *= parameters[i]; break;
                case '/': 
                    if (parameters[i] == 0) {
                        return 'Error';
                    }
                    
                    //TODO: check this parseInt
                    result /= parameters[i]; 
                    result = parseInt(result);
                    break;
            }
        }

        return result;

    }

}

let test1 = ['(       +             1            2  (* -3 2 1 1) 7       )',
//     '(+ 50 (- 2 7) 1)',
//     '(- 42 -2)',
//     '(- 4)',
//     '(/ 454654  0)',
//     '(/ 2)',
//    '(/ 10 3)',
//     '(/ 10 3 2)'
    ];
let test2 = ['(def myFunc 5)',
    '(def myNewFunc (+  myFunc  myFunc 2))',
    '(def MyFunc (* 2  myNewFunc))',
    '(/   MyFunc  myFunc)'
    ];
let test3 = ['(def func 10)',
'(def newFunc (+  func 2))',
'(def sumFunc (+ func func newFunc 0 0 0))',
'(* sumFunc 2)'];
let test4 = ['(def func (+ 5 2))',
'(def func2 (/  func 5 2 1))',
'(def func3 (/ func 2))',
'(+ func3 func)'];

let test5 = [
    '(def NewFunc 5)'
];

console.log(solve(test1));
console.log(solve(test2));
console.log(solve(test3));
console.log(solve(test4));
console.log(solve(test5));

// solve(['(def func 10)',
// '(def newFunc (+  func 2))',
// '(def sumFunc (+ func func newFunc 0 0 0))',
// '(* sumFunc 2)'
// ]);
// solve(['(def func (+ 5 2))',
//     '(def func2 (/  func 5 2 1 0))',
//     '(def func3 (/ func 2))',
//     '(+ func3 func)'
//     ]);