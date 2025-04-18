document.addEventListener('DOMContentLoaded', function() {

    const menuLinks = document.querySelector('.js-list-menu');
    const menuLinksBtnOpener = document.querySelector('.js-list-menu-btn-opener');
    const menuDarkening = document.querySelector('.js-darkening');

    if(menuLinks && menuLinksBtnOpener && menuDarkening){
        menuLinksBtnOpener.addEventListener('click', function () {
            menuLinks.classList.add('active');
            menuDarkening.classList.add('active');
            menuLinksBtnOpener.classList.add('active');
            document.body.style.overflow = "hidden";
        })

        menuDarkening.addEventListener('click', closeNavigationMenu)
        
        function closeNavigationMenu(){
            menuLinks.classList.remove('active');
            menuDarkening.classList.remove('active');
            menuLinksBtnOpener.classList.remove('active');
            document.body.style.overflow = "";
        }
    }

    // Back to top button functionality
    const btnTop = document.querySelector('.btnTop');

    if (btnTop) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        btnTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('.anchor-item');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion functionality
    const accordionBlocks = document.querySelectorAll('.accord-block');

    accordionBlocks.forEach(block => {
        // Set the first accordion item to be open initially
        if (block === accordionBlocks[0]) {
            block.classList.add('open');
            const content = block.querySelector('.accord-block-content');
            if (content) {
                content.style.display = 'block';
            }
        }

        const header = block.querySelector('.accord-block-header');

        if (header) {
            header.addEventListener('click', function() {
                // Toggle current accordion item
                block.classList.toggle('open');

                const content = block.querySelector('.accord-block-content');

                if (content) {
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                }

                // Optional: Close other accordion items
                accordionBlocks.forEach(otherBlock => {
                    if (otherBlock !== block) {
                        otherBlock.classList.remove('open');
                        const otherContent = otherBlock.querySelector('.accord-block-content');
                        if (otherContent) {
                            otherContent.style.display = 'none';
                        }
                    }
                });
            });
        }
    });
});
