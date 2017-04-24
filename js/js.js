(function() {

    var Menu = (function() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('.menu');
        var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');

        var active = false;

        var toggleMenu = function() {
            if (!active) {
                menu.classList.add('menu--active');
                menuList.classList.add('menu__list--active');
                brand.classList.add('menu__brand--active');
                burger.classList.add('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.add('menu__item--active');
                }

                active = true;
            } else {
                menu.classList.remove('menu--active');
                menuList.classList.remove('menu__list--active');
                brand.classList.remove('menu__brand--active');
                burger.classList.remove('burger--close');
                for (var i = 0, ii = menuItems.length; i < ii; i++) {
                    menuItems[i].classList.remove('menu__item--active');
                }

                active = false;
            }
        };

        var bindActions = function() {
            burger.addEventListener('click', toggleMenu, false);
        };

        var init = function() {
            bindActions();
        };

        return {
            init: init
        };

    }());

    Menu.init();

    $("#header-menu").on("click","a", function (event) {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('.menu');
        var menuList = document.querySelector('.menu__list');
        var brand = document.querySelector('.menu__brand');
        var menuItems = document.querySelectorAll('.menu__item');
        var active = true;
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        if (!active) {
            menu.classList.add('menu--active');
            menuList.classList.add('menu__list--active');
            brand.classList.add('menu__brand--active');
            burger.classList.add('burger--close');
            for (var i = 0, ii = menuItems.length; i < ii; i++) {
                menuItems[i].classList.add('menu__item--active');
            }

            active = true;
        } else {
            menu.classList.remove('menu--active');
            menuList.classList.remove('menu__list--active');
            brand.classList.remove('menu__brand--active');
            burger.classList.remove('burger--close');
            for (var i = 0, ii = menuItems.length; i < ii; i++) {
                menuItems[i].classList.remove('menu__item--active');
            }

            active = false;
        }
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $('header').addClass('fixed');

        } else {
            $('header').removeClass('fixed');
        }
    });

}());