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
});
  