document.addEventListener('DOMContentLoaded', function() {
    // Copy promo code functionality
    const copyPromoBtn = document.getElementById('copy-promo');
    if (copyPromoBtn) {
        copyPromoBtn.addEventListener('click', function() {
            const promoText = document.querySelector('.promo-txt').textContent;
            navigator.clipboard.writeText(promoText)
                .then(() => {
                    const originalText = copyPromoBtn.textContent;
                    copyPromoBtn.textContent = copyPromoBtn.dataset.success;
                    setTimeout(() => {
                        copyPromoBtn.textContent = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }

    // Countdown timer functionality
    const countdownElements = {
        hours: document.querySelector('.timer-i:nth-child(1) .timer-num'),
        minutes: document.querySelector('.timer-i:nth-child(2) .timer-num'),
        seconds: document.querySelector('.timer-i:nth-child(3) .timer-num')
    };

    // Set the initial countdown time (14 hours, 6 minutes, 12 seconds from now)
    let countdown = {
        hours: 14,
        minutes: 6,
        seconds: 12
    };

    // Update the countdown every second
    if (countdownElements.hours && countdownElements.minutes && countdownElements.seconds) {
        const countdownInterval = setInterval(function() {
            countdown.seconds--;

            if (countdown.seconds < 0) {
                countdown.seconds = 59;
                countdown.minutes--;
            }

            if (countdown.minutes < 0) {
                countdown.minutes = 59;
                countdown.hours--;
            }

            if (countdown.hours < 0) {
                // Reset to 24 hours when countdown reaches zero
                countdown.hours = 23;
                countdown.minutes = 59;
                countdown.seconds = 59;
            }

            // Update the displayed countdown
            countdownElements.hours.textContent = String(countdown.hours).padStart(2, '0');
            countdownElements.minutes.textContent = String(countdown.minutes).padStart(2, '0');
            countdownElements.seconds.textContent = String(countdown.seconds).padStart(2, '0');
        }, 1000);
    }

    // Add hover effect to offer cards
    const offerCards = document.querySelectorAll('.offer');
    offerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-q');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the parent faq-item
            const parentItem = this.parentNode;

            // Check if this item is already active
            const isActive = parentItem.classList.contains('active');
            if (isActive) {
                parentItem.classList.remove('active');
            }else{
                parentItem.classList.add('active');
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
