var convert = require('xml-js');

var test = '';

var result1 = convert.xml2json(test, {compact: false, spaces: 4});
var result2 = convert.json2xml(result1, {compact: false, spaces: 4});
console.log(result2)
