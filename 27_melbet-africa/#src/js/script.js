document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const headerMenu = document.querySelector('.header__menu');

    if (mobileMenuToggle && headerMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            headerMenu.classList.toggle('header__menu--active');
            this.classList.toggle('mobile-menu-toggle--active');
        });
    }

    // Scroll to top button functionality
    const scrollToTopButton = document.getElementById('scrollToTop');

    if (scrollToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Active TOC link highlighting
    const tocLinks = document.querySelectorAll('.toc__link');
    const sections = document.querySelectorAll('section[id]');

    if (tocLinks.length && sections.length) {
        window.addEventListener('scroll', function() {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('toc__link--active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('toc__link--active');
                }
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
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple form validation (if there were forms)
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('form-field--error');
                } else {
                    field.classList.remove('form-field--error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // FAQ accordion functionality (if needed)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-item__header');

        if (header) {
            header.addEventListener('click', function() {
                item.classList.toggle('faq-item--active');
            });
        }
    });

    // Registration/Login button handlers
    const registerButtons = document.querySelectorAll('.header__button--primary, .hero__button--primary');
    const loginButtons = document.querySelectorAll('.header__button--secondary');

    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Registration process would start here in the actual Melbet site.');
        });
    });

    loginButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Login process would start here in the actual Melbet site.');
        });
    });
});
