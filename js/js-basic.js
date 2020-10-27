'use strict';


//1
/*
const name = prompt('Введи своё имя :','');
alert(`Привет, ${name} !`);
*/
//2
/*
const thisYear = 2020;

const yearBorn = Number(prompt("Введи год cвоего рождения: "," "));
const yearsOld = thisYear - yearBorn;
alert(`Тебе ${yearsOld} лет!`);
*/
//3
/*
const sideOfSquare = Number(prompt("Введите длину стороны квадрата(в см): а = ",""));
const perimeterSquare = sideOfSquare * 4;
alert(`Периметр квадрата равен ${perimeterSquare} см`);
*/
//4
/*
const pi =3.14;

const radius = Number(prompt("Введите радиус окружности : r = "," "));
const areaOfCircle = pi * radius * radius;
alert(`Площадь окружности равна ${areaOfCircle} `);
*/
//5
/*
const distance = Number(prompt("Введите расстояние между городами (в км) : L = ", " "));
const time = Number(prompt("Введите время, за которое хотите добраться (в часах) : t = "," "));

const speed = distance / time;
alert(`Нужная скорость равна ${speed} км/ч `);
*/
//6
/*
const rate= 0.85;

const dollar = Number(prompt("Введите сумму в долларах : ", " "));
const euro = (dollar * rate).toFixed(2);

alert(`${dollar} USD =  ${ euro} EUR `);
*/

//7
/*
const fileSize = 820;
const Gb = Number(prompt("Введите количество ГБ в флешке: ", " "));
const fils = Math.floor((Gb * 1000) / fileSize);

alert(` В флешке на ${Gb} Гб поместиться -  ${fils} файлов с размером по ${fileSize} Мб`);
*/
//8

/*
const money = Number(prompt("Введите количество денег: ", " "));
const priceOneChocolate = Number(prompt("Введите сколько стоит одна шоколадка: ", " "));

const nomberOfChocolates =((money/ priceOneChocolate)).toFixed(2);
const balance = (money - (priceOneChocolate * nomberOfChocolates)).toFixed(2);


console.log(` 
            Всего денег = ${money} грн
            1 шоколадка = ${priceOneChocolate} грн
            Кол-во шоколадок, которые может купить = ${nomberOfChocolates} шт
            Остаток на счету = ${balance} грн`
            ); 

alert(`Остаток на счету = ${balance} грн`);

*/

//9
/*
const numberUser = Number(prompt("Введите трёхзначное число: ", " "));

const first = Math.floor(numberUser*0.01);
const second = Math.floor(numberUser*0.1) % 10;
const third = numberUser % 10;

const result = third * 100 + second * 10 + first;

alert(` ${result}`);
*/

//10

/* (Сумма нач. * % ставка * к-во дней начисления % / к-во дней в году) / 100. */
/*
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

*/