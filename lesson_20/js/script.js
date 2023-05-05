'use strict';

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.sidebar__button')) {
        document.documentElement.classList.toggle('sidebar-open');
        e.preventDefault();
    }
})