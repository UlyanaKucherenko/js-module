// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/js-basic.js":[function(require,module,exports) {
'use strict';
/*Осныва JS*/
//1

var hwOneTaskOne = document.getElementById("hw1.1");
hwOneTaskOne.addEventListener("click", function () {
  var name = prompt('Введи своё имя :', '');
  alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, " !"));
}); //2 

var hwOneTaskTwo = document.getElementById("hw1.2");
hwOneTaskTwo.addEventListener("click", function () {
  var thisYear = 2020;
  var yearBorn = Number(prompt("Введи год cвоего рождения: ", " "));
  var yearsOld = thisYear - yearBorn;
  alert("\u0422\u0435\u0431\u0435 ".concat(yearsOld, " \u043B\u0435\u0442!"));
}); //3

var hwOneTaskThree = document.getElementById("hw1.3");
hwOneTaskThree.addEventListener("click", function () {
  var sideOfSquare = Number(prompt("Введите длину стороны квадрата(в см): а = ", ""));
  var perimeterSquare = sideOfSquare * 4;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0440\u0430\u0432\u0435\u043D ".concat(perimeterSquare, " \u0441\u043C"));
}); //4

var hwOneTaskFour = document.getElementById("hw1.4");
hwOneTaskFour.addEventListener("click", function () {
  var pi = 3.14;
  var radius = Number(prompt("Введите радиус окружности : r = ", " "));
  var areaOfCircle = pi * radius * radius;
  alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0430\u0432\u043D\u0430 ".concat(areaOfCircle, " "));
}); //5

var hwOneTaskFive = document.getElementById("hw1.5");
hwOneTaskFive.addEventListener("click", function () {
  var distance = Number(prompt("Введите расстояние между городами (в км) : L = ", " "));
  var time = Number(prompt("Введите время, за которое хотите добраться (в часах) : t = ", " "));
  var speed = distance / time;
  alert("\u041D\u0443\u0436\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ".concat(speed, " \u043A\u043C/\u0447 "));
}); //6

var hwOneTaskSix = document.getElementById("hw1.6");
hwOneTaskSix.addEventListener("click", function () {
  var rate = 0.85;
  var dollar = Number(prompt("Введите сумму в долларах : ", " "));
  var euro = (dollar * rate).toFixed(2);
  alert("".concat(dollar, " USD =  ").concat(euro, " EUR "));
}); //7

var hwOneTaskSeven = document.getElementById("hw1.7");
hwOneTaskSeven.addEventListener("click", function () {
  var fileSize = 820;
  var Gb = Number(prompt("Введите количество ГБ в флешке: ", " "));
  var fils = Math.floor(Gb * 1000 / fileSize);
  alert(" \u0412 \u0444\u043B\u0435\u0448\u043A\u0435 \u043D\u0430 ".concat(Gb, " \u0413\u0431 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F -  ").concat(fils, " \u0444\u0430\u0439\u043B\u043E\u0432 \u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u043F\u043E ").concat(fileSize, " \u041C\u0431"));
}); //8

var hwOneTaskEight = document.getElementById("hw1.8");
hwOneTaskEight.addEventListener("click", function () {
  var money = Number(prompt("Введите количество денег: ", " "));
  var priceOneChocolate = Number(prompt("Введите сколько стоит одна шоколадка: ", " "));
  var numberOfChocolates = Math.floor(money / priceOneChocolate);
  var balance = (money - priceOneChocolate * numberOfChocolates).toFixed(2);
  console.log(" \n                    \u0412\u0441\u0435\u0433\u043E \u0434\u0435\u043D\u0435\u0433 = ".concat(money, " \u0433\u0440\u043D\n                    1 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0430 = ").concat(priceOneChocolate, " \u0433\u0440\u043D\n                    \u041A\u043E\u043B-\u0432\u043E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u0435\u0442 \u043A\u0443\u043F\u0438\u0442\u044C = ").concat(numberOfChocolates, " \u0448\u0442\n                    \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u0441\u0447\u0435\u0442\u0443 = ").concat(balance, " \u0433\u0440\u043D"));
  alert("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u0441\u0447\u0435\u0442\u0443 = ".concat(balance, " \u0433\u0440\u043D"));
}); //9

var hwOneTaskNine = document.getElementById("hw1.9");
hwOneTaskNine.addEventListener("click", function () {
  var numberUser = Number(prompt("Введите трёхзначное число: ", " "));
  var first = Math.floor(numberUser * 0.01);
  var second = Math.floor(numberUser * 0.1) % 10;
  var third = numberUser % 10;
  var result = third * 100 + second * 10 + first;
  alert(" ".concat(result));
}); //10

/* (Сумма нач. * % ставка * к-во дней начисления % / к-во дней в году) / 100. */

var hwOneTaskTen = document.getElementById("hw1.10");
hwOneTaskTen.addEventListener("click", function () {
  var depositAmount = Number(prompt("Введите сумму вклада в банк: ", " "));
  var percentDepositYear = 5;
  var daysOfYear = 365;
  var daysOfTwoMonth = 61;
  var sumInteresPercent = (depositAmount * percentDepositYear * daysOfTwoMonth / daysOfYear / 100).toFixed(2);
  console.log("\n        \u0421\u0443\u043C\u043C\u0443 \u0432\u043A\u043B\u0430\u0434\u0430 \u0432 \u0431\u0430\u043D\u043A = ".concat(depositAmount, "\n        \u041F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 ").concat(percentDepositYear, "% \u0433\u043E\u0434\u043E\u0432\u044B\u0445\n        \u041A\u043E\u043B-\u0432\u043E \u0434\u043D\u0435\u0439 \u0432 \u0433\u043E\u0434\u0443 = ").concat(daysOfYear, "\n        \u043A\u043E\u043B-\u0432\u043E \u0434\u043D\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u0430 = ").concat(daysOfTwoMonth, " \u0434\u043D\u0435\u0439 (2\u043C\u0435\u0441\u044F\u0446a)\n        \u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 = ").concat(sumInteresPercent, " \u0433\u0440\u043D "));
  alert("\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 = ".concat(sumInteresPercent, " \u0433\u0440\u043D"));
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56903" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/js-basic.js"], null)
//# sourceMappingURL=/js-basic.d46827f7.js.map