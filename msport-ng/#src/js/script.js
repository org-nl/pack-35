// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
	// Set current year in the footer
	const currentYear = new Date().getFullYear();
	document.querySelector('#currentYear').textContent = currentYear;

    // Get all FAQ items
    const faqItems = document.querySelectorAll('.helpInfo_title');

    // Add click event listener to each FAQ item
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active class on the clicked item
            this.parentElement.classList.toggle('active');

            // Get the answer element
            const answer = this.nextElementSibling;

            // Toggle visibility of the answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Initially hide all FAQ answers
    document.querySelectorAll('.helpInfo_answer').forEach(answer => {
        answer.style.maxHeight = null;
    });

    // Back to top button functionality
    // const backToTopBtn = document.querySelector('.back-to-top');
    // if (backToTopBtn) {
    //     backToTopBtn.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         });
    //     });
    // }

    // Mobile Menu Functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.bottom-header');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (burgerMenu && mobileMenu && mobileMenuOverlay) {
        // Toggle mobile menu when burger icon is clicked
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            mobileMenuOverlay.classList.toggle('active');

            // Prevent body scrolling when menu is open
            if (mobileMenu.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking outside
        mobileMenuOverlay.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            mobileMenu.classList.remove('open');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on a menu item
        document.querySelectorAll('.mobile-nav a').forEach(item => {
            item.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('open');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Floating image functionality
    const floatingLink = document.querySelector('.floating-link-icon');
    if (floatingLink) {
        floatingLink.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the parent element (floating-image div)
            const floatingImage = this.closest('.floating-image');

            // Add fade out animation and remove the element
            if (floatingImage) {
                floatingImage.style.transition = 'opacity 0.5s ease-out';
                floatingImage.style.opacity = '0';

                // Remove from DOM after animation completes
                setTimeout(() => {
                    floatingImage.remove();
                }, 500);
            }
        });
    }

	// Marquee functionality
	const marqueeContent = document.querySelector('.marquee-content');
	if (marqueeContent) {
		marqueeContent.style.setProperty('--marquee-start', window.innerWidth+'px');
		marqueeContent.style.setProperty('--marquee-end', (-marqueeContent.clientWidth-15)+'px');
	}
	console.log(marqueeContent.clientWidth, window.innerWidth);
	
});
