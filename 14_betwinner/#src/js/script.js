// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const createMobileMenuButton = () => {
      const burgerMenu = document.querySelector('.menuToggler');
      const nav = document.querySelector('.header__nav');
  
      if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function() {
          nav.classList.toggle('active');
          burgerMenu.classList.toggle('active');
        });
  
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
          if (!burgerMenu.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
          }
        });
  
        // Close mobile menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
          link.addEventListener('click', function() {
            nav.classList.remove('active');
            burgerMenu.classList.remove('active');
          });
        });
      }
    };
  
    
    // Initialize all functions
    createMobileMenuButton();
  });
  