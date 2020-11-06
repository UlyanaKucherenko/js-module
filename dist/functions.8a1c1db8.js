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
})({"js/functions.js":[function(require,module,exports) {
'use strict';
/*Функции*/
//1

/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
 1 - если первое больше, чем второе; и 0 - если числа равны.*/

var hwFourTaskOne = document.getElementById("hw4.1");
hwFourTaskOne.addEventListener("click", function () {
  var firstNumber = Number(prompt('Введите первое число:', '2'));
  var secondNumber = Number(prompt(' Введите второе число:', '3'));

  var checkNumbers = function checkNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      return 1;
    } else if (firstNumber < secondNumber) {
      return -1;
    }

    return 0;
  };

  alert(checkNumbers(firstNumber, secondNumber));
}); //2

/* Написать функцию, которая вычисляет факториал переданного ей числа. */

var hwFourTaskTwo = document.getElementById("hw4.2");
hwFourTaskTwo.addEventListener("click", function () {
  var userNumber = Number(prompt('Введите число:', '5'));

  var calcFactorial = function calcFactorial(userNumber) {
    var count = 1;

    for (var i = 1; i <= userNumber; i++) {
      count *= i;
    }

    return " \u0424\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B \u0447\u0438\u0441\u043B\u0430 ".concat(userNumber, " = ").concat(count);
  };

  alert(calcFactorial(userNumber));
}); //3

/* Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
 Например: цифры 1, 4, 9 превратятся в число 149.*/

var hwFourTaskThree = document.getElementById("hw4.3");
hwFourTaskThree.addEventListener("click", function () {
  var firstNumber = Number(prompt('Введите первое число:', '2'));
  var secondNumber = Number(prompt(' Введите второе число:', '3'));
  var thurdNumber = Number(prompt('Введите третье число:', '5'));

  var createNumber = function createNumber(firstNumber, secondNumber, thurdNumber) {
    var a = firstNumber.toString();
    var b = secondNumber.toString();
    var c = thurdNumber.toString();
    return Number(a + b + c);
  };

  alert(createNumber(firstNumber, secondNumber, thurdNumber));
}); //4

/* Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
 Если в функции передали 1 параметр, то она вычисляет квадрата. */

var hwFourTaskFour = document.getElementById("hw4.4");
hwFourTaskFour.addEventListener("click", function () {
  var lengthRectangle = Number(prompt('Введите длину прямоугольника a =:', '5'));
  var widthRectangle = Number(prompt('Введите ширину прямоугольника b =:', '0'));

  var calcAreaRectangle = function calcAreaRectangle(lengthRectangle, widthRectangle) {
    return lengthRectangle * widthRectangle || lengthRectangle * 4;
  };

  alert(calcAreaRectangle(lengthRectangle, widthRectangle));
}); //5

/* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
 Совершенное число - это число, равное сумме всех своих собственных делителей. */

var hwFourTaskFive = document.getElementById("hw4.5");
hwFourTaskFive.addEventListener("click", function () {
  var userNumber = Number(prompt('Проверить является ли число совершенным. Введите число:', '6'));

  var checkNumberPerfect = function checkNumberPerfect(userNumber) {
    var countSum = 0;

    for (var i = 1; i < userNumber; i++) {
      if (userNumber % i === 0) {
        countSum += i;
      }
    }

    if (countSum === userNumber) {
      return "".concat(userNumber, " - \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u043C");
    }

    return "".concat(userNumber, " - \u041D\u0415 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u043C");
  };

  alert(checkNumberPerfect(userNumber));
}); //6

/* Эта функция принимает минимальное и конечное значения для диапазона и выводит только те значения из диапазона, которые являются совершенными.
 Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.  */

var hwFourTaskSix = document.getElementById("hw4.6");
hwFourTaskSix.addEventListener("click", function () {
  var minNumberRange = Number(prompt(' Введите минимальное число диапазона:', '1'));
  var maxNumberRange = Number(prompt(' Введите максимальное число диапазона:', '30'));

  var checkNumberPerfect = function checkNumberPerfect(number) {
    var countSum = 0;

    for (var i = 1; i < number; i++) {
      if (number % i === 0) {
        countSum += i;
      }
    }

    if (countSum === number) {
      return true;
    }

    return false;
  };

  var showPerfectNumbersRange = function showPerfectNumbersRange(minNumberRange, maxNumberRange) {
    var listPerfectNumbers = [];

    for (var i = minNumberRange; i <= maxNumberRange; i++) {
      var perfectNumber = checkNumberPerfect(i);

      if (perfectNumber) {
        listPerfectNumbers.push(i);
      }
    }

    if (listPerfectNumbers.length === 0) {
      return "\u0412  \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 [".concat(minNumberRange, " ; ").concat(maxNumberRange, "] C\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u041D\u0415\u0422 !");
    }

    return "\u0412  \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 [".concat(minNumberRange, " ; ").concat(maxNumberRange, "] C\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E : ").concat(listPerfectNumbers, " ");
  };

  alert(showPerfectNumbersRange(minNumberRange, maxNumberRange));
}); //7

/* Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс»
 .Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00. */

var hwFourTaskSeven = document.getElementById("hw4.7");
hwFourTaskSeven.addEventListener("click", function () {
  var hours = Number(prompt('Введите часы ЧЧ:', '4'));

  while (hours > 24) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 60 \u043C\u0438\u043D\u0443\u0442.");
    hours = Number(prompt('Введите часы ЧЧ:', '4'));
  }

  var minutes = Number(prompt('Введите минуты ММ:', '40'));

  while (minutes > 60) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 60 \u043C\u0438\u043D\u0443\u0442.");
    minutes = Number(prompt('Введите минуты ММ:', '40'));
  }

  var seconds = Number(prompt('Введите секнды СС:', '10'));

  while (seconds > 60) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434.");
    seconds = Number(prompt('Введите секнды СС:', '10'));
  }

  var showTime = function showTime(hours, minutes, seconds) {
    hours = hours.toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    if (hours.length === 1) {
      hours = "0" + hours;
    }

    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }

    if (seconds.length === 1) {
      seconds = "0" + seconds;
    }

    return " \u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F: ".concat(hours, " : ").concat(minutes, " : ").concat(seconds);
  };

  alert(showTime(hours, minutes, seconds));
}); //8

/* Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

var hwFourTaskEight = document.getElementById("hw4.8");
hwFourTaskEight.addEventListener("click", function () {
  var hours = Number(prompt('Введите часы ЧЧ:', '1'));

  while (hours > 24) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 24 \u0447\u0430\u0441\u043E\u0432.");
    hours = Number(prompt('Введите часы ЧЧ:', '1'));
  }

  var minutes = Number(prompt('Введите минуты ММ:', '20'));

  while (minutes > 60) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u0447\u0430\u0441\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 60 \u043C\u0438\u043D\u0443\u0442.");
    minutes = Number(prompt('Введите минуты ММ:', '20'));
  }

  var seconds = Number(prompt('Введите секнды СС:', '30'));

  while (seconds > 60) {
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430! \u0412 \u043C\u0438\u043D\u0443\u0442\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 60 \u0441\u0435\u043A\u0443\u043D\u0434.");
    seconds = Number(prompt('Введите секнды СС:', '30'));
  }

  var showTimeSeconds = function showTimeSeconds(hours, minutes, seconds) {
    var hoursStr = hours.toString();
    var minutesStr = minutes.toString();
    var secondsStr = seconds.toString();

    if (hoursStr.length === 1) {
      hoursStr = "0" + hoursStr;
    }

    if (minutesStr.length === 1) {
      minutesStr = "0" + minutesStr;
    }

    if (secondsStr.length === 1) {
      secondsStr = "0" + secondsStr;
    }

    var timeSeconds = hours * 3600 + minutes * 60 + seconds;
    return " \u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F: ".concat(hoursStr, " : ").concat(minutesStr, " : ").concat(secondsStr, "   \u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F: ").concat(timeSeconds, " \u0441\u0435\u043A.");
  };

  alert(showTimeSeconds(hours, minutes, seconds));
}); //9

/* Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды
 и возвращает в виде строки «чч:мм:сс». */

var hwFourTaskNine = document.getElementById("hw4.9");
hwFourTaskNine.addEventListener("click", function () {
  var timeSeconds = Number(prompt('Введите времмя в секундах:', '120'));

  var trasferTime = function trasferTime(timeSeconds) {
    var hours = Math.floor(timeSeconds / 3600);
    var minutes = Math.floor(timeSeconds % 3600 / 60);
    var seconds = timeSeconds % 60;
    var hoursStr = hours.toString();
    var minutesStr = minutes.toString();
    var secondsStr = seconds.toString();
    var strtime = "".concat(hoursStr, ",").concat(minutesStr, ",").concat(secondsStr);
    var arrTime = strtime.split(',');

    for (var i = 0; i < arrTime.length; i++) {
      if (arrTime[i] < 10) {
        arrTime[i] = "0" + arrTime[i];
      }
    }

    return "\u0412\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F : ".concat(timeSeconds, " \u0441\u0435\u043A. - \u044D\u0442\u043E  ").concat(arrTime[0], " : ").concat(arrTime[1], " : ").concat(arrTime[2]);
  };

  alert(trasferTime(timeSeconds));
}); //10

/* Написать функцию, которая считает разницу между датами.
 Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
 При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
  узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» */

var hwFourTaskTen = document.getElementById("hw4.10");
hwFourTaskTen.addEventListener("click", function () {
  var hoursFirstUser = Number(prompt('Введите 1-е время : Часы  :', '3'));
  var minutesFirstUser = Number(prompt('Введите 1-е время : Минуты  :', '20'));
  var secondsFirstUser = Number(prompt('Введите 1-е время: секнды :', '50'));
  var hoursSecondUser = Number(prompt('Введите 2-е время: Часы  :', '4'));
  var minutesSecondUser = Number(prompt('Введите 2-е время: Минуты :', '30'));
  var secondsSecondUser = Number(prompt('Введите 2-е время: секнды :', '36'));

  var calcTimeDifference = function calcTimeDifference(hFirst, mFirst, sFirst, hSecond, mSecond, sSecond) {
    // найти разницу в секундах
    var timeSecondsFirst = hFirst * 3600 + mFirst * 60 + sFirst;
    var timeSecondsSecond = hSecond * 3600 + mSecond * 60 + sSecond;
    var timeDifferenceInSeconds = 0;

    if (timeSecondsFirst > timeSecondsSecond) {
      timeDifferenceInSeconds = timeSecondsFirst - timeSecondsSecond;
    } else {
      timeDifferenceInSeconds = timeSecondsSecond - timeSecondsFirst;
    }

    var timeDifferenceInHours = transferTimeInHours(timeDifferenceInSeconds);
    return timeDifferenceInHours; //разница в часах
  };

  var drowTimeInHours = function drowTimeInHours(hours, minutes, seconds) {
    //перевести секунды в часы
    var hoursStr = hours.toString();
    var minutesStr = minutes.toString();
    var secondsStr = seconds.toString();
    var strtime = "".concat(hoursStr, ",").concat(minutesStr, ",").concat(secondsStr);
    var arrTime = strtime.split(',');

    for (var i = 0; i < arrTime.length; i++) {
      if (arrTime[i] < 10) {
        arrTime[i] = "0" + arrTime[i];
      }
    }

    return "".concat(arrTime[0], " : ").concat(arrTime[1], " : ").concat(arrTime[2]);
  };

  var transferTimeInHours = function transferTimeInHours(timeSeconds) {
    //перевести часы  в секунды
    var hours = Math.floor(timeSeconds / 3600);
    var minutes = Math.floor(timeSeconds % 3600 / 60);
    var seconds = timeSeconds % 60;
    var timeInHour = drowTimeInHours(hours, minutes, seconds);
    return timeInHour;
  };

  var showTimeDifference = function showTimeDifference(hFirst, mFirst, sFirst, hSecond, mSecond, sSecond) {
    //покажи разницу в часах
    var timeDifferenceInHours = calcTimeDifference(hFirst, mFirst, sFirst, hSecond, mSecond, sSecond);
    return timeDifferenceInHours;
  };

  var firstTime = drowTimeInHours(hoursFirstUser, minutesFirstUser, secondsFirstUser);
  var secondTime = drowTimeInHours(hoursSecondUser, minutesSecondUser, secondsSecondUser);
  var differentTime = showTimeDifference(hoursFirstUser, minutesFirstUser, secondsFirstUser, hoursSecondUser, minutesSecondUser, secondsSecondUser);
  alert("\n        \u041F\u0435\u0440\u0432\u043E\u0435 \u0432\u0440\u0435\u043C\u044F: ".concat(firstTime, "\n        \u0412\u0442\u043E\u0440\u043E\u0435 \u0432\u0440\u0435\u043C\u044F: ").concat(secondTime, "\n        \u0420\u0430\u0437\u043D\u0438\u0446\u0430 \u043C\u0435\u0436\u0434\u0443 \u043D\u0438\u043C\u0438: ").concat(differentTime, "\n    "));
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/functions.js"], null)
//# sourceMappingURL=/functions.8a1c1db8.js.map