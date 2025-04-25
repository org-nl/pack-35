// Simple JavaScript for Sportcash website clone

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.hero-button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Mobile navigation toggle functionality could be added here if needed

    // Add automatic year update in the footer copyright
    const currentYear = new Date().getFullYear();
    const copyrightEl = document.querySelector('.footer-legal p');
    if (copyrightEl) {
        copyrightEl.textContent = copyrightEl.textContent.replace('2023', currentYear);
    }
});
