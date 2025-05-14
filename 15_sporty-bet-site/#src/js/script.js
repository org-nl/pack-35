document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.nav-dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Update currentSlide
        currentSlide = index;
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Start auto-sliding
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop auto-sliding
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideInterval();
            startSlideInterval();
        });
    });

    // Add click events to prev/next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopSlideInterval();
            startSlideInterval();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopSlideInterval();
            startSlideInterval();
        });
    }

    // Pause auto-sliding when hovering over the slider
    const sliderContainer = document.querySelector('.slider-layoutWrapper');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopSlideInterval);
        sliderContainer.addEventListener('mouseleave', startSlideInterval);
    }

    // Start the slideshow
    startSlideInterval();
    
    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('.questionsBox__question');

    // Add click event listener to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the parent questionsBox__unit
            const faqItem = this.parentElement;

            // Toggle active class on the questionsBox__unit
            faqItem.classList.toggle('active');

            // Close other FAQ items (optional, remove if you want multiple answers open at once)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.parentElement.classList.remove('active');
                }
            });
        });
    });

    // Close banner
	const banner = document.querySelector('.tip-box__closer');
    banner.addEventListener('click', function () {
        this.closest('.tip-box').classList.add('hide');
    })
});
