var _goodbye = (function (name) {
  return console.log('Goodbye, ' + (name || 'World'));
});

var _hello = (function (name) {
  return console.log('Hello, ' + (name || 'World'));
});

export { _goodbye as $goodbye, _hello as $hello };
