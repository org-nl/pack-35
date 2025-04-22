// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Melbet website clone loaded successfully!');

    // Burger menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.js-mobile-menu');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Prevent scrolling when mobile menu is open
            document.body.classList.toggle('no-scroll');
        });

        // Close mobile menu when a link is clicked
        const mobileMenuLinks = document.querySelectorAll('.header__menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                burgerMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.querySelector('.scrollToTOp-btn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
