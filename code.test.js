const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [];
var result = hasCycle(testGraph1);
jsc.assert(JSON.stringify(result) == JSON.stringify([true));

var testGraph2 = [];
var result = hasCycle(testGraph2);
jsc.assert(JSON.stringify(result) == JSON.stringify([true));

var testGraph3 = [];
var result = hasCycle(testGraph3);
jsc.assert(JSON.stringify(result) == JSON.stringify([true));

var testGraph4 = [];
var result = hasCycle(testGraph4);
jsc.assert(JSON.stringify(result) == JSON.stringify([true));

var testGraph5 = [];
var result = hasCycle(testGraph5);
jsc.assert(JSON.stringify(result) == JSON.stringify([true));
