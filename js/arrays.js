"use strict";
/*Объекты*/

export const hwArrays = () => {
//1
/* Создать массив «Список покупок». 
Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
Написать несколько функций для работы с таким массивом. */

/* Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.*/
/* Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
   необходимо увеличивать количество в существующей покупке, а не добавлять новую.*/
/* Покупка продукта. Функция принимает название продукта и отмечает его как купленный. */

    document.getElementById("hw6.1").addEventListener("click", function() {


    let shoppingList = [
        {
            name : "apples",
            quantity : 2,
            buy : false
        },

        {
            name : "oranges",
            quantity : 3,
            buy : false
        },

        {
            name : "bananas",
            quantity : 4,
            buy : false
        },

        {
            name : "tomato",
            quantity : 4,
            buy : false
        }
    ];


    const showShoppingList = (arr) => {

        arr.sort((a,b) => {
            return a.buy - b.buy;
        });

        arr.forEach( (item, i, arr) => {
            console.log(`${i+1}.\t  Продукт: ${item.name} \t \t  Кол-во: ${item.quantity} \t Купили: ${item.buy}`);
        });
    }

    const addProductsInList = (product) => {



        let newObg = {};

        for( let key in shoppingList){
        
            if (shoppingList[key].name === product) {
                shoppingList[key].quantity += 1;
                
                return `Продукт ${product} - добавлен в список"`;;
            }
        }

        newObg["name"] = product;
        newObg["quantity"] = 1;
        newObg["buy"] = false;
        shoppingList.push(newObg);
        return `Продукт ${product} - отмечен как "купили"`;;
    
    }

    const markProductBought = (product) => {
        
        for( let key in shoppingList){
        
            if (shoppingList[key].name === product ) {
            
                if(shoppingList[key].buy === false){

                    shoppingList[key].buy = true;
                    return `Продукт ${product} - отмечен как "купили"`;
                }

                else if (shoppingList[key].buy === true){
                    //console.log( `Продукт ${product} - уже купили`);
                    return `Продукт ${product} - уже купили`;
                }    
                
            }
        
        }
    }


    let answer = Number(prompt(`Результаты в консоли! \n Выберите действие: \n 1 - посмотреть список \n 2 - добавить продукт в список \n 3 - купить продукт`,''));

    while(answer) {

        switch(answer) {
            case 1: {
                console.log(`\n Список продуктов`);
                showShoppingList(shoppingList);
                console.log(`\n`);
                break;
            }
            case 2: {
                const product = prompt("Введите название продукта:", '');
                addProductsInList(product);
                console.log(`Продукт "${product}" добавлен в список`);
                break;
            }
            case 3: {
                const productBought = prompt("Введите название продукта:", '')
                console.log(markProductBought(productBought));
                break;
            }
        }
            
        answer = Number(prompt(`Выберите действие: \n 1 - посмотреть список \n 2 - добавить продукт в список \n 3 - купить продукт`,''));
    }

    
});

//2
/* Создать массив, описывающий чек в магазине. 
Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

/*Распечатка чека на экран;*/
/*Подсчет общей суммы покупки;*/
/*Получение самой дорогой покупки в чеке;*/
/*Подсчет средней стоимости одного товара в чеке. */

    document.getElementById("hw6.2").addEventListener("click", function() {

    let check = [
        {
            name: "шляпа",
            quantity : 2,
            price : 300
        },

        {
            name: "книга",
            quantity : 1,
            price : 150
        },
        {
            name: "ручка",
            quantity : 1,
            price : 5
        }
    ];

    const showCheck = (arr) => {
        console.log(`Кассовый Чек : `);
        arr.forEach( (item, i, arr) => {
            console.log(`${i+1}.\t ${item.name} \t \t  Кол-во: x ${item.quantity} \t  ${item.price * item.quantity} грн`);
        });
    };

    const calcSum = (arr) => {
        let sum = 0;
        arr.forEach( (item, i, arr) => {
            sum += item.price;
        });
        
        return sum;

    };

    const calcBiggestPurchase = (arr) => {
        let maxCost = 0;
        arr.forEach( (item, i, arr) => {
            if(item.price > maxCost) {
                maxCost = item.price;
            console.log( `Самая дорогая покупка : ${item.name} - ${maxCost} грн`);   
            }
        });
        
    };

    const calcAvarageCalc = (arr) => {
        const amountSales = calcSum(arr);

        let sumProducts = 0;
        arr.forEach( (item, i, arr) => {
            sumProducts += item.quantity;
        });
        return (amountSales / sumProducts).toFixed(2);
    }


    showCheck(check);
    calcSum(check);
    calcBiggestPurchase(check);
    calcAvarageCalc(check);
    console.log(`Средняя стоимости одного товара в чеке : ${calcAvarageCalc(check)} грн`);
    alert(`Результат в консоли!`);
});


//3

/*Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями,перечисленными в массиве. */

    document.getElementById("hw6.3").addEventListener("click", function() {
        
    const css = [
        {
            name: "color",
            value: "blue"
        },
        {
            name: "font-size",
            value: "25px"
        },

        {
            name: "text-transform",
            value: "uppercase"
        }

    ];

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius tempore natus dolorem, doloribus nostrum possimus rerum. Ducimus praesentium eaque nihil blanditiis expedita, explicabo, in, quia tempore reprehenderit necessitatibus accusamus!';

    const showText = (arr, text) => {

        arr.forEach( (item,i,arr) => {
            document.write(`<style> p {${item.name}:${item.value}}</style>`);
        });

        document.write(`<p>${text}</p>`);

    }

    showText(css, text);
});


//4

/* Создать массив аудиторий академии. 
Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, 
для которого она предназначена. Написать несколько функций для работы с ним */

/* Вывод на экран всех аудиторий; */
/* Вывод на экран аудиторий для указанного факультета;*/
/* Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
   Объект-группа состоит из названия, количества студентов и названия факультета;*/

/* Функция сортировки аудиторий по количеству мест;*/
/* Функция сортировки аудиторий по названию (по алфавиту). */

    document.getElementById("hw6.4").addEventListener("click", function() {

        const academyAudience = [
            {
                name:"Java Script 15aud.",
                seating : 10,
                faculty:"Frontend"
            },
            {
                name:"C++ 16aud.",
                seating : 8,
                faculty:"Backend"
            },
            {
                name:"UI/UX 17aud.",
                seating : 15,
                faculty:"Design"
            },
            {
                name:"React.js 18aud.",
                seating : 30,
                faculty:"Frontend"
            },
            {
                name:"Computer class 20aud.",
                seating : 8,
                faculty:"Backend"
            },
            {
                name:"Painting 23aud.",
                seating : 5,
                faculty:"Design"
            }
        ];

        const showAudience = (arr)=> {
            console.log(`№\t Аудитория \t\t\t\t Кол-во мест \t\t Факультет`);
            
            arr.forEach( (item,i,arr) => {
                console.log(`${i+1}\t ${item.name} \t\t\t ${item.seating} \t\t\t\t\t ${item.faculty}`);
            });
        };

        const findAudienceForFculty = (arr, faculty)=> {

            const newArr = arr.filter((item) => {
                if(item.faculty.toLowerCase() === faculty.toLowerCase() ) {
                    return true;
                }
                return false;
            });

            const res =  showAudience(newArr);

            return res;
        };

        const sortAudienceBySeating = (arr) =>{
            const newArr = arr.sort((a,b) => {
                return a.seating - b.seating;
            });

            const res =  showAudience(newArr);
            return res;
        };

        const sortAudienceByName = (arr) =>{
            const newArr = arr.sort((a,b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) return -1;
                
                if (nameA > nameB) return 1;

                return 0 ;
            });

            const res =  showAudience(newArr);
            return res;
        };

        const findAudienceForGroup = (arr, group)=> {

            const newArr = arr.filter((item) => {
                if(item.faculty.toLowerCase() === group.faculty.toLowerCase() && item.seating >= group.quantity) {
                   // console.log(`нашло!`)
                    return true;
                }
                return false;
            });

            const res =  showAudience(newArr);

            return res;
        };

        let answer = Number(prompt(`Результаты в консоли!
                Выберите действие:
                1 - посмотреть весь список 
                2 - посмотреть аудитории для факультета
                3 - найти аудитории, которые подходят для группы
                4 - сортировка аудиторий по количеству мест
                5 - сортировка аудиторий по названию аудиторий`,''));

        while(answer) {

            switch(answer) {
                case 1: {
                    console.clear();
                    console.log(`\n Список всех аудиторий`);
                    showAudience(academyAudience);
                    console.log(`\n`);
                    break;
                }
                case 2: {
                    console.clear();
                    const facultyUser = prompt("Введите название факультета:", '');
                    console.log(`\n Список аудиторий для факультета ${facultyUser} :`);
                    findAudienceForFculty(academyAudience,facultyUser);
                    break;
                }
                case 3: {
                    const group = {};
                    console.log(`Группа:`);

                    const nameGroup = prompt("Введите название группы:", '');
                    group['name'] = nameGroup;
                    console.log(`название: ${group.name}`);

                    const numberOfStudent = Number(prompt("Введите кол-во студентов:", ''));
                    group['quantity'] = numberOfStudent;
                    console.log(`кол-во студентов: ${group.quantity}`);

                    const facultyGroup = prompt("Введите название факультета:", '');
                    group['faculty'] = facultyGroup;
                    console.log(`факультет: ${group.faculty}`);

                    console.log(`Результат поиска:`);
                    findAudienceForGroup(academyAudience,group);
                    break;
                }
                case 4: {
                    console.clear();
                    console.log(`\n Список аудиторий по количеству мест :`);
                    sortAudienceBySeating(academyAudience);
                    break;
                }
                case 5: {
                    console.clear();
                    console.log(`\n Список аудиторий по алфавиту :`);
                    sortAudienceByName(academyAudience);
                    break;
                }
            }
                
            answer = Number(prompt(`Выберите действие:
                1 - посмотреть весь список 
                2 - посмотреть аудитории для факультета
                3 - найти аудитории, которые подходят для группы
                4 - сортировка всех аудиторий по количеству мест
                5 - сортировка всех аудиторий по названию аудиторий`,''));
        }

    });
};