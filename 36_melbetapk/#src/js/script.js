document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
  
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
  
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target) && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      });
    }
  
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        // Toggle the active class on the clicked question
        this.classList.toggle('active');
  
        // Get the parent faq-item
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
      });
    });

    // Button scroll top
    const backToTopButton = document.querySelector('.back-to-top');
    const banner = document.querySelector('.banner');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
            banner.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
            banner.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
  });
  