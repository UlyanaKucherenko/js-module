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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwJsBasic = void 0;

var hwJsBasic = function hwJsBasic() {
  //1
  document.getElementById("hw1.1").addEventListener("click", function () {
    var name = prompt('Введи своё имя :', '');
    alert("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, " !"));
  }); //2 

  document.getElementById("hw1.2").addEventListener("click", function () {
    var thisYear = 2020;
    var yearBorn = Number(prompt("Введи год cвоего рождения: ", " "));
    var yearsOld = thisYear - yearBorn;
    alert("\u0422\u0435\u0431\u0435 ".concat(yearsOld, " \u043B\u0435\u0442!"));
  }); //3

  document.getElementById("hw1.3").addEventListener("click", function () {
    var sideOfSquare = Number(prompt("Введите длину стороны квадрата(в см): а = ", ""));
    var perimeterSquare = sideOfSquare * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0440\u0430\u0432\u0435\u043D ".concat(perimeterSquare, " \u0441\u043C"));
  }); //4

  document.getElementById("hw1.4").addEventListener("click", function () {
    var pi = 3.14;
    var radius = Number(prompt("Введите радиус окружности : r = ", " "));
    var areaOfCircle = pi * radius * radius;
    alert("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0430\u0432\u043D\u0430 ".concat(areaOfCircle, " "));
  }); //5

  document.getElementById("hw1.5").addEventListener("click", function () {
    var distance = Number(prompt("Введите расстояние между городами (в км) : L = ", " "));
    var time = Number(prompt("Введите время, за которое хотите добраться (в часах) : t = ", " "));
    var speed = distance / time;
    alert("\u041D\u0443\u0436\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ".concat(speed, " \u043A\u043C/\u0447 "));
  }); //6

  document.getElementById("hw1.6").addEventListener("click", function () {
    var rate = 0.85;
    var dollar = Number(prompt("Введите сумму в долларах : ", " "));
    var euro = (dollar * rate).toFixed(2);
    alert("".concat(dollar, " USD =  ").concat(euro, " EUR "));
  }); //7

  document.getElementById("hw1.7").addEventListener("click", function () {
    var fileSize = 820;
    var Gb = Number(prompt("Введите количество ГБ в флешке: ", " "));
    var fils = Math.floor(Gb * 1000 / fileSize);
    alert(" \u0412 \u0444\u043B\u0435\u0448\u043A\u0435 \u043D\u0430 ".concat(Gb, " \u0413\u0431 \u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F -  ").concat(fils, " \u0444\u0430\u0439\u043B\u043E\u0432 \u0441 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C \u043F\u043E ").concat(fileSize, " \u041C\u0431"));
  }); //8

  document.getElementById("hw1.8").addEventListener("click", function () {
    var money = Number(prompt("Введите количество денег: ", " "));
    var priceOneChocolate = Number(prompt("Введите сколько стоит одна шоколадка: ", " "));
    var numberOfChocolates = Math.floor(money / priceOneChocolate);
    var balance = (money - priceOneChocolate * numberOfChocolates).toFixed(2);
    console.log(" \n                    \u0412\u0441\u0435\u0433\u043E \u0434\u0435\u043D\u0435\u0433 = ".concat(money, " \u0433\u0440\u043D\n                    1 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0430 = ").concat(priceOneChocolate, " \u0433\u0440\u043D\n                    \u041A\u043E\u043B-\u0432\u043E \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u0435\u0442 \u043A\u0443\u043F\u0438\u0442\u044C = ").concat(numberOfChocolates, " \u0448\u0442\n                    \u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u0441\u0447\u0435\u0442\u0443 = ").concat(balance, " \u0433\u0440\u043D"));
    alert("\u041E\u0441\u0442\u0430\u0442\u043E\u043A \u043D\u0430 \u0441\u0447\u0435\u0442\u0443 = ".concat(balance, " \u0433\u0440\u043D"));
  }); //9

  document.getElementById("hw1.9").addEventListener("click", function () {
    var numberUser = Number(prompt("Введите трёхзначное число: ", " "));
    var first = Math.floor(numberUser * 0.01);
    var second = Math.floor(numberUser * 0.1) % 10;
    var third = numberUser % 10;
    var result = third * 100 + second * 10 + first;
    alert(" ".concat(result));
  }); //10

  /* (Сумма нач. * % ставка * к-во дней начисления % / к-во дней в году) / 100. */

  document.getElementById("hw1.10").addEventListener("click", function () {
    var depositAmount = Number(prompt("Введите сумму вклада в банк: ", " "));
    var percentDepositYear = 5;
    var daysOfYear = 365;
    var daysOfTwoMonth = 61;
    var sumInteresPercent = (depositAmount * percentDepositYear * daysOfTwoMonth / daysOfYear / 100).toFixed(2);
    console.log("\n        \u0421\u0443\u043C\u043C\u0443 \u0432\u043A\u043B\u0430\u0434\u0430 \u0432 \u0431\u0430\u043D\u043A = ".concat(depositAmount, "\n        \u041F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 ").concat(percentDepositYear, "% \u0433\u043E\u0434\u043E\u0432\u044B\u0445\n        \u041A\u043E\u043B-\u0432\u043E \u0434\u043D\u0435\u0439 \u0432 \u0433\u043E\u0434\u0443 = ").concat(daysOfYear, "\n        \u043A\u043E\u043B-\u0432\u043E \u0434\u043D\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u0430 = ").concat(daysOfTwoMonth, " \u0434\u043D\u0435\u0439 (2\u043C\u0435\u0441\u044F\u0446a)\n        \u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 = ").concat(sumInteresPercent, " \u0433\u0440\u043D "));
    alert("\u0421\u0443\u043C\u043C\u0430 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 = ".concat(sumInteresPercent, " \u0433\u0440\u043D"));
  });
};

exports.hwJsBasic = hwJsBasic;
},{}],"js/types.js":[function(require,module,exports) {
'use strict';
/*Типы данных и операторы*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwTypes = void 0;

var hwTypes = function hwTypes() {
  //1
  document.getElementById("hw2.1").addEventListener("click", function () {
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

  document.getElementById("hw2.2").addEventListener("click", function () {
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

  document.getElementById("hw2.3").addEventListener("click", function () {
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

  document.getElementById("hw2.4").addEventListener("click", function () {
    var yearOfBirth = Number(prompt("Введите год своего рождения: ", " "));

    if (yearOfBirth % 400 === 0) {
      alert("".concat(yearOfBirth, " - \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
    } else if (yearOfBirth % 4 === 0 && yearOfBirth % 100 !== 0) {
      alert("".concat(yearOfBirth, " - \u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
    } else {
      alert("".concat(yearOfBirth, " - \u041D\u0415\u0432\u044B\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439 \u0433\u043E\u0434"));
    }
  }); //5

  document.getElementById("hw2.5").addEventListener("click", function () {
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

  document.getElementById("hw2.6").addEventListener("click", function () {
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

  document.getElementById("hw2.7").addEventListener("click", function () {
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

  document.getElementById("hw2.8").addEventListener("click", function () {
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

  document.getElementById("hw2.9").addEventListener("click", function () {
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

  document.getElementById("hw2.10").addEventListener("click", function () {
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
};

exports.hwTypes = hwTypes;
},{}],"js/cycles.js":[function(require,module,exports) {
'use strict';
/*Циклы*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwCycles = void 0;

var hwCycles = function hwCycles() {
  //1

  /*Подсчитать сумму всех чисел в заданном пользователем диапазоне.*/
  document.getElementById("hw3.1").addEventListener("click", function () {
    var firstNumberRange = Number(prompt('Введите диапозон чисел. Введите число ОТ:', '1'));
    var lastNumberRange = Number(prompt(' Введите число ДО:', '10'));
    var sumOfNumbers = 0;

    for (var i = firstNumberRange; i <= lastNumberRange; i++) {
      sumOfNumbers += i;
    }

    alert("\u0421\u0443\u043C\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0438\u0430\u043F\u043E\u0437\u043E\u043D\u0435 [".concat(firstNumberRange, " ; ").concat(lastNumberRange, "] \u0431\u0443\u0434\u0435\u0442 ").concat(sumOfNumbers));
  }); //2

  /*Запросить 2 числа и найти только наибольший общий делитель.*/

  document.getElementById("hw3.2").addEventListener("click", function () {
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

  document.getElementById("hw3.3").addEventListener("click", function () {
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

  document.getElementById("hw3.4").addEventListener("click", function () {
    var numberUser = Number(prompt('Введите число:', '123'));
    var sumOfDigits = numberUser.toString().length;
    alert("\u041A\u043E\u043B-\u0432\u043E \u0446\u0438\u0444\u0440 \u0432 \u0447\u0438\u0441\u043B\u0435 ".concat(sumOfDigits, " "));
  }); //5

  /*Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
  При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
  Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/

  document.getElementById("hw3.5").addEventListener("click", function () {
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

  document.getElementById("hw3.6").addEventListener("click", function () {
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

  document.getElementById("hw3.7").addEventListener("click", function () {
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

  document.getElementById("hw3.8").addEventListener("click", function () {
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

  document.getElementById("hw3.9").addEventListener("click", function () {
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

  document.getElementById("hw3.10").addEventListener("click", function () {
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
};

exports.hwCycles = hwCycles;
},{}],"js/functions.js":[function(require,module,exports) {
'use strict';
/*Функции*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwFunction = void 0;

var hwFunction = function hwFunction() {
  //1

  /*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
   1 - если первое больше, чем второе; и 0 - если числа равны.*/
  document.getElementById("hw4.1").addEventListener("click", function () {
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

  document.getElementById("hw4.2").addEventListener("click", function () {
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

  document.getElementById("hw4.3").addEventListener("click", function () {
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

  document.getElementById("hw4.4").addEventListener("click", function () {
    var lengthRectangle = Number(prompt('Введите длину прямоугольника a =:', '5'));
    var widthRectangle = Number(prompt('Введите ширину прямоугольника b =:', '0'));

    var calcAreaRectangle = function calcAreaRectangle(lengthRectangle, widthRectangle) {
      return lengthRectangle * widthRectangle || lengthRectangle * 4;
    };

    alert(calcAreaRectangle(lengthRectangle, widthRectangle));
  }); //5

  /* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
   Совершенное число - это число, равное сумме всех своих собственных делителей. */

  document.getElementById("hw4.5").addEventListener("click", function () {
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

  document.getElementById("hw4.6").addEventListener("click", function () {
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

  document.getElementById("hw4.7").addEventListener("click", function () {
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

  document.getElementById("hw4.8").addEventListener("click", function () {
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

  document.getElementById("hw4.9").addEventListener("click", function () {
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

  document.getElementById("hw4.10").addEventListener("click", function () {
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
};

exports.hwFunction = hwFunction;
},{}],"js/objects.js":[function(require,module,exports) {
'use strict';
/*Объекты*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwObjects = void 0;

var hwObjects = function hwObjects() {
  //1

  /* Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
  и следующие функции для работы с этим объектом:
  
  Функция для вывода на экран информации об автомобиле;
  
  Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
  Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/
  document.getElementById("hw5.1").addEventListener("click", function () {
    var car = {
      munufacturer: "Japan",
      model: "Subaru Forester",
      year: 2010,
      "speed average": 40
    };

    var showInfoCar = function showInfoCar() {
      for (var key in car) {
        console.log("".concat(key, " : ").concat(car[key]));
      }
    };

    console.log("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0435:");
    showInfoCar();
    alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0435!");
    var distance = Number(prompt("Введите расстояние: ", "800"));

    var calcTime = function calcTime(distance, speed) {
      var time = distance / speed;

      if (time > 4) {
        time = time + Math.floor(time / 4);
        return time;
      }

      return time;
    };

    var resTime = calcTime(distance, car["speed average"]);
    console.log("\u0412\u0440\u0435\u043C\u044F \u0434\u043B\u044F \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u043D\u0438\u044F ".concat(distance, "\u043A\u043C \u0441\u043E \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C\u044E ").concat(car["speed average"], " \u043A\u043C/\u0447:\n    ").concat(resTime, " \u0447\u0430\u0441\u043E\u0432"));
  }); //2

  /*  Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
  
  Функция сложения 2-х объектов-дробей;
  
  Функция вычитания 2-х объектов-дробей;
  
  Функция умножения 2-х объектов-дробей;
  
  Функция деления 2-х объектов-дробей;
  
  Функция сокращения объекта-дроби. */

  document.getElementById("hw5.2").addEventListener("click", function () {
    function Fraction(upNumber, downNumber) {
      return {
        upNumber: upNumber,
        downNumber: downNumber
      };
    }

    var firstNumber = Fraction(1, 10); //obj1

    var secondNumber = Fraction(2, 15); //obj2

    var sumFraction = function sumFraction(obj1, obj2) {
      var resultDownNumber = obj1.downNumber * obj2.downNumber;
      var value1 = obj1.upNumber * (resultDownNumber / obj1.downNumber);
      var value2 = obj2.upNumber * (resultDownNumber / obj2.downNumber);
      var resultUpNumber = value1 + value2;
      return reducFraction(resultUpNumber, resultDownNumber);
    };

    var subFraction = function subFraction(obj1, obj2) {
      var resultDownNumber = obj1.downNumber * obj2.downNumber;
      var resultUpNumber = 0;
      var value1 = obj1.upNumber * (resultDownNumber / obj1.downNumber);
      var value2 = obj2.upNumber * (resultDownNumber / obj2.downNumber);
      resultUpNumber = value1 - value2;
      return reducFraction(resultUpNumber, resultDownNumber);
    };

    var multiFraction = function multiFraction(obj1, obj2) {
      var resultDownNumber = obj1.downNumber * obj2.downNumber;
      var resultUpNumber = obj1.upNumber * obj2.upNumber;
      return reducFraction(resultUpNumber, resultDownNumber);
    };

    var divisFraction = function divisFraction(obj1, obj2) {
      var resultDownNumber = obj1.downNumber * obj2.upNumber;
      var resultUpNumber = obj1.upNumber * obj2.downNumber;
      return reducFraction(resultUpNumber, resultDownNumber);
    };

    var reducFraction = function reducFraction(upNumber, downNumber) {
      var resultUpNumber = 1;
      var resultDownNumber = 1; //если значение отрицательное

      if (upNumber < 0) {
        upNumber = upNumber * -1;

        for (var i = 0; i <= upNumber; i++) {
          if (upNumber % i === 0 && downNumber % i === 0) {
            resultUpNumber = upNumber / i;
            resultDownNumber = downNumber / i;
          }
        }

        return "".concat(-resultUpNumber, "/").concat(resultDownNumber);
      }

      for (var _i = 0; _i <= upNumber; _i++) {
        if (upNumber % _i === 0 && downNumber % _i === 0) {
          resultUpNumber = upNumber / _i;
          resultDownNumber = downNumber / _i;
        }
      }

      return "".concat(resultUpNumber, "/").concat(resultDownNumber);
    };

    console.log("\u041F\u0435\u0440\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: 1/10 \u0412\u0442\u043E\u0440\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: 2/15");
    console.log("\u0421\u0443\u043C\u043C\u0430:");
    console.log(sumFraction(firstNumber, secondNumber));
    console.log("\u0420\u0430\u0437\u043D\u0438\u0446\u0430: ");
    console.log(subFraction(firstNumber, secondNumber));
    console.log("\u0423\u043C\u043D\u043E\u0436\u0435\u043D\u0438\u0435: ");
    console.log(multiFraction(firstNumber, secondNumber));
    console.log("\u0414\u0435\u043B\u0435\u043D\u0438\u0435:");
    console.log(divisFraction(firstNumber, secondNumber));
    alert("\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438!");
  }); //3

  /*Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  Функция вывода времени на экран;
  
  Функция изменения времени на переданное количество секунд;
  
  Функция изменения времени на переданное количество минут;
  
  Функция изменения времени на переданное количество часов. 
  
  Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
   Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
  */

  document.getElementById("hw5.3").addEventListener("click", function () {
    function Time(hours, minutes, seconds) {
      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }

    var firstNumber = Time(20, 30, 45); //obj

    var showTime = function showTime(obj) {
      var hoursStr = obj.hours.toString();
      var minutesStr = obj.minutes.toString();
      var secondsStr = obj.seconds.toString();
      var strtime = "".concat(hoursStr, ",").concat(minutesStr, ",").concat(secondsStr);
      var arrTime = strtime.split(',');

      for (var i = 0; i < arrTime.length; i++) {
        if (arrTime[i] < 10) {
          arrTime[i] = "0" + arrTime[i];
        }
      }

      return "".concat(arrTime[0], " : ").concat(arrTime[1], " : ").concat(arrTime[2]);
    };

    var addSecondsInTime = function addSecondsInTime(obj, sec) {
      var seconds = obj.seconds + sec;
      var minutes = obj.minutes;
      var hours = obj.hours;

      if (seconds > 60) {
        seconds = seconds - 60;
        minutes += 1;

        if (minutes >= 60) {
          minutes = minutes - 60;
          hours += 1;
        }
      }

      var newObj = Time(hours, minutes, seconds);
      return showTime(newObj);
    };

    var addMinutesInTime = function addMinutesInTime(obj, min) {
      var seconds = obj.seconds;
      var minutes = obj.minutes + min;
      var hours = obj.hours;

      if (minutes >= 60) {
        minutes = minutes - 60;
        hours += 1;
      }

      var newObj = Time(hours, minutes, seconds);
      return showTime(newObj);
    };

    var addhoursInTime = function addhoursInTime(obj, h) {
      var seconds = obj.seconds;
      var minutes = obj.minutes;
      var hours = obj.hours + h;

      if (hours >= 24) {
        hours = hours - 24;
      }

      var newObj = Time(hours, minutes, seconds);
      return showTime(newObj);
    };

    console.log("\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F");
    console.log(showTime(firstNumber));
    console.log("\u041A \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 + 30 \u0441\u0435\u043A");
    console.log(addSecondsInTime(firstNumber, 30));
    console.log("\u041A \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 + 70 \u043C\u0438\u043D");
    console.log(addMinutesInTime(firstNumber, 70));
    console.log("\u041A \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 + 2 \u0447\u0430\u0441\u0430");
    console.log(addhoursInTime(firstNumber, 2));
    alert("\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438!");
  });
};

exports.hwObjects = hwObjects;
},{}],"js/arrays.js":[function(require,module,exports) {
"use strict";
/*Объекты*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwArrays = void 0;

var hwArrays = function hwArrays() {
  //1

  /* Создать массив «Список покупок». 
  Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
  Написать несколько функций для работы с таким массивом. */

  /* Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.*/

  /* Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
     необходимо увеличивать количество в существующей покупке, а не добавлять новую.*/

  /* Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */
  document.getElementById("hw6.1").addEventListener("click", function () {
    var shoppingList = [{
      name: "apples",
      quantity: 2,
      buy: false
    }, {
      name: "oranges",
      quantity: 3,
      buy: false
    }, {
      name: "bananas",
      quantity: 4,
      buy: false
    }, {
      name: "tomato",
      quantity: 4,
      buy: false
    }];

    var showShoppingList = function showShoppingList(arr) {
      arr.sort(function (a, b) {
        return a.buy - b.buy;
      });
      arr.forEach(function (item, i, arr) {
        console.log("".concat(i + 1, ".\t  \u041F\u0440\u043E\u0434\u0443\u043A\u0442: ").concat(item.name, " \t \t  \u041A\u043E\u043B-\u0432\u043E: ").concat(item.quantity, " \t \u041A\u0443\u043F\u0438\u043B\u0438: ").concat(item.buy));
      });
    };

    var addProductsInList = function addProductsInList(product) {
      var newObg = {};

      for (var key in shoppingList) {
        if (shoppingList[key].name === product) {
          shoppingList[key].quantity += 1;
          return "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product, " - \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A\"");
          ;
        }
      }

      newObg["name"] = product;
      newObg["quantity"] = 1;
      newObg["buy"] = false;
      shoppingList.push(newObg);
      return "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product, " - \u043E\u0442\u043C\u0435\u0447\u0435\u043D \u043A\u0430\u043A \"\u043A\u0443\u043F\u0438\u043B\u0438\"");
      ;
    };

    var markProductBought = function markProductBought(product) {
      for (var key in shoppingList) {
        if (shoppingList[key].name === product) {
          if (shoppingList[key].buy === false) {
            shoppingList[key].buy = true;
            return "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product, " - \u043E\u0442\u043C\u0435\u0447\u0435\u043D \u043A\u0430\u043A \"\u043A\u0443\u043F\u0438\u043B\u0438\"");
          } else if (shoppingList[key].buy === true) {
            //console.log( `Продукт ${product} - уже купили`);
            return "\u041F\u0440\u043E\u0434\u0443\u043A\u0442 ".concat(product, " - \u0443\u0436\u0435 \u043A\u0443\u043F\u0438\u043B\u0438");
          }
        }
      }
    };

    var answer = Number(prompt("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438! \n \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435: \n 1 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \n 2 - \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \n 3 - \u043A\u0443\u043F\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442", ''));

    while (answer) {
      switch (answer) {
        case 1:
          {
            console.log("\n \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432");
            showShoppingList(shoppingList);
            console.log("\n");
            break;
          }

        case 2:
          {
            var product = prompt("Введите название продукта:", '');
            addProductsInList(product);
            console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \"".concat(product, "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"));
            break;
          }

        case 3:
          {
            var productBought = prompt("Введите название продукта:", '');
            console.log(markProductBought(productBought));
            break;
          }
      }

      answer = Number(prompt("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435: \n 1 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \n 2 - \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \n 3 - \u043A\u0443\u043F\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442", ''));
    }
  }); //2

  /* Создать массив, описывающий чек в магазине. 
  Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
  
  /*Распечатка чека на экран;*/

  /*Подсчет общей суммы покупки;*/

  /*Получение самой дорогой покупки в чеке;*/

  /*Подсчет средней стоимости одного товара в чеке. */

  document.getElementById("hw6.2").addEventListener("click", function () {
    var check = [{
      name: "шляпа",
      quantity: 2,
      price: 300
    }, {
      name: "книга",
      quantity: 1,
      price: 150
    }, {
      name: "ручка",
      quantity: 1,
      price: 5
    }];

    var showCheck = function showCheck(arr) {
      console.log("\u041A\u0430\u0441\u0441\u043E\u0432\u044B\u0439 \u0427\u0435\u043A : ");
      arr.forEach(function (item, i, arr) {
        console.log("".concat(i + 1, ".\t ").concat(item.name, " \t \t  \u041A\u043E\u043B-\u0432\u043E: x ").concat(item.quantity, " \t  ").concat(item.price * item.quantity, " \u0433\u0440\u043D"));
      });
    };

    var calcSum = function calcSum(arr) {
      var sum = 0;
      arr.forEach(function (item, i, arr) {
        sum += item.price;
      });
      return sum;
    };

    var calcBiggestPurchase = function calcBiggestPurchase(arr) {
      var maxCost = 0;
      arr.forEach(function (item, i, arr) {
        if (item.price > maxCost) {
          maxCost = item.price;
          console.log("\u0421\u0430\u043C\u0430\u044F \u0434\u043E\u0440\u043E\u0433\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430 : ".concat(item.name, " - ").concat(maxCost, " \u0433\u0440\u043D"));
        }
      });
    };

    var calcAvarageCalc = function calcAvarageCalc(arr) {
      var amountSales = calcSum(arr);
      var sumProducts = 0;
      arr.forEach(function (item, i, arr) {
        sumProducts += item.quantity;
      });
      return (amountSales / sumProducts).toFixed(2);
    };

    showCheck(check);
    calcSum(check);
    calcBiggestPurchase(check);
    calcAvarageCalc(check);
    console.log("\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u0432 \u0447\u0435\u043A\u0435 : ".concat(calcAvarageCalc(check), " \u0433\u0440\u043D"));
    alert("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438!");
  }); //3

  /*Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
  Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
  Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
  добавив в открывающий тег атрибут style со всеми стилями,перечисленными в массиве. */

  document.getElementById("hw6.3").addEventListener("click", function () {
    var css = [{
      name: "color",
      value: "blue"
    }, {
      name: "font-size",
      value: "25px"
    }, {
      name: "text-transform",
      value: "uppercase"
    }];
    var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius tempore natus dolorem, doloribus nostrum possimus rerum. Ducimus praesentium eaque nihil blanditiis expedita, explicabo, in, quia tempore reprehenderit necessitatibus accusamus!';

    var showText = function showText(arr, text) {
      arr.forEach(function (item, i, arr) {
        document.write("<style> p {".concat(item.name, ":").concat(item.value, "}</style>"));
      });
      document.write("<p>".concat(text, "</p>"));
    };

    showText(css, text);
  }); //4

  /* Создать массив аудиторий академии. 
  Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, 
  для которого она предназначена. Написать несколько функций для работы с ним */

  /* Вывод на экран всех аудиторий; */

  /* Вывод на экран аудиторий для указанного факультета;*/

  /* Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
     Объект-группа состоит из названия, количества студентов и названия факультета;*/

  /* Функция сортировки аудиторий по количеству мест;*/

  /* Функция сортировки аудиторий по названию (по алфавиту). */

  document.getElementById("hw6.4").addEventListener("click", function () {
    var academyAudience = [{
      name: "Java Script 15aud.",
      seating: 10,
      faculty: "Frontend"
    }, {
      name: "C++ 16aud.",
      seating: 8,
      faculty: "Backend"
    }, {
      name: "UI/UX 17aud.",
      seating: 15,
      faculty: "Design"
    }, {
      name: "React.js 18aud.",
      seating: 30,
      faculty: "Frontend"
    }, {
      name: "Computer class 20aud.",
      seating: 8,
      faculty: "Backend"
    }, {
      name: "Painting 23aud.",
      seating: 5,
      faculty: "Design"
    }];

    var showAudience = function showAudience(arr) {
      console.log("\u2116\t \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \t\t\t\t \u041A\u043E\u043B-\u0432\u043E \u043C\u0435\u0441\u0442 \t\t \u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442");
      arr.forEach(function (item, i, arr) {
        console.log("".concat(i + 1, "\t ").concat(item.name, " \t\t\t ").concat(item.seating, " \t\t\t\t\t ").concat(item.faculty));
      });
    };

    var findAudienceForFculty = function findAudienceForFculty(arr, faculty) {
      var newArr = arr.filter(function (item) {
        if (item.faculty.toLowerCase() === faculty.toLowerCase()) {
          return true;
        }

        return false;
      });
      var res = showAudience(newArr);
      return res;
    };

    var sortAudienceBySeating = function sortAudienceBySeating(arr) {
      var newArr = arr.sort(function (a, b) {
        return a.seating - b.seating;
      });
      var res = showAudience(newArr);
      return res;
    };

    var sortAudienceByName = function sortAudienceByName(arr) {
      var newArr = arr.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      var res = showAudience(newArr);
      return res;
    };

    var findAudienceForGroup = function findAudienceForGroup(arr, group) {
      var newArr = arr.filter(function (item) {
        if (item.faculty.toLowerCase() === group.faculty.toLowerCase() && item.seating >= group.quantity) {
          // console.log(`нашло!`)
          return true;
        }

        return false;
      });
      var res = showAudience(newArr);
      return res;
    };

    var answer = Number(prompt("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438!\n                \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:\n                1 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A \n                2 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430\n                3 - \u043D\u0430\u0439\u0442\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B\n                4 - \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442\n                5 - \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439", ''));

    while (answer) {
      switch (answer) {
        case 1:
          {
            console.clear();
            console.log("\n \u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439");
            showAudience(academyAudience);
            console.log("\n");
            break;
          }

        case 2:
          {
            console.clear();
            var facultyUser = prompt("Введите название факультета:", '');
            console.log("\n \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430 ".concat(facultyUser, " :"));
            findAudienceForFculty(academyAudience, facultyUser);
            break;
          }

        case 3:
          {
            var group = {};
            console.log("\u0413\u0440\u0443\u043F\u043F\u0430:");
            var nameGroup = prompt("Введите название группы:", '');
            group['name'] = nameGroup;
            console.log("\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(group.name));
            var numberOfStudent = Number(prompt("Введите кол-во студентов:", ''));
            group['quantity'] = numberOfStudent;
            console.log("\u043A\u043E\u043B-\u0432\u043E \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432: ".concat(group.quantity));
            var facultyGroup = prompt("Введите название факультета:", '');
            group['faculty'] = facultyGroup;
            console.log("\u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442: ".concat(group.faculty));
            console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E\u0438\u0441\u043A\u0430:");
            findAudienceForGroup(academyAudience, group);
            break;
          }

        case 4:
          {
            console.clear();
            console.log("\n \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442 :");
            sortAudienceBySeating(academyAudience);
            break;
          }

        case 5:
          {
            console.clear();
            console.log("\n \u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443 :");
            sortAudienceByName(academyAudience);
            break;
          }
      }

      answer = Number(prompt("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:\n                1 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A \n                2 - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430\n                3 - \u043D\u0430\u0439\u0442\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F\u044B\n                4 - \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0432\u0441\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u043C\u0435\u0441\u0442\n                5 - \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0432\u0441\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439", ''));
    }
  });
};

exports.hwArrays = hwArrays;
},{}],"js/classes.js":[function(require,module,exports) {
"use strict";
/*Классы*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hwClasses = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hwClasses = function hwClasses() {
  //1
  document.getElementById("hw7.1").addEventListener("click", function () {
    /* Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:*/

    /* поле, хранящее радиус окружности;*/

    /* get-свойство, возвращающее радиус окружности;*/

    /* set-свойство, устанавливающее радиус окружности;*/

    /* get-свойство, возвращающее диаметр окружности;*/

    /* метод, вычисляющий площадь окружности;*/

    /* метод, вычисляющий длину окружности.*/

    /*  Продемонстрировать работу свойств и методов.  */
    var Circle = /*#__PURE__*/function () {
      function Circle(radius) {
        _classCallCheck(this, Circle);

        this.radius = radius;
      } //сво-ва


      _createClass(Circle, [{
        key: "calcArea",
        //методы
        value: function calcArea() {
          return this.radius * this.radius * 3.14;
        }
      }, {
        key: "calcLenght",
        value: function calcLenght() {
          return 2 * this.radius * 3.14;
        }
      }, {
        key: "radiusCircle",
        get: function get() {
          return this.radius;
        },
        set: function set(newRadius) {
          this.radius = newRadius;
        }
      }, {
        key: "diameterCircle",
        get: function get() {
          return this.radius * 2;
        }
      }]);

      return Circle;
    }();

    var a = new Circle(2);
    console.log("\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0434\u0438\u0443\u0441 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(a.radiusCircle));
    a.radiusCircle = 6;
    console.log("\u0418\u0437\u043C\u0435\u043D\u0451\u043D\u043D\u044B\u0439 \u0440\u0430\u0434\u0438\u0443\u0441 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(a.radiusCircle));
    console.log("\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(a.diameterCircle));
    console.log("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(a.calcArea()));
    console.log("\u0414\u043B\u0438\u043D\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438: ".concat(a.calcLenght()));
    alert("\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438!");
  }); //2

  document.getElementById("hw7.2").addEventListener("click", function () {
    /*Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:*/

    /* поле, которое хранит цвет маркера; */

    /* поле, которое хранит количество чернил в маркере (в процентах);*/

    /* метод для печати (метод принимает строку и выводит текст соответствующим цветом;
        текст выводится до тех пор, пока в маркере есть чернила;
        один не пробельный символ – это 0,5% чернил в маркере).*/

    /*Реализовать класс, описывающий заправляющийся маркер, 
    унаследовав его от простого маркера и добавив метод для заправки маркера.*/

    /* Продемонстрировать работу написанных методов. */
    var Marker = /*#__PURE__*/function () {
      function Marker(color, opacity) {
        _classCallCheck(this, Marker);

        this.color = color;
        this.opacity = opacity;
      } //method


      _createClass(Marker, [{
        key: "typeText",
        value: function typeText(str) {
          document.write("<div>");
          var res = 0;

          var _iterator = _createForOfIteratorHelper(str),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (this.opacity > 0) {
                document.write("<span style=\"color:".concat(this.color, "; opacity:").concat(this.opacity, "%\">").concat(item, "</span>"));

                if (item !== " ") {
                  this.opacity -= 0.5;
                  res = this.opacity;
                }
              } else {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          document.write("</div>");
          return res;
        }
      }]);

      return Marker;
    }();

    var FillMarker = /*#__PURE__*/function (_Marker) {
      _inherits(FillMarker, _Marker);

      var _super = _createSuper(FillMarker);

      function FillMarker(color, opacity) {
        _classCallCheck(this, FillMarker);

        return _super.call(this, color, opacity);
      } //method


      _createClass(FillMarker, [{
        key: "fillInMarker",
        value: function fillInMarker() {
          if (this.opacity === 0) {
            this.opacity = 100;
            document.write("\u0417\u0430\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0447\u0435\u0440\u043D\u0438\u043B\u0430 \u0432 \u043C\u0430\u0440\u043A\u0435\u0440\u0435 \u043D\u0430 ".concat(this.opacity, "%"));
          } else {
            document.write("\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0447\u0435\u0440\u043D\u0438\u043B\u0430 \u0432 \u043C\u0430\u0440\u043A\u0435\u0440\u0435: ".concat(this.opacity, "%"));
          }
        }
      }]);

      return FillMarker;
    }(Marker);

    var textRed = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At enim consequuntur labore nobis hic recusandae blanditiis adipisci ea minima! Doloribus itaque ipsum ullam reprehenderit nulla? Magni esse sit vitae autem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At enim consequuntur labore nobis hic recusandae blanditiis adipisci ea minima!";
    var textBlue = "Hello, Ulya! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
    var redMarker = new Marker("red", 100);
    var amountOfInk = redMarker.typeText(textRed);
    document.write("\u0427\u0435\u0440\u043D\u0438\u043B \u0432 \u043C\u0430\u0440\u043A\u0435\u0440\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C: ".concat(amountOfInk, "% \n"));
    var blueMarker = new FillMarker("blue", amountOfInk);
    blueMarker.fillInMarker();
    blueMarker.typeText(textBlue);
    blueMarker.fillInMarker();
  }); //3

  /* Реализовать класс Employee, описывающий работника, и создать массив работников банка.*/

  /* Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
  Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().*/

  /* Создать объект класса EmpTable и вывести на экран результат работы метода getHtml(). */

  document.getElementById("hw7.3").addEventListener("click", function () {
    var Employee = function Employee(name, position, salary) {
      _classCallCheck(this, Employee);

      this.name = name;
      this.position = position;
      this.salary = salary;
    };

    var EmpTable = /*#__PURE__*/function () {
      function EmpTable(arr) {
        _classCallCheck(this, EmpTable);

        this.arr = arr;
      }

      _createClass(EmpTable, [{
        key: "getHtml",
        value: function getHtml() {
          var table = document.createElement('table');
          var tbody = document.createElement('tbody');
          table.style.cssText = 'width:500px; height:100px; border: 1px solid white; border-collapse: collapse; color:white;';
          table.append(tbody);
          document.querySelector('.container').prepend(table);
          tbody.innerHTML = "\n                    <tr><th>\u2116</th><th>\u0418\u043C\u044F</th><th>\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C</th><th>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430</th></tr>\n                ";
          this.arr.forEach(function (item, i) {
            tbody.innerHTML += "\n                    <tr><td>".concat(i + 1, "</td><td>").concat(item.name, "</td><td>").concat(item.position, "</td><td>").concat(item.salary, "$</td></tr>\n                ");
          });
          var th = document.querySelectorAll('th');
          th.forEach(function (item) {
            item.style.cssText = 'border: 1px solid white;';
          });
          var td = document.querySelectorAll('td');
          td.forEach(function (item) {
            item.style.cssText = 'border: 1px solid white;';
          });
        }
      }]);

      return EmpTable;
    }();

    var employeeArr = [];
    var a = new Employee('Ulya', 'Frontend', 500);
    var b = new Employee('Bob', 'Backend', 600);
    var c = new Employee('Ann', 'Design', 400);
    employeeArr.push(a, b, c);
    var table = new EmpTable(employeeArr);
    table.getHtml();
  });
};

exports.hwClasses = hwClasses;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _jsBasic = require("./js/js-basic");

var _types = require("./js/types");

var _cycles = require("./js/cycles");

var _functions = require("./js/functions");

var _objects = require("./js/objects");

var _arrays = require("./js/arrays");

var _classes = require("./js/classes");

(0, _jsBasic.hwJsBasic)();
(0, _types.hwTypes)();
(0, _cycles.hwCycles)();
(0, _functions.hwFunction)();
(0, _objects.hwObjects)();
(0, _arrays.hwArrays)();
(0, _classes.hwClasses)();
},{"./js/js-basic":"js/js-basic.js","./js/types":"js/types.js","./js/cycles":"js/cycles.js","./js/functions":"js/functions.js","./js/objects":"js/objects.js","./js/arrays":"js/arrays.js","./js/classes":"js/classes.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60960" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-module.e31bb0bc.js.map