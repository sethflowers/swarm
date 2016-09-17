'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App(canvas, context) {
    _classCallCheck(this, App);

    this.canvas = canvas;
    this.context = context;
  }

  _createClass(App, [{
    key: 'step',
    value: function step() {
      this.context.fillStyle = Math.random() > .5 ? 'red' : 'black';
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

  return App;
}();

exports.default = App;