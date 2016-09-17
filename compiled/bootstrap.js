'use strict';

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('screen');
  var context = canvas.getContext('2d');
  var runner = new _App2.default(canvas, context);

  runner.setSize(document.body.clientWidth, document.body.clientHeight);

  var pump = function pump() {
    runner.step();
    window.requestAnimationFrame(pump);
  };

  window.requestAnimationFrame(pump);

  window.addEventListener('resize', function () {
    runner.setSize(document.body.clientWidth, document.body.clientHeight);
  });
});