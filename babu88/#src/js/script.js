document.addEventListener('DOMContentLoaded', function () {
	// Burger menu functionality 
	const burgerBtn = document.querySelector('.js-burger-menu');
	const mobileNav = document.querySelector('.js-main-nav');
	
	if (burgerBtn && mobileNav) {
		burgerBtn.addEventListener('click', () => {
			burgerBtn.classList.toggle('active');
			mobileNav.classList.toggle('active');

			// Toggle body scroll when menu is open
			if (mobileNav.classList.contains('active')) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		});

		// Close mobile nav when window is resized to desktop size
		window.addEventListener('resize', () => {
			if (window.innerWidth > 992 && mobileNav.classList.contains('active')) {
				removeMenu();
			}
		});

		function removeMenu() {
			burgerBtn.classList.remove('active');
			mobileNav.classList.remove('active');
			document.body.style.overflow = '';
		}
	}

	// Promo code copy functionality
    const copyButton = document.querySelector('.copy-button');
    const promoCodeInput = document.querySelector('.promo-code-input');
    const getPromoBtn = document.querySelector('.get-promo-btn');

    if (copyButton && promoCodeInput) {
        copyButton.addEventListener('click', function() {
            promoCodeInput.select();
            document.execCommand('copy');

            // Show copied notification
            const originalTitle = copyButton.getAttribute('aria-label');
            copyButton.setAttribute('aria-label', 'Copied!');
            copyButton.classList.add('copied');

            setTimeout(() => {
                copyButton.setAttribute('aria-label', originalTitle);
                copyButton.classList.remove('copied');
            }, 2000);
        });

        promoCodeInput.addEventListener('click', function() {
            this.select();
        });
    }

    if (getPromoBtn) {
        getPromoBtn.addEventListener('click', function() {
            promoCodeInput.select();
            document.execCommand('copy');

            // Show notification or perform any action when GET PROMO is clicked
            alert('Promo code CCY8P has been copied to clipboard!');
        });
    }

	// FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                // Close all other items
                const currentlyActive = document.querySelector('.faq-item.active');
                if (currentlyActive && currentlyActive !== item) {
                    currentlyActive.classList.remove('active');
                }

                // Toggle current item
                item.classList.toggle('active');
            });
        });

        // Open the first FAQ item by default
        faqItems[0].classList.add('active');
    }

	// Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    if (scrollToTopBtn) {
        // Show/hide the button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
