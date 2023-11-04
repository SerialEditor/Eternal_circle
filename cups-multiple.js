'use strict';

let coffeeOrderButton = document.querySelector('.coffee-order-button');
let orderedCounter = coffeeOrderButton.querySelector('.ordered-cups-coffee-counter');

coffeeOrderButton.addEventListener('click', () => {
    orderedCounter.textContent = `\u00A0${Number(orderedCounter.textContent) * 10}\u00A0`;
    if (orderedCounter.textContent.trim().length === 8) {
        orderedCounter.classList.add('order--limit');
        coffeeOrderButton.setAttribute('disabled', 'disabled');
    }
});