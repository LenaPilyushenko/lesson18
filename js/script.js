window.addEventListener('DOMContentLoaded' , function() {
    'use strict';

    const sayHi = document.querySelector('.say-hi'),
          dayNow = document.querySelector('#day'),
          timeNow = document.querySelector('#time'),
          toNewYear = document.querySelector('.to-new-year'),
          date = new Date(),
          nowTime = date.getHours();
    
    // приветствие в соответствии с временем      
    if ( nowTime >= 6 && nowTime < 11) {
        sayHi.textContent = 'Доброе утро';
    } if (nowTime >= 11 && nowTime < 18) {
        sayHi.textContent = 'Добрый день';
    } if (nowTime >= 18 && nowTime < 23) {
        sayHi.textContent = 'Добрый вечер';
    } if (nowTime >= 0 && nowTime < 6) {
        sayHi.textContent = 'Доброй ночи';
    }
    
    // день недели
    dayNow.textContent = date.toLocaleString('ru', {weekday: 'long'});

    // текущее время
    timeNow.textContent = date.toLocaleTimeString('en');

    // дни до нового года
    const targetDays = () => {
        const dateStop = new Date('31 december 2020').getTime(),
              dateNow = new Date().getTime(),
              targetSeconds = (dateStop - dateNow) / 1000;
        return Math.floor(targetSeconds / 60 / 60 / 24);
    };
    
    toNewYear.textContent = targetDays();
    
});