'use strict';

function solve(args) {

    function parseOperationStart(operationStart) {
        let indexOfWhiteSpace = operationStart.trim().indexOf(' ');
        let name,
            func;
        if (indexOfWhiteSpace === -1) {
            name = operationStart;
            func = '';
        }
        else {
            name = operationStart.substring(0, indexOfWhiteSpace).trim();
            func = operationStart.substring(indexOfWhiteSpace).trim();
        }
        return {
            name: name.trim(),
            func: func.trim()
        };
    }

    function parseValue(valueString) {
        valueString = valueString.trim();
        valueString = valueString.substring(0, valueString.length - 1); // ! error in ws
        //console.log(valueString);
        let parts = valueString.split(',').map(function (item) {
            item = item.trim();
            if (isFinite(item)) {
                return parseInt(item);
            }
            else {
                return item.trim();
            }
        });
        return parts;
        //console.log(parts);
    }

    function parseOperations(lines) {
        let operations = [];
        for (let i = 0; i < lines.length; i += 1) {
            let line = lines[i];
            //part[0] -> variable + function
            //parts[1] -> values
            let parts = line.split('[');
            let operation = parseOperationStart(parts[0]);
            //console.log(operation);
            let value = parseValue(parts[1]);
            operation.value = value;
            operations.push(operation);
        }
        //func sum[5, 3, 7, 2, 6, 3]',
        // return [
        //     {
        //         func: 'sum',
        //         value: '[5, 3, 7, 2, 6, 3]',
        //         name: 'func'
        //     }
        // ];
        return operations;
    }

    function evaluateOperation(name, scope) {
        let operation = scope[name];
        //console.log(operation);
        //let hasVariable = false;
        let newValues = [];
        for (var i = 0; i < operation.value.length; i += 1) {
            let item = operation.value[i];
            if (!isFinite(item) && item !== '') {
                let variableValue = scope[item].value;
                if (variableValue instanceof Array) {
                    Array.prototype.push.apply(newValues, variableValue);
                    // for(let j = 0; j < variableValue.length; j += 1) {
                    //     newValues.push(variableValue[j]);
                    // }
                }
                else {
                    newValues.push(variableValue);
                }
                // hasVariable = true;
                // //replace variable name with value
                // break;
                // //console.log(name + ' has variable name');
            }
            else {
                newValues.push(item);
            }
        }

        switch (operation.func) {
            case '':
                break;
            case 'sum':
                var sum = 0;
                for (let i = 0; i < newValues.length; i += 1) {
                    sum += newValues[i];
                }
                newValues = sum;
                break;
            case 'min':
                newValues = Math.min.apply(null, newValues);
                break;
            case 'max':
                newValues = Math.max.apply(null, newValues);
                break;
            case 'avg':
                var sum = 0;
                for (let i = 0; i < newValues.length; i += 1) {
                    sum += newValues[i];
                }
                newValues = parseInt(sum / newValues.length);
                break;

            default: break;
        }
        scope[name].value = newValues;
    }

    let lines = args.map(function (item) {
        item = item.trim();
        if (item.indexOf('def ') !== 0) {
            return item;
        }
        item = item.substr('def '.length).trim();
        return item;
    });

    let operations = parseOperations(lines);

    //console.log(lines);
    //console.log(operations);

    let scope = {};
    for (let i = 0; i < operations.length; i += 1) {
        let operation = operations[i];
        scope[operation.name] = operation;
        evaluateOperation(operation.name, scope);
        console.log(operation.name, operation.value);
    }
    //console.log(operations[operations.length - 1]);
    //console.log(operations[operations.length - 1].name);
    //console.log(scope);
    //console.log(scope['func6']);
    let lastOperation = operations[operations.length - 1];
    let finalKey = operations[operations.length - 1].name;
    let lastArr = operations[operations.length - 1].value;
    let result = 0;
    switch (finalKey) {
        case '':
            result = lastArr[0];
            break;
        case 'sum':
            for (let i = 0; i < lastArr.length; i += 1) {
                result += lastArr[i];
            }
            break;
        case 'min':
            result = Math.min.apply(null, lastArr);
            break;
        case 'max':
            result = Math.max.apply(null, lastArr);
            break;
        case 'avg':
            for (let i = 0; i < lastArr.length; i += 1) {
                result += lastArr[i];
            }
            result = parseInt(result / lastArr.length);
            break;
        default:
            break;
    }
    return result;
}

let test1 = ['def func sum[5, 3, 7, 2, 6, 3]',
    'def func2 [5, 3, 7, 2, 6, 3]',
    'def func3 min[func2]',
    'def func4 max[5, 3, 7, 2, 6, 3]',
    'def func5 avg[5, 3, 7, 2, 6, 3]',
    'def func6 sum[func2, func3, func4 ]',
    'sum[func6, func4]'];

let test2 = ['def func sum[1, 2, 3, -6]',
    'def newList [func, 10, 1]',
    'def newFunc sum[func, 100, newList]',
    '[newFunc]'];

var testArr10 = ["def maxy max[100]",
    "def summary [0]",
    "def combo [maxy, maxy,maxy,maxy, 5,6]",
    "def summary sum[combo, maxy, -18000]",
    "def pe6o avg[summary,maxy]",
    "sum[7, pe6o]"];
//57

//console.log(solve(test1));
//console.log(solve(test2));
console.log(solve(testArr10));