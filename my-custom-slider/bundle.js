(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\demo\\demo.js":[function(require,module,exports){
const mycustomslider = require('../')

const form = {
  slider1_value: 16,
  slider2_value: 8
}

const data1 = { title: 'test slider1', value: form.slider1_value }
function listener1 (value) { form.slider1_value = value }
const slider1 = mycustomslider(data1, listener1)


const data2 = { title: 'test slider2', value: form.slider2_value }
function listener2 (value) { form.slider2_value = value }
const slider2 = mycustomslider(data2, listener2)



const button = document.createElement('button')
button.innerText = 'click me'
button.onclick = event => {
  console.log('slider1', form.slider1_value)
  console.log('slider2', form.slider2_value)
}

document.body.appendChild(slider1)
document.body.appendChild(slider2)
document.body.appendChild(button)

},{"../":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\src\\my-custom-slider.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\csjs.js":[function(require,module,exports){
(function (global){
'use strict';

var csjs = require('csjs');
var insertCss = require('insert-css');

function csjsInserter() {
  var args = Array.prototype.slice.call(arguments);
  var result = csjs.apply(null, args);
  if (global.document) {
    insertCss(csjs.getCss(result));
  }
  return result;
}

module.exports = csjsInserter;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"csjs":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\index.js","insert-css":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\insert-css\\index.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\get-css.js":[function(require,module,exports){
'use strict';

module.exports = require('csjs/get-css');

},{"csjs/get-css":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\get-css.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\index.js":[function(require,module,exports){
'use strict';

var csjs = require('./csjs');

module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = require('./get-css');

},{"./csjs":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\csjs.js","./get-css":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\get-css.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\csjs.js":[function(require,module,exports){
'use strict';

module.exports = require('./lib/csjs');

},{"./lib/csjs":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\csjs.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\get-css.js":[function(require,module,exports){
'use strict';

module.exports = require('./lib/get-css');

},{"./lib/get-css":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\get-css.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\index.js":[function(require,module,exports){
'use strict';

var csjs = require('./csjs');

module.exports = csjs();
module.exports.csjs = csjs;
module.exports.noScope = csjs({ noscope: true });
module.exports.getCss = require('./get-css');

},{"./csjs":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\csjs.js","./get-css":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\get-css.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\base62-encode.js":[function(require,module,exports){
'use strict';

/**
 * base62 encode implementation based on base62 module:
 * https://github.com/andrew/base62.js
 */

var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = function encode(integer) {
  if (integer === 0) {
    return '0';
  }
  var str = '';
  while (integer > 0) {
    str = CHARS[integer % 62] + str;
    integer = Math.floor(integer / 62);
  }
  return str;
};

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\build-exports.js":[function(require,module,exports){
'use strict';

var makeComposition = require('./composition').makeComposition;

module.exports = function createExports(classes, keyframes, compositions) {
  var keyframesObj = Object.keys(keyframes).reduce(function(acc, key) {
    var val = keyframes[key];
    acc[val] = makeComposition([key], [val], true);
    return acc;
  }, {});

  var exports = Object.keys(classes).reduce(function(acc, key) {
    var val = classes[key];
    var composition = compositions[key];
    var extended = composition ? getClassChain(composition) : [];
    var allClasses = [key].concat(extended);
    var unscoped = allClasses.map(function(name) {
      return classes[name] ? classes[name] : name;
    });
    acc[val] = makeComposition(allClasses, unscoped);
    return acc;
  }, keyframesObj);

  return exports;
}

function getClassChain(obj) {
  var visited = {}, acc = [];

  function traverse(obj) {
    return Object.keys(obj).forEach(function(key) {
      if (!visited[key]) {
        visited[key] = true;
        acc.push(key);
        traverse(obj[key]);
      }
    });
  }

  traverse(obj);
  return acc;
}

},{"./composition":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\composition.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\composition.js":[function(require,module,exports){
'use strict';

module.exports = {
  makeComposition: makeComposition,
  isComposition: isComposition,
  ignoreComposition: ignoreComposition
};

/**
 * Returns an immutable composition object containing the given class names
 * @param  {array} classNames - The input array of class names
 * @return {Composition}      - An immutable object that holds multiple
 *                              representations of the class composition
 */
function makeComposition(classNames, unscoped, isAnimation) {
  var classString = classNames.join(' ');
  return Object.create(Composition.prototype, {
    classNames: { // the original array of class names
      value: Object.freeze(classNames),
      configurable: false,
      writable: false,
      enumerable: true
    },
    unscoped: { // the original array of class names
      value: Object.freeze(unscoped),
      configurable: false,
      writable: false,
      enumerable: true
    },
    className: { // space-separated class string for use in HTML
      value: classString,
      configurable: false,
      writable: false,
      enumerable: true
    },
    selector: { // comma-separated, period-prefixed string for use in CSS
      value: classNames.map(function(name) {
        return isAnimation ? name : '.' + name;
      }).join(', '),
      configurable: false,
      writable: false,
      enumerable: true
    },
    toString: { // toString() method, returns class string for use in HTML
      value: function() {
        return classString;
      },
      configurable: false,
      writeable: false,
      enumerable: false
    }
  });
}

/**
 * Returns whether the input value is a Composition
 * @param value      - value to check
 * @return {boolean} - whether value is a Composition or not
 */
function isComposition(value) {
  return value instanceof Composition;
}

function ignoreComposition(values) {
  return values.reduce(function(acc, val) {
    if (isComposition(val)) {
      val.classNames.forEach(function(name, i) {
        acc[name] = val.unscoped[i];
      });
    }
    return acc;
  }, {});
}

/**
 * Private constructor for use in `instanceof` checks
 */
function Composition() {}

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\csjs.js":[function(require,module,exports){
'use strict';

var extractExtends = require('./css-extract-extends');
var composition = require('./composition');
var isComposition = composition.isComposition;
var ignoreComposition = composition.ignoreComposition;
var buildExports = require('./build-exports');
var scopify = require('./scopeify');
var cssKey = require('./css-key');
var extractExports = require('./extract-exports');

module.exports = function csjsTemplate(opts) {
  opts = (typeof opts === 'undefined') ? {} : opts;
  var noscope = (typeof opts.noscope === 'undefined') ? false : opts.noscope;

  return function csjsHandler(strings, values) {
    // Fast path to prevent arguments deopt
    var values = Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++) {
      values[i - 1] = arguments[i];
    }
    var css = joiner(strings, values.map(selectorize));
    var ignores = ignoreComposition(values);

    var scope = noscope ? extractExports(css) : scopify(css, ignores);
    var extracted = extractExtends(scope.css);
    var localClasses = without(scope.classes, ignores);
    var localKeyframes = without(scope.keyframes, ignores);
    var compositions = extracted.compositions;

    var exports = buildExports(localClasses, localKeyframes, compositions);

    return Object.defineProperty(exports, cssKey, {
      enumerable: false,
      configurable: false,
      writeable: false,
      value: extracted.css
    });
  }
}

/**
 * Replaces class compositions with comma seperated class selectors
 * @param  value - the potential class composition
 * @return       - the original value or the selectorized class composition
 */
function selectorize(value) {
  return isComposition(value) ? value.selector : value;
}

/**
 * Joins template string literals and values
 * @param  {array} strings - array of strings
 * @param  {array} values  - array of values
 * @return {string}        - strings and values joined
 */
function joiner(strings, values) {
  return strings.map(function(str, i) {
    return (i !== values.length) ? str + values[i] : str;
  }).join('');
}

/**
 * Returns first object without keys of second
 * @param  {object} obj      - source object
 * @param  {object} unwanted - object with unwanted keys
 * @return {object}          - first object without unwanted keys
 */
function without(obj, unwanted) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (!unwanted[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

},{"./build-exports":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\build-exports.js","./composition":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\composition.js","./css-extract-extends":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\css-extract-extends.js","./css-key":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\css-key.js","./extract-exports":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\extract-exports.js","./scopeify":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\scopeify.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\css-extract-extends.js":[function(require,module,exports){
'use strict';

var makeComposition = require('./composition').makeComposition;

var regex = /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;

module.exports = function extractExtends(css) {
  var found, matches = [];
  while (found = regex.exec(css)) {
    matches.unshift(found);
  }

  function extractCompositions(acc, match) {
    var extendee = getClassName(match[1]);
    var keyword = match[3];
    var extended = match[4];

    // remove from output css
    var index = match.index + match[1].length + match[2].length;
    var len = keyword.length + extended.length;
    acc.css = acc.css.slice(0, index) + " " + acc.css.slice(index + len + 1);

    var extendedClasses = splitter(extended);

    extendedClasses.forEach(function(className) {
      if (!acc.compositions[extendee]) {
        acc.compositions[extendee] = {};
      }
      if (!acc.compositions[className]) {
        acc.compositions[className] = {};
      }
      acc.compositions[extendee][className] = acc.compositions[className];
    });
    return acc;
  }

  return matches.reduce(extractCompositions, {
    css: css,
    compositions: {}
  });

};

function splitter(match) {
  return match.split(',').map(getClassName);
}

function getClassName(str) {
  var trimmed = str.trim();
  return trimmed[0] === '.' ? trimmed.substr(1) : trimmed;
}

},{"./composition":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\composition.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\css-key.js":[function(require,module,exports){
'use strict';

/**
 * CSS identifiers with whitespace are invalid
 * Hence this key will not cause a collision
 */

module.exports = ' css ';

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\extract-exports.js":[function(require,module,exports){
'use strict';

var regex = require('./regex');
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;

module.exports = extractExports;

function extractExports(css) {
  return {
    css: css,
    keyframes: getExport(css, keyframesRegex),
    classes: getExport(css, classRegex)
  };
}

function getExport(css, regex) {
  var prop = {};
  var match;
  while((match = regex.exec(css)) !== null) {
    var name = match[2];
    prop[name] = name;
  }
  return prop;
}

},{"./regex":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\regex.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\get-css.js":[function(require,module,exports){
'use strict';

var cssKey = require('./css-key');

module.exports = function getCss(csjs) {
  return csjs[cssKey];
};

},{"./css-key":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\css-key.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\hash-string.js":[function(require,module,exports){
'use strict';

/**
 * djb2 string hash implementation based on string-hash module:
 * https://github.com/darkskyapp/string-hash
 */

module.exports = function hashStr(str) {
  var hash = 5381;
  var i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return hash >>> 0;
};

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\regex.js":[function(require,module,exports){
'use strict';

var findClasses = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source;
var findKeyframes = /(@\S*keyframes\s*)([^{\s]*)/.source;
var ignoreComments = /(?!(?:[^*/]|\*[^/]|\/[^*])*\*+\/)/.source;

var classRegex = new RegExp(findClasses + ignoreComments, 'g');
var keyframesRegex = new RegExp(findKeyframes + ignoreComments, 'g');

module.exports = {
  classRegex: classRegex,
  keyframesRegex: keyframesRegex,
  ignoreComments: ignoreComments,
};

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\replace-animations.js":[function(require,module,exports){
var ignoreComments = require('./regex').ignoreComments;

module.exports = replaceAnimations;

function replaceAnimations(result) {
  var animations = Object.keys(result.keyframes).reduce(function(acc, key) {
    acc[result.keyframes[key]] = key;
    return acc;
  }, {});
  var unscoped = Object.keys(animations);

  if (unscoped.length) {
    var regexStr = '((?:animation|animation-name)\\s*:[^};]*)('
      + unscoped.join('|') + ')([;\\s])' + ignoreComments;
    var regex = new RegExp(regexStr, 'g');

    var replaced = result.css.replace(regex, function(match, preamble, name, ending) {
      return preamble + animations[name] + ending;
    });

    return {
      css: replaced,
      keyframes: result.keyframes,
      classes: result.classes
    }
  }

  return result;
}

},{"./regex":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\regex.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\scoped-name.js":[function(require,module,exports){
'use strict';

var encode = require('./base62-encode');
var hash = require('./hash-string');

module.exports = function fileScoper(fileSrc) {
  var suffix = encode(hash(fileSrc));

  return function scopedName(name) {
    return name + '_' + suffix;
  }
};

},{"./base62-encode":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\base62-encode.js","./hash-string":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\hash-string.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\scopeify.js":[function(require,module,exports){
'use strict';

var fileScoper = require('./scoped-name');
var replaceAnimations = require('./replace-animations');
var regex = require('./regex');
var classRegex = regex.classRegex;
var keyframesRegex = regex.keyframesRegex;

module.exports = scopify;

function scopify(css, ignores) {
  var makeScopedName = fileScoper(css);
  var replacers = {
    classes: classRegex,
    keyframes: keyframesRegex
  };

  function scopeCss(result, key) {
    var replacer = replacers[key];
    function replaceFn(fullMatch, prefix, name) {
      var scopedName = ignores[name] ? name : makeScopedName(name);
      result[key][scopedName] = name;
      return prefix + scopedName;
    }
    return {
      css: result.css.replace(replacer, replaceFn),
      keyframes: result.keyframes,
      classes: result.classes
    };
  }

  var result = Object.keys(replacers).reduce(scopeCss, {
    css: css,
    keyframes: {},
    classes: {}
  });

  return replaceAnimations(result);
}

},{"./regex":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\regex.js","./replace-animations":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\replace-animations.js","./scoped-name":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs\\lib\\scoped-name.js"}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\insert-css\\index.js":[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\src\\my-custom-slider.js":[function(require,module,exports){
const csjs = require('csjs-inject')

module.exports = mycustomslider

const parser = document.createElement('div')

function mycustomslider (opts, notify) {
  const title = opts.title || 'default title'
  const value = opts.value || 0

  parser.innerHTML = `<div class="${css.slider}">
    <label>${title}</label>
    <input type="number" value=${value}>
  </div>`
  const element = parser.children[0]

  const input = element.children[1]
  input.onchange = () => notify(input.value)

  return element
}

const css = csjs`
.slider {
  padding: 5px;
}`
},{"csjs-inject":"C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\node_modules\\csjs-inject\\index.js"}]},{},["C:\\Users\\bommel\\Desktop\\TEST\\my-custom-slider\\demo\\demo.js"]);
