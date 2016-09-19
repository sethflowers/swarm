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

	      this.swarm.step();

	      this.context.fillStyle = 'white';
	      this.context.fillRect(0, 0, this.width, this.height);
	      this.context.fillStyle = 'black';

	      var bugSize = 4;

	      this.swarm.bugs.forEach(function (bug) {
	        var x = bug.x * _this.width;
	        var y = bug.y * _this.height;
	        _this.context.fillRect(x, y, bugSize, bugSize);
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Bug = __webpack_require__(3);

	var _Bug2 = _interopRequireDefault(_Bug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Swarm = function () {
	  function Swarm(size) {
	    _classCallCheck(this, Swarm);

	    this.size = size;
	    this.bugs = [];

	    for (var i = 0; i < this.size; i++) {
	      this.bugs.push(new _Bug2.default(this));
	    }

	    this.bugs.forEach(function (bug) {
	      return bug.findLeader();
	    });
	  }

	  _createClass(Swarm, [{
	    key: 'step',
	    value: function step() {
	      this.bugs.forEach(function (bug) {
	        return bug.step();
	      });
	    }
	  }]);

	  return Swarm;
	}();

	exports.default = Swarm;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Bug = function () {
	  function Bug(swarm) {
	    _classCallCheck(this, Bug);

	    this.x = Math.random();
	    this.y = Math.random();
	    this.deltaX = 0;
	    this.deltaY = 0;
	    this.swarm = swarm;
	  }

	  _createClass(Bug, [{
	    key: "findLeader",
	    value: function findLeader() {
	      var sample = [];

	      while (sample.length < this.swarm.size / 10) {
	        var bug = this.swarm.bugs[Math.floor(Math.random() * this.swarm.size)];

	        if (this !== bug) {
	          sample.push(bug);
	        }
	      }

	      var leader = sample[0];
	      var leaderDistance = this.distanceToSquared(leader);

	      for (var i = 1; i < sample.length; i++) {
	        var _bug = sample[i];

	        if (this.distanceToSquared(_bug) < leaderDistance) {
	          leader = _bug;
	        }
	      }

	      this.leader = leader;
	    }
	  }, {
	    key: "step",
	    value: function step() {
	      if (Math.random() < .01) {
	        this.findLeader();
	      }

	      var delta = .001;
	      this.deltaX += this.x < this.leader.x ? delta : -delta;
	      this.deltaY += this.y < this.leader.y ? delta : -delta;

	      var maxDelta = .01;
	      this.deltaX = Math.min(maxDelta, Math.max(this.deltaX, -maxDelta));
	      this.deltaY = Math.min(maxDelta, Math.max(this.deltaY, -maxDelta));

	      this.x += this.deltaX;
	      this.y += this.deltaY;

	      this.x = this.x < 1 ? this.x : -this.x;
	      this.y = this.y < 1 ? this.y : -this.y;
	    }
	  }, {
	    key: "distanceToSquared",
	    value: function distanceToSquared(other) {
	      var differenceInX = this.x - other.x;
	      var differenceInY = this.y - other.y;

	      return differenceInX * differenceInX + differenceInY * differenceInY;
	    }
	  }]);

	  return Bug;
	}();

	exports.default = Bug;

/***/ }
/******/ ]);