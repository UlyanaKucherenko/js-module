'use strict';
/*Типы данных и операторы*/

export const hwTypes = () => {
    //1
    document.getElementById("hw2.1").addEventListener("click", function() {
        const age = Number(prompt("Введите сколько вам лет?"," "));

        if(age>0 && age<12) {
            alert(`Вы ещё ребенок`);
            } else if(age>=12 && age<18) {
            alert(`Вы ещё подросток`);
                } else if(age>=18 && age<60) {
                    alert(`Вы уже взрослый `);
                    } else if(age>=60) {
                        alert(`Та Вы уже пенсионер! `);
                        } else{
                            alert(`ошибка ввода`);
                        }
        
    });

    //2
    document.getElementById("hw2.2").addEventListener("click", function() {
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

    });

    
    //3

    document.getElementById("hw2.3").addEventListener("click", function() {
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
    });

    
    //4
    document.getElementById("hw2.4").addEventListener("click", function() {
        const yearOfBirth = Number(prompt("Введите год своего рождения: ", " "));

        if(yearOfBirth % 400 === 0) {
            alert(`${yearOfBirth} - высокосный год`);
        } else if( (yearOfBirth % 4 === 0) && (yearOfBirth % 100 !== 0) ){
            alert(`${yearOfBirth} - высокосный год`);
        } else{
            alert(`${yearOfBirth} - НЕвысокосный год`);
        }
    });

    //5
    document.getElementById("hw2.5").addEventListener("click", function() {
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

    });

    //6
    document.getElementById("hw2.6").addEventListener("click", function() {
        const USD = Number(prompt('Введите сумму в USD :', " "));
        const EUR = 0.85;
        const UAN = 28.36;
        const AZN = 1.70;
        let result = 0;
        
        const selectCurrency = Number(prompt('Выберите в какую валюту перевести(введите цифру): 1-EUR 2-UAN 3-AZN', " "));
        
        switch(selectCurrency) {
            case 1: {
                result = USD * EUR;
                alert(`${USD}USD = ${result}EUR`);
                break;
            }
        
            case 2: {
                result = USD * UAN;
                alert(`${USD}USD = ${result}UAN`);
                break;
            }
        
            case 3: {
                result = USD * AZN;
                alert(`${USD}USD = ${result}AZN`);
                break;
            }
        
            default: {
                alert(`Ошибка ввода!`);
                break;
            }
        
        }

    });

    //7
    document.getElementById("hw2.7").addEventListener("click", function() {
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

    });

    //8
    document.getElementById("hw2.8").addEventListener("click", function() {
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

    });

    //9
    document.getElementById("hw2.9").addEventListener("click", function() {
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

    });

    
    //10
    document.getElementById("hw2.10").addEventListener("click", function() {
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

});
              
};




