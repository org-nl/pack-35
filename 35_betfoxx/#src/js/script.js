// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionTitle = document.querySelector('.accordion-title');
    const accordionContent = document.querySelector('.accordion-content');

    accordionTitle.addEventListener('click', function () {
        if(this.classList.contains('active')){
            this.classList.remove('active');
            accordionContent.classList.remove('active');
        } else {
            this.classList.add('active');
            accordionContent.classList.add('active');
        }
    });
    

    // Scroll to top button functionality
    const scrollTopButton = document.querySelector('.scrollTOtop');

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
            if (this.getAttribute('href') !== '#' && !this.classList.contains('go-now-bonus') && !this.classList.contains('go-now-auth')) {
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
