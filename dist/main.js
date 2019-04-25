'use strict';

var _hello = (name => console.log('Hello, ' + (name || 'World')));

exports.$hello = _hello;
exports.hello = _hello;
