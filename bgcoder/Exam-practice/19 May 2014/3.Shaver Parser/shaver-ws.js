'use strict';

function solve(args) {
    let n = parseInt(args[0]);
    let model = {};
    for (let i = 0; i < n; i += 1) {
        let currentKeyValuePair = args[i + 1].split(':');
        let key = currentKeyValuePair[0];
        let value = currentKeyValuePair[1];

        if (value == 'true') {
            value = true;
        }
        else if (value == 'false') {
            value = false;
        }
        else if (value.indexOf(',') > -1) {
            value = value.split(',');
        }

        model[key] = value;
    }
    //console.log(model);

    let m = parseInt(args[n + 1]);

    let inShaver = false;
    let inSection = false;
    let inLoop = false;
    let render = true;

    let currentModelKeyName = '';
    let currentSectionName = '';
    let currentSectionContent = [];
    let currentLoopKey = '';
    let currentLoopCollection = [];
    let currentLoopIndex = 0;
    let currentLoopContent = [];

    let allSections = {};
    let result = [];
    //console.log(m);
    for (let j = n + 2; j < n + m + 2; j += 1) {
        //console.log(args[j]);
        let currentLine = args[j];

        if (currentLine == undefined) {
            currentLine = '';
        }

        if (!render && currentLine.indexOf('}') > -1) {
            render = true;
        }


        //check ending of section
        if (inSection && currentLine.indexOf('}') > -1) {
            inSection = false;
            allSections[currentSectionName] = currentSectionContent.join('\n');
            currentSectionName = '';
            currentSectionContent = [];
            continue;
        }

        if (inLoop && currentLine.indexOf('}') > -1) {
            inLoop = false;
            //render loop logic
            //console.log(currentLoopContent.join('').trim());
            for(let i = 0; i < currentLoopCollection.length; i += 1) {
                let content = currentLoopContent.join('').trim()
                            .replace('@' + currentLoopKey + ' ', currentLoopCollection[i] + ' ')
                            .replace('@' + currentLoopKey + '<', currentLoopCollection[i] + '<');
                //console.log(content);
                result.push(content);
                result.push('\n');
            }

            currentLoopKey = '';
            currentLoopCollection = [];
            currentLoopIndex = 0;
            currentLoopContent = [];
            continue;
        }

        if (currentLine.indexOf('}') > -1) {
            continue;
        }


        //append to section
        if (inSection) {
            currentSectionContent.push(currentLine);
            continue;
        }

        for (let k = 0; k < currentLine.length; k += 1) {
            let currentSymbol = currentLine[k];
            //console.log(currentSymbol);

            //check if in shaver
            if (currentSymbol === '@') {
                if (currentLine[k + 1] === '@') {
                    result.push('@');
                    k += 1;
                    continue;
                }

                inShaver = true;
                continue;
            }

            //check defining of sections
            if (checkIfInCommand(inShaver, currentLine, 'section ')) {
                //get name of section
                currentSectionName = currentLine.split(' ')[1];
                //console.log('section');
                //console.log(currentSectionName);
                inSection = true;
                inShaver = false;
                break;
            }

            //check if rendering section
            if (currentLine.indexOf('@renderSection("') > -1) {
                let sectionName = currentLine.split('"')[1];
                let sectionContent = allSections[sectionName];
                //console.log(sectionContent);
                result.push(sectionContent);
                inShaver = false;
                break;
            }

            //condition
            if (checkIfInCommand(inShaver, currentLine, 'if ')) {
                let indexOfOpenBracket = currentLine.indexOf('(');
                let indexOfClosedBracket = currentLine.indexOf(')');

                let propertyNameCondition = currentLine.substring(indexOfOpenBracket + 1, indexOfClosedBracket);
                //console.log(propertyNameCondition);
                let modelValue = model[propertyNameCondition];

                if (!modelValue) {
                    render = false;
                }
                break;
            }

            //loop
            if (checkIfInCommand(inShaver, currentLine, 'foreach ')) {
                let partsOfLoop = currentLine.trim().split(' ');
                //console.log(partsOfLoop);
                currentLoopKey = partsOfLoop[2];
                currentLoopCollection = model[partsOfLoop[4].replace(')', '')];
                //console.log(currentLoopKey, currentLoopCollection);
                inLoop = true;
                inShaver = false;
                break;
            }

            //exit shaver mode
            if (inShaver && (currentSymbol == ' ' || currentSymbol == '<')) {
                //console.log(currentModelKeyName);
                if (!inLoop && model[currentModelKeyName] && render) {
                    result.push(model[currentModelKeyName]);
                }
                else if (inLoop) {
                    if (model[currentModelKeyName]) {
                        currentLoopContent.push(model[currentModelKeyName]);
                    }
                    else {
                        currentLoopContent.push('@' + currentModelKeyName);
                    }
                }

                currentModelKeyName = '';
                inShaver = false;
            }

            if (inShaver) {
                currentModelKeyName += currentSymbol;
            }

            //add to result
            if (!inShaver && !inSection && render) {
                if (!inLoop) {
                    result.push(currentSymbol);
                }
                else if (inLoop) {
                    currentLoopContent.push(currentSymbol);
                }
            }

        }

        if (!inShaver && !inSection && render) {
            if (!inLoop) {
                result.push('\n');
            }
            else if (inLoop) {
                currentLoopContent.push('\n');
            }
        }
    }
    //console.log(allSections);
    console.log(result.join(''));

    function checkIfInCommand(inShaver, currentLine, commandToCheck) {
        return inShaver && currentLine.indexOf('@' + commandToCheck) > -1 && currentLine.indexOf('{') > -1;
    }
}

let test = [
    '6',
    'title:Telerik Academy',
    'showSubtitle:true',
    'subTitle:Free training',
    'showMarks:false',
    'marks:3, 4, 5, 6',
    'students:Pesho, Gosho, Ivan',
    '42',
    '@section menu {',
    '<ul id="menu">',
    '    <li>Home</li>',
    '    <li>About us</li>',
    '</ul>',
    '}',
    '@section footer {',
    '<footer>',
    '    Copyright Telerik Academy 2014',
    '</footer>',
    '}',
    '<!DOCTYPE html>',
    '<html>',
    '    <head>',
    '        <title>Telerik Academy</title>',
    '    </head>',
    '    <body>',
    '        @renderSection("menu")',
    '',
    '    <h1>@title</h1>',
    '        @if (showSubtitle) {',
    '            <h2>@subTitle</h2>',
    '            <div>@@JustNormalTextWithDoubleKliomba ;)</div>',
    '    }',
    '',
    '        <ul>',
    '            @foreach (var student in students) {',
    '                <li>',
    '                    @student',
    '            </li>',
    '                <li>Multiline @title</li>',
    '        }',
    '        </ul>',
    '        @if (showMarks) {',
    '            <div>',
    '                @marks',
    '        </div>',
    '        }',
    '',
    '        @renderSection("footer")',
    '</body>',
    '</html>'
];

solve(test);