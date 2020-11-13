"use strict";
/*Классы*/

export const hwClasses = () => {

    //1
    document.getElementById("hw7.1").addEventListener("click", function() {
    
    /* Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:*/

        /* поле, хранящее радиус окружности;*/
        /* get-свойство, возвращающее радиус окружности;*/
        /* set-свойство, устанавливающее радиус окружности;*/
        /* get-свойство, возвращающее диаметр окружности;*/
        /* метод, вычисляющий площадь окружности;*/
        /* метод, вычисляющий длину окружности.*/
     /*  Продемонстрировать работу свойств и методов.  */


     class Circle {

        constructor (radius) {
            this.radius = radius;
         }

         //сво-ва

        get radiusCircle() {
            return this.radius;
         }

        set radiusCircle(newRadius) {
            this.radius = newRadius;
         }

         get diameterCircle() {
            return this.radius * 2;
         }

         //методы
         calcArea() {
             return this.radius * this.radius * 3.14;
         }

         calcLenght() {
            return 2 * this.radius * 3.14;
        }
     }

     const a = new Circle(2);
     console.log(`Начальный радиус окружности: ${a.radiusCircle}`);

     a.radiusCircle = 6; 
     console.log(`Изменённый радиус окружности: ${a.radiusCircle}`);

     console.log(`Диаметр окружности: ${a.diameterCircle}`);
     console.log(`Площадь окружности: ${a.calcArea()}`);
     console.log(`Длина окружности: ${a.calcLenght()}`);

     alert(`результат в консоли!`);
    });

    //2
    document.getElementById("hw7.2").addEventListener("click", function() {
        /*Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:*/

        /* поле, которое хранит цвет маркера; */
        /* поле, которое хранит количество чернил в маркере (в процентах);*/
        /* метод для печати (метод принимает строку и выводит текст соответствующим цветом;
            текст выводится до тех пор, пока в маркере есть чернила;
            один не пробельный символ – это 0,5% чернил в маркере).*/

        /*Реализовать класс, описывающий заправляющийся маркер, 
        унаследовав его от простого маркера и добавив метод для заправки маркера.*/

    /* Продемонстрировать работу написанных методов. */

        class Marker {
            constructor(color, opacity) {
                this.color = color;
                this.opacity = opacity;
            }

            //method
            typeText(str) {
                document.write(`<div>`);
                let res = 0;
                for(let item of str){
                    
                    if (this.opacity > 0) {
                        document.write(`<span style="color:${this.color}; opacity:${this.opacity}%">${item}</span>`);
                        if (item !== " "){
                            this.opacity -= 0.5;
                            res = this.opacity;
                        } 
                    } 

                    else {
                        break;
                    }
                }
                document.write(`</div>`);
            return res;
            }
        }

        class FillMarker extends Marker{
            constructor(color, opacity) {
                super(color, opacity);   
            }

            //method
        fillInMarker() {
            if(this.opacity === 0) {
                this.opacity = 100;
                document.write(`Заправили чернила в маркере на ${this.opacity}%`);
            }
            else {
                document.write(`Остались чернила в маркере: ${this.opacity}%`);
            }
        }
        }

        const textRed =`Lorem ipsum dolor sit amet consectetur, adipisicing elit. At enim consequuntur labore nobis hic recusandae blanditiis adipisci ea minima! Doloribus itaque ipsum ullam reprehenderit nulla? Magni esse sit vitae autem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At enim consequuntur labore nobis hic recusandae blanditiis adipisci ea minima!`;
        const textBlue =`Hello, Ulya! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.`;

        const redMarker = new Marker("red",100); 

        const amountOfInk = redMarker.typeText(textRed);
        document.write(`Чернил в маркере осталось: ${amountOfInk}% \n`);
        
        const blueMarker = new FillMarker("blue",amountOfInk);
        blueMarker.fillInMarker();
        blueMarker.typeText(textBlue);

        blueMarker.fillInMarker();

        });


    //3

    /* Реализовать класс Employee, описывающий работника, и создать массив работников банка.*/

    /* Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
    Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().*/

    /* Создать объект класса EmpTable и вывести на экран результат работы метода getHtml(). */

    document.getElementById("hw7.3").addEventListener("click", function() {
    class Employee {
        constructor(name, position,salary){
            this.name = name;
            this.position = position;
            this.salary = salary;
        }
    }

    class EmpTable {
        constructor(arr){
            this.arr = arr;
        }
        getHtml() {
            const table = document.createElement('table');
            const tbody = document.createElement('tbody');
            
            table.style.cssText = 'width:500px; height:100px; border: 1px solid white; border-collapse: collapse; color:white;';
            
            table.append(tbody);
            document.querySelector('.container').prepend(table);
            tbody.innerHTML =`
                    <tr><th>№</th><th>Имя</th><th>Должность</th><th>Зарплата</th></tr>
                `;
            this.arr.forEach( (item, i) => { 
                tbody.innerHTML +=`
                    <tr><td>${i+1}</td><td>${item.name}</td><td>${item.position}</td><td>${item.salary}$</td></tr>
                `;
            });

           const th = document.querySelectorAll('th');
           th.forEach(item =>{
            item.style.cssText = 'border: 1px solid white;';
            });
           const td = document.querySelectorAll('td');
           td.forEach(item =>{
                item.style.cssText = 'border: 1px solid white;';
           });
        }
    }

    const employeeArr = [];

    const a = new Employee('Ulya', 'Frontend', 500);
    const b = new Employee('Bob', 'Backend', 600);
    const c = new Employee('Ann', 'Design', 400);
    
    employeeArr.push(a,b,c);

    const table = new EmpTable(employeeArr);
    table.getHtml();
});


};

