function solve(args) {

    var returnString = "",
        definedFunctions = {};
    for (var i = 0; i < args.length; i++) {
        //replace the called functions in the functions with their results
        var firstRE = new RegExp(",", "g");
        args[i] = args[i].replace(firstRE, " , ");
        firstRE = new RegExp("\\[", "g");
        args[i] = args[i].replace(firstRE, "[ ");
        firstRE = new RegExp("\\]", "g");
        args[i] = args[i].replace(firstRE, " ]");
        for (var key in definedFunctions) {
            var re = new RegExp(" " + key + " ", "g");
            args[i] = args[i].replace(re, " " + definedFunctions[key] + " ");
            args[i] = args[i].replace(re, " " + definedFunctions[key] + " ");
        }

        var splittedFunction = args[i].split('['),
            funcProps = GetFunctionProps(splittedFunction[0]);
        //Check if the string line is a definition of a function
        if (args[i].indexOf("def ") !== -1) {
            //split the function by "[" sign
            definedFunctions[funcProps.funcName] = GetFunctionValue(funcProps.funcOperation, splittedFunction[1]);
            //console.log(definedFunctions[funcProps.funcName])
        }
        if (i === args.length - 1) {
            returnString = GetFunctionValue(funcProps.funcOperation, splittedFunction[1]);
        }
    }
    //console.log(definedFunctions);
    return returnString;
}

function GetFunctionProps(functionString) {
    var splittedFunctionString = functionString.split(' '),
        returnObject = { funcName: "", funcOperation: "none" };
    for (var i = splittedFunctionString.length - 1; i >= 0; i--) {
        if (splittedFunctionString[i] === "sum" ||
            splittedFunctionString[i] === "avg" ||
            splittedFunctionString[i] === "min" ||
            splittedFunctionString[i] === "max") {
            returnObject.funcOperation = splittedFunctionString[i];
        }
        if (isNaN(splittedFunctionString[i]) &&
            splittedFunctionString[i] !== "def" &&
            splittedFunctionString[i] !== returnObject.funcOperation &&
            splittedFunctionString[i].length > 0) {
            returnObject.funcName = splittedFunctionString[i];
        }
    }
    //console.log(returnObject);
    return returnObject;
}

function GetFunctionValue(functionOperation, functionString) {
    var newString = functionString.split(']');
    if (functionOperation === "none") {
        return newString[0].trim();
    } else {
        var splittedFunctionString = newString[0].split(','),
            result = (functionOperation === 'min') ? Number.MAX_VALUE : 0,
            count = 0,
            number;
        for (var i = 0; i < splittedFunctionString.length; i++) {
            var numberString = splittedFunctionString[i].trim();
            if (!isNaN(numberString) && numberString.length > 0) {
                number = parseInt(numberString);
                count++;
                if (functionOperation === 'sum' || functionOperation === 'avg') {
                    result = result + number;
                } else if (functionOperation === 'max') {
                    if (number > Number.MIN_VALUE && number > result) {
                        result = number;
                    }
                } else if (functionOperation === 'min') {
                    if (number < result) {
                        result = number;
                    }
                }
            }
        }
        if (functionOperation === 'avg') {
            return parseInt(result / count);
        }
        return result;
    }

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
"combo [maxy, maxy,maxy,maxy, 5,6]",
"summary sum[combo, maxy, -18000]",
"def pe6o avg[summary,maxy]",
"sum[7, pe6o]"];
//57

//console.log(solve(test1));
//console.log(solve(test2));
console.log(solve(testArr10));