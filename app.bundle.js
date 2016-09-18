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
	  var width = document.body.clientWidth;
	  var height = document.body.clientHeight;
	  var swarmSize = 100;
	  var runner = new _App2.default(canvas, context, width, height, swarmSize);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Swarm = __webpack_require__(2);

	var _Swarm2 = _interopRequireDefault(_Swarm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function () {
	  function App(canvas, context, width, height, swarmSize) {
	    _classCallCheck(this, App);

	    this.canvas = canvas;
	    this.context = context;
	    this.setSize(width, height);
	    this.swarm = new _Swarm2.default(swarmSize);
	  }

	  _createClass(App, [{
	    key: 'step',
	    value: function step() {
	      var _this = this;

	      this.context.fillStyle = 'white';
	      this.context.fillRect(0, 0, this.width, this.height);
	      this.context.fillStyle = 'black';

	      this.swarm.bugs.forEach(function (bug) {
	        var x = bug.x * _this.width;
	        var y = bug.y * _this.height;
	        _this.context.fillRect(x, y, 10, 10);
	      });
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Bug = __webpack_require__(3);

	var _Bug2 = _interopRequireDefault(_Bug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Swarm = function Swarm(size) {
	  _classCallCheck(this, Swarm);

	  this.size = size;
	  this.bugs = [];

	  for (var i = 0; i < this.size; i++) {
	    this.bugs.push(new _Bug2.default());
	  }
	};

	exports.default = Swarm;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Bug = function Bug() {
	  _classCallCheck(this, Bug);

	  this.x = Math.random();
	  this.y = Math.random();
	};

	exports.default = Bug;

/***/ }
/******/ ]);