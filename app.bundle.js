/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

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

/***/ },
/* 1 */
/***/ function(module, exports) {

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
	      this.context.fillStyle = Math.random() > .5 ? 'black' : 'white';
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

/***/ }
/******/ ]);