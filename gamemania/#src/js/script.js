$(document).ready(function () {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	var isMobile = ('ontouchstart' in window);
	const $body = $('body');
	const BREAKPOINT_md1 = 1343;
	const BREAKPOINT_1045 = 1044.98;
	const BREAKPOINT_md2 = 992.98;
	const BREAKPOINT_872 = 871.98;
	const BREAKPOINT_md3 = 767.98;
	const BREAKPOINT_552 = 551.98;
	const BREAKPOINT_md4 = 479.98;

	$(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        scrollForBtnScrollTop(scrollTop);
    });

	// Управление меню | Открыть/закрыть
    (function() {
        if(w < BREAKPOINT_md3){
            // Открыть меню
            $('.js-burger-btn').click(function(){
                $('body').addClass('lock');
                $('.js-burger-menu').addClass('active');
				$('.js-bgOverlay').addClass('active');
            });

            // Закрыть меню
            $('.js-bgOverlay, .js-burger-close').click(function(e){
                e.stopPropagation();
                $('body').removeClass('lock');
                $('.js-burger-menu').removeClass('active');
				$('.js-bgOverlay').removeClass('active');
            });
        }
    })();

	// Показать/Скрыть кнопку прокрутки "Вверх"
	function scrollForBtnScrollTop(scrollTop){
        if (scrollTop > 500) {
            $('.js-btnScrollToTop').show();
        } else {
            $('.js-btnScrollToTop').hide();
        }
	}

	// Прокрутить вверх
    $('.js-btnScrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });

	function ibg(){ // Превращает картинку img в background-image
		let ibg=document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}
	ibg();
});