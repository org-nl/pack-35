// MSport Website JavaScript - Pure version

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }

    // Add active class to the current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

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

    // Make tables responsive
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('table-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentElement.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });

    // Enhance FAQ section with collapsible content
    const faqTitles = document.querySelectorAll('h3[id^="how-"], h3[id^="what-"], h3[id^="is-"]');

    faqTitles.forEach(title => {
        const content = title.nextElementSibling;

        if (content && content.tagName === 'P') {
            title.style.cursor = 'pointer';
            title.innerHTML += ' <small>▼</small>';

            title.addEventListener('click', () => {
                const isVisible = content.style.display !== 'none';

                content.style.display = isVisible ? 'none' : 'block';
                title.innerHTML = title.innerHTML.replace(
                    isVisible ? '▼' : '▲',
                    isVisible ? '▲' : '▼'
                );
            });
        }
    });

    // Floating bonus card close button
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        // Add a close button
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '5px';
        closeButton.style.right = '10px';
        closeButton.style.background = 'transparent';
        closeButton.style.border = 'none';
        closeButton.style.color = 'white';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';

        closeButton.addEventListener('click', () => {
            floatingCard.style.display = 'none';

            // Store in session that the user closed the card
            sessionStorage.setItem('bonusCardClosed', 'true');
        });

        // Only show close button if user hasn't closed it before
        if (!sessionStorage.getItem('bonusCardClosed')) {
            floatingCard.appendChild(closeButton);
        } else {
            floatingCard.style.display = 'none';
        }
    }
});

// Prevent navbar menu from staying open on window resize
window.addEventListener('resize', function() {
    const navbarMenu = document.getElementById('navbar-menu');
    if (window.innerWidth > 992 && navbarMenu) {
        navbarMenu.classList.remove('active');
    }
});
