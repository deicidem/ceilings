$(document).ready(function () {
    let price = $('.calc-main__price');
    let valArea = 0;
    let valCount = 0;
    let valColor = 0;
    let valCover = 0;

    $('#area').range({
        // Площадь потолка
        // Здесь вы можете сзменить максимальное и минимальное значения для выбора, стартовое значение и шаг, с которым меняется значение
        min: 0,
        max: 100,
        start: 25,
        step: 1,
        onChange: function (value, meta) {
            if (meta.triggeredByUser) {
                valArea = value;
                $('#area-value').html(value);
            }
        }
    });
    $('#count').range({
        // Количество углов и труб/шт
        // Здесь вы можете сзменить максимальное и минимальное значения для выбора, стартовое значение и шаг, с которым меняется значение
        min: 0,
        max: 100,
        start: 25,
        step: 1,
        onChange: function (value, meta) {
            if (meta.triggeredByUser) {
                valCount = value;
                $('#count-value').html(value);
            }
        }
    });

    $('#cover').selectmenu().selectmenu('widget').addClass('calc-main__item__select');
    $('#color').selectmenu().selectmenu('widget').addClass('calc-main__item__select');


    let tabs = $('.catalog-tab');
    let sliders = $('.catalog-slider');
    sliders.hide();
    $('.catalog-slider_active').show();
    tabs.each(function (i) {
        $(this).on('click', () => {
            tabs.removeClass('catalog-tab_active');
            $(this).addClass('catalog-tab_active');
            sliders.hide();
            sliders.removeClass('catalog-slider_active');
            sliders.eq(i).fadeIn();
            sliders.eq(i).addClass('catalog-slider_active');
        });
    });

    $('.portfolio-item__text__desc').mCustomScrollbar({
        theme: "my-theme"
    });

    $("#cover").selectmenu({
        change: () => {
            valCover = +$("#cover").val();
        }
    });

    $("#color").selectmenu({
        change: () => {
            valColor = +$("#color").val();
        }
    });

    valColor = +$("#color").val();
    valCover = +$("#cover").val();



    $('.calc-main__button').on('click', function () {
        // Ниже расположена формула для рассчета стоимость
        // valArea - Площадь потолка, valCount - Количество углов и труб/шт, valColor - значение, соответствующее значению value в меню выбора цвета потолка, valCover - тоже самое что и с цветом.
        let res = (valArea + valCover) * valCount;


        price.html(res + " ₽");
    });



    $('.header-menu__nav a').on('click', function (event) {
        event.preventDefault();
        id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 100
        });
    });


    $('input[type="tel"]').mask('+7 (999) 999-99-99');

    $('#main-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/main-form.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#main-form").trigger("reset");
            $('.popup').fadeIn();
            setTimeout(() => {
                $('.popup').fadeOut();
            }, 5000);
        });
        return false;
    });
    $('#form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/form.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $('.popup').fadeIn();
            setTimeout(() => {
                $('.popup').fadeOut();
            }, 5000);
        });
        return false;
    });
    $('#offer-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/offer-form.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#offer-form").trigger("reset");
            $('.popup').fadeIn();
            setTimeout(() => {
                $('.popup').fadeOut();
            }, 5000);
        });
        return false;
    });
    $('#question-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/question-form.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#question-form").trigger("reset");
            $('.popup').fadeIn();
            setTimeout(() => {
                $('.popup').fadeOut();
            }, 5000);
        });
        return false;
    });
});