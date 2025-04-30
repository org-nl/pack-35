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
    const faqQuestions = document.querySelectorAll('.customer-questions-question');
  
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
    const backToTopButton = document.querySelector('.goHeader');
    const banner = document.querySelector('.placeBig');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function toggleBackToTopButton() {
        let isShow = false;
        if(window.scrollY+(window.outerHeight*1.5) > document.body.scrollHeight){
            isShow = false;
        }else{
            isShow = true;
        }
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
            if(isShow){
                banner.classList.add('show');
            }else{
                banner.classList.remove('show');
            }
        } else {
            backToTopButton.classList.remove('show');
            banner.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
  });
  