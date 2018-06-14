'use strict';

function solve(args) {
    let n = parseInt(args[0]);
    let model = {};

    for (let i = 0; i < n; i += 1) {
        let keyValuePair = args[i + 1].split('-');
        let key = keyValuePair[0];
        let value = keyValuePair[1];

        if (value == 'true') {
            value = true;
        }
        else if (value == 'false') {
            value = false;
        }
        else if (value.indexOf(';') > -1) {
            value = value.split(';');
        }

        model[key] = value;
    }
    //console.log(model);
    let inModel = false;
    let inTemplate = false;
    let inLoop = false;
    let escaped = false;
    let render = true;
    let skipNewLine = false;

    let modelOpenTag = '<nk-model>';
    let modelCloseTag = '</nk-model>';
    let ifOpenTag = '<nk-if condition="';
    let ifClosedTag = '</nk-if>';
    let loopOpenTag = '<nk-repeat for="';
    let loopClosedTag = '</nk-repeat>';
    let templateOpenTag = '<nk-template name="';
    let templateClosedTag = '</nk-template>';
    let templateRenderingOpenTag = '<nk-template render="';
    let escapeOpen = '{{';
    let escapeClose = '}}';

    let currentModel = '';
    let currentTemplateName = '';
    let currentTemplateContent = [];
    let currentCollectionKey = '';
    let currentCollection = [];
    let currentLoopContent = '';

    let allTemplates = {};

    let result = [];

    let m = parseInt(args[n + 1]);

    for (let j = n + 2; j < n + m + 2; j += 1) {
        let currentLine = args[j];
        if (currentLine == undefined) {
            currentLine = '';
        }

        if (inTemplate) {
            currentTemplateContent.push('\n');
        }
        //console.log(currentLine);
        for (var k = 0; k < currentLine.length; k += 1) {
            let currentSymbol = currentLine[k];

            //escaping starts
            if (checkForCommand(currentLine, escapeOpen)) {
                escaped = true;
                k += 1;
                continue;
            }

            //escape ends
            if (escaped && checkForCommand(currentLine, escapeClose)) {
                escaped = false;
                k += 1;
                continue;
            }

            //escaped content push to result
            if (escaped) {
                if (render && !inLoop) {
                    result.push(currentSymbol);
                }
                continue;
            }

            //check for if starts
            if (checkForCommand(currentLine, ifOpenTag)) {
                let condition = currentLine.split('"')[1];
                if (!model[condition]) {
                    render = false;
                }
                else {
                    skipNewLine = true;
                }

                break;
            }

            //check for if ends
            if (checkForCommand(currentLine, ifClosedTag)) {
                render = true;
                skipNewLine = true;
                break;
            }

            //check for template rendering
            if (checkForCommand(currentLine, templateRenderingOpenTag)) {
                let templateToRender = currentLine.split('"')[1];
                let templateContentToRender = allTemplates[templateToRender];
                if (render && !inLoop) {
                    result.push(templateContentToRender);
                }
                break;
            }

            //check if section is defined
            if (checkForCommand(currentLine, templateOpenTag)) {
                inTemplate = true;
                currentTemplateName = currentLine.split('"')[1];
                //console.log(templateName);
                break; //TODO: check for whitespaces
            }

            //check ending of section definition
            if (inTemplate && checkForCommand(currentLine, templateClosedTag)) {
                inTemplate = false;

                allTemplates[currentTemplateName] = currentTemplateContent.join('').trim();
                currentTemplateName = '';
                currentTemplateContent = [];
                break;
            }

            //append to current template
            if (inTemplate) {
                currentTemplateContent.push(currentSymbol);
                continue;
            }

            //check if model tag is opened
            if (checkForCommand(currentLine, modelOpenTag)) {
                inModel = true;
                k += modelOpenTag.length - 1;
                continue;
            }

            //check if model rendering ends
            if (inModel && checkForCommand(currentLine, modelCloseTag)) {
                inModel = false;
                //console.log(currentModel);
                if (model[currentModel] && render && !inLoop) {
                    result.push(model[currentModel]);
                }
                else if (inLoop) {
                    if (model[currentModel]) {
                        currentLoopContent += model[currentModel];
                    } else {
                        currentLoopContent += '<nk-model>' + currentCollectionKey + '</nk-model>';
                    }
                }

                currentModel = '';
                k += modelCloseTag.length - 1;
                continue;
            }

            //check if in model
            if (inModel) {
                currentModel += currentSymbol;
                continue;
            }

            //check for loop
            if (checkForCommand(currentLine, loopOpenTag)) {
                inLoop = true;
                skipNewLine = true;
                let loopParts = currentLine.split('"')[1];
                let collectionKeyValuePair = loopParts.split(' in ');
                currentCollectionKey = collectionKeyValuePair[0];
                currentCollection = model[collectionKeyValuePair[1]];
                //console.log(currentCollectionKey, currentCollection);
                break;
            }

            //check if loop ends
            if (checkForCommand(currentLine, loopClosedTag)) {
                inLoop = false;
                skipNewLine = true;
                let regex = new RegExp('<nk-model>' + currentCollectionKey + '</nk-model>', 'g');
                currentLoopContent = currentLoopContent.trim();
                for (let l = 0; l < currentCollection.length; l += 1) {
                    let nextContent = currentLoopContent
                        .replace(regex, currentCollection[l]);
                    result.push(nextContent);
                    result.push('\n');
                }

                currentLoopContent = '';
                currentCollectionKey = '';
                currentCollection = [];
                break;
            }

            if (inLoop) {
                skipNewLine = true;
                currentLoopContent += currentSymbol;
                continue;
            }

            if (render && !inLoop) {
                result.push(currentSymbol);
            }
        }

        if (render && !skipNewLine) {
            result.push('\n');
        }

        if (skipNewLine) {
            skipNewLine = false;
        }

        if (inLoop) {
            currentLoopContent += '\n';
        }
    }
    //ksconsole.log(allTemplates);
    //console.log(allTemplates['menu']);

    console.log(result.join('').trim());

    function checkForCommand(currentLine, tag) {
        return currentLine.substr(k, tag.length) == tag;
    }
}

let test = ['6',
    'title-Telerik Academy',
    'showSubtitle-true',
    'subTitle-Free training',
    'showMarks-false',
    'marks-3;4;5;6',
    'students-Ivan;Gosho;Pesho',
    '42',
    '<nk-template name="menu">',
    '    <ul id="menu">',
    '        <li>Home</li>',
    '        <li>About us</li>',
    '    </ul>',
    '</nk-template>',
    '<nk-template name="footer">',
    '    <footer>',
    '        Copyright Telerik Academy 2014',
    '    </footer>',
    '</nk-template>',
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '    <title>Telerik Academy</title>',
    '</head>',
    '<body>',
    '    <nk-template render="menu" />',
    '',
    '    <h1><nk-model>title</nk-model></h1>',
    '    <nk-if condition="showSubtitle">',
    '        <h2><nk-model>subTitle</nk-model></h2>',
    '        <div>{{<nk-model>subTitle</nk-model>}} ;)</div>',
    '    </nk-if>',
    '',
    '    <ul>',
    '        <nk-repeat for="student in students">',
    '            <li>',
    '                <nk-model>student</nk-model>',
    '            </li>',
    '            <li>Multiline <nk-model>title</nk-model></li>',
    '        </nk-repeat>',
    '    </ul>',
    '    <nk-if condition="showMarks">',
    '        <div>',
    '            <nk-model>marks</nk-model> ',
    '        </div>',
    '    </nk-if>',
    '',
    '    <nk-template render="footer" />',
    '</body>',
    '</html>',
];

solve(test);