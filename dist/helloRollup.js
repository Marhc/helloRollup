(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.helloRollup = {}));
}(this, function (exports) { 'use strict';

	var _hello = (function (name) {
	  return console.log('Hello, ' + (name || 'World'));
	});

	exports.$hello = _hello;
	exports.hello = _hello;

}));
