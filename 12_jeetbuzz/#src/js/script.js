document.addEventListener('DOMContentLoaded', function() {
    // Initialize the slider
    initSlider();

    // Initialize FAQ toggle
    initFaqToggle();

    // Initialize mobile menu
    initMobileMenu();
});

// Function to initialize the slider
function initSlider() {
    // Simple slider implementation
    const sliderWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');

    if (!sliderWrapper || slides.length === 0) return;

    let currentSlide = 0;
    const slideCount = slides.length;

    // Clone the first slide and append it to the end for infinite loop effect
    const firstSlideClone = slides[0].cloneNode(true);
    sliderWrapper.appendChild(firstSlideClone);

    // Function to move to a specific slide
    function goToSlide(index) {
        // Calculate the transform value
        const transformValue = -index * 100 + '%';

        // Apply the transform
        sliderWrapper.style.transition = index === slideCount ? 'none' : 'transform 0.5s ease';
        sliderWrapper.style.transform = 'translateX(' + transformValue + ')';

        // Reset to first slide when reaching the clone
        if (index === slideCount) {
            setTimeout(() => {
                sliderWrapper.style.transition = 'none';
                sliderWrapper.style.transform = 'translateX(0)';
                currentSlide = 0;
            }, 500);
        }

        currentSlide = index % slideCount;
    }

    // Function to move to the next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Set up auto-sliding
    let sliderInterval = setInterval(nextSlide, 5000);

    // Pause auto-sliding when user interacts with the slider
    const bannerSection = document.querySelector('.banner-section');

    if (bannerSection) {
        bannerSection.addEventListener('mouseenter', () => {
            clearInterval(sliderInterval);
        });

        bannerSection.addEventListener('mouseleave', () => {
            sliderInterval = setInterval(nextSlide, 5000);
        });
    }

    // Set initial styles
    slides.forEach(slide => {
        slide.style.width = '100%';
        slide.style.float = 'left';
    });

    sliderWrapper.style.width = (slideCount + 1) * 100 + '%';
    sliderWrapper.style.display = 'flex';
}

// Function to initialize FAQ toggle
function initFaqToggle() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Toggle the active class on the clicked item
            item.classList.toggle('active');

            // Close other items (optional, for accordion-style behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Make the first FAQ item active by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
}

// Function to initialize mobile menu
function initMobileMenu() {
    const openMenuBtn = document.querySelector('.open-menu');
    const mobileMenu = document.querySelector('.mobile__menu');
    const mobileBg = document.querySelector('.for-mobile-bg');

    if (!openMenuBtn || !mobileMenu || !mobileBg) return;

    openMenuBtn.addEventListener('click', () => {
        // Toggle the menu
        mobileMenu.style.display = 'block';
        mobileMenu.classList.add('active');
        mobileBg.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    mobileBg.addEventListener('click', closeMenu);

    // Add close button to mobile menu if it doesn't exist
    if (!document.querySelector('.close-menu')) {
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-menu';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.color = '#fff';
        closeBtn.style.cursor = 'pointer';

        mobileMenu.appendChild(closeBtn);
        closeBtn.addEventListener('click', closeMenu);
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            mobileMenu.style.display = 'none';
            mobileBg.style.display = 'none';
        }, 300);
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}
