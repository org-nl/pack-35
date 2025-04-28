// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event listener to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on the question
            this.classList.toggle('active');

            // Get the answer element that follows this question
            const answer = this.nextElementSibling;

            // Toggle the display of the answer
            if (answer.style.display === 'none' || getComputedStyle(answer).display === 'none') {
                answer.style.display = 'block';
                // Change the + to - in the pseudo-element
                this.style.setProperty('--faq-icon', '"−"');
            } else {
                answer.style.display = 'none';
                // Change the - to + in the pseudo-element
                this.style.setProperty('--faq-icon', '"+"');
            }
        });
    });

    // Hide all FAQ answers initially
    document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.display = 'none';
    });

    // Scroll to top button functionality
    const scrollTopButton = document.getElementById('scroll-top');

    // Show/hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.content-nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});
