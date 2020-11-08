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
})({"js/cycles.js":[function(require,module,exports) {
'use strict';
/*Циклы*/
//1

/*Подсчитать сумму всех чисел в заданном пользователем диапазоне.*/

var hwThreeTaskOne = document.getElementById("hw3.1");
hwThreeTaskOne.addEventListener("click", function () {
  var firstNumberRange = Number(prompt('Введите диапозон чисел. Введите число ОТ:', '1'));
  var lastNumberRange = Number(prompt(' Введите число ДО:', '10'));
  var sumOfNumbers = 0;

  for (var i = firstNumberRange; i <= lastNumberRange; i++) {
    sumOfNumbers += i;
  }

  alert("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0438\u0430\u043F\u043E\u0437\u043E\u043D\u0435 [".concat(firstNumberRange, " ; ").concat(lastNumberRange, "] \u0431\u0443\u0434\u0435\u0442 ").concat(sumOfNumbers));
}); //2

/*Запросить 2 числа и найти только наибольший общий делитель.*/

var hwThreeTaskTwo = document.getElementById("hw3.2");
hwThreeTaskTwo.addEventListener("click", function () {
  var firstNumberUser = Number(prompt('Введите первое число:', '24'));
  var secondNumberUser = Number(prompt(' Введите второе число:', '12'));
  var firstListOfNumbers = [];
  var secondListOfNumbers = [];

  for (var i = 1; i <= firstNumberUser; i++) {
    if (firstNumberUser % i === 0) {
      firstListOfNumbers.push(i);
    }
  }

  for (var _i = 1; _i <= secondNumberUser; _i++) {
    if (secondNumberUser % _i === 0) {
      secondListOfNumbers.push(_i);
    }
  }

  var maxDivider = 0;

  for (var _i2 = 0; _i2 < firstListOfNumbers.length; _i2++) {
    for (var j = 0; j < secondListOfNumbers.length; j++) {
      if (firstListOfNumbers[_i2] === secondListOfNumbers[j]) {
        if (maxDivider > firstListOfNumbers[_i2]) {
          continue;
        } else if (maxDivider < firstListOfNumbers[_i2]) {
          maxDivider = firstListOfNumbers[_i2];
        }
      }
    }
  }

  alert("\u041D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0438\u0439 \u043E\u0431\u0449\u0438\u0439 \u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0447\u0438\u0441\u0435\u043B ".concat(firstNumberUser, " \u0438 ").concat(secondNumberUser, " \u0431\u0443\u0434\u0435\u0442 ").concat(maxDivider));
}); //3
//Запросить у пользователя число и вывести все делители этого числа.

var hwThreeTaskThree = document.getElementById("hw3.3");
hwThreeTaskThree.addEventListener("click", function () {
  var numberUser = Number(prompt('Введите число:', '48'));
  var arrDivisors = [];

  for (var i = 1; i <= numberUser; i++) {
    if (numberUser % i == 0) {
      arrDivisors.push(i);
    }
  }

  alert("\u0414\u0435\u043B\u0438\u0442\u0435\u043B\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(numberUser, " : ").concat(arrDivisors));
}); //4

/*Определить количество цифр в введенном числе.*/

var hwThreeTaskFour = document.getElementById("hw3.4");
hwThreeTaskFour.addEventListener("click", function () {
  var numberUser = Number(prompt('Введите число:', '123'));
  var sumOfDigits = numberUser.toString().length;
  alert("\u041A\u043E\u043B-\u0432\u043E \u0446\u0438\u0444\u0440 \u0432 \u0447\u0438\u0441\u043B\u0435 ".concat(sumOfDigits, " "));
}); //5

/*Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/

var hwThreeTaskFive = document.getElementById("hw3.5");
hwThreeTaskFive.addEventListener("click", function () {
  var amountOfNumbers = Number(prompt('Сколько будете вводить чисел?:', '3'));
  var positiveListNumbers = 0;
  var negativeListNumbers = 0;
  var listOfZero = 0;
  var evenNumbers = 0;
  var oddNumbers = 0;
  var arrOfNumbers = [];

  for (var i = 0; i < amountOfNumbers; i++) {
    var userNumber = Number(prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(i + 1, " \u0447\u0438\u0441\u043B\u043E(-5,6,0...):"), ''));
    arrOfNumbers.push(userNumber);

    if (userNumber !== 0) {
      if (userNumber % 2 === 0) {
        evenNumbers += 1;

        if (userNumber > 0) {
          positiveListNumbers += 1;
        } else {
          negativeListNumbers += 1;
        }
      } else {
        oddNumbers += 1;

        if (userNumber > 0) {
          positiveListNumbers += 1;
        } else {
          negativeListNumbers += 1;
        }
      }
    } else {
      listOfZero += 1;
    }
  }

  alert(" \n    \u0412\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0435 \u0427\u0438\u0441\u043B\u0430 : ".concat(arrOfNumbers, "\n    \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0435 : ").concat(positiveListNumbers, ";\n    \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 : ").concat(negativeListNumbers, ";\n    \u043D\u0443\u043B\u0438 : ").concat(listOfZero, ";\n    \u0447\u0451\u0442\u043D\u044B\u0445 : ").concat(evenNumbers, ";\n    \u043D\u0435\u0447\u0451\u0442\u043D\u044B\u0445 : ").concat(oddNumbers, ";\n    "));
}); //6

/*Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример.
 И так до тех пор, пока пользователь не откажется.*/

var hwThreeTaskSix = document.getElementById("hw3.6");
hwThreeTaskSix.addEventListener("click", function () {
  var continueCalc = Number(prompt('Запустить калькулятор?', ''));

  while (continueCalc) {
    var firstNumberUser = Number(prompt('Введите первое число:', '2'));
    var operator = prompt('Введите [+ - / *]:', '');
    var secondNumberUser = Number(prompt(' Введите второе число:', '2'));
    var result = 0;

    switch (operator) {
      case '+':
        {
          result = firstNumberUser + secondNumberUser;
          break;
        }

      case '-':
        {
          result = firstNumberUser - secondNumberUser;
          break;
        }

      case '/':
        {
          result = firstNumberUser / secondNumberUser;
          break;
        }

      case '*':
        {
          result = firstNumberUser * secondNumberUser;
          break;
        }

      default:
        {
          alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430!");
          break;
        }
    }

    alert("".concat(result));
    continueCalc = Number(prompt('Продолжить? ', ''));
  }

  ;
}); //7

/*Запросить у пользователя число и на сколько цифр его сдвинуть. 
Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

var hwThreeTaskSeven = document.getElementById("hw3.7");
hwThreeTaskSeven.addEventListener("click", function () {
  var userNumber = Number(prompt('Введите число:', '123456'));
  var digitShift = Number(prompt('На сколько цифр сдвинуть число?:', '2'));
  var userNumberString = userNumber.toString().split("");
  var partUserNumber;
  var i = 0;

  while (i < digitShift) {
    partUserNumber = userNumberString.shift();
    userNumberString.push(partUserNumber);
    i++;
  }

  alert(userNumberString.join(""));
}); //8

/* Зациклить вывод дней недели таким образом: «День недели.
 Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/

var hwThreeTaskEight = document.getElementById("hw3.8");
hwThreeTaskEight.addEventListener("click", function () {
  var daysOfWek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var i = 0;

  for (;;) {
    if (i === daysOfWek.length) {
      i = 0;
    }

    var nextDay = confirm("".concat(daysOfWek[i], ". \u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C?"));
    i++;

    if (!nextDay) {
      break;
    }
  }
}); //9

/* Вывести таблицу умножения для всех чисел от 2 до 9. 
Каждое число необходимо умножить на числа от 1 до 10. */

var hwThreeTaskNine = document.getElementById("hw3.9");
hwThreeTaskNine.addEventListener("click", function () {
  for (var i = 2; i <= 9; i++) {
    console.log("\u0423\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 ".concat(i, " :"));

    for (var j = 1; j <= 10; j++) {
      var res = i * j;
      console.log("".concat(j, "*").concat(i, " = ").concat(res));
    }
  }

  alert("\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u0443\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u044F.  \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u044B\u0432\u0435\u0434\u0435\u043D \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C!");
}); //10

/* Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
И так до тех пор, пока пользователь не выберет == N. */

var hwThreeTaskTen = document.getElementById("hw3.10");
hwThreeTaskTen.addEventListener("click", function () {
  var firtstNumberRange = 0;
  var lastNumberRange = 100;
  var rangeOfNumbers;
  var startGame = confirm("\u0418\u0433\u0440\u0430 \xAB\u0423\u0433\u0430\u0434\u0430\u0439 \u0447\u0438\u0441\u043B\u043E\xBB . \u0425\u043E\u0442\u0438\u0442\u0435 \u043D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443?");

  if (startGame) {
    alert('Загадайте число от 0 до 100 !');
  }

  while (startGame) {
    var N = Math.floor((lastNumberRange - firtstNumberRange) / 2) + firtstNumberRange; //50 ;

    rangeOfNumbers = prompt("\n       \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \">\"  \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(N, "  \n       \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \"<\"  \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E < ").concat(N, "  \n       \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \"=\"  \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E = ").concat(N, " "), '');
    if (!rangeOfNumbers) break;

    switch (rangeOfNumbers) {
      case '>':
        {
          firtstNumberRange = N + 1;
          lastNumberRange = lastNumberRange;
          break;
        }

      case '<':
        {
          lastNumberRange = N;
          firtstNumberRange = firtstNumberRange;
          break;
        }

      case '=':
        {
          alert("\u0412\u044B \u0437\u0430\u0433\u0430\u0434\u0430\u043B\u0438 \u0447\u0438\u0441\u043B\u043E ".concat(N, " !"));
          break;
        }

      default:
        {
          alert("\u043E\u0448\u0438\u0431\u043A\u0430 \u0432\u0432\u043E\u0434\u0430 !");
          break;
        }
    }

    if (rangeOfNumbers === '=') {
      startGame = confirm("\u0425\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0438\u0433\u0440\u0443?");
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/cycles.js"], null)
//# sourceMappingURL=/cycles.725374c2.js.map