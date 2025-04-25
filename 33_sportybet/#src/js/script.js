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

    // Bonus code copy functionality
    const copyButtons = document.querySelectorAll('.bonus-display button');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bonusCode = this.getAttribute('data-code');
            if (!bonusCode) return;

            // Create temporary input element
            const tempInput = document.createElement('input');
            tempInput.value = bonusCode;
            document.body.appendChild(tempInput);

            // Select and copy the text
            tempInput.select();
            document.execCommand('copy');

            // Remove temporary element
            document.body.removeChild(tempInput);

            // Update button text to indicate copied
            const originalText = this.textContent;
            button.textContent = 'Copied!';

            // Reset button text after 2 seconds
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    });

    // Rating star functionality
    const ratingStars = document.querySelectorAll('.star-rating span');

    ratingStars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Update visually selected stars
            ratingStars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            // Here you could add code to send rating to a backend
            // For this demo, we'll just show a thank you message
            const ratingContainer = star.closest('.rating-container');
            const thanksMsg = document.createElement('div');
            thanksMsg.className = 'rating-thanks';
            thanksMsg.textContent = 'Thank you for your rating!';

            // Remove any existing thank you message
            const existingMsg = ratingContainer.querySelector('.rating-thanks');
            if (existingMsg) {
                ratingContainer.removeChild(existingMsg);
            }

            ratingContainer.appendChild(thanksMsg);
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
});
