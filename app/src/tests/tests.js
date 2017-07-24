var fnName = 'test';
var tests = require('test.json');

function init() {
    var fn = window.userCode[fnName];
    var outcomes = [];
    if(!fn) {
        return 'Error';
    }  

    outcomes.push(runTest(fn, 1, 1));
    outcomes.push(runTest(fn, 2, 2));
    outcomes.push(runTest(fn, 3, 3));
    outcomes.push(runTest(fn, 4, 4));

    return outcomes;
} 

function buildMessage(input, output, expectedOutput) {
    return fnName + '(' + input + ') returned : ' + output + '. Expected: ' + expectedOutput;
}

function runTest(fn, input, expectedOutput) {
    var outcome = {};
    var output = fn(input);
    if(output === expectedOutput) {
        outcome.status = true;
    } else {
        outcome.status = false;
    }
    outcome.message = buildMessage(input, output, expectedOutput);
    return outcome;
}


export default {
    spec: function() {
        return init();
    },
    boilerplate: function() {
        return 'function test() {};';
    },
    name: fnName
}