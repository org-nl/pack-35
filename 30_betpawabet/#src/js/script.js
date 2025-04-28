// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    const btn = document.querySelector('.btnBurger');
    const menu = document.querySelector('.js-main-nav');
    
    btn.addEventListener('click', function () {
        if(btn.classList.contains('active')){
        btn.classList.remove('active');
            menu.classList.remove('active');
        } else {
            btn.classList.add('active');
            menu.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // FAQ details element interaction
    const faqItems = document.querySelectorAll('.faq-container details');

    faqItems.forEach(item => {
        item.addEventListener('toggle', function() {
            if (this.open) {
                // Close other open details elements
                faqItems.forEach(otherItem => {
                    if (otherItem !== this && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });


    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
});
