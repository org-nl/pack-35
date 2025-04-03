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