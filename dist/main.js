'use strict';

var _goodbye = (name => console.log('Goodbye, ' + (name || 'World')));

var _hello = (name => console.log('Hello, ' + (name || 'World')));

exports.$goodbye = _goodbye;
exports.$hello = _hello;
