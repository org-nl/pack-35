// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionTitles = document.querySelectorAll('.accordion-title');

    accordionTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;

            // Toggle active class on content
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                title.querySelector('i.fas').classList.remove('fa-chevron-up');
                title.querySelector('i.fas').classList.add('fa-chevron-down');
            } else {
                // Close any open accordions
                document.querySelectorAll('.accordion-content.active').forEach(openContent => {
                    openContent.classList.remove('active');
                    openContent.previousElementSibling.querySelector('i.fas').classList.remove('fa-chevron-up');
                    openContent.previousElementSibling.querySelector('i.fas').classList.add('fa-chevron-down');
                });
                content.classList.add('active');
                title.querySelector('i.icn').classList.remove('fa-chevron-down');
                title.querySelector('i.icn').classList.add('fa-chevron-up');
            }
        });
    });

    // Scroll to top button functionality
    const scrollTopButton = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#' && !this.classList.contains('btn-bonus') && !this.classList.contains('btn-auth')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
