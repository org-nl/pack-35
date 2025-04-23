document.addEventListener('DOMContentLoaded', function() {
    //Burger menu functionality
    const burger = document.querySelector('.btnBurger');
    const menu = document.querySelector('.main-nav');
    const foneBlack = document.querySelector('.foneBlack');

    burger.addEventListener('click', function() {
        if(this.classList.contains('open')) {
            closeMenu();
        }else{
            openMenu();
        }
    });

    foneBlack.addEventListener('click', closeMenu);

    function openMenu() {
        burger.classList.add('open');
        menu.classList.add('open');
        foneBlack.classList.add('open'); 
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        burger.classList.remove('open');
        menu.classList.remove('open');
        foneBlack.classList.remove('open'); 
        document.body.style.overflow = '';
    }


    // FAQ accordion functionality
    const faqItem = document.querySelectorAll('.faq-item__question');
    faqItem.forEach(item => {
        item.addEventListener('click', () => {
            const faqItem = item.parentElement;
            if(faqItem.classList.contains('faq-item--active')) {
                faqItem.classList.remove('faq-item--active');
            }else{
                faqItem.classList.add('faq-item--active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip empty anchors

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20, // Additional 20px padding
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Highlight active sidebar item based on scroll position
    const sidebarLinks = document.querySelectorAll('.sidebar__link');
    const sections = document.querySelectorAll('.text-section');

    function highlightSidebarLink() {
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingLink = document.querySelector(`.sidebar__link[href="#${section.id}"]`);

                sidebarLinks.forEach(link => {
                    link.classList.remove('sidebar__link--active');
                });

                if (correspondingLink) {
                    correspondingLink.classList.add('sidebar__link--active');
                }
            }
        });
    }

    // Initialize sidebar highlight on page load
    highlightSidebarLink();

    // Update sidebar highlight on scroll
    window.addEventListener('scroll', highlightSidebarLink);
});
