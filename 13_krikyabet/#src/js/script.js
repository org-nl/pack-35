// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to initialize mobile menu
    const openMenuBtn = document.querySelector('.open-menu');
    const mobileMenu = document.querySelector('.main-navigation');
    const mobileBg = document.querySelector('.bg-darked');
    const closeBtn = document.querySelector('.close-menu');

    if (!openMenuBtn || !mobileMenu || !mobileBg) return;

    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileBg.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    mobileBg.addEventListener('click', closeMenu);

    closeBtn.addEventListener('click', closeMenu);

    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileBg.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    // FAQ Toggle functionality
    const faqQuestions = document.querySelectorAll('.info_question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on the parent info_item
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');

            // Close other open FAQ items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.parentElement.classList.remove('active');
                }
            });
        });
    });
});
