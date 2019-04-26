(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.helloRollup = {}));
}(this, function (exports) { 'use strict';

	var _goodbye = (function (name) {
	  return console.log('Goodbye, ' + (name || 'World'));
	});

	var _hello = (function (name) {
	  return console.log('Hello, ' + (name || 'World'));
	});

	exports.$goodbye = _goodbye;
	exports.$hello = _hello;

}));
