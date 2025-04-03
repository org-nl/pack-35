// /* Управление меню */
(function() {
	const burgerBtn = document.querySelector('.js-burger-btn');
	const burgerMenu = document.querySelector('.js-burger-menu');
	const bgOverlay = document.querySelector('.js-bgOverlay');

	if (burgerBtn && burgerMenu && bgOverlay) {
		// Открыть меню
		burgerBtn.addEventListener('click', () => {
			document.body.classList.add('lock');
			burgerMenu.classList.add('active');
			bgOverlay.classList.add('active');
		});

		// Закрыть меню
		bgOverlay.addEventListener('click', (e) => {
			e.stopPropagation();
			document.body.classList.remove('lock');
			burgerMenu.classList.remove('active');
			bgOverlay.classList.remove('active');
		});
	}
})();

/* Кнопка прокрутки вверх */
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const btnScrollToTop = document.querySelector('.js-btnScrollToTop');
	
    if (btnScrollToTop) {
        btnScrollToTop.style.display = scrollTop > 500 ? 'block' : 'none';
    }
});

/** dropdown */
(function () {
    // Клик по выпадающему списку
    document.addEventListener("click", (event) => {
        const dropdownHead = event.target.closest(".js-dropdown-head");

        if (!dropdownHead) return;

        const dropdownItem = dropdownHead.closest(".js-dropdown-item");

        if (!dropdownItem) return;

        const dropdownBody = dropdownItem.querySelector(".js-dropdown-body");
        if (!dropdownBody) return;

        const isActive = dropdownItem.classList.contains("active");

        dropdownItem.classList.toggle("active", !isActive);
        dropdownBody.style.display = isActive ? "none" : "block";
    });

    /** При инициализации страницы закрываем/открываем выпадающий список в зависимости от класса "active" */
    document.querySelectorAll(".js-dropdown-item").forEach((dropdownItem) => {
        const dropdownBody = dropdownItem.querySelector(".js-dropdown-body");
        if (!dropdownBody) return;

        const isActive = dropdownItem.classList.contains("active");
        dropdownBody.style.display = isActive ? "block" : "none";
    });
})();
