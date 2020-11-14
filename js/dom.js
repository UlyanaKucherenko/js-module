"use strict";
/*DOM*/

export const hwDOM = () => {

    //1
    /* Создать страницу, которая выводит нумерованный список песен: */

    document.getElementById("hw8.1").addEventListener("click", function() {
        let playList = [

            {
             author: "LED ZEPPELIN",
             song:"STAIRWAY TO HEAVEN"
            },
            
            {
             author: "QUEEN",
             song:"BOHEMIAN RHAPSODY"
            },
            
            {
             author: "LYNYRD SKYNYRD",
             song:"FREE BIRD"
            },
            
            {
             author: "DEEP PURPLE",
             song:"SMOKE ON THE WATER"
            },
            
            {
             author: "JIMI HENDRIX",
             song:"ALL ALONG THE WATCHTOWER"
            },
            
            {
             author: "AC/DC",
             song:"BACK IN BLACK"
            },
            
            {
             author: "QUEEN",
             song:"WE WILL ROCK YOU"
            },
            
            {
             author: "METALLICA",
             song:"ENTER SANDMAN"
            }
            
            ];

            const ol = document.createElement('ol');
            ol.style.cssText = 'color:white;';
            document.querySelector('.container').prepend(ol);

            playList.forEach( (item) => {
                ol.innerHTML += `
                    <li>${item.author} - "${item.song}"</li>
                `;
            });
    });

    //2
    /* Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
        На модальном окне должен быть текст и кнопка "Закрыть". 
        Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, 
        на кнопку "Закрыть" – исчезает.*/

        document.getElementById("hw8.2").addEventListener("click", function() {

            //create div
            const div = document.createElement('div');
            div.classList.add('modal');
            document.querySelector('.container').prepend(div);

            // create content in div
            const modal = document.querySelector('.modal');
            modal.innerHTML = `
                <button class="modal__btn-open">Открыть</button>
                <div class="modal__wrapper-window modal__wrapper-window--hidden ">
                        <div class="modal__window">
                            <p class="modal__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus minima tempora harum quisquam tenetur suscipit aliquid hic sit sunt corrupti ex explicabo aspernatur unde pariatur, omnis ducimus reiciendis itaque! Quaerat.</p>
                            <button class="modal__btn-close">Закрыть</button>
                        </div>
                </div>
            `;

            //click - remove btn-Open
            const btnOpen = document.querySelector(".modal__btn-open");
            const btnClose = document.querySelector(".modal__btn-close");
            const modalWrappWindow = document.querySelector(".modal__wrapper-window");

            btnOpen.addEventListener("click", function() {
                btnOpen.classList.add('modal__btn-open--hidden');
            modalWrappWindow.classList.remove('modal__wrapper-window--hidden');
            });

            //click - remove modal window
            btnClose.addEventListener("click", function() {
                modalWrappWindow.classList.add('modal__wrapper-window--hidden');
                btnOpen.classList.remove('modal__btn-open--hidden');
            });



    });


    //3
    /*Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/

    document.getElementById("hw8.3").addEventListener("click", function() {

    const div = document.createElement('div');
    div.classList.add('game');
    document.querySelector('.container').prepend(div);

     // create content in div
     const game = document.querySelector('.game');

     game.innerHTML = `
        <button class="game__btn">Переключить</button>
        <div class="game__trafic-light">
            <div class="game__circle game__circle--red"></div>
            <div class="game__circle "></div>
            <div class="game__circle "></div>
        </div>
     `;

     const ciscels = document.querySelectorAll('.game__circle');

     //проверка какой свет горит сейчас
    const checkActiveColor = (activeRed, activeGreen) =>{
        if(activeRed){
            return 1;
        }
        else if(activeGreen){
             return 3;
        }
    };

    //заставить мигать активный Красный свет
     const chengeActiveRed = () => {
         
            ciscels[0].classList.contains('game__circle--red') ? 
            ciscels[0].classList.remove('game__circle--red') :
            ciscels[0].classList.add('game__circle--red');
        
     }
     //заставить мигать активный Зелёный свет
     const chengeActiveGreen = () => {
        
           ciscels[2].classList.contains('game__circle--green') ? 
           ciscels[2].classList.remove('game__circle--green') :
           ciscels[2].classList.add('game__circle--green');
       
    }

    //включить жёлтый
     const chengeYellow = () => {
        //ciscels[0].classList.remove('game__circle--red');
        ciscels[1].classList.add('game__circle--yellow');
     }

     // отключить Жёлтый - включить Зелёный
     const chengeGreen = () => {

            ciscels[1].classList.remove('game__circle--yellow');
            ciscels[2].classList.add('game__circle--green');
         
     }

     // отключить Жёлтый - включить Красный
     const chengeRed = () => {

        ciscels[1].classList.remove('game__circle--yellow');
        ciscels[0].classList.add('game__circle--red');

     }

     const chengeColor = (item) => {
       
        if(item === 1) {
               setTimeout(chengeActiveRed, 1000);
               setTimeout(chengeYellow, 2000);
               setTimeout(chengeGreen, 4000);

        }
        if(item === 3) {
            for(let i = 0; i <7;i++) {
                setTimeout(chengeActiveGreen, i*500);
            }
                setTimeout(chengeYellow, 3000);
                setTimeout(chengeRed, 5000);
        }
       }
      

     game.querySelector('.game__btn').addEventListener("click", function(){
       
        const activeRed = ciscels[0].classList.contains('game__circle--red');
        const activeGreen = ciscels[2].classList.contains('game__circle--green');

           const activeColor =  checkActiveColor(activeRed,activeGreen);
            chengeColor(activeColor);
       
     });
     
    });

};