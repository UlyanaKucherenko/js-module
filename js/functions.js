'use strict';
/*Функции*/

export const hwFunction = () => {
//1
/*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
 1 - если первое больше, чем второе; и 0 - если числа равны.*/

document.getElementById("hw4.1").addEventListener("click", function() {

    const firstNumber = Number(prompt('Введите первое число:', '2'));
    const secondNumber = Number(prompt(' Введите второе число:', '3'));
    
    const checkNumbers = (firstNumber, secondNumber) =>{
       if(firstNumber > secondNumber){
           return 1;
       }
       else if(firstNumber < secondNumber){
            return -1;
       }
       
        return 0;
    }

  alert(checkNumbers(firstNumber,secondNumber));
});

//2
/* Написать функцию, которая вычисляет факториал переданного ей числа. */

document.getElementById("hw4.2").addEventListener("click", function() {

    const userNumber = Number(prompt('Введите число:', '5'));
   
    const calcFactorial = (userNumber) =>{
        let  count = 1;
      for( let i = 1; i <= userNumber; i++){
        count *= i;
      }
        return ` Факториал числа ${userNumber} = ${count}`;
    }

  alert(calcFactorial(userNumber));
});

//3
/* Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
 Например: цифры 1, 4, 9 превратятся в число 149.*/

 document.getElementById("hw4.3").addEventListener("click", function() {

    const firstNumber = Number(prompt('Введите первое число:', '2'));
    const secondNumber = Number(prompt(' Введите второе число:', '3'));
    const thurdNumber = Number(prompt('Введите третье число:', '5'));
   
    const createNumber = (firstNumber, secondNumber, thurdNumber) =>{
        const a = firstNumber.toString();
        const b = secondNumber.toString();
        const c = thurdNumber.toString();
        return Number(a + b + c);
    }

  alert(createNumber(firstNumber, secondNumber, thurdNumber));
});

//4
/* Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
 Если в функции передали 1 параметр, то она вычисляет квадрата. */

document.getElementById("hw4.4").addEventListener("click", function() {

    const lengthRectangle = Number(prompt('Введите длину прямоугольника a =:', '5'));
    const widthRectangle = Number(prompt('Введите ширину прямоугольника b =:', '0'));
   
    const calcAreaRectangle = (lengthRectangle, widthRectangle) => {
        
        return (lengthRectangle * widthRectangle ) || lengthRectangle * 4;
    }

  alert(calcAreaRectangle(lengthRectangle, widthRectangle));
});

//5
/* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
 Совершенное число - это число, равное сумме всех своих собственных делителей. */

document.getElementById("hw4.5").addEventListener("click", function() {

    const userNumber = Number(prompt('Проверить является ли число совершенным. Введите число:', '6'));

    const checkNumberPerfect = (userNumber) => {
        let countSum = 0;
        for(let i = 1; i < userNumber; i++){
            if(userNumber % i === 0){
                countSum += i; 
            }
        }

        if( countSum === userNumber){
            return `${userNumber} - является совершенным`;
        }
        return `${userNumber} - НЕ является совершенным`;
    }

    alert(checkNumberPerfect(userNumber));

});

//6
/* Эта функция принимает минимальное и конечное значения для диапазона и выводит только те значения из диапазона, которые являются совершенными.
 Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.  */

document.getElementById("hw4.6").addEventListener("click", function() {

    const minNumberRange = Number(prompt(' Введите минимальное число диапазона:', '1'));
    const maxNumberRange = Number(prompt(' Введите максимальное число диапазона:', '30'));


    const checkNumberPerfect = (number) =>{
        let countSum = 0;
        for(let i = 1; i < number; i++){
            if(number % i === 0){
                countSum += i; 
            }
        }

        if( countSum === number){
          return true;
        }

        return false;
    }

    const showPerfectNumbersRange = (minNumberRange,maxNumberRange) => {

        let listPerfectNumbers = [];
      
        for ( let i = minNumberRange; i <= maxNumberRange; i++){

            let perfectNumber = checkNumberPerfect(i);

            if(perfectNumber){
                listPerfectNumbers.push(i);
            } 
        }  

        if(listPerfectNumbers.length === 0){
            return `В  диапазона [${minNumberRange} ; ${maxNumberRange}] Cовершенного числа НЕТ !` ;
        }
    
        return`В  диапазона [${minNumberRange} ; ${maxNumberRange}] Cовершенное число : ${listPerfectNumbers} `;
    }

    alert(showPerfectNumbersRange(minNumberRange,maxNumberRange));

});

//7
/* Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс»
 .Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00. */


 document.getElementById("hw4.7").addEventListener("click", function() {

    let hours = Number(prompt('Введите часы ЧЧ:', '4'));
    
    while(hours>24){
        alert(`Ошибка ввода! В часе не может быть больше 60 минут.`);
        hours = Number(prompt('Введите часы ЧЧ:', '4'));
     }

    let minutes = Number(prompt('Введите минуты ММ:', '40'));

    while(minutes>60){
        alert(`Ошибка ввода! В часе не может быть больше 60 минут.`);
        minutes = Number(prompt('Введите минуты ММ:', '40'));
     }

    let seconds = Number(prompt('Введите секнды СС:', '10'));
    
    while(seconds>60){
        alert(`Ошибка ввода! В минуте не может быть больше 60 секунд.`);
        seconds = Number(prompt('Введите секнды СС:', '10'));
     }    

    const showTime = (hours, minutes, seconds ) => {

        hours = hours.toString();
        minutes = minutes.toString();
        seconds = seconds.toString();
        
        if(hours.length === 1){
            hours = "0" + hours;
            }
        
        if(minutes.length === 1){
            minutes = "0" + minutes;
        }
        
        if(seconds.length === 1){
            seconds = "0" + seconds;
        }

        return ` Ваше время: ${hours} : ${minutes} : ${seconds}` ;
    }
    alert(showTime(hours, minutes, seconds));
 });

 //8
 /* Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.*/

 document.getElementById("hw4.8").addEventListener("click", function() {

    let hours = Number(prompt('Введите часы ЧЧ:', '1'));
    
    while(hours > 24){
        alert(`Ошибка ввода! В часе не может быть больше 24 часов.`);
        hours = Number(prompt('Введите часы ЧЧ:', '1'));
     }

    let minutes = Number(prompt('Введите минуты ММ:', '20'));

    while(minutes > 60){
        alert(`Ошибка ввода! В часе не может быть больше 60 минут.`);
        minutes = Number(prompt('Введите минуты ММ:', '20'));
     }

    let seconds = Number(prompt('Введите секнды СС:', '30'));
    
    while(seconds > 60){
        alert(`Ошибка ввода! В минуте не может быть больше 60 секунд.`);
        seconds = Number(prompt('Введите секнды СС:', '30'));
     }    

    const showTimeSeconds = (hours, minutes, seconds ) => {

        let hoursStr = hours.toString();
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();
        
        if(hoursStr.length === 1){
            hoursStr = "0" + hoursStr;
            }
        
        if(minutesStr.length === 1){
            minutesStr = "0" + minutesStr ;
        }
        if(secondsStr.length === 1){
            secondsStr = "0" + secondsStr;
        }

       const timeSeconds = hours * 3600 + minutes * 60 + seconds;
        return ` Ваше время: ${hoursStr} : ${minutesStr} : ${secondsStr}   Ваше время: ${timeSeconds} сек.` ;

    }
    alert(showTimeSeconds(hours, minutes, seconds));
 });

 //9
 /* Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды
  и возвращает в виде строки «чч:мм:сс». */

 document.getElementById("hw4.9").addEventListener("click", function() {

    const timeSeconds = Number(prompt('Введите времмя в секундах:', '120'));
    
    const trasferTime = (timeSeconds) => {

        const hours =  Math.floor(timeSeconds / 3600) ;
        const minutes = Math.floor((timeSeconds%3600)/60);
        const seconds = timeSeconds % 60;
       
        let hoursStr = hours.toString();
        let minutesStr = minutes.toString();
        let secondsStr = seconds.toString();

        const strtime = `${hoursStr},${minutesStr},${secondsStr}`;
        const arrTime = strtime.split(',');

        for(let i = 0; i < arrTime.length; i++ ) {
            if( arrTime[i] < 10 ){
                arrTime[i] = "0" + arrTime[i];
                }
        }

        return `Ваше время : ${timeSeconds} сек. - это  ${arrTime[0]} : ${arrTime[1]} : ${arrTime[2]}`;

    };
    alert(trasferTime(timeSeconds));
 });

 //10
 /* Написать функцию, которая считает разницу между датами.
  Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
  При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
   узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс» */

document.getElementById("hw4.10").addEventListener("click", function() {
 
    let hoursFirstUser = Number(prompt('Введите 1-е время : Часы  :', '3'));
    let minutesFirstUser = Number(prompt('Введите 1-е время : Минуты  :', '20'));
    let secondsFirstUser = Number(prompt('Введите 1-е время: секнды :', '50'));


    let hoursSecondUser = Number(prompt('Введите 2-е время: Часы  :', '4'));
    let minutesSecondUser = Number(prompt('Введите 2-е время: Минуты :', '30'));
    let secondsSecondUser = Number(prompt('Введите 2-е время: секнды :', '36'));

    const  calcTimeDifference = (hFirst, mFirst, sFirst, hSecond, mSecond, sSecond) => {
        // найти разницу в секундах
        
        const timeSecondsFirst = hFirst * 3600 + mFirst * 60 + sFirst; 
        const timeSecondsSecond = hSecond * 3600 + mSecond * 60 + sSecond; 
        let timeDifferenceInSeconds = 0;
        if(timeSecondsFirst>timeSecondsSecond){
            timeDifferenceInSeconds = timeSecondsFirst - timeSecondsSecond;
        }
        else{
            timeDifferenceInSeconds = timeSecondsSecond - timeSecondsFirst ;
        }

        const timeDifferenceInHours = transferTimeInHours(timeDifferenceInSeconds);
       
            return timeDifferenceInHours ; //разница в часах
        }

    const drowTimeInHours = (hours, minutes, seconds) => {
        //перевести секунды в часы
    
        const hoursStr = hours.toString();
        const minutesStr = minutes.toString();
        const secondsStr = seconds.toString();

        const strtime = `${hoursStr},${minutesStr},${secondsStr}`;
        const arrTime = strtime.split(',');
        
        for(let i = 0; i < arrTime.length; i++ ) {
            if( arrTime[i] < 10 ){
                arrTime[i] = "0" + arrTime[i];
                }
        }

        return `${arrTime[0]} : ${arrTime[1]} : ${arrTime[2]}`;
    
    }

    const transferTimeInHours  = (timeSeconds) => {
        //перевести часы  в секунды
       
            const hours =  Math.floor(timeSeconds / 3600) ;
            const minutes = Math.floor((timeSeconds%3600)/60);
            const seconds = timeSeconds % 60;
        
            const timeInHour = drowTimeInHours(hours, minutes, seconds);

            return timeInHour;

    }

    const showTimeDifference = (hFirst, mFirst, sFirst, hSecond, mSecond, sSecond) => {
            //покажи разницу в часах
            
        let timeDifferenceInHours= calcTimeDifference (hFirst, mFirst, sFirst, hSecond, mSecond, sSecond);
        return timeDifferenceInHours;
    }

        
    const firstTime = drowTimeInHours(hoursFirstUser, minutesFirstUser, secondsFirstUser);
    const secondTime = drowTimeInHours(hoursSecondUser, minutesSecondUser, secondsSecondUser); 
    const differentTime = showTimeDifference(hoursFirstUser, minutesFirstUser, secondsFirstUser, hoursSecondUser, minutesSecondUser, secondsSecondUser);
   
    alert(`
        Первое время: ${firstTime}
        Второе время: ${secondTime}
        Разница между ними: ${differentTime}
    `);
});

};