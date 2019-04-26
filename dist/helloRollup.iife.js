var helloRollup = (function (exports) {
	'use strict';

	var _goodbye = (function (name) {
	  return console.log('Goodbye, ' + (name || 'World'));
	});

	var _hello = (function (name) {
	  return console.log('Hello, ' + (name || 'World'));
	});

	exports.$goodbye = _goodbye;
	exports.$hello = _hello;

	return exports;

}({}));
