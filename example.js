// Dependencies:
var iso6393 = require('./index.js');

// Inspecting some values yields:
console.log('js', require('util').inspect(iso6393.slice(1820, 1825)));

// And the `length` computes to:
console.log('js', String(iso6393.length));
