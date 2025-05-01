// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show first FAQ item by default
    const firstFaqItem = document.querySelector('.faq details');
    if (firstFaqItem) {
      firstFaqItem.setAttribute('open', '');
    }
  
    // Handle smooth scrolling for anchor links in the table of contents
    const anchorLinks = document.querySelectorAll('.list-anchor-new a');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 150,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Add animation to hero section elements
    const heroText = document.querySelector('.hero-text');
    const heroBonus = document.querySelector('.hero-bonus');
  
    if (heroText && heroBonus) {
      // Add slight delay before animations
      setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
  
        setTimeout(() => {
          heroBonus.style.opacity = '1';
          heroBonus.style.transform = 'translateY(0)';
        }, 300);
      }, 100);
    }


    // Burger menu and mobile menu logic
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    burgerMenu.addEventListener('click', openMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);

    // Close mobile menu on ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });

    // Scroll to top button logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hero section animation on load
    window.addEventListener('DOMContentLoaded', function() {
        var heroSection = document.getElementById('heroSection');
        if (heroSection) {
            setTimeout(function() {
                heroSection.classList.add('hero-animate');
            }, 100);
        }
    });

    // Animate steps when they come into view
    function animateStepsOnScroll() {
        const stepItems = document.querySelectorAll('.step-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        });

        stepItems.forEach(item => {
            observer.observe(item);
        });
    }

    // Call the function when the page loads
    window.addEventListener('load', animateStepsOnScroll);
});
  