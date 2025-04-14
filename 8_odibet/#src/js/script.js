// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip links with just #

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize interactive elements
    initPromotionItems();
    initNavHighlight();
    initFaqItems();
});

// Add hover effects to promotion items
function initPromotionItems() {
    const promotionItems = document.querySelectorAll('.promotion-item');

    promotionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });

        item.addEventListener('click', function() {
            // In a real implementation, this would navigate to the promotion details
            // or trigger a modal with more information
            console.log('Promotion clicked:', this.querySelector('.promotion-title').textContent);
        });
    });
}

// Highlight the current section in the navigation when scrolling
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.toc-link');

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
}

// Add interactivity to FAQ items
function initFaqItems() {
    const faqItems = document.querySelectorAll('.knowledge-base-wrap');

    faqItems.forEach(item => {
        const question = item.querySelector('.knowledge-base-head');
        const answer = item.querySelector('.knowledge-base-text');

        // Initially hide answers
		if (!item.classList.contains('isActive')) {
        	answer.style.display = 'none';
		}

        question.addEventListener('click', function() {
            // Toggle the answer visibility
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                item.classList.add('isActive');
            } else {
                answer.style.display = 'none';
                item.classList.remove('isActive');
            }
        });
    });
}
