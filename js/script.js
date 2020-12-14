window.addEventListener('DOMContentLoaded' , function() {
    'use strict';

    const cat = document.querySelector('.block-cat'),
          frontWheel = document.querySelector('.front-wheel'),
          rearWheel = document.querySelector('.rear-wheel'),
          bthreset = document.querySelector('#reset'), 
          myBtn = document.querySelector('#btn');
          
    let count = 0,
        catRides, flag = true;
    
    const catRidesAnimate = () => {
        const width = screen.width - 220;
        catRides = requestAnimationFrame(catRidesAnimate);
        count++;
        if (count < width) {
            cat.style.right = count + 'px';
            frontWheel.style.transform = 'rotate(' + 7 * count + 'deg)';
            rearWheel.style.transform = 'rotate(' + 7 * count + 'deg)';
        } else {
            cancelAnimationFrame(catRides);
        }
    };
    
    myBtn.addEventListener('click', function() {
        if (flag) {
            catRides = requestAnimationFrame(catRidesAnimate);
            flag = false;
            myBtn.textContent = 'едем!';
        } else {
            cancelAnimationFrame(catRides);
            flag = true;
            myBtn.textContent = 'Поехали ?';
        }       
    });
    
    bthreset.addEventListener('click' , function() {
        cancelAnimationFrame(catRides);
        count = 0;
        cat.style.right = count + 'px';
        frontWheel.style.transform = 'rotate(' + count + 'deg)';
        rearWheel.style.transform = 'rotate(' + count + 'deg)';
        flag = true;
    });

});

