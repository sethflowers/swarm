'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var app = function () {
  function app(canvas, context) {
    _classCallCheck(this, app);

    this.canvas = canvas;
    this.context = context;
  }

  _createClass(app, [{
    key: 'step',
    value: function step() {
      this.context.fillStyle = Math.random() > .5 ? 'white' : 'black';
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }]);

  return app;
}();

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('screen');
  var context = canvas.getContext('2d');
  var runner = new app(canvas, context);

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
