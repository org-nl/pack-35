// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navbarOpen = document.querySelector('.js-navbar-open');
    const navbarClose = document.querySelector('.js-navbar-close');
    const navbarMenu = document.querySelector('.js-navbar-menu');
    const overlay = document.querySelector('.js-ower-bg');

    if (navbarOpen && navbarMenu && navbarClose && overlay) {
        
        // Open menu
        navbarOpen.addEventListener('click', function() {
            overlay.classList.add("active")
            navbarMenu.classList.add('active');
            document.body.style.overflow = "hidden";
        });

        overlay.addEventListener('click', closeMenu);
        navbarClose.addEventListener('click', closeMenu);

        // Close menu
        function closeMenu() {
            overlay.classList.remove("active")
            navbarMenu.classList.remove('active');
            document.body.style.overflow = "";
        }
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
      
        const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
        const myBlock = document.querySelector('.floating-card');
      
        if (distanceFromBottom < 100) {
          myBlock.style.display = 'none';
        } else {
          myBlock.style.display = 'block';
        }
      });
});
