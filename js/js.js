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

    $(".btnSliderAction").on('click', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

          //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

    });

    $("#header-menu").on("click","a", function (event) {
       // var burger = document.querySelector('.burger');
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
            //burger.classList.remove('burger--close');
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
            $('.header').css({
                "background": "rgba(137,61,152,0.75)",
                "padding": "38px 0"
            });

        } else {
            $('.header').css({
                "background": "rgba(137,61,152,0)",
                "padding": "35px 0"
            });
        }
    });

    var modalVerticalCenterClass = ".modal";
    function centerModals($element) {
        var $modals;
        if ($element.length) {
            $modals = $element;
        } else {
            $modals = $(modalVerticalCenterClass + ':visible');
        }
        $modals.each( function(i) {
            var $clone = $(this).clone().css('display', 'block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top > 0 ? top : 0;
            $clone.remove();
            $(this).find('.modal-content').css("margin-top", top);
        });
    }
    $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
        centerModals($(this));
    });
    $(window).on('resize', centerModals);

    /*******inputfile******/

    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });

    /*************/

    $('#js-portfolio-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: false
    });

    $(".js-slider-prev").on("click", function() {
        $('#js-portfolio-slider').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-portfolio-slider').slick("slickNext");
    });

    /* Slick.js http://kenwheeler.github.io/slick/
     ========================*/

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });

    /*datepicker
    * ==========*/
    $('.fj-dp').datepicker({
        format: "dd/mm/yyyy",
        todayBtn: "linked",
        language: "ru",
        todayHighlight: true,
        //autoclose: true
    });

    var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 1500,
      //grab the "back to top" link
      $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
              scrollTop: 0 ,
          }, scroll_top_duration
        );
    });

}());