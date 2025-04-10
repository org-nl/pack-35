// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.js-burger-menu');
  const mobileNav = document.querySelector('.js-main-nav');
  const bgOverlay = document.querySelector('.js-bgOverlay');

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('burger-active');
      mobileNav.classList.toggle('active');
      bgOverlay.classList.toggle('active');

      // Toggle body scroll when menu is open
      if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    bgOverlay.addEventListener('click', () => {
      removeMenu();
    });

    // Close mobile nav when window is resized to desktop size
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && mobileNav.classList.contains('active')) {
        removeMenu();
      }
    });

    function removeMenu() {
      burgerBtn.classList.remove('burger-active');
      mobileNav.classList.remove('active');
      bgOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.helpCenter');

  for (const item of faqItems) {
    const question = item.querySelector('.helpCenter__header');

    if (question) {
      question.addEventListener('click', () => {
        // Close all other FAQ items
        for (const otherItem of faqItems) {
          if (otherItem !== item && otherItem.classList.contains('helpCenter__isActive')) {
            otherItem.classList.remove('helpCenter__isActive');
          }
        }

        // Toggle the clicked FAQ item
        item.classList.toggle('helpCenter__isActive');
      });
    }
  }
});
