"use strict";
window.addEventListener('DOMContentLoaded', () => {
    //MENU
    const menuList = document.querySelector('.menu__list');
    menuList.addEventListener('click', (e) => {

        if (e.target.closest('.menu__item')) {
            removeActive();
            e.target.closest('.menu__item').classList.add('menu__active');
        }

        function removeActive() {
            menuList.querySelectorAll('.menu__item').forEach(item => {
                item.classList.remove('menu__active');
            });
        }
    });

});