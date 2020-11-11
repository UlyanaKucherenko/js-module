'use strict';
/*Объекты*/


export const hwObjects = () => {
    

//1
/* Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
и следующие функции для работы с этим объектом:

Функция для вывода на экран информации об автомобиле;

Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/


document.getElementById("hw5.1").addEventListener("click", function() {

const car = {
    munufacturer:"Japan",
    model: "Subaru Forester",
    year : 2010,
    "speed average": 40
}

const showInfoCar = () => {

    for(let key in car) {
            console.log(`${key} : ${car[key]}`);
        }
}
  
    console.log(`Информация об автомобиле:`);
    showInfoCar();
    alert(`Результат в консоле!`)

const distance = Number(prompt("Введите расстояние: ","800"));

    const calcTime = (distance, speed) => {

        let time = distance / speed;
        if(time > 4) {
            time = time + Math.floor(time/4);
            return time;
        }

        return time;
    }

    const resTime = calcTime(distance, car[ "speed average"]);
    console.log(`Время для преодоления ${distance}км со средней скоростью ${car[ "speed average"]} км/ч:
    ${resTime} часов`);


});

//2

/*  Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

Функция сложения 2-х объектов-дробей;

Функция вычитания 2-х объектов-дробей;

Функция умножения 2-х объектов-дробей;

Функция деления 2-х объектов-дробей;

Функция сокращения объекта-дроби. */

document.getElementById("hw5.2").addEventListener("click", function() {

    function Fraction(upNumber,downNumber){
        return {upNumber:upNumber, downNumber:downNumber};
    }

    const firstNumber = Fraction(1,10); //obj1
    const secondNumber = Fraction(2,15); //obj2


    const sumFraction = (obj1,obj2) => {
        const resultDownNumber = obj1.downNumber * obj2.downNumber;
        const value1 = obj1.upNumber * (resultDownNumber / obj1.downNumber);
        const value2 = obj2.upNumber * (resultDownNumber / obj2.downNumber)
        const resultUpNumber = value1 + value2;

        return reducFraction(resultUpNumber,resultDownNumber);
    } 

    const subFraction = (obj1,obj2) => {
        const resultDownNumber = obj1.downNumber * obj2.downNumber;
        let resultUpNumber = 0;
        const value1 = obj1.upNumber * (resultDownNumber / obj1.downNumber);
        const value2 = obj2.upNumber * (resultDownNumber / obj2.downNumber)
    
        resultUpNumber = value1 - value2 ;
    
        return reducFraction(resultUpNumber,resultDownNumber);
    } 

    const multiFraction = (obj1,obj2) => {
        const resultDownNumber = obj1.downNumber * obj2.downNumber;
        const resultUpNumber = obj1.upNumber * obj2.upNumber;
    
    return reducFraction(resultUpNumber,resultDownNumber);
    }

    const divisFraction = (obj1,obj2) =>{
        const resultDownNumber = obj1.downNumber * obj2.upNumber;
        const resultUpNumber = obj1.upNumber * obj2.downNumber;
    
    return reducFraction(resultUpNumber,resultDownNumber);
    }

    const reducFraction = (upNumber, downNumber) => {

        let resultUpNumber = 1;
        let resultDownNumber = 1;

        //если значение отрицательное
        if(upNumber < 0) {
            upNumber = upNumber * -1 ;
            for (let i = 0; i <= upNumber ; i++) {

                if(  upNumber % i === 0 && downNumber % i === 0) {
                    resultUpNumber = upNumber / i;
                    resultDownNumber = downNumber / i;
                }
                
            }

            return `${-resultUpNumber}/${resultDownNumber}`;
        }


        for (let i = 0; i <= upNumber ; i++) {

            if(  upNumber % i === 0 && downNumber % i === 0) {
                resultUpNumber = upNumber / i;
                resultDownNumber = downNumber / i;
            }
        }
        return `${resultUpNumber}/${resultDownNumber}`;
    }

    console.log(`Первое число: 1/10 Второе число: 2/15`);

    console.log(`Сумма:`);
    console.log(sumFraction(firstNumber,secondNumber));

    console.log(`Разница: `);
    console.log(subFraction(firstNumber,secondNumber));

    console.log(`Умножение: `);
    console.log(multiFraction(firstNumber,secondNumber));

    console.log(`Деление:`);
    console.log(divisFraction(firstNumber,secondNumber));

    alert(`результат в консоли!`);

});

//3
/*Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
Функция вывода времени на экран;

Функция изменения времени на переданное количество секунд;

Функция изменения времени на переданное количество минут;

Функция изменения времени на переданное количество часов. 

Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
 Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
*/

document.getElementById("hw5.3").addEventListener("click", function() {

    function Time(hours, minutes, seconds){
        return {hours:hours, minutes:minutes, seconds:seconds};
    }

    const firstNumber = Time(20,30,45); //obj

    const showTime = (obj) => {

        const hoursStr = obj.hours.toString();
        const minutesStr = obj.minutes.toString();
        const secondsStr = obj.seconds.toString();

        const strtime = `${hoursStr},${minutesStr},${secondsStr}`;
        const arrTime = strtime.split(',');
            
        for(let i = 0; i < arrTime.length; i++ ) {
            if( arrTime[i] < 10 ){
                arrTime[i] = "0" + arrTime[i];
                }
            }

        return `${arrTime[0]} : ${arrTime[1]} : ${arrTime[2]}`;
    }

    const addSecondsInTime = (obj, sec) => {

        let seconds = obj.seconds + sec;
        let minutes = obj.minutes;
        let hours = obj.hours;

        if(seconds > 60){
            seconds = seconds - 60;
            minutes += 1; 
            if(minutes >= 60) {
                minutes = minutes - 60;
                hours += 1;
            }
        }

        const newObj = Time(hours,minutes,seconds);
        return showTime(newObj);

    }

    const addMinutesInTime = (obj, min) => {

        let seconds = obj.seconds;
        let minutes = obj.minutes + min;
        let hours = obj.hours;

            if(minutes >= 60) {
                minutes = minutes - 60;
                hours += 1;
            }

        const newObj = Time(hours,minutes,seconds);
        return showTime(newObj);

    }

    const addhoursInTime = (obj, h) => {

        let seconds = obj.seconds;
        let minutes = obj.minutes;
        let hours = obj.hours + h;

            if(hours >= 24) {
                hours = hours - 24;
            }

        const newObj = Time(hours,minutes,seconds);
        return showTime(newObj);

    }

    console.log(`Основное время`);
    console.log(showTime(firstNumber));
    console.log(`К основному времени + 30 сек`);
    console.log(addSecondsInTime(firstNumber, 30));
    console.log(`К основному времени + 70 мин`);
    console.log(addMinutesInTime(firstNumber, 70));
    console.log(`К основному времени + 2 часа`);
    console.log(addhoursInTime(firstNumber, 2));

    alert(`результат в консоли!`);

});

};