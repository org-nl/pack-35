// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show first FAQ item by default
    const firstFaqItem = document.querySelector('.faq details');
    if (firstFaqItem) {
      firstFaqItem.setAttribute('open', '');
    }
  
    // Handle smooth scrolling for anchor links
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
  
    // Back to top button functionality
    const goToTopButton = document.querySelector('.go-to-top');
    if (goToTopButton) {
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          goToTopButton.classList.add('show');
          goToTopButton.classList.remove('hide');
        } else {
          goToTopButton.classList.add('hide');
          goToTopButton.classList.remove('show');
        }
      });
  
      goToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });
  