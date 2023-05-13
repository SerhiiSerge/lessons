'use strict';
/* ====== Click On Document ====== */
document.addEventListener('click', (e) => {
    const targetElement = e.target;
    /* ====== Burger Menu ====== */
    if (targetElement.closest('.menu-icon')) {
        document.documentElement.classList.toggle('menu-open');
        document.documentElement.classList.remove('search-open');
    }
    /* ====== Header Search ====== */
    if (targetElement.closest('.search__button')) {
        const searchOpen = document.documentElement.classList.toggle('search-open');
        const searchButton = document.querySelector('.search__button');
        if (searchOpen) {
            searchButton.type = 'submit';
        } else {
            searchButton.type = 'button';
        }
    }
    /* ====== Columns Number Select ====== */
    if (targetElement.closest('.add-columns__button_four')) {
        document.documentElement.classList.add('four-columns');
    }
    if (targetElement.closest('.add-columns__button_three')) {
        document.documentElement.classList.remove('four-columns');
    }
});
/* ====== Header Search Submit ====== */
const headerSearch = document.querySelector('.header__search');
headerSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!headerSearch.value) return;
    task.value = '';
});
/* ====== Add Active Class ====== */
const columnsNum = document.querySelectorAll('.add-columns__button');
let addActiveClass = function () {
    removeActiveClass();
    this.classList.add('active');
}
let removeActiveClass = function () {
    for (let i = 0; i < columnsNum.length; i++) {
        columnsNum[i].classList.remove('active')
    }
}
for (let i = 0; i < columnsNum.length; i++) {
    columnsNum[i].addEventListener('click', addActiveClass);
}