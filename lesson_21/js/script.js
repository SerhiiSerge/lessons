'use strict';

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    if (targetElement.closest('.menu-icon')) {
        document.documentElement.classList.toggle('menu-open');
        document.documentElement.classList.remove('search-open');
    }
    if (targetElement.closest('.search__button')) {
        const searchOpen = document.documentElement.classList.toggle('search-open');
        const searchButton = document.querySelector('.search__button');
        if (searchOpen) {
            searchButton.type = 'submit';
        } else {
            searchButton.type = 'button';
        }
    }
});

const headerSearch = document.querySelector('.header__search');
headerSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!headerSearch.value) return;
    task.value = '';
});