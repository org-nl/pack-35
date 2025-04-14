// Babu88 Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Scroll to Top Button functionality
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const banner = document.querySelector('.bannerBottom');

    if (scrollToTopBtn) {
        // Show button when scrolling down
        window.addEventListener('scroll', function() {
            // Show button after scrolling down 300px
            if (window.pageYOffset > 800) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }

			// Show banner when scrolling down to a certain point
			if (window.pageYOffset > 800 && window.pageYOffset < document.body.offsetHeight - window.innerHeight - 500) {
				banner.classList.add('bannerVisible');
			}else{
				banner.classList.remove('bannerVisible');
			}
        });

        // Scroll to top when clicking the button
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Table of Contents toggle functionality
    const tocSection = document.querySelector('.toc-section');
    const tocHeader = document.querySelector('.toc-header');
    const tocToggle = document.querySelector('.toc-toggle');

    if (tocSection && tocHeader && tocToggle) {
        // Collapse TOC by default after a short delay
        tocSection.classList.add('toc-collapsed');
        

        // Toggle on button click
        tocToggle.addEventListener('click', function() {
            tocSection.classList.toggle('toc-collapsed');
        });

        // Also toggle when clicking the header
        tocHeader.addEventListener('click', function(e) {
            // Only toggle if the click is directly on the header or the h2,
            // not on the button (as it has its own event handler)
            if (e.target === tocHeader || e.target.classList.contains('titleSection')) {
                tocSection.classList.toggle('toc-collapsed');
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            body.classList.toggle('mobile-menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (body.classList.contains('mobile-menu-open') &&
                !e.target.closest('.header__nav') &&
                !e.target.closest('.mobile-menu-toggle')) {
                body.classList.remove('mobile-menu-open');
            }
        });

        // Close menu when pressing escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && body.classList.contains('mobile-menu-open')) {
                body.classList.remove('mobile-menu-open');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                if (body.classList.contains('mobile-menu-open')) {
                    body.classList.remove('mobile-menu-open');
                }
            }
        });
    });

    // Expandable FAQ items
    const faqItems = document.querySelectorAll('.baseInfo_item');
	faqItems.forEach(item => {
		if(!item.classList.contains('isActive')){
			item.querySelector('.baseInfo_text').style.display = 'none';
		}

		item.querySelector('.baseInfo_title').addEventListener('click', function() {
			let isActive = item.classList.contains('isActive');
			if(isActive){
				item.classList.remove('isActive');
				item.querySelector('.baseInfo_text').style.display = 'none';
			}else{
				item.classList.add('isActive');
				item.querySelector('.baseInfo_text').style.display = 'block';
			}
		});
	});
});
