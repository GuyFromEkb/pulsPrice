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


    // slider

    var slider = tns({
        container: '.carrusel-tariff',
        items: 1,
        slideBy: 'page',
        nav: false,
        controls: false,
    });

    var slider2 = tns({
        container: '.carrusel-region',
        items: 1,
        slideBy: 'page',
        nav: false,
        controls: false,
    });


    document.querySelector('.button_service').addEventListener('click', (e) => {
        slider.goTo('next');
        slider2.goTo('next');
    })







});