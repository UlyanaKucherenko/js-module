'use strict';
/*Циклы*/

export const hwCycles = () => {
//1
/*Подсчитать сумму всех чисел в заданном пользователем диапазоне.*/

document.getElementById("hw3.1").addEventListener("click", function() {
    const firstNumberRange = Number(prompt('Введите диапозон чисел. Введите число ОТ:', '1'));
    const lastNumberRange = Number(prompt(' Введите число ДО:', '10'));
    let sumOfNumbers = 0;

    for( let i = firstNumberRange; i <= lastNumberRange ; i++){
        sumOfNumbers +=i;
    }

    alert(`Сумма чисел в диапозоне [${firstNumberRange} ; ${lastNumberRange}] будет ${sumOfNumbers}`);
});

//2
/*Запросить 2 числа и найти только наибольший общий делитель.*/

document.getElementById("hw3.2").addEventListener("click", function() {
    const firstNumberUser = Number(prompt('Введите первое число:', '24'));
    const secondNumberUser = Number(prompt(' Введите второе число:', '12'));
    let firstListOfNumbers = [];
    let secondListOfNumbers = [];
    
    for (let i = 1; i <= firstNumberUser; i++) {
        if(firstNumberUser % i === 0) {
            firstListOfNumbers.push(i);
        }
    }
    for (let i = 1; i <= secondNumberUser; i++) {
        if(secondNumberUser % i === 0) {
            secondListOfNumbers.push(i);
        }
    }
    
    let maxDivider = 0;
    for (let i = 0; i < firstListOfNumbers.length; i++) {
        for (let j = 0; j < secondListOfNumbers.length; j++) {
             if(firstListOfNumbers[i] === secondListOfNumbers[j] ){

                if(maxDivider > firstListOfNumbers[i]){
                    continue;
                }

                else if(maxDivider < firstListOfNumbers[i]){
                    maxDivider = firstListOfNumbers[i];
                }
             }
        } 
    }
   
    alert(`Наибольший общий делитель чисел ${firstNumberUser} и ${secondNumberUser} будет ${maxDivider}`);
});

//3
//Запросить у пользователя число и вывести все делители этого числа.

document.getElementById("hw3.3").addEventListener("click", function() {
    const numberUser = Number(prompt('Введите число:', '48'));
    let arrDivisors = [];
    for(let i = 1; i<=numberUser;i++) {
        if(numberUser % i == 0) {
            arrDivisors.push(i);
        }
    }

    alert(`Делители числа ${numberUser} : ${arrDivisors}`);
});

//4
/*Определить количество цифр в введенном числе.*/

document.getElementById("hw3.4").addEventListener("click", function() {
    const numberUser = Number(prompt('Введите число:', '123'));
    let sumOfDigits = numberUser.toString().length; 

    alert(`Кол-во цифр в числе ${sumOfDigits} `);
});

//5
/*Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.*/

document.getElementById("hw3.5").addEventListener("click", function() {
    const amountOfNumbers = Number(prompt('Сколько будете вводить чисел?:', '3'));
    let positiveListNumbers = 0 ;
    let negativeListNumbers = 0 ;
    let listOfZero = 0;
    let evenNumbers = 0;
    let oddNumbers = 0;
    let arrOfNumbers = [];
    for (let i = 0; i < amountOfNumbers; i++)
    {
        let userNumber = Number(prompt(`Введите ${i+1} число(-5,6,0...):`, ''));
        arrOfNumbers.push(userNumber);

        if(userNumber !== 0){

            if(userNumber % 2 === 0) {
                evenNumbers += 1;

                if(userNumber > 0){
                    positiveListNumbers +=1;
                }
                else{
                     negativeListNumbers +=1;
                }
            }
            else{
                oddNumbers += 1;

                if(userNumber > 0){
                    positiveListNumbers +=1;
                }
                else{
                     negativeListNumbers +=1;
                }
            }
        }

        else {
            listOfZero +=1;
        }

    }

    alert(` 
    Введённые Числа : ${arrOfNumbers}
    позитивные : ${positiveListNumbers};
    отрицательные : ${negativeListNumbers};
    нули : ${listOfZero};
    чётных : ${evenNumbers};
    нечётных : ${oddNumbers};
    `);
   
});

//6
/*Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
вывести результат и спросить, хочет ли он решить еще один пример.
 И так до тех пор, пока пользователь не откажется.*/

document.getElementById("hw3.6").addEventListener("click", function() {

    let continueCalc = Number(prompt('Запустить калькулятор?', ''));

    while(continueCalc){

    const firstNumberUser = Number(prompt('Введите первое число:', '2'));
    const operator = prompt('Введите [+ - / *]:', '');
    const secondNumberUser = Number(prompt(' Введите второе число:', '2'));
    let result = 0;
    switch(operator) {
        case '+': {
          result = firstNumberUser + secondNumberUser;
          break;
        }
        case '-': {
            result = firstNumberUser - secondNumberUser;
            break;
        }
        case '/': {
            result = firstNumberUser / secondNumberUser;
            break;
          }
          case '*': {
            result = firstNumberUser * secondNumberUser;
            break;
          }
          default: {
            alert(`Ошибка ввода!`);
            break;
          }
    }
    alert(`${result}`);

    continueCalc = Number(prompt('Продолжить? ', ''));
};

});

//7
/*Запросить у пользователя число и на сколько цифр его сдвинуть. 
Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).*/

document.getElementById("hw3.7").addEventListener("click", function() {

   const userNumber = Number(prompt('Введите число:', '123456'));
   const digitShift = Number(prompt('На сколько цифр сдвинуть число?:', '2'));
   let userNumberString = userNumber.toString().split("");
    let partUserNumber ;
    let i = 0;
    while(i < digitShift){
        partUserNumber = userNumberString.shift();
        userNumberString.push(partUserNumber);
        i++;
    }
    alert(userNumberString.join(""));
    
});

//8
/* Зациклить вывод дней недели таким образом: «День недели.
 Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/ 

document.getElementById("hw3.8").addEventListener("click", function() {
    const daysOfWek = ['Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday','Sunday'];
    let i = 0;
    for(; ;) {
        if(i === daysOfWek.length){
            i = 0;
        }
        let nextDay = confirm(`${daysOfWek[i]}. Хотите увидеть следующий день?`);
        i++;
        if(!nextDay){
            break;
        }
    }
});

//9
/* Вывести таблицу умножения для всех чисел от 2 до 9. 
Каждое число необходимо умножить на числа от 1 до 10. */

document.getElementById("hw3.9").addEventListener("click", function() {
   for(let i = 2; i <= 9; i++){
    console.log(`Умножение на ${i} :`);
    for(let j = 1; j <= 10; j++){

        let res = i * j;
        console.log(`${j}*${i} = ${res}`)
    }
   }
   alert(`Таблица умножения.  Результат выведен в консоль!`)
});

//10
/* Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100.
И так до тех пор, пока пользователь не выберет == N. */

 document.getElementById("hw3.10").addEventListener("click", function() {

    let firtstNumberRange = 0;
    let lastNumberRange = 100;
    let rangeOfNumbers;

    let  startGame = confirm(`Игра «Угадай число» . Хотите начать игру?`);
    if(startGame){
        alert('Загадайте число от 0 до 100 !');
    }

    while(startGame){
        
    let  N = Math.floor((lastNumberRange - firtstNumberRange) / 2) + firtstNumberRange; //50 ;

       rangeOfNumbers = prompt(`
       Нажмите ">"  Ваше число > ${N}  
       Нажмите "<"  Ваше число < ${N}  
       Нажмите "="  Ваше число = ${N} `, '');

        if(!rangeOfNumbers) break;

        switch(rangeOfNumbers){
            case '>': {
                firtstNumberRange = N + 1;
                lastNumberRange = lastNumberRange;
                break;
            }
            case '<': {
                lastNumberRange = N;
                firtstNumberRange = firtstNumberRange;
                break;
            }

            case '=': {
                alert(`Вы загадали число ${N} !`);
                break;
            }

            default :{
                alert(`ошибка ввода !`);
                break;
            }

        }
       
        if (rangeOfNumbers ==='='){
            startGame = confirm(`Хотите продолжить игру?`);
        }
    }
    
});
  
};