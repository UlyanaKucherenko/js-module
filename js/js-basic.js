'use strict';
/*Осныва JS*/

export const hwJsBasic = () => {
//1

  document.getElementById("hw1.1").addEventListener("click", function() {
  const name = prompt('Введи своё имя :','');
  alert(`Привет, ${name} !`);
});

//2 

  document.getElementById("hw1.2").addEventListener("click", function() {
    const thisYear = 2020;
    const yearBorn = Number(prompt("Введи год cвоего рождения: "," "));
    const yearsOld = thisYear - yearBorn;
    alert(`Тебе ${yearsOld} лет!`);
  });
     
   //3

  document.getElementById("hw1.3").addEventListener("click", function() {
    const sideOfSquare = Number(prompt("Введите длину стороны квадрата(в см): а = ",""));
    const perimeterSquare = sideOfSquare * 4;
    alert(`Периметр квадрата равен ${perimeterSquare} см`);
  });
    
  //4
  document.getElementById("hw1.4").addEventListener("click", function() {
    const pi =3.14;

    const radius = Number(prompt("Введите радиус окружности : r = "," "));
    const areaOfCircle = pi * radius * radius;
    alert(`Площадь окружности равна ${areaOfCircle} `);

  });

  //5
  document.getElementById("hw1.5").addEventListener("click", function() {
    const distance = Number(prompt("Введите расстояние между городами (в км) : L = ", " "));
    const time = Number(prompt("Введите время, за которое хотите добраться (в часах) : t = "," "));

    const speed = distance / time;
    alert(`Нужная скорость равна ${speed} км/ч `);

  });

  //6

  document.getElementById("hw1.6").addEventListener("click", function() {
    const rate= 0.85;
    const dollar = Number(prompt("Введите сумму в долларах : ", " "));
    const euro = (dollar * rate).toFixed(2);

    alert(`${dollar} USD =  ${ euro} EUR `);
  });

      //7

    document.getElementById("hw1.7").addEventListener("click", function() {
      const fileSize = 820;
      const Gb = Number(prompt("Введите количество ГБ в флешке: ", " "));
      const fils = Math.floor((Gb * 1000) / fileSize);

      alert(` В флешке на ${Gb} Гб поместиться -  ${fils} файлов с размером по ${fileSize} Мб`);
    });

   
      //8

    document.getElementById("hw1.8").addEventListener("click", function() {
      const money = Number(prompt("Введите количество денег: ", " "));
      const priceOneChocolate = Number(prompt("Введите сколько стоит одна шоколадка: ", " "));
        
      const numberOfChocolates = Math.floor(money/ priceOneChocolate);
      const balance = (money - (priceOneChocolate * numberOfChocolates)).toFixed(2);
        
      console.log(` 
                    Всего денег = ${money} грн
                    1 шоколадка = ${priceOneChocolate} грн
                    Кол-во шоколадок, которые может купить = ${numberOfChocolates} шт
                    Остаток на счету = ${balance} грн`
                    ); 
        
      alert(`Остаток на счету = ${balance} грн`);
    });
      

      //9

    document.getElementById("hw1.9").addEventListener("click", function() {
      const numberUser = Number(prompt("Введите трёхзначное число: ", " "));

      const first = Math.floor(numberUser*0.01);
      const second = Math.floor(numberUser*0.1) % 10;
      const third = numberUser % 10;

      const result = third * 100 + second * 10 + first;

      alert(` ${result}`);
    });
  
      //10
      /* (Сумма нач. * % ставка * к-во дней начисления % / к-во дней в году) / 100. */
    document.getElementById("hw1.10").addEventListener("click", function() {
      const depositAmount = Number(prompt("Введите сумму вклада в банк: ", " "));
      const percentDepositYear = 5;
      const daysOfYear = 365;
      const daysOfTwoMonth = 61;

      const sumInteresPercent = ( (( depositAmount * percentDepositYear * daysOfTwoMonth ) / daysOfYear) / 100 ).toFixed(2);

      console.log(`
        Сумму вклада в банк = ${depositAmount}
        Процентная ставка депозита ${percentDepositYear}% годовых
        Кол-во дней в году = ${daysOfYear}
        кол-во дней вклада = ${daysOfTwoMonth} дней (2месяцa)
        Сумма начисленных процентов = ${sumInteresPercent} грн `);

      alert(`Сумма начисленных процентов = ${sumInteresPercent} грн`);
    });

  };