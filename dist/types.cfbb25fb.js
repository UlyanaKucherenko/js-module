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
'use strict'; //1

/*
const age = Number(prompt("Введите сколько вам лет?"," "));

if(age>0 && age<12) {
    alert(`Вы ещё ребенок`);
    }else if(age>=12 && age<18) {
    alert(`Вы ещё подросток`);
        }else if(age>=18 && age<60) {
            alert(`Вы уже взрослый `);
            }else if(age>=60) {
                alert(`Та Вы уже пенсионер! `);
                }else{
                    alert(`ошибка ввода`);
                }

*/
//2

/*
const numberUser = Number(prompt("Введите число от 0 до 9 :"," "));

switch(numberUser){

    case 0:{
        alert(`0 - )`);
        break;
    }

    case 1:{
        alert(`1 - !`);
        break;
    }
    case 2:{
        alert(`2 - @`);
        break;
    }
    case 3:{
        alert(`3 - #`);
        break;
    }

    case 4:{
        alert(`4 - $`);
        break;
    }

    case 5:{
        alert(`5 - %`);
        break;
    }

    case 6:{
        alert(`6 - ^`);
        break;
    }

    case 7:{
        alert(`7 - &`);
        break;
    }

    case 8:{
        alert(`8 - *`);
        break;
    }

    case 9:{
        alert(`9 - (`);
        break;
    }

    default:{
        alert(`Ошибка ввода!`);
        break;
    }
}

*/
//3

/*
const numberUser = Number(prompt("Введите трёхзначное число :"," "));

const first = Math.floor(numberUser*0.01);
const second = Math.floor(numberUser*0.1) % 10;
const third = numberUser % 10;

if(first === second || first === third || second === third) {

    if(first === third && first === second ){
        alert(`Есть 3 одиннаковые цифры`)
    }

    alert(`Есть 2 одиннаковые цифры`)

    }else {
        alert(`Нет повторяющихся цифр!`)
        }

*/
//4

/*
const yearOfBirth = Number(prompt("Введите год своего рождения: ", " "));

if(yearOfBirth % 400 === 0) {
    alert(`${yearOfBirth} - высокосный год`);
} else if( (yearOfBirth % 4 === 0) && (yearOfBirth % 100 !== 0) ){
    alert(`${yearOfBirth} - высокосный год`);
} else{
    alert(`${yearOfBirth} - НЕвысокосный год`);
}
*/
//5

/*
const fivedigitNumber = Number(prompt("Введите пятиразрядное число: ", " "));

const firstDigit = Math.floor(fivedigitNumber*0.0001);
const secondDigit = Math.floor(fivedigitNumber*0.001)%10;
const thirdDigit = Math.floor(fivedigitNumber*0.01)%10;
const fourthDigit = Math.floor(fivedigitNumber*0.1)%10;
const fifththDigit = fivedigitNumber % 10;

if(firstDigit === fifththDigit && secondDigit === fourthDigit) {
        alert(`${fivedigitNumber} - является палиндромом`);
    } else {   
        alert(`${fivedigitNumber} - НЕ является палиндромом`);
    }

*/
//6

/*
const USD = Number(prompt('Введите сумму в USD :', " "));
const EUR = 0.85;
const UAN = 28.36;
const AZN = 1.70;
let result = 0;

const selectCurrency = Number(prompt('Выберите в какую валюту перевести(введите цифру): 1-EUR 2-UAN 3-AZN', " "));

switch(selectCurrency) {
    case 1: {
        result = USD * EUR;
        alert(`${USD}USD = ${EUR}EUR`);
        break;
    }

    case 2: {
        result = USD * UAN;
        alert(`${USD}USD = ${UAN}UAN`);
        break;
    }

    case 3: {
        result = USD * AZN;
        alert(`${USD}USD = ${AZN}AZN`);
        break;
    }

    default: {
        alert(`Ошибка ввода!`);
        break;
    }

}

*/
//7

/*
const parchaseAmount = Number(prompt('Введите сумму покупки :', " "));
let amountToPay = 0;

if(parchaseAmount >= 200 && parchaseAmount < 300) {
        amountToPay = parchaseAmount - ((parchaseAmount * 3) / 100);
        alert(`Сумма покупки : ${parchaseAmount} грн , скидка - 3% , к оплате : ${amountToPay} грн`);
    }else if(parchaseAmount >= 300 && parchaseAmount < 500) {
            amountToPay = parchaseAmount - ((parchaseAmount * 5) / 100);
            alert(`Сумма покупки : ${parchaseAmount} грн , скидка - 5% , к оплате : ${amountToPay} грн`);
        }else if(parchaseAmount >= 500) {
                amountToPay = parchaseAmount - ((parchaseAmount * 7) / 100);
                alert(`Сумма покупки : ${parchaseAmount} грн , скидка - 7% , к оплате : ${amountToPay} грн`);
            } else {
                alert(`Сумма к оплате : ${parchaseAmount} грн`);
            }
 */
//8

/*
const PI = 3.14;
const circumference = Number(prompt('Введите длину окружности :', " "));
const perimetrOfSquare = Number(prompt('Введите периметр квадрата :', " "));

const circlDiametr = circumference / PI;
const sideOfSquare = perimetrOfSquare / 4;

if (circlDiametr <= sideOfSquare) {
   alert(` Окружность может поместиться в соответствующий квадрат`);
}else {
    
   alert(` Окружность НЕ может поместиться в соответствующий квадрат`);
}
*/
//9

/*
const firstQuestion = Number(prompt('Ответь на 3 вопроса првильно! ВОПРОС №1 Пандемия в 2020ом называется: 1-эбола 2-covid-19 3-поросячая', " "));
const secondQuestion = Number(prompt('ВОПРОС №2 Главный герой фильма "Матрица"?: 1-Нео 2-Стэтэм 3-чел в очках', " "));
const thirdQuestion = Number(prompt('ВОПРОС №3 Кто предатель в игре "Among Us" ? : 1-Зелёный 2-Голубой 3-Красный', " "));
let count = 0;

if(firstQuestion === 2 || secondQuestion === 1 || thirdQuestion === 3) {
    count += 2;
    if((firstQuestion === 2 && thirdQuestion === 3) || (firstQuestion === 2 && secondQuestion === 1 ) || (thirdQuestion === 3 && secondQuestion === 1 )){
        count += 2;
        if(firstQuestion === 2 && secondQuestion === 1 && thirdQuestion === 3) {
            count +=2 ;
        }
    }

}

alert(` Ты набрал ${count} баллов`);
*/
//10

/*
const year = Number(prompt(' Введите год:', " "));
if( (year % 400 === 0) || ( (year % 4 === 0) && (year % 100 !== 0) )) {
    console.log(`высокосный год`);
    const month = Number(prompt(' Введите месяц(цифрой 1,2.. и т.д):', " "));
    if(month<=12){
        const day = Number(prompt(' Введите день:', " "));

        if(day>31 || (day === 31 && month % 2 !== 0) ){
            alert(` ошибка ввода! в месяце не существует такого дня`);
        }

        else if(month === 2 && day >29 ) {
            alert(` ошибка ввода! в месяце не существует такого дня`);
        }
       
        else{
            alert(` ${day}/${month}/${year}`);
        }
    }else{
        alert(` ошибка ввода! не существует такого месяца`);
    }

}
else {
    console.log(`Не высокосный год`);
    const month = Number(prompt(' Введите месяц(цифрой 1,2.. и т.д):', " "));
    if(month<=12){
        const day = Number(prompt(' Введите день:', " "));
        if(day>31 || (day === 31 && month % 2 !== 0) ){
            alert(` ошибка ввода! в месяце не существует такого дня`);
        }
       
        else if(month === 2 &&  day>=29) {
            alert(` ошибка ввода! такого дня не существует в этом году `);
        }
        else{
            alert(` ${day}/${month}/${year}`);
        }

    }else{
        alert(` ошибка ввода! не существует такого месяца`);
    }
}

*/
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64504" + '/');

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