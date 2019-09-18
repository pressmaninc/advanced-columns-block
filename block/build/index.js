/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */
function times(n, iteratee) {
  n = toInteger(n);
  if (n < 1 || n > MAX_SAFE_INTEGER) {
    return [];
  }
  var index = MAX_ARRAY_LENGTH,
      length = nativeMin(n, MAX_ARRAY_LENGTH);

  iteratee = castFunction(iteratee);
  n -= MAX_ARRAY_LENGTH;

  var result = baseTimes(length, iteratee);
  while (++index < n) {
    iteratee(index);
  }
  return result;
}

module.exports = times;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/column/attributes.js":
/*!**********************************!*\
  !*** ./src/column/attributes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  block_id: {
    type: 'string'
  },
  align: {
    type: 'string',
    default: 'left'
  },
  alignMobile: {
    type: 'string',
    default: 'left'
  },
  topPadding: {
    type: 'number',
    default: 0
  },
  bottomPadding: {
    type: 'number',
    default: 0
  },
  leftPadding: {
    type: 'number',
    default: 0
  },
  rightPadding: {
    type: 'number',
    default: 0
  },
  topMargin: {
    type: 'number',
    default: 0
  },
  bottomMargin: {
    type: 'number',
    default: 0
  },
  leftMargin: {
    type: 'number',
    default: 0
  },
  rightMargin: {
    type: 'number',
    default: 0
  },
  topPaddingMobile: {
    type: 'number',
    default: 0
  },
  bottomPaddingMobile: {
    type: 'number',
    default: 0
  },
  leftPaddingMobile: {
    type: 'number',
    default: 0
  },
  rightPaddingMobile: {
    type: 'number',
    default: 0
  },
  topMarginMobile: {
    type: 'number',
    default: 0
  },
  bottomMarginMobile: {
    type: 'number',
    default: 0
  },
  leftMarginMobile: {
    type: 'number',
    default: 0
  },
  rightMarginMobile: {
    type: 'number',
    default: 0
  },
  colWidth: {
    type: 'number',
    default: 0
  },
  colWidthMobile: {
    type: 'number',
    default: 0
  },
  backgroundType: {
    type: 'string',
    default: 'none'
  },
  backgroundImage: {
    type: 'object',
    default: null
  },
  backgroundPosition: {
    type: 'string',
    default: 'center-center'
  },
  backgroundSize: {
    type: 'string',
    default: 'cover'
  },
  backgroundRepeat: {
    type: 'string',
    default: 'no-repeat'
  },
  backgroundAttachment: {
    type: 'string',
    default: 'scroll'
  },
  backgroundColor: {
    type: 'string',
    default: ''
  },
  gradientColor1: {
    type: 'string',
    default: ''
  },
  gradientColor2: {
    type: 'string',
    default: ''
  },
  gradientType: {
    type: 'string',
    default: 'linear'
  },
  gradientLocation1: {
    type: 'number',
    default: 0
  },
  gradientLocation2: {
    type: 'number',
    default: 100
  },
  gradientAngle: {
    type: 'number',
    default: 0
  },
  backgroundOpacity: {
    type: 'number',
    default: 100
  },
  backgroundImageColor: {
    type: 'string',
    default: ''
  },
  borderStyle: {
    type: 'string',
    default: 'none'
  },
  borderWidth: {
    type: 'number',
    default: 1
  },
  borderRadius: {
    type: 'number',
    default: 0
  },
  borderColor: {
    type: 'string',
    default: ''
  },
  overlayType: {
    type: 'string',
    default: 'color'
  },
  gradientOverlayColor1: {
    type: 'string',
    default: ''
  },
  gradientOverlayColor2: {
    type: 'string',
    default: ''
  },
  gradientOverlayType: {
    type: 'string',
    default: 'linear'
  },
  gradientOverlayLocation1: {
    type: 'number',
    default: 0
  },
  gradientOverlayLocation2: {
    type: 'number',
    default: 100
  },
  gradientOverlayAngle: {
    type: 'number',
    default: 0
  },
  mobileMarginType: {
    type: 'string',
    default: 'px'
  },
  desktopMarginType: {
    type: 'string',
    default: 'px'
  },
  mobilePaddingType: {
    type: 'string',
    default: 'px'
  },
  desktopPaddingType: {
    type: 'string',
    default: 'px'
  }
});

/***/ }),

/***/ "./src/column/components/controls/inspector/background/color.js":
/*!**********************************************************************!*\
  !*** ./src/column/components/controls/inspector/background/color.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * 背景色
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      backgroundColor = _ref.backgroundColor,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundColor
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    value: backgroundColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        backgroundColor: colorValue
      });
    },
    allowReset: true
  }));
});

/***/ }),

/***/ "./src/column/components/controls/inspector/background/gradient.js":
/*!*************************************************************************!*\
  !*** ./src/column/components/controls/inspector/background/gradient.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * 背景グラデーション
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      backgroundVideoColor = _ref.backgroundVideoColor,
      gradientColor1 = _ref.gradientColor1,
      gradientLocation1 = _ref.gradientLocation1,
      gradientColor2 = _ref.gradientColor2,
      gradientLocation2 = _ref.gradientLocation2,
      gradientType = _ref.gradientType,
      gradientAngle = _ref.gradientAngle,
      gradientPosition = _ref.gradientPosition,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  var option = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Angle', 'advanced-columns-block'),
    value: gradientAngle,
    onChange: function onChange(value) {
      return setAttributes({
        gradientAngle: 'undefined' !== typeof value ? value : 0
      });
    },
    min: 0,
    max: 360,
    initialPosition: 0,
    allowReset: true
  });

  if ('undefined' !== typeof gradientPosition && 'radial' === gradientType) {
    option = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'advanced-columns-block'),
      value: gradientPosition,
      onChange: function onChange(value) {
        return setAttributes({
          gradientPosition: value
        });
      },
      options: [{
        value: 'center center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Center', 'advanced-columns-block')
      }, {
        value: 'center left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Left', 'advanced-columns-block')
      }, {
        value: 'center right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Right', 'advanced-columns-block')
      }, {
        value: 'top center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Center', 'advanced-columns-block')
      }, {
        value: 'top left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Left', 'advanced-columns-block')
      }, {
        value: 'top right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Right', 'advanced-columns-block')
      }, {
        value: 'bottom center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Center', 'advanced-columns-block')
      }, {
        value: 'bottom left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Left', 'advanced-columns-block')
      }, {
        value: 'bottom right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Right', 'advanced-columns-block')
      }]
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 1', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundVideoColor
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    value: gradientColor1,
    onChange: function onChange(colorValue) {
      return setAttributes({
        gradientColor1: colorValue
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 1', 'advanced-columns-block'),
    value: gradientLocation1,
    onChange: function onChange(value) {
      return setAttributes({
        gradientLocation1: 'undefined' !== typeof value ? value : 0
      });
    },
    min: 0,
    max: 100,
    initialPosition: 0,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 2', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundVideoColor
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    value: gradientColor2,
    onChange: function onChange(colorValue) {
      return setAttributes({
        gradientColor2: colorValue
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 2', 'advanced-columns-block'),
    value: gradientLocation2,
    onChange: function onChange(value) {
      return setAttributes({
        gradientLocation2: 'undefined' !== typeof value ? value : 100
      });
    },
    min: 0,
    max: 100,
    initialPosition: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'advanced-columns-block'),
    value: gradientType,
    onChange: function onChange(value) {
      return setAttributes({
        gradientType: value
      });
    },
    options: [{
      value: 'linear',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Linear', 'advanced-columns-block')
    }, {
      value: 'radial',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Radial', 'advanced-columns-block')
    }]
  }), option);
});

/***/ }),

/***/ "./src/column/components/controls/inspector/background/image.js":
/*!**********************************************************************!*\
  !*** ./src/column/components/controls/inspector/background/image.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * 背景画像
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      onSelectImage = _ref.onSelectImage,
      onRemoveImage = _ref.onRemoveImage,
      backgroundImage = _ref.backgroundImage,
      backgroundPosition = _ref.backgroundPosition,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      overlayType = _ref.overlayType,
      backgroundImageColor = _ref.backgroundImageColor,
      gradientOverlayColor1 = _ref.gradientOverlayColor1,
      gradientOverlayColor2 = _ref.gradientOverlayColor2,
      gradientOverlayType = _ref.gradientOverlayType,
      gradientOverlayLocation1 = _ref.gradientOverlayLocation1,
      gradientOverlayLocation2 = _ref.gradientOverlayLocation2,
      gradientOverlayAngle = _ref.gradientOverlayAngle,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  var selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Image', 'advanced-columns-block'),
      removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null),
      options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null),
      overlay = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

  if (backgroundImage) {
    selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replace Image', 'advanced-columns-block');
    removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "acb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Remove Image', 'advanced-columns-block'));

    if ('gradient' === overlayType) {
      overlay = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color Settings', 'advanced-columns-block'),
        colorSettings: [{
          value: gradientOverlayColor1,
          onChange: function onChange(value) {
            return setAttributes({
              gradientOverlayColor1: value
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 1', 'advanced-columns-block')
        }, {
          value: gradientOverlayColor2,
          onChange: function onChange(value) {
            return setAttributes({
              gradientOverlayColor2: value
            });
          },
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 2', 'advanced-columns-block')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'advanced-columns-block'),
        value: gradientOverlayType,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayType: value
          });
        },
        options: [{
          value: 'linear',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Linear', 'advanced-columns-block')
        }, {
          value: 'radial',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Radial', 'advanced-columns-block')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 1', 'advanced-columns-block'),
        value: gradientOverlayLocation1,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayLocation1: 'undefined' !== typeof value ? value : 0
          });
        },
        min: 0,
        max: 100,
        initialPosition: 0,
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 2', 'advanced-columns-block'),
        value: gradientOverlayLocation2,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayLocation2: 'undefined' !== typeof value ? value : 100
          });
        },
        min: 0,
        max: 100,
        initialPosition: 100,
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Angle', 'advanced-columns-block'),
        value: gradientOverlayAngle,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayAngle: 'undefined' !== typeof value ? value : 0
          });
        },
        min: 0,
        max: 360,
        initialPosition: 0,
        allowReset: true
      }));
    } else {
      overlay = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: "acb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Overlay Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "components-base-control__label"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: backgroundImageColor
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
        value: backgroundImageColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            backgroundImageColor: colorValue
          });
        },
        allowReset: true
      }));
    }

    options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Position', 'advanced-columns-block'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Left', 'advanced-columns-block')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Center', 'advanced-columns-block')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Right', 'advanced-columns-block')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Left', 'advanced-columns-block')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Center', 'advanced-columns-block')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Right', 'advanced-columns-block')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Left', 'advanced-columns-block')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Center', 'advanced-columns-block')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Right', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Attachment', 'advanced-columns-block'),
      value: backgroundAttachment,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundAttachment: value
        });
      },
      options: [{
        value: 'fixed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Fixed', 'advanced-columns-block')
      }, {
        value: 'scroll',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Scroll', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat', 'advanced-columns-block'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No Repeat', 'advanced-columns-block')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat', 'advanced-columns-block')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat-x', 'advanced-columns-block')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat-y', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size', 'advanced-columns-block'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Auto', 'advanced-columns-block')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Cover', 'advanced-columns-block')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Contain', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Overlay Type', 'advanced-columns-block'),
      value: overlayType,
      onChange: function onChange(value) {
        return setAttributes({
          overlayType: value
        });
      },
      options: [{
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'advanced-columns-block')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Gradient', 'advanced-columns-block')
      }]
    }), overlay);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "editor-bg-image-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Image', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Image', 'advanced-columns-block'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: backgroundImage,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isDefault: true,
        onClick: open
      }, selectBtnTxt);
    }
  }), removeBtn), options);
});

/***/ }),

/***/ "./src/column/components/controls/inspector/background/index.js":
/*!**********************************************************************!*\
  !*** ./src/column/components/controls/inspector/background/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color */ "./src/column/components/controls/inspector/background/color.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/column/components/controls/inspector/background/image.js");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gradient */ "./src/column/components/controls/inspector/background/gradient.js");








/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      backgroundType = _ref.backgroundType,
      backgroundColor = _ref.backgroundColor,
      onSelectImage = _ref.onSelectImage,
      onRemoveImage = _ref.onRemoveImage,
      backgroundImage = _ref.backgroundImage,
      backgroundPosition = _ref.backgroundPosition,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      backgroundImageColor = _ref.backgroundImageColor,
      gradientColor1 = _ref.gradientColor1,
      gradientLocation1 = _ref.gradientLocation1,
      gradientColor2 = _ref.gradientColor2,
      gradientLocation2 = _ref.gradientLocation2,
      gradientType = _ref.gradientType,
      gradientAngle = _ref.gradientAngle,
      backgroundOpacity = _ref.backgroundOpacity,
      overlayType = _ref.overlayType,
      gradientOverlayColor1 = _ref.gradientOverlayColor1,
      gradientOverlayColor2 = _ref.gradientOverlayColor2,
      gradientOverlayType = _ref.gradientOverlayType,
      gradientOverlayLocation1 = _ref.gradientOverlayLocation1,
      gradientOverlayLocation2 = _ref.gradientOverlayLocation2,
      gradientOverlayAngle = _ref.gradientOverlayAngle;
  var options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

  if ('color' === backgroundType || 'image' === backgroundType && backgroundImage || 'gradient' === backgroundType) {
    options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Opacity', 'advanced-columns-block'),
      value: backgroundOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundOpacity: 'undefined' !== typeof value ? value : 100
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 100
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Type', 'advanced-columns-block'),
    value: backgroundType,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundType: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'advanced-columns-block')
    }, {
      value: 'color',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'advanced-columns-block')
    }, {
      value: 'gradient',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Gradient', 'advanced-columns-block')
    }, {
      value: 'image',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image', 'advanced-columns-block')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_color__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes,
    backgroundColor: backgroundColor,
    isShow: 'color' === backgroundType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    onSelectImage: onSelectImage,
    onRemoveImage: onRemoveImage,
    backgroundImage: backgroundImage,
    backgroundPosition: backgroundPosition,
    backgroundAttachment: backgroundAttachment,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    overlayType: overlayType,
    backgroundImageColor: backgroundImageColor,
    gradientOverlayColor1: gradientOverlayColor1,
    gradientOverlayColor2: gradientOverlayColor2,
    gradientOverlayType: gradientOverlayType,
    gradientOverlayLocation1: gradientOverlayLocation1,
    gradientOverlayLocation2: gradientOverlayLocation2,
    gradientOverlayAngle: gradientOverlayAngle,
    isShow: 'image' === backgroundType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_gradient__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttributes: setAttributes,
    gradientColor1: gradientColor1,
    gradientLocation1: gradientLocation1,
    gradientColor2: gradientColor2,
    gradientLocation2: gradientLocation2,
    gradientType: gradientType,
    gradientAngle: gradientAngle,
    isShow: 'gradient' === backgroundType
  }), options);
});

/***/ }),

/***/ "./src/column/components/controls/inspector/index.js":
/*!***********************************************************!*\
  !*** ./src/column/components/controls/inspector/index.js ***!
  \***********************************************************/
/*! exports provided: LayoutPanel, BackgroundPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/column/components/controls/inspector/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPanel", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/column/components/controls/inspector/background/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundPanel", function() { return _background__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/column/components/controls/inspector/layout.js":
/*!************************************************************!*\
  !*** ./src/column/components/controls/inspector/layout.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * レイアウト
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      colWidthMobile = _ref.colWidthMobile,
      colWidth = _ref.colWidth,
      alignMobile = _ref.alignMobile,
      align = _ref.align;
  var params = {
    mobile: {
      colWidth: {
        key: 'colWidthMobile',
        val: colWidthMobile
      },
      align: {
        key: 'alignMobile',
        val: alignMobile
      }
    },
    desktop: {
      colWidth: {
        key: 'colWidth',
        val: colWidth
      },
      align: {
        key: 'align',
        val: align
      }
    }
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "acb-size-type-field-tabs acb-without-size-type",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'acb-desktop-tab acb-responsive-tabs'
    }, {
      name: 'mobile',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'acb-mobile-tab acb-responsive-tabs'
    }]
  }, function (tab) {
    var param = params[tab.name];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Width (%)', 'advanced-columns-block'),
      value: param.colWidth.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.colWidth.key, value));
      },
      min: 0,
      max: 100
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "acb-size-type-field-tabs acb-without-size-type",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'acb-desktop-tab acb-responsive-tabs'
    }, {
      name: 'mobile',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'acb-mobile-tab acb-responsive-tabs'
    }]
  }, function (tab) {
    var param = params[tab.name];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Alignment', 'advanced-columns-block'),
      value: param.align.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.align.key, value));
      },
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'advanced-columns-block')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center', 'advanced-columns-block')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'advanced-columns-block')
      }]
    }));
  }));
});

/***/ }),

/***/ "./src/column/edit.js":
/*!****************************!*\
  !*** ./src/column/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ACBColumnEdit; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styling */ "./src/column/styling.js");
/* harmony import */ var _common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/components/controls/inspector */ "./src/common/components/controls/inspector/index.js");
/* harmony import */ var _components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/controls/inspector */ "./src/column/components/controls/inspector/index.js");

















var ACBColumnEdit =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ACBColumnEdit, _Component);

  function ACBColumnEdit() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ACBColumnEdit);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ACBColumnEdit).apply(this, arguments));
    _this.onRemoveImage = _this.onRemoveImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSelectImage = _this.onSelectImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ACBColumnEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 属性に block_id を割り当てる。
      this.props.setAttributes({
        block_id: this.props.clientId
      }); // このブロック用のCSSをStyleタグとして出力。

      var $style = document.createElement('style');
      $style.setAttribute('id', "acb-column-style-".concat(this.props.clientId));
      document.head.appendChild($style);
    }
    /*
     * 画像削除イベント
     */

  }, {
    key: "onRemoveImage",
    value: function onRemoveImage() {
      this.props.setAttributes({
        backgroundImage: null
      });
    }
    /*
     * 画像選択イベント
     */

  }, {
    key: "onSelectImage",
    value: function onSelectImage(media) {
      var setAttributes = this.props.setAttributes;

      if (!media || !media.url) {
        setAttributes({
          backgroundImage: null
        });
        return;
      }

      if (!media.type || 'image' !== media.type) {
        return;
      }

      setAttributes({
        backgroundImage: media
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          topPadding = _this$props$attribute.topPadding,
          bottomPadding = _this$props$attribute.bottomPadding,
          leftPadding = _this$props$attribute.leftPadding,
          rightPadding = _this$props$attribute.rightPadding,
          topMargin = _this$props$attribute.topMargin,
          bottomMargin = _this$props$attribute.bottomMargin,
          leftMargin = _this$props$attribute.leftMargin,
          rightMargin = _this$props$attribute.rightMargin,
          topPaddingMobile = _this$props$attribute.topPaddingMobile,
          bottomPaddingMobile = _this$props$attribute.bottomPaddingMobile,
          leftPaddingMobile = _this$props$attribute.leftPaddingMobile,
          rightPaddingMobile = _this$props$attribute.rightPaddingMobile,
          topMarginMobile = _this$props$attribute.topMarginMobile,
          bottomMarginMobile = _this$props$attribute.bottomMarginMobile,
          leftMarginMobile = _this$props$attribute.leftMarginMobile,
          rightMarginMobile = _this$props$attribute.rightMarginMobile,
          colWidth = _this$props$attribute.colWidth,
          colWidthMobile = _this$props$attribute.colWidthMobile,
          backgroundType = _this$props$attribute.backgroundType,
          backgroundImage = _this$props$attribute.backgroundImage,
          backgroundColor = _this$props$attribute.backgroundColor,
          backgroundPosition = _this$props$attribute.backgroundPosition,
          backgroundAttachment = _this$props$attribute.backgroundAttachment,
          backgroundRepeat = _this$props$attribute.backgroundRepeat,
          backgroundSize = _this$props$attribute.backgroundSize,
          gradientColor1 = _this$props$attribute.gradientColor1,
          gradientColor2 = _this$props$attribute.gradientColor2,
          gradientLocation1 = _this$props$attribute.gradientLocation1,
          gradientLocation2 = _this$props$attribute.gradientLocation2,
          gradientType = _this$props$attribute.gradientType,
          gradientAngle = _this$props$attribute.gradientAngle,
          backgroundOpacity = _this$props$attribute.backgroundOpacity,
          backgroundImageColor = _this$props$attribute.backgroundImageColor,
          borderStyle = _this$props$attribute.borderStyle,
          borderWidth = _this$props$attribute.borderWidth,
          borderRadius = _this$props$attribute.borderRadius,
          borderColor = _this$props$attribute.borderColor,
          align = _this$props$attribute.align,
          alignMobile = _this$props$attribute.alignMobile,
          overlayType = _this$props$attribute.overlayType,
          gradientOverlayColor1 = _this$props$attribute.gradientOverlayColor1,
          gradientOverlayColor2 = _this$props$attribute.gradientOverlayColor2,
          gradientOverlayType = _this$props$attribute.gradientOverlayType,
          gradientOverlayLocation1 = _this$props$attribute.gradientOverlayLocation1,
          gradientOverlayLocation2 = _this$props$attribute.gradientOverlayLocation2,
          gradientOverlayAngle = _this$props$attribute.gradientOverlayAngle,
          mobileMarginType = _this$props$attribute.mobileMarginType,
          desktopMarginType = _this$props$attribute.desktopMarginType,
          mobilePaddingType = _this$props$attribute.mobilePaddingType,
          desktopPaddingType = _this$props$attribute.desktopPaddingType,
          setAttributes = _this$props.setAttributes,
          className = _this$props.className,
          isSelected = _this$props.isSelected;
      var element = document.getElementById('acb-column-style-' + this.props.clientId);

      if (null !== element && 'undefined' !== typeof element) {
        element.innerHTML = Object(_styling__WEBPACK_IMPORTED_MODULE_12__["default"])(this.props);
      }

      var active = isSelected ? 'active' : 'not-active',
          align_class = 'center' === align ? '' : "acb-column__align-".concat(align),
          align_class_mobile = '' === alignMobile ? '' : "acb-column__align-mobile-".concat(alignMobile);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__["LayoutPanel"], {
        setAttributes: setAttributes,
        colWidthMobile: colWidthMobile,
        colWidth: colWidth,
        alignMobile: alignMobile,
        align: align
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_13__["SpacingPanel"], {
        setAttributes: setAttributes,
        mobilePaddingType: mobilePaddingType,
        topPaddingMobile: topPaddingMobile,
        bottomPaddingMobile: bottomPaddingMobile,
        leftPaddingMobile: leftPaddingMobile,
        rightPaddingMobile: rightPaddingMobile,
        desktopPaddingType: desktopPaddingType,
        topPadding: topPadding,
        bottomPadding: bottomPadding,
        leftPadding: leftPadding,
        rightPadding: rightPadding,
        mobileMarginType: mobileMarginType,
        topMarginMobile: topMarginMobile,
        bottomMarginMobile: bottomMarginMobile,
        leftMarginMobile: leftMarginMobile,
        rightMarginMobile: rightMarginMobile,
        desktopMarginType: desktopMarginType,
        topMargin: topMargin,
        bottomMargin: bottomMargin,
        leftMargin: leftMargin,
        rightMargin: rightMargin
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__["BackgroundPanel"], {
        setAttributes: setAttributes,
        backgroundType: backgroundType,
        backgroundColor: backgroundColor,
        onSelectImage: this.onSelectImage,
        onRemoveImage: this.onRemoveImage,
        backgroundImage: backgroundImage,
        backgroundPosition: backgroundPosition,
        backgroundAttachment: backgroundAttachment,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        backgroundImageColor: backgroundImageColor,
        gradientColor1: gradientColor1,
        gradientLocation1: gradientLocation1,
        gradientColor2: gradientColor2,
        gradientLocation2: gradientLocation2,
        gradientType: gradientType,
        gradientAngle: gradientAngle,
        backgroundOpacity: backgroundOpacity,
        overlayType: overlayType,
        gradientOverlayColor1: gradientOverlayColor1,
        gradientOverlayColor2: gradientOverlayColor2,
        gradientOverlayType: gradientOverlayType,
        gradientOverlayLocation1: gradientOverlayLocation1,
        gradientOverlayLocation2: gradientOverlayLocation2,
        gradientOverlayAngle: gradientOverlayAngle
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_13__["BorderPanel"], {
        setAttributes: setAttributes,
        borderStyle: borderStyle,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: borderColor
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(className, 'acb-column__wrap', "acb-column__background-".concat(backgroundType), "acb-column__edit-".concat(active), align_class, align_class_mobile),
        id: "acb-column-".concat(this.props.clientId)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "acb-column__overlay"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "acb-column__inner-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"], {
        templateLock: false
      }))));
    }
  }]);

  return ACBColumnEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/column/index.js":
/*!*****************************!*\
  !*** ./src/column/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/column/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/column/save.js");
/**
 * BLOCK: Column
 */






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('advanced-columns-block/column', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Advanced Column', 'advanced-columns-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This block is an immediate child of Advanced Columns.', 'advanced-columns-block'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].column,
  category: 'advanced-columns-block',
  parent: ['advanced-columns-block/columns'],
  supports: {
    inserter: false
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (_edit__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./src/column/inline-styles.js":
/*!*************************************!*\
  !*** ./src/column/inline-styles.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generate_css_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generate-css-unit */ "./src/generate-css-unit.js");
/**
 * Returns Dynamic Generated CSS
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      backgroundColor = _props$attributes.backgroundColor,
      backgroundOpacity = _props$attributes.backgroundOpacity,
      backgroundType = _props$attributes.backgroundType,
      gradientColor1 = _props$attributes.gradientColor1,
      gradientColor2 = _props$attributes.gradientColor2,
      gradientLocation1 = _props$attributes.gradientLocation1,
      gradientLocation2 = _props$attributes.gradientLocation2,
      gradientType = _props$attributes.gradientType,
      gradientAngle = _props$attributes.gradientAngle,
      backgroundImageColor = _props$attributes.backgroundImageColor,
      borderRadius = _props$attributes.borderRadius,
      overlayType = _props$attributes.overlayType,
      gradientOverlayColor1 = _props$attributes.gradientOverlayColor1,
      gradientOverlayColor2 = _props$attributes.gradientOverlayColor2,
      gradientOverlayType = _props$attributes.gradientOverlayType,
      gradientOverlayLocation1 = _props$attributes.gradientOverlayLocation1,
      gradientOverlayLocation2 = _props$attributes.gradientOverlayLocation2,
      gradientOverlayAngle = _props$attributes.gradientOverlayAngle,
      style = {};

  switch (backgroundType) {
    case 'image':
      style['opacity'] = 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '';
      style['background-color'] = backgroundImageColor;

      if ('color' === overlayType) {
        style['opacity'] = 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '';
      } else {
        style['background-color'] = 'transparent';
        style['background-image'] = 'linear' === gradientOverlayType ? "linear-gradient(".concat(gradientOverlayAngle, "deg, ").concat(gradientOverlayColor2, " ").concat(gradientOverlayLocation1, "%, ").concat(gradientOverlayColor1, " ").concat(gradientOverlayLocation2, "%)") : style['background-image'] = "radial-gradient( at center center, ".concat(gradientOverlayColor2, " ").concat(gradientOverlayLocation1, "%, ").concat(gradientOverlayColor1, " ").concat(gradientOverlayLocation2, "%)");
      }

      break;

    case 'gradient':
      style['background-color'] = 'transparent';
      style['opacity'] = 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '';
      style['background-image'] = 'linear' === gradientType ? "linear-gradient(".concat(gradientAngle, "deg, ").concat(gradientColor2, " ").concat(gradientLocation1, "%, ").concat(gradientColor1, " ").concat(gradientLocation2, "%)") : "radial-gradient( at center center, ".concat(gradientColor2, " ").concat(gradientLocation1, "%, ").concat(gradientColor1, " ").concat(gradientLocation2, "%)");
      break;

    case 'color':
      style['opacity'] = 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '';
      style['background-color'] = backgroundColor;
      break;

    default:
      break;
  }

  style['border-radius'] = Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(borderRadius, 'px');
  return style;
});

/***/ }),

/***/ "./src/column/save.js":
/*!****************************!*\
  !*** ./src/column/save.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styling */ "./src/column/styling.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      block_id = _props$attributes.block_id,
      backgroundType = _props$attributes.backgroundType,
      align = _props$attributes.align,
      alignMobile = _props$attributes.alignMobile,
      alignTablet = _props$attributes.alignTablet,
      align_class = 'center' === align ? '' : "acb-column__align-".concat(align),
      align_class_mobile = '' === alignMobile ? '' : "acb-column__align-mobile-".concat(alignMobile),
      align_class_tablet = '' === alignTablet ? '' : "acb-column__align-tablet-".concat(alignTablet);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", null, Object(_styling__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread({}, props, {
    isSave: true
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.className, 'acb-column__wrap', "acb-column__background-".concat(backgroundType), align_class, align_class_mobile, align_class_tablet),
    id: "acb-column-".concat(block_id)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "acb-column__overlay"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "acb-column__inner-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null))));
});

/***/ }),

/***/ "./src/column/styling.js":
/*!*******************************!*\
  !*** ./src/column/styling.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-styles */ "./src/column/inline-styles.js");
/* harmony import */ var _generate_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generate-css */ "./src/generate-css.js");
/* harmony import */ var _generate_css_unit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generate-css-unit */ "./src/generate-css-unit.js");


/**
 * Returns Dynamic Generated CSS
 */



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _selectors;

  var _props$attributes = props.attributes,
      colWidth = _props$attributes.colWidth,
      colWidthMobile = _props$attributes.colWidthMobile,
      topPadding = _props$attributes.topPadding,
      bottomPadding = _props$attributes.bottomPadding,
      leftPadding = _props$attributes.leftPadding,
      rightPadding = _props$attributes.rightPadding,
      topMargin = _props$attributes.topMargin,
      bottomMargin = _props$attributes.bottomMargin,
      leftMargin = _props$attributes.leftMargin,
      rightMargin = _props$attributes.rightMargin,
      topPaddingMobile = _props$attributes.topPaddingMobile,
      bottomPaddingMobile = _props$attributes.bottomPaddingMobile,
      leftPaddingMobile = _props$attributes.leftPaddingMobile,
      rightPaddingMobile = _props$attributes.rightPaddingMobile,
      topMarginMobile = _props$attributes.topMarginMobile,
      bottomMarginMobile = _props$attributes.bottomMarginMobile,
      leftMarginMobile = _props$attributes.leftMarginMobile,
      rightMarginMobile = _props$attributes.rightMarginMobile,
      backgroundType = _props$attributes.backgroundType,
      backgroundImage = _props$attributes.backgroundImage,
      backgroundPosition = _props$attributes.backgroundPosition,
      backgroundAttachment = _props$attributes.backgroundAttachment,
      backgroundRepeat = _props$attributes.backgroundRepeat,
      backgroundSize = _props$attributes.backgroundSize,
      borderStyle = _props$attributes.borderStyle,
      borderWidth = _props$attributes.borderWidth,
      borderRadius = _props$attributes.borderRadius,
      borderColor = _props$attributes.borderColor,
      mobileMarginType = _props$attributes.mobileMarginType,
      desktopMarginType = _props$attributes.desktopMarginType,
      mobilePaddingType = _props$attributes.mobilePaddingType,
      desktopPaddingType = _props$attributes.desktopPaddingType;
  var position = backgroundPosition.replace('-', ' '),
      style = {
    'padding-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(topPadding, desktopPaddingType),
    'padding-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(bottomPadding, desktopPaddingType),
    'padding-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(leftPadding, desktopPaddingType),
    'padding-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(rightPadding, desktopPaddingType),
    'margin-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(topMargin, desktopMarginType),
    'margin-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(bottomMargin, desktopMarginType),
    'margin-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(leftMargin, desktopMarginType),
    'margin-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(rightMargin, desktopMarginType),
    'border-radius': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(borderRadius, desktopMarginType)
  };

  if ('none' !== borderStyle) {
    style['border-style'] = borderStyle;
    style['border-width'] = Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(borderWidth, 'px');
    style['border-color'] = borderColor;
  }

  if ('image' === backgroundType) {
    style['background-image'] = backgroundImage ? "url(".concat(backgroundImage.url, ")") : null;
    style['background-position'] = position;
    style['background-attachment'] = backgroundAttachment;
    style['background-repeat'] = backgroundRepeat;
    style['background-size'] = backgroundSize;
  }

  var selectors = (_selectors = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_selectors, props.isSave ? ' .acb-column__overlay' : '::before', Object(_inline_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(props)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_selectors, '', style), _selectors),
      mobile_selectors = {
    '': {
      'padding-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(topPaddingMobile, mobilePaddingType),
      'padding-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(bottomPaddingMobile, mobilePaddingType),
      'padding-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(leftPaddingMobile, mobilePaddingType),
      'padding-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(rightPaddingMobile, mobilePaddingType),
      'margin-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(topMarginMobile, mobileMarginType),
      'margin-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(bottomMarginMobile, mobileMarginType),
      'margin-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(leftMarginMobile, mobileMarginType),
      'margin-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_3__["default"])(rightMarginMobile, mobileMarginType)
    }
  };

  if ('' !== colWidth && 0 !== colWidth) {
    selectors[props.isSave ? "#acb-column-".concat(props.attributes.block_id) : '.editor-block-list__block'] = {
      width: "".concat(colWidth, "%")
    };
  }

  if ('' !== colWidthMobile && 0 !== colWidthMobile) {
    mobile_selectors[props.isSave ? "#acb-column-".concat(props.attributes.block_id) : '.editor-block-list__block'] = {
      width: "".concat(colWidthMobile, "%")
    };
  }

  var id = props.isSave ? "#acb-column-".concat(props.attributes.block_id) : "#wpwrap .edit-post-visual-editor #block-".concat(props.clientId);
  return Object(_generate_css__WEBPACK_IMPORTED_MODULE_2__["default"])(selectors, id) + Object(_generate_css__WEBPACK_IMPORTED_MODULE_2__["default"])(mobile_selectors, id, true, 'mobile');
});

/***/ }),

/***/ "./src/columns/attributes.js":
/*!***********************************!*\
  !*** ./src/columns/attributes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  block_id: {
    type: 'string'
  },
  columns: {
    type: 'number',
    default: 2
  },
  align: {
    type: 'string',
    default: 'center'
  },
  vAlign: {
    type: 'string',
    default: 'top'
  },
  stack: {
    type: 'string',
    default: 'mobile'
  },
  columnGap: {
    type: 'string',
    default: '10'
  },
  topPadding: {
    type: 'number',
    default: 0
  },
  bottomPadding: {
    type: 'number',
    default: 0
  },
  leftPadding: {
    type: 'number',
    default: 0
  },
  rightPadding: {
    type: 'number',
    default: 0
  },
  topPaddingTablet: {
    type: 'number',
    default: 0
  },
  bottomPaddingTablet: {
    type: 'number',
    default: 0
  },
  leftPaddingTablet: {
    type: 'number',
    default: 0
  },
  rightPaddingTablet: {
    type: 'number',
    default: 0
  },
  topPaddingMobile: {
    type: 'number',
    default: 0
  },
  bottomPaddingMobile: {
    type: 'number',
    default: 0
  },
  leftPaddingMobile: {
    type: 'number',
    default: 0
  },
  rightPaddingMobile: {
    type: 'number',
    default: 0
  },
  topMargin: {
    type: 'number',
    default: 0
  },
  bottomMargin: {
    type: 'number',
    default: 0
  },
  topMarginMobile: {
    type: 'number',
    default: 0
  },
  bottomMarginMobile: {
    type: 'number',
    default: 0
  },
  contentWidth: {
    type: 'string',
    default: 'theme'
  },
  width: {
    type: 'number',
    default: 900
  },
  widthType: {
    type: 'string',
    default: 'px'
  },
  backgroundType: {
    type: 'string',
    default: 'none'
  },
  backgroundImage: {
    type: 'object',
    default: null
  },
  backgroundPosition: {
    type: 'string',
    default: 'center-center'
  },
  backgroundSize: {
    type: 'string',
    default: 'cover'
  },
  backgroundRepeat: {
    type: 'string',
    default: 'no-repeat'
  },
  backgroundAttachment: {
    type: 'string',
    default: 'scroll'
  },
  backgroundVideo: {
    type: 'object',
    default: null
  },
  backgroundColor: {
    type: 'string',
    default: ''
  },
  gradientColor1: {
    type: 'string',
    default: ''
  },
  gradientColor2: {
    type: 'string',
    default: ''
  },
  gradientType: {
    type: 'string',
    default: 'linear'
  },
  gradientLocation1: {
    type: 'number',
    default: 0
  },
  gradientLocation2: {
    type: 'number',
    default: 100
  },
  gradientAngle: {
    type: 'number',
    default: 0
  },
  gradientPosition: {
    type: 'string',
    default: 'center center'
  },
  backgroundOpacity: {
    type: 'number',
    default: 100
  },
  backgroundVideoOpacity: {
    type: 'number',
    default: 50
  },
  backgroundVideoColor: {
    type: 'string',
    default: ''
  },
  backgroundImageColor: {
    type: 'string',
    default: ''
  },
  borderStyle: {
    type: 'string',
    default: 'none'
  },
  borderWidth: {
    type: 'number',
    default: 1
  },
  borderRadius: {
    type: 'number',
    default: 0
  },
  borderColor: {
    type: 'string',
    default: ''
  },
  bottomType: {
    type: 'string',
    default: 'none'
  },
  bottomColor: {
    type: 'string',
    default: ''
  },
  bottomHeight: {
    type: 'number',
    default: 50
  },
  bottomHeightMobile: {
    type: 'number',
    default: 50
  },
  bottomWidth: {
    type: 'number',
    default: 100
  },
  topType: {
    type: 'string',
    default: 'none'
  },
  topColor: {
    type: 'string',
    default: ''
  },
  topHeight: {
    type: 'number',
    default: 50
  },
  topHeightMobile: {
    type: 'number',
    default: 50
  },
  topWidth: {
    type: 'number',
    default: 100
  },
  topFlip: {
    type: 'boolean',
    default: false
  },
  bottomFlip: {
    type: 'boolean',
    default: false
  },
  reverseMobile: {
    type: 'boolean',
    default: false
  },
  topDividerOpacity: {
    type: 'number',
    default: 100
  },
  bottomDividerOpacity: {
    type: 'number',
    default: 100
  },
  topContentAboveShape: {
    type: 'boolean',
    default: false
  },
  bottomContentAboveShape: {
    type: 'boolean',
    default: false
  },
  mobileMarginType: {
    type: 'string',
    default: 'px'
  },
  desktopMarginType: {
    type: 'string',
    default: 'px'
  },
  mobilePaddingType: {
    type: 'string',
    default: 'px'
  },
  desktopPaddingType: {
    type: 'string',
    default: 'px'
  }
});

/***/ }),

/***/ "./src/columns/components/controls/block/index.js":
/*!********************************************************!*\
  !*** ./src/columns/components/controls/block/index.js ***!
  \********************************************************/
/*! exports provided: VerticalTop, VerticalMiddle, VerticalBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vertical_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical-top */ "./src/columns/components/controls/block/vertical-top.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalTop", function() { return _vertical_top__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vertical_middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-middle */ "./src/columns/components/controls/block/vertical-middle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalMiddle", function() { return _vertical_middle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _vertical_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical-bottom */ "./src/columns/components/controls/block/vertical-bottom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalBottom", function() { return _vertical_bottom__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/columns/components/controls/block/vertical-bottom.js":
/*!******************************************************************!*\
  !*** ./src/columns/components/controls/block/vertical-bottom.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons */ "./src/icons.js");





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      vAlign = _ref.vAlign;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertically Bottom', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-icon-button', 'components-toolbar__control', {
      'is-active': 'bottom' === vAlign
    }),
    onClick: function onClick() {
      return setAttributes({
        vAlign: 'bottom'
      });
    }
  }, _icons__WEBPACK_IMPORTED_MODULE_4__["default"].bottom_align)));
});

/***/ }),

/***/ "./src/columns/components/controls/block/vertical-middle.js":
/*!******************************************************************!*\
  !*** ./src/columns/components/controls/block/vertical-middle.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons */ "./src/icons.js");


/**
 * 上下中央揃え
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      vAlign = _ref.vAlign;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertically Middle', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-icon-button', 'components-toolbar__control', {
      'is-active': 'middle' === vAlign
    }),
    onClick: function onClick() {
      return setAttributes({
        vAlign: 'middle'
      });
    }
  }, _icons__WEBPACK_IMPORTED_MODULE_4__["default"].middle_align)));
});

/***/ }),

/***/ "./src/columns/components/controls/block/vertical-top.js":
/*!***************************************************************!*\
  !*** ./src/columns/components/controls/block/vertical-top.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../icons */ "./src/icons.js");


/**
 * 上揃え
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      vAlign = _ref.vAlign;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertically Top', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('components-icon-button', 'components-toolbar__control', {
      'is-active': 'top' === vAlign
    }),
    onClick: function onClick() {
      return setAttributes({
        vAlign: 'top'
      });
    }
  }, _icons__WEBPACK_IMPORTED_MODULE_4__["default"].top_align)));
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/background/color.js":
/*!***********************************************************************!*\
  !*** ./src/columns/components/controls/inspector/background/color.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * 背景色
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      backgroundColor = _ref.backgroundColor,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundColor
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    value: backgroundColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        backgroundColor: 'undefined' !== typeof colorValue ? colorValue : 100
      });
    },
    allowReset: true
  }));
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/background/gradient.js":
/*!**************************************************************************!*\
  !*** ./src/columns/components/controls/inspector/background/gradient.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * 背景グラデーション
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      gradientColor1 = _ref.gradientColor1,
      gradientLocation1 = _ref.gradientLocation1,
      gradientColor2 = _ref.gradientColor2,
      gradientLocation2 = _ref.gradientLocation2,
      gradientType = _ref.gradientType,
      gradientAngle = _ref.gradientAngle,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color Settings', 'advanced-columns-block'),
    colorSettings: [{
      value: gradientColor2,
      onChange: function onChange(value) {
        return setAttributes({
          gradientColor2: value
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 1', 'advanced-columns-block')
    }, {
      value: gradientColor1,
      onChange: function onChange(value) {
        return setAttributes({
          gradientColor1: value
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color 2', 'advanced-columns-block')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'advanced-columns-block'),
    value: gradientType,
    onChange: function onChange(value) {
      return setAttributes({
        gradientType: value
      });
    },
    options: [{
      value: 'linear',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Linear', 'advanced-columns-block')
    }, {
      value: 'radial',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Radial', 'advanced-columns-block')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 1', 'advanced-columns-block'),
    value: gradientLocation1,
    onChange: function onChange(value) {
      return setAttributes({
        gradientLocation1: 'undefined' !== typeof value ? value : 0
      });
    },
    min: 0,
    max: 100,
    initialPosition: 0,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Location 2', 'advanced-columns-block'),
    value: gradientLocation2,
    onChange: function onChange(value) {
      return setAttributes({
        gradientLocation2: 'undefined' !== typeof value ? value : 100
      });
    },
    min: 0,
    max: 100,
    initialPosition: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Angle', 'advanced-columns-block'),
    value: gradientAngle,
    onChange: function onChange(value) {
      return setAttributes({
        gradientAngle: 'undefined' !== typeof value ? value : 0
      });
    },
    min: 0,
    max: 360,
    initialPosition: 0,
    allowReset: true
  }));
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/background/image.js":
/*!***********************************************************************!*\
  !*** ./src/columns/components/controls/inspector/background/image.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * 背景画像
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      onSelectImage = _ref.onSelectImage,
      onRemoveImage = _ref.onRemoveImage,
      backgroundImage = _ref.backgroundImage,
      backgroundPosition = _ref.backgroundPosition,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      backgroundImageColor = _ref.backgroundImageColor,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  var selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Image', 'advanced-columns-block'),
      removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null),
      options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

  if (backgroundImage) {
    selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replace Image', 'advanced-columns-block');
    removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "acb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Remove Image', 'advanced-columns-block'));
    options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Position', 'advanced-columns-block'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Left', 'advanced-columns-block')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Center', 'advanced-columns-block')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top Right', 'advanced-columns-block')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Left', 'advanced-columns-block')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Center', 'advanced-columns-block')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center Right', 'advanced-columns-block')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Left', 'advanced-columns-block')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Center', 'advanced-columns-block')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom Right', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Attachment', 'advanced-columns-block'),
      value: backgroundAttachment,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundAttachment: value
        });
      },
      options: [{
        value: 'fixed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Fixed', 'advanced-columns-block')
      }, {
        value: 'scroll',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Scroll', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat', 'advanced-columns-block'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No Repeat', 'advanced-columns-block')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat', 'advanced-columns-block')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat-x', 'advanced-columns-block')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Repeat-y', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size', 'advanced-columns-block'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Auto', 'advanced-columns-block')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Cover', 'advanced-columns-block')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Contain', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "acb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Overlay Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "components-base-control__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundImageColor
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
      value: backgroundImageColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundImageColor: 'undefined' !== typeof colorValue ? colorValue : 50
        });
      },
      allowReset: true
    })));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "editor-bg-image-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Image', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Image', 'advanced-columns-block'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: backgroundImage,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isDefault: true,
        onClick: open
      }, selectBtnTxt);
    }
  }), removeBtn), options);
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/background/index.js":
/*!***********************************************************************!*\
  !*** ./src/columns/components/controls/inspector/background/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color */ "./src/columns/components/controls/inspector/background/color.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/columns/components/controls/inspector/background/image.js");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gradient */ "./src/columns/components/controls/inspector/background/gradient.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video */ "./src/columns/components/controls/inspector/background/video.js");









/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      backgroundType = _ref.backgroundType,
      backgroundColor = _ref.backgroundColor,
      onSelectImage = _ref.onSelectImage,
      onRemoveImage = _ref.onRemoveImage,
      backgroundImage = _ref.backgroundImage,
      backgroundPosition = _ref.backgroundPosition,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      backgroundImageColor = _ref.backgroundImageColor,
      backgroundVideoColor = _ref.backgroundVideoColor,
      gradientColor1 = _ref.gradientColor1,
      gradientLocation1 = _ref.gradientLocation1,
      gradientColor2 = _ref.gradientColor2,
      gradientLocation2 = _ref.gradientLocation2,
      gradientType = _ref.gradientType,
      gradientAngle = _ref.gradientAngle,
      gradientPosition = _ref.gradientPosition,
      onSelectVideo = _ref.onSelectVideo,
      onRemoveVideo = _ref.onRemoveVideo,
      backgroundVideo = _ref.backgroundVideo,
      backgroundOpacity = _ref.backgroundOpacity,
      backgroundVideoOpacity = _ref.backgroundVideoOpacity;
  var options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

  if ('color' === backgroundType || 'image' === backgroundType && backgroundImage || 'gradient' === backgroundType) {
    options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Opacity', 'advanced-columns-block'),
      value: backgroundOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundOpacity: 'undefined' !== typeof value ? value : 100
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 100
    });
  } else if ('video' === backgroundType && backgroundVideo) {
    options = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "acb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Video Overlay Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "components-base-control__label"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundVideoColor
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
      value: backgroundVideoColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundVideoColor: colorValue
        });
      },
      allowReset: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Opacity', 'advanced-columns-block'),
      value: backgroundVideoOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundVideoOpacity: 'undefined' !== typeof value ? value : 50
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 50
    }));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Type', 'advanced-columns-block'),
    value: backgroundType,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundType: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'advanced-columns-block')
    }, {
      value: 'color',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'advanced-columns-block')
    }, {
      value: 'gradient',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Gradient', 'advanced-columns-block')
    }, {
      value: 'image',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image', 'advanced-columns-block')
    }, {
      value: 'video',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Video', 'advanced-columns-block')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_color__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes,
    backgroundColor: backgroundColor,
    isShow: 'color' === backgroundType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    onSelectImage: onSelectImage,
    onRemoveImage: onRemoveImage,
    backgroundImage: backgroundImage,
    backgroundPosition: backgroundPosition,
    backgroundAttachment: backgroundAttachment,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    backgroundImageColor: backgroundImageColor,
    isShow: 'image' === backgroundType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_gradient__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttributes: setAttributes,
    backgroundVideoColor: backgroundVideoColor,
    gradientColor1: gradientColor1,
    gradientLocation1: gradientLocation1,
    gradientColor2: gradientColor2,
    gradientLocation2: gradientLocation2,
    gradientType: gradientType,
    gradientAngle: gradientAngle,
    gradientPosition: gradientPosition,
    isShow: 'gradient' === backgroundType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_video__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSelectVideo: onSelectVideo,
    onRemoveVideo: onRemoveVideo,
    backgroundVideo: backgroundVideo,
    isShow: 'video' === backgroundType
  }), options);
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/background/video.js":
/*!***********************************************************************!*\
  !*** ./src/columns/components/controls/inspector/background/video.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * 背景動画
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var onSelectVideo = _ref.onSelectVideo,
      onRemoveVideo = _ref.onRemoveVideo,
      backgroundVideo = _ref.backgroundVideo,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  var selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Video', 'advanced-columns-block'),
      removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);

  if (backgroundVideo) {
    selectBtnTxt = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replace Video', 'advanced-columns-block');
    removeBtn = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onRemoveVideo,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Remove Video', 'advanced-columns-block'));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    className: "editor-bg-video-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Video', 'advanced-columns-block')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Background Video', 'advanced-columns-block'),
    onSelect: onSelectVideo,
    allowedTypes: ['video'],
    value: backgroundVideo,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isDefault: true,
        onClick: open
      }, selectBtnTxt);
    }
  }), removeBtn);
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/index.js":
/*!************************************************************!*\
  !*** ./src/columns/components/controls/inspector/index.js ***!
  \************************************************************/
/*! exports provided: LayoutPanel, ShapeDividersPanel, BackgroundPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/columns/components/controls/inspector/layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutPanel", function() { return _layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _shape_dividers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape-dividers */ "./src/columns/components/controls/inspector/shape-dividers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeDividersPanel", function() { return _shape_dividers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./src/columns/components/controls/inspector/background/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundPanel", function() { return _background__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/columns/components/controls/inspector/layout.js":
/*!*************************************************************!*\
  !*** ./src/columns/components/controls/inspector/layout.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * レイアウト
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      columns = _ref.columns,
      columnGap = _ref.columnGap;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Columns', 'advanced-columns-block'),
    value: columns,
    min: 0,
    max: 6,
    initialPosition: 2,
    onChange: function onChange(value) {
      return setAttributes({
        columns: value
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Column Gap', 'advanced-columns-block'),
    value: columnGap,
    onChange: function onChange(value) {
      return setAttributes({
        columnGap: value
      });
    },
    options: [{
      value: '10',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Default (10px)', 'advanced-columns-block')
    }, {
      value: '0',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Gap (0px)', 'advanced-columns-block')
    }, {
      value: '5',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Narrow (5px)', 'advanced-columns-block')
    }, {
      value: '15',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Extended (15px)', 'advanced-columns-block')
    }, {
      value: '20',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wide (20px)', 'advanced-columns-block')
    }, {
      value: '30',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Wider (30px)', 'advanced-columns-block')
    }],
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: The individual Column Gap can be managed from Column Settings.', 'advanced-columns-block')
  }));
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/shape-dividers/index.js":
/*!***************************************************************************!*\
  !*** ./src/columns/components/controls/inspector/shape-dividers/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/columns/components/controls/inspector/shape-dividers/options.js");



/**
 * 仕切り
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      topType = _ref.topType,
      topColor = _ref.topColor,
      topDividerOpacity = _ref.topDividerOpacity,
      topWidth = _ref.topWidth,
      topHeightMobile = _ref.topHeightMobile,
      topHeight = _ref.topHeight,
      topFlip = _ref.topFlip,
      topContentAboveShape = _ref.topContentAboveShape,
      bottomType = _ref.bottomType,
      bottomColor = _ref.bottomColor,
      bottomDividerOpacity = _ref.bottomDividerOpacity,
      bottomWidth = _ref.bottomWidth,
      bottomHeightMobile = _ref.bottomHeightMobile,
      bottomHeight = _ref.bottomHeight,
      bottomFlip = _ref.bottomFlip,
      bottomContentAboveShape = _ref.bottomContentAboveShape;
  var params = {
    top: {
      type: {
        key: 'topType',
        val: topType
      },
      color: {
        key: 'topColor',
        val: topColor
      },
      opacity: {
        key: 'topDividerOpacity',
        val: topDividerOpacity
      },
      width: {
        key: 'topWidth',
        val: topWidth
      },
      heightMobile: {
        key: 'topHeightMobile',
        val: topHeightMobile
      },
      height: {
        key: 'topHeight',
        val: topHeight
      },
      flip: {
        key: 'topFlip',
        val: topFlip
      },
      contentAboveShape: {
        key: 'topContentAboveShape',
        val: topContentAboveShape
      }
    },
    bottom: {
      type: {
        key: 'bottomType',
        val: bottomType
      },
      color: {
        key: 'bottomColor',
        val: bottomColor
      },
      opacity: {
        key: 'bottomDividerOpacity',
        val: bottomDividerOpacity
      },
      width: {
        key: 'bottomWidth',
        val: bottomWidth
      },
      heightMobile: {
        key: 'bottomHeightMobile',
        val: bottomHeightMobile
      },
      height: {
        key: 'bottomHeight',
        val: bottomHeight
      },
      flip: {
        key: 'bottomFlip',
        val: bottomFlip
      },
      contentAboveShape: {
        key: 'bottomContentAboveShape',
        val: bottomContentAboveShape
      }
    }
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Shape Dividers', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "acb-inspect-tabs acb-inspect-tabs-col-2",
    activeClass: "active-tab",
    tabs: [{
      name: 'top',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Top', 'advanced-columns-block'),
      className: 'acb-top-tab'
    }, {
      name: 'bottom',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bottom', 'advanced-columns-block'),
      className: 'acb-bottom-tab'
    }]
  }, function (tab) {
    var param = params[tab.name];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'advanced-columns-block'),
      value: param.type.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.type.key, value));
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'advanced-columns-block')
      }, {
        value: 'tilt',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tilt', 'advanced-columns-block')
      }, {
        value: 'mountains',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Mountains', 'advanced-columns-block')
      }, {
        value: 'wave_brush',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Wave Brush', 'advanced-columns-block')
      }, {
        value: 'waves',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Waves', 'advanced-columns-block')
      }, {
        value: 'triangle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Triangle', 'advanced-columns-block')
      }]
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      color: param.color.val,
      colorKey: param.color.key,
      opacity: param.opacity.val,
      opacityKey: param.opacity.key,
      width: param.width.val,
      widthKey: param.width.key,
      heightMobile: param.heightMobile.val,
      heightMobileKey: param.heightMobile.key,
      height: param.height.val,
      heightKey: param.height.key,
      flip: param.flip.val,
      flipKey: param.flip.key,
      contentAboveShape: param.contentAboveShape.val,
      contentAboveShapeKey: param.contentAboveShape.key,
      isShow: 'none' !== param.type.val
    }));
  }));
});

/***/ }),

/***/ "./src/columns/components/controls/inspector/shape-dividers/options.js":
/*!*****************************************************************************!*\
  !*** ./src/columns/components/controls/inspector/shape-dividers/options.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      color = _ref.color,
      colorKey = _ref.colorKey,
      opacity = _ref.opacity,
      opacityKey = _ref.opacityKey,
      isShow = _ref.isShow,
      width = _ref.width,
      widthKey = _ref.widthKey,
      heightMobile = _ref.heightMobile,
      heightMobileKey = _ref.heightMobileKey,
      height = _ref.height,
      heightKey = _ref.heightKey,
      flip = _ref.flip,
      flipKey = _ref.flipKey,
      contentAboveShape = _ref.contentAboveShape,
      contentAboveShapeKey = _ref.contentAboveShapeKey;

  if (!isShow) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: color
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    value: color,
    onChange: function onChange(colorValue) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, colorKey, colorValue));
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Opacity', 'advanced-columns-block'),
    value: opacity,
    onChange: function onChange(value) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, opacityKey, 'undefined' !== typeof value ? value : 100));
    },
    min: 0,
    max: 100,
    initialPosition: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'advanced-columns-block'),
    value: width,
    onChange: function onChange(value) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, widthKey, 'undefined' !== typeof value ? value : 100));
    },
    min: 100,
    max: 300,
    initialPosition: 100,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "acb-size-type-field-tabs acb-without-size-type",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'acb-desktop-tab acb-responsive-tabs'
    }, {
      name: 'mobile',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'acb-mobile-tab acb-responsive-tabs'
    }]
  }, function (tab) {
    var key = 'mobile' === tab.name ? heightMobileKey : heightKey,
        val = 'mobile' === tab.name ? heightMobile : height;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Height', 'advanced-columns-block'),
      value: val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, 'undefined' !== typeof value ? value : 50));
      },
      min: 0,
      max: 500,
      initialPosition: 50,
      allowReset: true
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Flip', 'advanced-columns-block'),
    checked: flip,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, flipKey, !flip));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bring To Front', 'advanced-columns-block'),
    checked: contentAboveShape,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, contentAboveShapeKey, !contentAboveShape));
    }
  }));
});

/***/ }),

/***/ "./src/columns/edit.js":
/*!*****************************!*\
  !*** ./src/columns/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/times */ "./node_modules/lodash/times.js");
/* harmony import */ var lodash_times__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_times__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styling */ "./src/columns/styling.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shapes */ "./src/columns/shapes.js");
/* harmony import */ var _common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/components/controls/inspector */ "./src/common/components/controls/inspector/index.js");
/* harmony import */ var _components_controls_block__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/controls/block */ "./src/columns/components/controls/block/index.js");
/* harmony import */ var _components_controls_inspector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/controls/inspector */ "./src/columns/components/controls/inspector/index.js");


















var ALLOWED_BLOCKS = ['advanced-columns-block/column'],
    getColumnsTemplate = memize__WEBPACK_IMPORTED_MODULE_10___default()(function (columns) {
  return lodash_times__WEBPACK_IMPORTED_MODULE_11___default()(columns, function (n) {
    return ['advanced-columns-block/column', {
      id: n + 1
    }];
  });
});

var ACBColumns =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ACBColumns, _Component);

  function ACBColumns() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ACBColumns);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ACBColumns).apply(this, arguments));
    _this.onRemoveVideo = _this.onRemoveVideo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onRemoveImage = _this.onRemoveImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSelectImage = _this.onSelectImage.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSelectVideo = _this.onSelectVideo.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ACBColumns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 属性に block_id を割り当てる。
      this.props.setAttributes({
        block_id: this.props.clientId
      }); // このブロック用のCSSをStyleタグとして出力。

      var $style = document.createElement('style');
      $style.setAttribute('id', "acb-columns-style-".concat(this.props.clientId));
      document.head.appendChild($style);
    }
  }, {
    key: "onRemoveImage",

    /*
     * 画像削除イベント
     */
    value: function onRemoveImage() {
      this.props.setAttributes({
        backgroundImage: null
      });
    }
    /*
     * 画像選択イベント
     */

  }, {
    key: "onSelectImage",
    value: function onSelectImage(media) {
      var setAttributes = this.props.setAttributes;

      if (!media || !media.url) {
        setAttributes({
          backgroundImage: null
        });
        return;
      }

      if (!media.type || 'image' !== media.type) {
        return;
      }

      setAttributes({
        backgroundImage: media
      });
    }
    /*
     * 動画削除イベント
     */

  }, {
    key: "onRemoveVideo",
    value: function onRemoveVideo() {
      this.props.setAttributes({
        backgroundVideo: null
      });
    }
    /*
     * 動画選択イベント
     */

  }, {
    key: "onSelectVideo",
    value: function onSelectVideo(media) {
      var setAttributes = this.props.setAttributes;

      if (!media || !media.url) {
        setAttributes({
          backgroundVideo: null
        });
        return;
      }

      if (!media.type || 'video' !== media.type) {
        return;
      }

      setAttributes({
        backgroundVideo: media
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          stack = attributes.stack,
          align = attributes.align,
          vAlign = attributes.vAlign,
          columnGap = attributes.columnGap,
          topMargin = attributes.topMargin,
          bottomMargin = attributes.bottomMargin,
          topMarginMobile = attributes.topMarginMobile,
          bottomMarginMobile = attributes.bottomMarginMobile,
          topPadding = attributes.topPadding,
          bottomPadding = attributes.bottomPadding,
          leftPadding = attributes.leftPadding,
          rightPadding = attributes.rightPadding,
          topPaddingMobile = attributes.topPaddingMobile,
          bottomPaddingMobile = attributes.bottomPaddingMobile,
          leftPaddingMobile = attributes.leftPaddingMobile,
          rightPaddingMobile = attributes.rightPaddingMobile,
          backgroundType = attributes.backgroundType,
          backgroundImage = attributes.backgroundImage,
          backgroundVideo = attributes.backgroundVideo,
          backgroundColor = attributes.backgroundColor,
          backgroundPosition = attributes.backgroundPosition,
          backgroundAttachment = attributes.backgroundAttachment,
          backgroundRepeat = attributes.backgroundRepeat,
          backgroundSize = attributes.backgroundSize,
          gradientColor1 = attributes.gradientColor1,
          gradientColor2 = attributes.gradientColor2,
          gradientLocation1 = attributes.gradientLocation1,
          gradientLocation2 = attributes.gradientLocation2,
          gradientType = attributes.gradientType,
          gradientAngle = attributes.gradientAngle,
          gradientPosition = attributes.gradientPosition,
          backgroundOpacity = attributes.backgroundOpacity,
          backgroundVideoColor = attributes.backgroundVideoColor,
          backgroundVideoOpacity = attributes.backgroundVideoOpacity,
          backgroundImageColor = attributes.backgroundImageColor,
          borderStyle = attributes.borderStyle,
          borderWidth = attributes.borderWidth,
          borderRadius = attributes.borderRadius,
          borderColor = attributes.borderColor,
          columns = attributes.columns,
          bottomType = attributes.bottomType,
          bottomColor = attributes.bottomColor,
          bottomHeight = attributes.bottomHeight,
          bottomHeightMobile = attributes.bottomHeightMobile,
          bottomWidth = attributes.bottomWidth,
          topType = attributes.topType,
          topColor = attributes.topColor,
          topHeight = attributes.topHeight,
          topHeightMobile = attributes.topHeightMobile,
          topWidth = attributes.topWidth,
          bottomFlip = attributes.bottomFlip,
          topFlip = attributes.topFlip,
          reverseMobile = attributes.reverseMobile,
          topDividerOpacity = attributes.topDividerOpacity,
          bottomDividerOpacity = attributes.bottomDividerOpacity,
          topContentAboveShape = attributes.topContentAboveShape,
          bottomContentAboveShape = attributes.bottomContentAboveShape,
          mobileMarginType = attributes.mobileMarginType,
          desktopMarginType = attributes.desktopMarginType,
          mobilePaddingType = attributes.mobilePaddingType,
          desktopPaddingType = attributes.desktopPaddingType,
          element = document.getElementById("acb-columns-style-".concat(this.props.clientId)),
          active = isSelected ? 'active' : 'not-active';

      if (null !== element && 'undefined' !== typeof element) {
        element.innerHTML = Object(_styling__WEBPACK_IMPORTED_MODULE_12__["default"])(this.props);
      }

      var reverse_mobile = reverseMobile ? 'acb-columns__reverse-mobile' : '';
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
        value: align,
        onChange: function onChange(value) {
          return setAttributes({
            align: value
          });
        },
        controls: ['wide', 'full']
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_block__WEBPACK_IMPORTED_MODULE_15__["VerticalTop"], {
        setAttributes: setAttributes,
        vAlign: vAlign
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_block__WEBPACK_IMPORTED_MODULE_15__["VerticalMiddle"], {
        setAttributes: setAttributes,
        vAlign: vAlign
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_block__WEBPACK_IMPORTED_MODULE_15__["VerticalBottom"], {
        setAttributes: setAttributes,
        vAlign: vAlign
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_inspector__WEBPACK_IMPORTED_MODULE_16__["LayoutPanel"], {
        setAttributes: setAttributes,
        columns: columns,
        columnGap: columnGap
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__["SpacingPanel"], {
        setAttributes: setAttributes,
        mobilePaddingType: mobilePaddingType,
        topPaddingMobile: topPaddingMobile,
        bottomPaddingMobile: bottomPaddingMobile,
        leftPaddingMobile: leftPaddingMobile,
        rightPaddingMobile: rightPaddingMobile,
        desktopPaddingType: desktopPaddingType,
        topPadding: topPadding,
        bottomPadding: bottomPadding,
        leftPadding: leftPadding,
        rightPadding: rightPadding,
        mobileMarginType: mobileMarginType,
        topMarginMobile: topMarginMobile,
        bottomMarginMobile: bottomMarginMobile,
        desktopMarginType: desktopMarginType,
        topMargin: topMargin,
        bottomMargin: bottomMargin
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_inspector__WEBPACK_IMPORTED_MODULE_16__["BackgroundPanel"], {
        setAttributes: setAttributes,
        backgroundType: backgroundType,
        backgroundColor: backgroundColor,
        onSelectImage: this.onSelectImage,
        onRemoveImage: this.onRemoveImage,
        backgroundImage: backgroundImage,
        backgroundPosition: backgroundPosition,
        backgroundAttachment: backgroundAttachment,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        backgroundImageColor: backgroundImageColor,
        backgroundVideoColor: backgroundVideoColor,
        gradientColor1: gradientColor1,
        gradientLocation1: gradientLocation1,
        gradientColor2: gradientColor2,
        gradientLocation2: gradientLocation2,
        gradientType: gradientType,
        gradientAngle: gradientAngle,
        gradientPosition: gradientPosition,
        onSelectVideo: this.onSelectVideo,
        onRemoveVideo: this.onRemoveVideo,
        backgroundVideo: backgroundVideo,
        backgroundOpacity: backgroundOpacity,
        backgroundVideoOpacity: backgroundVideoOpacity
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_controls_inspector__WEBPACK_IMPORTED_MODULE_16__["ShapeDividersPanel"], {
        setAttributes: setAttributes,
        topType: topType,
        topColor: topColor,
        topDividerOpacity: topDividerOpacity,
        topWidth: topWidth,
        topHeightMobile: topHeightMobile,
        topHeight: topHeight,
        topFlip: topFlip,
        topContentAboveShape: topContentAboveShape,
        bottomType: bottomType,
        bottomColor: bottomColor,
        bottomDividerOpacity: bottomDividerOpacity,
        bottomWidth: bottomWidth,
        bottomHeightMobile: bottomHeightMobile,
        bottomHeight: bottomHeight,
        bottomFlip: bottomFlip,
        bottomContentAboveShape: bottomContentAboveShape
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_common_components_controls_inspector__WEBPACK_IMPORTED_MODULE_14__["BorderPanel"], {
        setAttributes: setAttributes,
        borderStyle: borderStyle,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        borderColor: borderColor
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, 'acb-columns__wrap', "acb-columns__background-".concat(backgroundType), "acb-columns__edit-".concat(active), "acb-columns__stack-".concat(stack), "acb-columns__valign-".concat(vAlign), "acb-columns__gap-".concat(columnGap), "align".concat(align), reverse_mobile),
        id: "acb-columns-".concat(this.props.clientId)
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "acb-columns__overlay"
      }), 'none' !== topType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('acb-columns__shape', 'acb-columns__shape-top', {
          'acb-columns__shape-flip': !!topFlip
        }, {
          'acb-columns__shape-above-content': !!topContentAboveShape
        })
      }, _shapes__WEBPACK_IMPORTED_MODULE_13__["default"][topType]), 'video' === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "acb-columns__video-wrap"
      }, backgroundVideo && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("video", {
        loop: true,
        muted: true,
        playsInline: true,
        autoPlay: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("source", {
        src: backgroundVideo.url,
        type: "video/mp4"
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('acb-columns__inner-wrap', "acb-columns__columns-".concat(columns))
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"], {
        template: getColumnsTemplate(columns),
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS
      })), 'none' !== bottomType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('acb-columns__shape', 'acb-columns__shape-bottom', {
          'acb-columns__shape-flip': !!bottomFlip
        }, {
          'acb-columns__shape-above-content': !!bottomContentAboveShape
        }),
        "data-negative": "false"
      }, _shapes__WEBPACK_IMPORTED_MODULE_13__["default"][bottomType])));
    }
  }]);

  return ACBColumns;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["withNotices"])(ACBColumns));

/***/ }),

/***/ "./src/columns/index.js":
/*!******************************!*\
  !*** ./src/columns/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./src/columns/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/columns/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/columns/save.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('advanced-columns-block/columns', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Advanced Columns', 'advanced-columns-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This block gives you advanced options to insert a number of columns within a single row.', 'advanced-columns-block'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].columns,
  category: 'advanced-columns-block',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('columns', 'advanced-columns-block'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('rows', 'advanced-columns-block'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('uag', 'advanced-columns-block')],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    return {
      'data-align': attributes.align,
      'data-valign': attributes.vAlign
    };
  },
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/columns/inline-styles.js":
/*!**************************************!*\
  !*** ./src/columns/inline-styles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generate_css_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generate-css-unit */ "./src/generate-css-unit.js");
/**
 * Returns Dynamic Generated CSS
 */

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      leftPadding = _props$attributes.leftPadding,
      rightPadding = _props$attributes.rightPadding,
      topPadding = _props$attributes.topPadding,
      bottomPadding = _props$attributes.bottomPadding,
      topMargin = _props$attributes.topMargin,
      bottomMargin = _props$attributes.bottomMargin,
      backgroundPosition = _props$attributes.backgroundPosition,
      backgroundSize = _props$attributes.backgroundSize,
      backgroundAttachment = _props$attributes.backgroundAttachment,
      backgroundImage = _props$attributes.backgroundImage,
      backgroundRepeat = _props$attributes.backgroundRepeat,
      backgroundType = _props$attributes.backgroundType,
      borderStyle = _props$attributes.borderStyle,
      borderWidth = _props$attributes.borderWidth,
      borderRadius = _props$attributes.borderRadius,
      borderColor = _props$attributes.borderColor,
      desktopMarginType = _props$attributes.desktopMarginType,
      desktopPaddingType = _props$attributes.desktopPaddingType;
  var style = {
    'padding-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(topPadding, desktopPaddingType),
    'padding-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomPadding, desktopPaddingType),
    'padding-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(leftPadding, desktopPaddingType),
    'padding-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(rightPadding, desktopPaddingType),
    'margin-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(topMargin, desktopMarginType),
    'margin-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(bottomMargin, desktopMarginType),
    'border-radius': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(borderRadius, desktopMarginType)
  };

  if ('none' !== borderStyle) {
    style['border-style'] = borderStyle;
    style['border-width'] = Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_0__["default"])(borderWidth, 'px');
    style['border-color'] = borderColor;
  }

  if ('image' === backgroundType) {
    style['background-image'] = backgroundImage ? "url(".concat(backgroundImage.url, ")") : null;
    style['background-position'] = backgroundPosition.replace('-', ' ');
    style['background-attachment'] = backgroundAttachment;
    style['background-repeat'] = backgroundRepeat;
    style['background-size'] = backgroundSize;
  }

  return style;
});

/***/ }),

/***/ "./src/columns/save.js":
/*!*****************************!*\
  !*** ./src/columns/save.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes */ "./src/columns/shapes.js");
/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styling */ "./src/columns/styling.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attributes = props.attributes,
      className = props.className,
      block_id = attributes.block_id,
      backgroundType = attributes.backgroundType,
      backgroundVideo = attributes.backgroundVideo,
      align = attributes.align,
      columns = attributes.columns,
      stack = attributes.stack,
      vAlign = attributes.vAlign,
      columnGap = attributes.columnGap,
      topType = attributes.topType,
      bottomType = attributes.bottomType,
      bottomFlip = attributes.bottomFlip,
      topFlip = attributes.topFlip,
      reverseMobile = attributes.reverseMobile,
      topContentAboveShape = attributes.topContentAboveShape,
      bottomContentAboveShape = attributes.bottomContentAboveShape;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", null, Object(_styling__WEBPACK_IMPORTED_MODULE_5__["default"])(_objectSpread({}, props, {
    clientId: block_id
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'acb-columns__wrap', "acb-columns__background-".concat(backgroundType), "acb-columns__stack-".concat(stack), "acb-columns__valign-".concat(vAlign), "acb-columns__gap-".concat(columnGap), "align".concat(align), reverseMobile ? 'acb-columns__reverse-mobile' : ''),
    id: "acb-columns-".concat(block_id)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "acb-columns__overlay"
  }), 'none' !== topType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('acb-columns__shape', 'acb-columns__shape-top', {
      'acb-columns__shape-flip': !!topFlip
    }, {
      'acb-columns__shape-above-content': !!topContentAboveShape
    })
  }, _shapes__WEBPACK_IMPORTED_MODULE_4__["default"][topType]), 'video' === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "acb-columns__video-wrap"
  }, backgroundVideo && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsinline: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("source", {
    src: backgroundVideo.url,
    type: "video/mp4"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('acb-columns__inner-wrap', "acb-columns__columns-".concat(columns))
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)), 'none' !== bottomType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('acb-columns__shape', 'acb-columns__shape-bottom', {
      'acb-columns__shape-flip': !!bottomFlip
    }, {
      'acb-columns__shape-above-content': !!bottomContentAboveShape
    }),
    "data-negative": "false"
  }, _shapes__WEBPACK_IMPORTED_MODULE_4__["default"][bottomType])));
});

/***/ }),

/***/ "./src/columns/shapes.js":
/*!*******************************!*\
  !*** ./src/columns/shapes.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  triangle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 100",
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
  })),
  wave_brush: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 283.5 27.8",
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7\ts-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7\tc-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3\tc-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6\tc0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7\tC239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5\tc0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1\tc-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7\tc0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6\tC8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8\tc0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2\tC74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3\tC97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1\tz M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1\tc-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3\tC267.7,18.8,269.7,18,269.6,18z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2\tS227.6,9.9,227.4,9.8z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4\tC206.4,12.9,204.6,13.5,204.5,13.4z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6\tS201,10.7,201,10.6z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3\tC152.6,27.5,154.6,26.8,154.5,26.7z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6\tc-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0\tC76.9,11.5,75.3,12.5,75.5,12.6z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4\tC19.9,13.7,15.7,13.3,15.6,13.2z"
  })),
  tilt: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 100",
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M0,6V0h1000v100L0,6z"
  })),
  mountains: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 100",
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    opacity: "0.33",
    d: "M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    opacity: "0.66",
    d: "M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
  })),
  waves: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 100",
    preserveAspectRatio: "none"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    className: "acb-columns__shape-fill",
    d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
  }))
});

/***/ }),

/***/ "./src/columns/styling.js":
/*!********************************!*\
  !*** ./src/columns/styling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline-styles */ "./src/columns/inline-styles.js");
/* harmony import */ var _generate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generate-css */ "./src/generate-css.js");
/* harmony import */ var _generate_css_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generate-css-unit */ "./src/generate-css-unit.js");
/**
 * Returns Dynamic Generated CSS
 */



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$attributes = props.attributes,
      backgroundType = _props$attributes.backgroundType,
      backgroundVideoColor = _props$attributes.backgroundVideoColor,
      backgroundImageColor = _props$attributes.backgroundImageColor,
      backgroundOpacity = _props$attributes.backgroundOpacity,
      backgroundColor = _props$attributes.backgroundColor,
      backgroundVideoOpacity = _props$attributes.backgroundVideoOpacity,
      borderRadius = _props$attributes.borderRadius,
      contentWidth = _props$attributes.contentWidth,
      width = _props$attributes.width,
      widthType = _props$attributes.widthType,
      columnGap = _props$attributes.columnGap,
      topColor = _props$attributes.topColor,
      topHeight = _props$attributes.topHeight,
      topHeightMobile = _props$attributes.topHeightMobile,
      topWidth = _props$attributes.topWidth,
      bottomColor = _props$attributes.bottomColor,
      bottomHeight = _props$attributes.bottomHeight,
      bottomHeightMobile = _props$attributes.bottomHeightMobile,
      bottomWidth = _props$attributes.bottomWidth,
      gradientColor1 = _props$attributes.gradientColor1,
      gradientColor2 = _props$attributes.gradientColor2,
      gradientLocation1 = _props$attributes.gradientLocation1,
      gradientLocation2 = _props$attributes.gradientLocation2,
      gradientType = _props$attributes.gradientType,
      gradientAngle = _props$attributes.gradientAngle,
      gradientPosition = _props$attributes.gradientPosition,
      topPaddingMobile = _props$attributes.topPaddingMobile,
      bottomPaddingMobile = _props$attributes.bottomPaddingMobile,
      leftPaddingMobile = _props$attributes.leftPaddingMobile,
      rightPaddingMobile = _props$attributes.rightPaddingMobile,
      topMarginMobile = _props$attributes.topMarginMobile,
      bottomMarginMobile = _props$attributes.bottomMarginMobile,
      topDividerOpacity = _props$attributes.topDividerOpacity,
      bottomDividerOpacity = _props$attributes.bottomDividerOpacity,
      mobileMarginType = _props$attributes.mobileMarginType,
      mobilePaddingType = _props$attributes.mobilePaddingType;
  var max_width = '100%';

  if ('custom' === contentWidth && '' !== width) {
    max_width = Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(width, widthType);
  }

  var selectors = {
    '.acb-columns__wrap': Object(_inline_styles__WEBPACK_IMPORTED_MODULE_0__["default"])(props),
    ' .acb-columns__video-wrap': {
      opacity: 'undefined' !== typeof backgroundVideoOpacity ? (100 - backgroundVideoOpacity) / 100 : 0.5
    },
    ' > .acb-columns__inner-wrap': {
      'max-width': max_width
    },
    ' .acb-column__inner-wrap': {
      padding: Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(columnGap, 'px')
    },
    ' .acb-columns__shape-top svg': {
      width: "calc( ".concat(topWidth, "% + 1.3px )"),
      height: Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(topHeight, 'px')
    },
    ' .acb-columns__shape-top .acb-columns__shape-fill': {
      fill: topColor,
      opacity: 'undefined' !== typeof topDividerOpacity ? topDividerOpacity / 100 : ''
    },
    ' .acb-columns__shape-bottom svg': {
      width: "calc( ".concat(bottomWidth, "% + 1.3px )"),
      height: Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(bottomHeight, 'px')
    },
    ' .acb-columns__shape-bottom .acb-columns__shape-fill': {
      fill: bottomColor,
      opacity: 'undefined' !== typeof bottomDividerOpacity ? bottomDividerOpacity / 100 : ''
    }
  };
  selectors[' > .acb-columns__overlay'] = {};

  switch (backgroundType) {
    case 'video':
      selectors[' > .acb-columns__overlay'] = {
        opacity: 1,
        'background-color': backgroundVideoColor
      };
      break;

    case 'image':
      selectors[' > .acb-columns__overlay'] = {
        opacity: 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '',
        'background-color': backgroundImageColor
      };
      break;

    case 'color':
      selectors[' > .acb-columns__overlay'] = {
        opacity: 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '',
        'background-color': backgroundColor
      };
      break;

    case 'gradient':
      selectors[' > .acb-columns__overlay']['background-color'] = 'transparent';
      selectors[' > .acb-columns__overlay']['opacity'] = 'undefined' !== typeof backgroundOpacity ? backgroundOpacity / 100 : '';

      if ('linear' === gradientType) {
        selectors[' > .acb-columns__overlay']['background-image'] = "linear-gradient(".concat(gradientAngle, "deg, ").concat(gradientColor1, " ").concat(gradientLocation1, "%, ").concat(gradientColor2, " ").concat(gradientLocation2, "%)");
      } else {
        selectors[' > .acb-columns__overlay']['background-image'] = "radial-gradient( at ".concat(gradientPosition, ", ").concat(gradientColor1, " ").concat(gradientLocation1, "%, ").concat(gradientColor2, " ").concat(gradientLocation2, "%)");
      }

      break;

    default:
      break;
  }

  selectors[' > .acb-columns__overlay']['border-radius'] = Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(borderRadius, 'px');
  var mobile_selectors = {
    '.acb-columns__wrap': {
      'padding-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(topPaddingMobile, mobilePaddingType),
      'padding-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(bottomPaddingMobile, mobilePaddingType),
      'padding-left': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(leftPaddingMobile, mobilePaddingType),
      'padding-right': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(rightPaddingMobile, mobilePaddingType),
      'margin-top': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(topMarginMobile, mobileMarginType),
      'margin-bottom': Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(bottomMarginMobile, mobileMarginType)
    },
    ' .acb-columns__shape-top svg': {
      height: Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(topHeightMobile, 'px')
    },
    ' .acb-columns__shape-bottom svg': {
      height: Object(_generate_css_unit__WEBPACK_IMPORTED_MODULE_2__["default"])(bottomHeightMobile, 'px')
    }
  };
  return Object(_generate_css__WEBPACK_IMPORTED_MODULE_1__["default"])(selectors, "#acb-columns-".concat(props.clientId)) + Object(_generate_css__WEBPACK_IMPORTED_MODULE_1__["default"])(mobile_selectors, "#acb-columns-".concat(props.clientId), true, 'mobile');
});

/***/ }),

/***/ "./src/common/components/controls/inspector/border/index.js":
/*!******************************************************************!*\
  !*** ./src/common/components/controls/inspector/border/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/common/components/controls/inspector/border/options.js");


/**
 * 枠線
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      borderStyle = _ref.borderStyle,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'advanced-columns-block'),
    value: borderStyle,
    onChange: function onChange(value) {
      return setAttributes({
        borderStyle: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'advanced-columns-block')
    }, {
      value: 'solid',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'advanced-columns-block')
    }, {
      value: 'dotted',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'advanced-columns-block')
    }, {
      value: 'dashed',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'advanced-columns-block')
    }, {
      value: 'double',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'advanced-columns-block')
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'advanced-columns-block')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'advanced-columns-block')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'advanced-columns-block')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'advanced-columns-block')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setAttributes: setAttributes,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    borderColor: borderColor,
    isShow: 'none' !== borderStyle
  }));
});

/***/ }),

/***/ "./src/common/components/controls/inspector/border/options.js":
/*!********************************************************************!*\
  !*** ./src/common/components/controls/inspector/border/options.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      borderWidth = _ref.borderWidth,
      borderRadius = _ref.borderRadius,
      borderColor = _ref.borderColor,
      isShow = _ref.isShow;

  if (!isShow) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Width', 'advanced-columns-block'),
    value: borderWidth,
    onChange: function onChange(value) {
      return setAttributes({
        borderWidth: 'undefined' !== typeof value ? value : 1
      });
    },
    min: 0,
    max: 50,
    initialPosition: 1,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Radius', 'advanced-columns-block'),
    value: borderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        borderRadius: 'undefined' !== typeof value ? value : 0
      });
    },
    min: 0,
    max: 1000,
    initialPosition: 0,
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "acb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'advanced-columns-block'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "components-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: borderColor
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
    value: borderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        borderColor: colorValue
      });
    },
    allowReset: true
  }));
});

/***/ }),

/***/ "./src/common/components/controls/inspector/index.js":
/*!***********************************************************!*\
  !*** ./src/common/components/controls/inspector/index.js ***!
  \***********************************************************/
/*! exports provided: SpacingPanel, BorderPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spacing */ "./src/common/components/controls/inspector/spacing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpacingPanel", function() { return _spacing__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border */ "./src/common/components/controls/inspector/border/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BorderPanel", function() { return _border__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/common/components/controls/inspector/spacing/index.js":
/*!*******************************************************************!*\
  !*** ./src/common/components/controls/inspector/spacing/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padding */ "./src/common/components/controls/inspector/spacing/padding.js");
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margin */ "./src/common/components/controls/inspector/spacing/margin.js");


/**
 * 余白
 */




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      mobilePaddingType = _ref.mobilePaddingType,
      topPaddingMobile = _ref.topPaddingMobile,
      bottomPaddingMobile = _ref.bottomPaddingMobile,
      leftPaddingMobile = _ref.leftPaddingMobile,
      rightPaddingMobile = _ref.rightPaddingMobile,
      desktopPaddingType = _ref.desktopPaddingType,
      topPadding = _ref.topPadding,
      bottomPadding = _ref.bottomPadding,
      leftPadding = _ref.leftPadding,
      rightPadding = _ref.rightPadding,
      mobileMarginType = _ref.mobileMarginType,
      topMarginMobile = _ref.topMarginMobile,
      bottomMarginMobile = _ref.bottomMarginMobile,
      leftMarginMobile = _ref.leftMarginMobile,
      rightMarginMobile = _ref.rightMarginMobile,
      desktopMarginType = _ref.desktopMarginType,
      topMargin = _ref.topMargin,
      bottomMargin = _ref.bottomMargin,
      leftMargin = _ref.leftMargin,
      rightMargin = _ref.rightMargin;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing', 'advanced-columns-block'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_padding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setAttributes: setAttributes,
    mobilePaddingType: mobilePaddingType,
    topPaddingMobile: topPaddingMobile,
    bottomPaddingMobile: bottomPaddingMobile,
    leftPaddingMobile: leftPaddingMobile,
    rightPaddingMobile: rightPaddingMobile,
    desktopPaddingType: desktopPaddingType,
    topPadding: topPadding,
    bottomPadding: bottomPadding,
    leftPadding: leftPadding,
    rightPadding: rightPadding
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "acb-editor__separator"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_margin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes,
    mobileMarginType: mobileMarginType,
    topMarginMobile: topMarginMobile,
    bottomMarginMobile: bottomMarginMobile,
    leftMarginMobile: leftMarginMobile,
    rightMarginMobile: rightMarginMobile,
    desktopMarginType: desktopMarginType,
    topMargin: topMargin,
    bottomMargin: bottomMargin,
    leftMargin: leftMargin,
    rightMargin: rightMargin
  }));
});

/***/ }),

/***/ "./src/common/components/controls/inspector/spacing/margin.js":
/*!********************************************************************!*\
  !*** ./src/common/components/controls/inspector/spacing/margin.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../icons */ "./src/icons.js");



/**
 * 外側余白
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      mobileMarginType = _ref.mobileMarginType,
      topMarginMobile = _ref.topMarginMobile,
      bottomMarginMobile = _ref.bottomMarginMobile,
      leftMarginMobile = _ref.leftMarginMobile,
      rightMarginMobile = _ref.rightMarginMobile,
      desktopMarginType = _ref.desktopMarginType,
      topMargin = _ref.topMargin,
      bottomMargin = _ref.bottomMargin,
      leftMargin = _ref.leftMargin,
      rightMargin = _ref.rightMargin;

  var params = {
    mobile: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Margin Mobile', 'advanced-columns-block'),
      type: {
        key: 'mobileMarginType',
        val: mobileMarginType
      },
      top: {
        key: 'topMarginMobile',
        val: topMarginMobile
      },
      bottom: {
        key: 'bottomMarginMobile',
        val: bottomMarginMobile
      },
      left: {
        key: 'leftMarginMobile',
        val: leftMarginMobile
      },
      right: {
        key: 'rightMarginMobile',
        val: rightMarginMobile
      }
    },
    desktop: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Margin', 'advanced-columns-block'),
      type: {
        key: 'desktopMarginType',
        val: desktopMarginType
      },
      top: {
        key: 'topMargin',
        val: topMargin
      },
      bottom: {
        key: 'bottomMargin',
        val: bottomMargin
      },
      left: {
        key: 'leftMargin',
        val: leftMargin
      },
      right: {
        key: 'rightMargin',
        val: rightMargin
      }
    }
  },
      max = function max(type) {
    return '%' === type ? 100 : 2000;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "acb-size-type-field-tabs acb-size-type-field__common-tabs acb-inline-margin",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'acb-desktop-tab acb-responsive-tabs'
    }, {
      name: 'mobile',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'acb-mobile-tab acb-responsive-tabs'
    }]
  }, function (tab) {
    var param = params[tab.name];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      className: "acb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'advanced-cloumns-block')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "px",
      className: "acb-size-btn",
      isSmall: true,
      isPrimary: 'px' === param.type.val,
      "aria-pressed": 'px' === param.type.val,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.type.key, 'px'));
      }
    }, "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "%",
      className: "acb-size-btn",
      isSmall: true,
      isPrimary: '%' === param.type.val,
      "aria-pressed": '%' === param.type.val,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.type.key, '%'));
      }
    }, "%")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, param.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].top_margin,
      className: "acb-margin-control",
      value: param.top.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.top.key, 'undefined' !== typeof value ? value : 0));
      },
      min: -max(param.type.val),
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].bottom_margin,
      className: "acb-margin-control",
      value: param.bottom.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.bottom.key, 'undefined' !== typeof value ? value : 0));
      },
      min: -max(param.type.val),
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), 'undefined' !== typeof param.left.val && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].left_margin,
      className: "acb-margin-control",
      value: param.left.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.left.key, 'undefined' !== typeof value ? value : 0));
      },
      min: -max(param.type.val),
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), 'undefined' !== typeof param.right.val && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].right_margin,
      className: "acb-margin-control",
      value: param.right.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.right.key, 'undefined' !== typeof value ? value : 0));
      },
      min: -max(param.type.val),
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }));
  });
});

/***/ }),

/***/ "./src/common/components/controls/inspector/spacing/padding.js":
/*!*********************************************************************!*\
  !*** ./src/common/components/controls/inspector/spacing/padding.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../icons */ "./src/icons.js");



/**
 * 内側余白
 */



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var setAttributes = _ref.setAttributes,
      mobilePaddingType = _ref.mobilePaddingType,
      topPaddingMobile = _ref.topPaddingMobile,
      bottomPaddingMobile = _ref.bottomPaddingMobile,
      leftPaddingMobile = _ref.leftPaddingMobile,
      rightPaddingMobile = _ref.rightPaddingMobile,
      desktopPaddingType = _ref.desktopPaddingType,
      topPadding = _ref.topPadding,
      bottomPadding = _ref.bottomPadding,
      leftPadding = _ref.leftPadding,
      rightPadding = _ref.rightPadding;

  var params = {
    mobile: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Padding Mobile', 'advanced-columns-block'),
      type: {
        key: 'mobilePaddingType',
        val: mobilePaddingType
      },
      top: {
        key: 'topPaddingMobile',
        val: topPaddingMobile
      },
      bottom: {
        key: 'bottomPaddingMobile',
        val: bottomPaddingMobile
      },
      left: {
        key: 'leftPaddingMobile',
        val: leftPaddingMobile
      },
      right: {
        key: 'rightPaddingMobile',
        val: rightPaddingMobile
      }
    },
    desktop: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Padding', 'advanced-columns-block'),
      type: {
        key: 'desktopPaddingType',
        val: desktopPaddingType
      },
      top: {
        key: 'topPadding',
        val: topPadding
      },
      bottom: {
        key: 'bottomPadding',
        val: bottomPadding
      },
      left: {
        key: 'leftPadding',
        val: leftPadding
      },
      right: {
        key: 'rightPadding',
        val: rightPadding
      }
    }
  },
      max = function max(type) {
    return '%' === type ? 100 : 2000;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "acb-size-type-field-tabs acb-size-type-field__common-tabs acb-inline-margin",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'acb-desktop-tab acb-responsive-tabs'
    }, {
      name: 'mobile',
      title: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'acb-mobile-tab acb-responsive-tabs'
    }]
  }, function (tab) {
    var param = params[tab.name];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
      className: "acb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'advanced-columns-block')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "px",
      className: "acb-size-btn",
      isSmall: true,
      isPrimary: 'px' === param.type.val,
      "aria-pressed": 'px' === param.type.val,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.type.key, 'px'));
      }
    }, "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: "%",
      className: "acb-size-btn",
      isSmall: true,
      isPrimary: '%' === param.type.val,
      "aria-pressed": '%' === param.type.val,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.type.key, '%'));
      }
    }, "%")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h2", null, param.title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].top_margin,
      className: 'acb-margin-control',
      value: param.top.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.top.key, 'undefined' !== typeof value ? value : 0));
      },
      min: 0,
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].bottom_margin,
      className: 'acb-margin-control',
      value: param.bottom.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.bottom.key, 'undefined' !== typeof value ? value : 0));
      },
      min: 0,
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].left_margin,
      className: 'acb-margin-control',
      value: param.left.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.left.key, 'undefined' !== typeof value ? value : 0));
      },
      min: 0,
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].right_margin,
      className: 'acb-margin-control',
      value: param.right.val,
      onChange: function onChange(value) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, param.right.key, 'undefined' !== typeof value ? value : 0));
      },
      min: 0,
      max: max(param.type.val),
      initialPosition: 0,
      allowReset: true
    }));
  });
});

/***/ }),

/***/ "./src/generate-css-unit.js":
/*!**********************************!*\
  !*** ./src/generate-css-unit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value, unit) {
  return 'undefined' !== typeof value ? value + unit : '';
});

/***/ }),

/***/ "./src/generate-css.js":
/*!*****************************!*\
  !*** ./src/generate-css.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (selectors, id) {
  var isResponsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var responsiveType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var breakpoint = 'mobile' === responsiveType ? '767' : '',
      gen_styling_css = '',
      res_styling_css = '';

  for (var i in selectors) {
    var sel = selectors[i];
    var css = '';

    for (var j in sel) {
      var checkString = true;

      if ('string' === typeof sel[j] && !sel[j].length) {
        checkString = false;
      }

      if ('undefined' !== typeof sel[j] && checkString) {
        css += "".concat(j, ": ").concat(sel[j], ";");
      }
    }

    if (!!css.length) {
      gen_styling_css += "".concat(id).concat(i, "{").concat(css, "}");
    }
  }

  if (isResponsive && 'undefined' !== typeof gen_styling_css && !!gen_styling_css.length) {
    res_styling_css += "@media only screen and (max-width: ".concat(breakpoint, "px) {").concat(gen_styling_css, "}");
  }

  return isResponsive ? res_styling_css : gen_styling_css;
});

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  top_margin: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#999",
    d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#575E67",
    d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
  })),
  bottom_margin: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#999",
    d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#575E67",
    d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
  })),
  left_margin: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#575E67",
    d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
  })),
  right_margin: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#999",
    d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#575E67",
    d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
  })),
  column: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M19.091 0.301h-18.182c-0.503 0-0.909 0.408-0.909 0.908v17.576c0 0.504 0.406 0.913 0.909 0.913h18.182c0.504 0 0.909-0.409 0.909-0.913v-17.576c0-0.5-0.405-0.908-0.909-0.908zM18.304 17.21h-16.608v-14.343h16.608v14.343z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M15.667 8.5h-11.333c-0.553 0-1-0.447-1-1s0.447-1 1-1h11.333c0.552 0 1 0.447 1 1s-0.448 1-1 1z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M15.667 13.5h-11.333c-0.553 0-1-0.448-1-1s0.447-1 1-1h11.333c0.552 0 1 0.448 1 1s-0.448 1-1 1z"
  })),
  top_align: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M1.5 0.438v2.125h17v-2.125h-17zM5.75 8.938h3.188v10.625h2.125v-10.625h3.187l-4.25-4.25-4.25 4.25z"
  })),
  middle_align: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M18.5 11.063v-2.125h-17v2.125h17z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M12.707 3.519l-2.707-2.707-2.707 2.707h2.030v4.368h1.354v-4.368h2.030z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M7.293 16.48l2.707 2.707 2.707-2.707h-2.030v-4.368h-1.354v4.368h-2.030z"
  })),
  bottom_align: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "20",
    height: "20"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M18.5 20v-2.125h-17v2.125h17zM14.25 11.5h-3.187v-10.625h-2.125v10.625h-3.188l4.25 4.25 4.25-4.25z"
  })),
  columns: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M4,4H20a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4ZM4 6V18H8V6Zm6 0V18h4V6Zm6 0V18h4V6Z"
  })))
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./src/column/index.js");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columns */ "./src/columns/index.js");



/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!*****************************************!*\
  !*** external {"this":["wp","editor"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map