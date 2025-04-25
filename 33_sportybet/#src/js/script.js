// Main JavaScript for Sportybet clone

document.addEventListener('DOMContentLoaded', function() {
    // Handle Burger Menu
    const burgerMenu = document.getElementById('burger-menu');
    const mainMenu = document.getElementById('main-menu');

    if (burgerMenu && mainMenu) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            mainMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('#burger-menu') && !event.target.closest('#main-menu')) {
                burgerMenu.classList.remove('active');
                mainMenu.classList.remove('active');
            }
        });
    }

    // Handle FAQ toggles
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle active class on the parent
            const parent = this.parentElement;
            parent.classList.toggle('active');

            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.parentElement.classList.remove('active');
                }
            });
        });
    });

    // Scroll to top button functionality
    const goTop = document.getElementById('goTop');

    if (goTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                goTop.classList.add('visible');
            } else {
                goTop.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        goTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            e.preventDefault();

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 15, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});
