$(document).ready(function () {
    $('#area').range({
        min: 0,
        max: 20,
        start: 5,
        step: 5,
        onChange: function (value, meta) {
            if (meta.triggeredByUser) {
                $('#area-value').html(value);
            }
        }
    });
    $('#count').range({
        min: 0,
        max: 100,
        start: 25,
        step: 1,
        onChange: function (value, meta) {
            if (meta.triggeredByUser) {
                $('#count-value').html(value);
            }
        }
    });

    $('#cover').selectmenu().selectmenu('widget').addClass('calc-main__item__select');
    $('#color').selectmenu().selectmenu('widget').addClass('calc-main__item__select');


    let tabs = $('.catalog-tab');
    let sliders = $('.catalog-slider');
    sliders.hide()
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
    })
});