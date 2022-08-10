$(function () {
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});






$(".modal").each(function () {
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function () {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

});

$(".close-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function () {
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});
$(".humburger").click(function () {
    $(".navigation_menu").toggleClass("show");
});



$(window).scroll(function () {
    var height = $(window).scrollTop();

    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 50) {
        $('.navigation_fix_top').addClass('navigation-fixed');
    } else {
        /*Если меньше 100px удаляем класс для header*/
        $('.navigation_fix_top').removeClass('navigation-fixed');
    }

});

$(".link_drop").click(function () {
    $(this).toggleClass("active");
});

$(".btn_tab").click(function () {
    $(".analyzes_content aside").toggleClass("active");
});


$(window).scroll(function () {
    var height = $(window).scrollTop();

    /*Если сделали скролл на 100px задаём новый класс для header*/
    if (height > 50) {
        $('.right_sidebar').addClass('right_sidebar-fixed');
    } else {
        /*Если меньше 100px удаляем класс для header*/
        $('.right_sidebar').removeClass('right_sidebar-fixed');
    }

});
$('.accordion').accordion({
	active: true,
	collapsible: true,
	heightStyle: 'content',
	header: '> .accordion-item > .accordion-header'
});

//   mask
$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".mask-phone").mask("+7 (h99) 999-99-99");

$(".close_iframe").click(function () {
    $(".site_content").css("display", 'none');
});
