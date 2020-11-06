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
})({"js/types.js":[function(require,module,exports) {
'use strict';
/*Типы данных и операторы*/
//1

var hwTwoTaskOne = document.getElementById("hw2.1");
hwTwoTaskOne.addEventListener("click", function () {
  var age = Number(prompt("Введите сколько вам лет?", " "));

  if (age > 0 && age < 12) {
    alert("\u0412\u044B \u0435\u0449\u0451 \u0440\u0435\u0431\u0435\u043D\u043E\u043A");
  } else if (age >= 12 && age < 18) {
    alert("\u0412\u044B \u0435\u0449\u0451 \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043E\u043A");
  } else if (age >= 18 && age < 60) {
    alert("\u0412\u044B \u0443\u0436\u0435 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0439 ");
  } else if (age >= 60) {
    alert("\u0422\u0430 \u0412\u044B \u0443\u0436\u0435 \u043F\u0435\u043D\u0441\u0438\u043E\u043D\u0435\u0440! ");
  } else {
    alert("\u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430");
  }
}); //2

var hwTwoTaskTwo = document.getElementById("hw2.2");
hwTwoTaskTwo.addEventListener("click", function () {
  var numberUser = Number(prompt("Введите число от 0 до 9 :", " "));

  switch (numberUser) {
    case 0:
      {
        alert("0 - )");
        break;
      }

    case 1:
      {
        alert("1 - !");
        break;
      }

    case 2:
      {
        alert("2 - @");
        break;
      }

    case 3:
      {
        alert("3 - #");
        break;
      }

    case 4:
      {
        alert("4 - $");
        break;
      }

    case 5:
      {
        alert("5 - %");
        break;
      }

    case 6:
      {
        alert("6 - ^");
        break;
      }

    case 7:
      {
        alert("7 - &");
        break;
      }

    case 8:
      {
        alert("8 - *");
        break;
      }

    case 9:
      {
        alert("9 - (");
        break;
      }

    default:
      {
        alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430!");
        break;
      }
  }
}); //3

var hwTwoTaskThree = document.getElementById("hw2.3");
hwTwoTaskThree.addEventListener("click", function () {
  var numberUser = Number(prompt("Введите трёхзначное число :", " "));
  var first = Math.floor(numberUser * 0.01);
  var second = Math.floor(numberUser * 0.1) % 10;
  var third = numberUser % 10;

  if (first === second || first === third || second === third) {
    if (first === third && first === second) {
      alert("\u0415\u0441\u0442\u044C 3 \u043E\u0434\u0438\u043D\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0446\u0438\u0444\u0440\u044B");
    }

    alert("\u0415\u0441\u0442\u044C 2 \u043E\u0434\u0438\u043D\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0446\u0438\u0444\u0440\u044B");
  } else {
    alert("\u041D\u0435\u0442 \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u0449\u0438\u0445\u0441\u044F \u0446\u0438\u0444\u0440!");
  }
}); //4

var hwTwoTaskFour = document.getElementById("hw2.4");
hwTwoTaskFour.addEventListener("click", function () {
  var yearOfBirth = Number(prompt("Введите год своего рождения: ", " "));

  if (yearOfBirth % 400 === 0) {
    alert("".concat(yearOfBirth, " - \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
  } else if (yearOfBirth % 4 === 0 && yearOfBirth % 100 !== 0) {
    alert("".concat(yearOfBirth, " - \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
  } else {
    alert("".concat(yearOfBirth, " - \u041D\u0415\u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
  }
}); //5

var hwTwoTaskFive = document.getElementById("hw2.5");
hwTwoTaskFive.addEventListener("click", function () {
  var fivedigitNumber = Number(prompt("Введите пятиразрядное число: ", " "));
  var firstDigit = Math.floor(fivedigitNumber * 0.0001);
  var secondDigit = Math.floor(fivedigitNumber * 0.001) % 10;
  var thirdDigit = Math.floor(fivedigitNumber * 0.01) % 10;
  var fourthDigit = Math.floor(fivedigitNumber * 0.1) % 10;
  var fifththDigit = fivedigitNumber % 10;

  if (firstDigit === fifththDigit && secondDigit === fourthDigit) {
    alert("".concat(fivedigitNumber, " - \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0430\u043B\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u043C"));
  } else {
    alert("".concat(fivedigitNumber, " - \u041D\u0415 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0430\u043B\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u043C"));
  }
}); //6

var hwTwoTaskSix = document.getElementById("hw2.6");
hwTwoTaskSix.addEventListener("click", function () {
  var USD = Number(prompt('Введите сумму в USD :', " "));
  var EUR = 0.85;
  var UAN = 28.36;
  var AZN = 1.70;
  var result = 0;
  var selectCurrency = Number(prompt('Выберите в какую валюту перевести(введите цифру): 1-EUR 2-UAN 3-AZN', " "));

  switch (selectCurrency) {
    case 1:
      {
        result = USD * EUR;
        alert("".concat(USD, "USD = ").concat(result, "EUR"));
        break;
      }

    case 2:
      {
        result = USD * UAN;
        alert("".concat(USD, "USD = ").concat(result, "UAN"));
        break;
      }

    case 3:
      {
        result = USD * AZN;
        alert("".concat(USD, "USD = ").concat(result, "AZN"));
        break;
      }

    default:
      {
        alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430!");
        break;
      }
  }
}); //7

var hwTwoTaskSeven = document.getElementById("hw2.7");
hwTwoTaskSeven.addEventListener("click", function () {
  var parchaseAmount = Number(prompt('Введите сумму покупки :', " "));
  var amountToPay = 0;

  if (parchaseAmount >= 200 && parchaseAmount < 300) {
    amountToPay = parchaseAmount - parchaseAmount * 3 / 100;
    alert("\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 : ".concat(parchaseAmount, " \u0433\u0440\u043D , \u0441\u043A\u0438\u0434\u043A\u0430 - 3% , \u043A \u043E\u043F\u043B\u0430\u0442\u0435 : ").concat(amountToPay, " \u0433\u0440\u043D"));
  } else if (parchaseAmount >= 300 && parchaseAmount < 500) {
    amountToPay = parchaseAmount - parchaseAmount * 5 / 100;
    alert("\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 : ".concat(parchaseAmount, " \u0433\u0440\u043D , \u0441\u043A\u0438\u0434\u043A\u0430 - 5% , \u043A \u043E\u043F\u043B\u0430\u0442\u0435 : ").concat(amountToPay, " \u0433\u0440\u043D"));
  } else if (parchaseAmount >= 500) {
    amountToPay = parchaseAmount - parchaseAmount * 7 / 100;
    alert("\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 : ".concat(parchaseAmount, " \u0433\u0440\u043D , \u0441\u043A\u0438\u0434\u043A\u0430 - 7% , \u043A \u043E\u043F\u043B\u0430\u0442\u0435 : ").concat(amountToPay, " \u0433\u0440\u043D"));
  } else {
    alert("\u0421\u0443\u043C\u043C\u0430 \u043A \u043E\u043F\u043B\u0430\u0442\u0435 : ".concat(parchaseAmount, " \u0433\u0440\u043D"));
  }
}); //8

var hwTwoTaskEight = document.getElementById("hw2.8");
hwTwoTaskEight.addEventListener("click", function () {
  var PI = 3.14;
  var circumference = Number(prompt('Введите длину окружности :', " "));
  var perimetrOfSquare = Number(prompt('Введите периметр квадрата :', " "));
  var circlDiametr = circumference / PI;
  var sideOfSquare = perimetrOfSquare / 4;

  if (circlDiametr <= sideOfSquare) {
    alert(" \u041E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u044C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u0442");
  } else {
    alert(" \u041E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u044C \u041D\u0415 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043A\u0432\u0430\u0434\u0440\u0430\u0442");
  }
}); //9

var hwTwoTaskNine = document.getElementById("hw2.9");
hwTwoTaskNine.addEventListener("click", function () {
  var firstQuestion = Number(prompt('Ответь на 3 вопроса првильно! ВОПРОС №1 Пандемия в 2020ом называется: 1-эбола 2-covid-19 3-поросячая', " "));
  var secondQuestion = Number(prompt('ВОПРОС №2 Главный герой фильма "Матрица"?: 1-Нео 2-Стэтэм 3-чел в очках', " "));
  var thirdQuestion = Number(prompt('ВОПРОС №3 Кто предатель в игре "Among Us" ? : 1-Зелёный 2-Голубой 3-Красный', " "));
  var count = 0;

  if (firstQuestion === 2 || secondQuestion === 1 || thirdQuestion === 3) {
    count += 2;

    if (firstQuestion === 2 && thirdQuestion === 3 || firstQuestion === 2 && secondQuestion === 1 || thirdQuestion === 3 && secondQuestion === 1) {
      count += 2;

      if (firstQuestion === 2 && secondQuestion === 1 && thirdQuestion === 3) {
        count += 2;
      }
    }
  }

  alert(" \u0422\u044B \u043D\u0430\u0431\u0440\u0430\u043B ".concat(count, " \u0431\u0430\u043B\u043B\u043E\u0432"));
}); //10

var hwTwoTaskTen = document.getElementById("hw2.10");
hwTwoTaskTen.addEventListener("click", function () {
  var year = Number(prompt(' Введите год:', " "));

  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    console.log("\u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434");
    var month = Number(prompt(' Введите месяц(цифрой 1,2.. и т.д):', " "));

    if (month <= 12) {
      var day = Number(prompt(' Введите день:', " "));

      if (day > 31 || day === 31 && month % 2 !== 0) {
        alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0432 \u043C\u0435\u0441\u044F\u0446\u0435 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u0434\u043D\u044F");
      } else if (month === 2 && day > 29) {
        alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0432 \u043C\u0435\u0441\u044F\u0446\u0435 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u0434\u043D\u044F");
      } else {
        alert(" ".concat(day, "/").concat(month, "/").concat(year));
      }
    } else {
      alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430");
    }
  } else {
    console.log("\u041D\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434");

    var _month = Number(prompt(' Введите месяц(цифрой 1,2.. и т.д):', " "));

    if (_month <= 12) {
      var _day = Number(prompt(' Введите день:', " "));

      if (_day > 31 || _day === 31 && _month % 2 !== 0) {
        alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0432 \u043C\u0435\u0441\u044F\u0446\u0435 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u0434\u043D\u044F");
      } else if (_month === 2 && _day >= 29) {
        alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0442\u0430\u043A\u043E\u0433\u043E \u0434\u043D\u044F \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u044D\u0442\u043E\u043C \u0433\u043E\u0434\u0443 ");
      } else {
        alert(" ".concat(_day, "/").concat(_month, "/").concat(year));
      }
    } else {
      alert(" \u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043A\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430");
    }
  }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63484" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/types.js"], null)
//# sourceMappingURL=/types.cfbb25fb.js.map