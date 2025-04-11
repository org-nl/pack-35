document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.frequent-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.frequent-question');

        question.addEventListener('click', function() {
            // Toggle active class on clicked item
            item.classList.toggle('active');

            // Close other open FAQ items (optional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Mobile menu toggle (for responsive design)
    const navToggle = document.querySelector('.menu-bar-toggle');
    const navMenu = document.querySelector('.menu-bar-menu');
    let isOpen = false;

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            isOpen = !isOpen;
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close the menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target) && isOpen) {
            isOpen = false;
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
      });

    // Add additional styling to header on scroll
    const siteHeader = document.querySelector('.site-header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
});
