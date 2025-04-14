const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

var testGraph1 = [    // example graph, has cycle 0-1-3
  [1,3,5],
  [0,2,3],
  [1],
  [0,1,4,5],
  [3,5],
  [0,4,3]
];
var result = hasCycle(testGraph1);
jsc.assert(JSON.stringify(result) == JSON.stringify(true));

var testGraph2 = [  // testing isolation 
  [1],
  [0],
  [],
  [4],
  [3]
];
var result = hasCycle(testGraph2);
jsc.assert(JSON.stringify(result) == JSON.stringify(false));

var testGraph3 = [ // no cycles in connected graph
  [1,2],
  [0,4],
  [0,3],
  [2],
  [1]
];
var result = hasCycle(testGraph3);
jsc.assert(JSON.stringify(result) == JSON.stringify(false));

var testGraph4 = [
  [4],
  [3],
  [2],
  [1],
  [0]
];
var result = hasCycle(testGraph4);
jsc.assert(JSON.stringify(result) == JSON.stringify(true));

var testGraph5 = [  // isolated graph, cycle exists
  [3],
  [2,4],
  [1,4],
  [0],
  [1,2]
];
var result = hasCycle(testGraph5);
jsc.assert(JSON.stringify(result) == JSON.stringify(true));
