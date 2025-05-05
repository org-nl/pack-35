document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.header__nav');
  
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', function() {
        if(mobileMenu.classList.contains('active')){
          document.body.style.overflow = "";
        }else {
          document.body.style.overflow = "hidden";
        }
        mobileMenu.classList.toggle('active');
        menuButton.classList.toggle('mobile-menu-button--active');
      });
    }
  
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq__item');
  
    if (faqItems.length > 0) {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
  
        // Hide all answers initially
        if (answer) {
          answer.style.display = 'none';
        }
  
        if (question) {
          question.addEventListener('click', function() {
            // Toggle current answer
            if (answer) {
              const isVisible = answer.style.display === 'block';
              answer.style.display = isVisible ? 'none' : 'block';
  
              // Update icon (assuming there's a span with class .icon)
              const icon = question.querySelector('.icon');
              if (icon) {
                icon.textContent = isVisible ? '+' : '-';
              }
            }
          });
        }
      });
    }

    // Button scroll top
    const backToTopButton = document.querySelector('.back-to-top');
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);

    // Content nav links
    const toc = document.querySelector(".toc");
    const tocTitle = document.querySelector(".toc__title");
    if(toc && tocTitle){
        toc.classList.add('hidden');
        tocTitle.addEventListener('click', function () {
            toc.classList.toggle('hidden');
        });    
    }
   
    // Slot game hover effect enhancement
    const slotItems = document.querySelectorAll('.slots__item');
  
    if (slotItems.length > 0) {
      slotItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          this.querySelector('.slots__content').style.opacity = '1';
          this.querySelector('.slots__name').style.opacity = '0';
        });
  
        item.addEventListener('mouseleave', function() {
          this.querySelector('.slots__content').style.opacity = '0';
          this.querySelector('.slots__name').style.opacity = '1';
        });
      });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
    if (anchorLinks.length > 0) {
      anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
    }
  });
  