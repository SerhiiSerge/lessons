'use strict';

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.leave-comment__button')) {
        document.documentElement.classList.toggle('form-opened');
        e.preventDefault();
    }
})

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.rating__close')) {
        document.documentElement.classList.remove('form-opened');
        e.preventDefault();
    }
})