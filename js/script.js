window.addEventListener('DOMContentLoaded' , function() {
    'use strict';

    const input = document.querySelector('input'),
        text = document.querySelector('p');

    function onKeyUp() { 
        text.textContent = input.value;
    }

    const debounce = (f, t) => { 
        return (args) => { 
            let previousCall = this.lastCall; 
            this.lastCall = Date.now (); 
            if (previousCall && ((this.lastCall - previousCall) <= t)) { 
                clearTimeout (this.lastCallTimer); 
            } 
            this.lastCallTimer = setTimeout (() => f (args), t); 
        }; 
    }; 

    input.addEventListener('input', debounce (onKeyUp, 300));

});

