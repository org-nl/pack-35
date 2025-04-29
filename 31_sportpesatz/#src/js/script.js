// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ accordion functionality
    initFaqAccordion();

    // Initialize scroll to top button
    initScrollToTop();

    // Initialize smooth scrolling for navigation links
    initSmoothScroll();

    // Initialize mobile navigation
    initMobileNavigation();

    // Initialize active link highlighting on scroll
    initActiveLinksOnScroll();
});

/**
 * Initialize FAQ accordion functionality
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.qAzone-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.qAzone-item__question');

        question.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');

            // Close other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
}

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');

    // Initially hide the button
    scrollTopBtn.style.opacity = '0';

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '0.7';
        } else {
            scrollTopBtn.style.opacity = '0';
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize smooth scrolling for navigation links
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nvg__link');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            // Close mobile menu if it's open
            const navigation = document.querySelector('.nvg');
            if (navigation.classList.contains('open')) {
                navigation.classList.remove('open');
                document.body.style.overflow = '';
            }

            // Get the target section's ID from the href attribute
            const targetId = link.getAttribute('href');

            // Find the target element
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the header height to adjust the scroll position
                const headerHeight = document.querySelector('.topBox').offsetHeight;
                const navHeight = document.querySelector('.nvg').offsetHeight;

                // Calculate the final scroll position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - navHeight;

                // Scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize mobile navigation toggle
 */
function initMobileNavigation() {
    const navToggle = document.querySelector('.nvg__toggle');
    const navigation = document.querySelector('.nvg');

    // Toggle mobile menu when hamburger is clicked
    navToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');

        // Prevent body scrolling when mobile menu is open
        if (navigation.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navigation.classList.contains('open') &&
            !e.target.closest('.nvg__wrapper') &&
            !e.target.closest('.nvg__toggle')) {
            navigation.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Initialize active link highlighting on scroll
 */
function initActiveLinksOnScroll() {
    // Get all sections that correspond to nav links
    const navLinks = document.querySelectorAll('.nvg__link');
    const navLinkIDs = Array.from(navLinks).map(link => link.getAttribute('href').substring(1));
    const sections = [];

    // Find all the sections with matching IDs from the navigation links
    navLinkIDs.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            sections.push(section);
        }
    });

    // Ensure we have sections to track
    if (sections.length === 0) {
        console.warn('No sections found for scroll highlighting');
        return;
    }

    const list = document.querySelector('.nvg__list');
    const listWrapper = document.querySelector('.nvg__wrapper');

    function highlightNavOnScroll() {
        // Get current scroll position
        const scrollPos = window.pageYOffset + 200; // Add offset to trigger earlier

        // Find the section that is currently visible
        let currentSection = sections[0];

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentSection = section;
                break;
            }
        }

        // Remove .active class from all links first
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add .active class to the current section's link
        const currentSectionId = currentSection.getAttribute('id');
        const correspondingLink = document.querySelector(`.nvg__link[href="#${currentSectionId}"]`);
        if (correspondingLink) {
            correspondingLink.classList.add('active');
            let end = correspondingLink.offsetLeft - list.offsetLeft + correspondingLink.clientWidth;
            let start = correspondingLink.offsetLeft - list.offsetLeft;
            //console.log(end, listWrapper.scrollWidth, listWrapper.scrollLeft, list.clientWidth, list.scrollWidth);
            //console.log(start, listWrapper.scrollWidth, listWrapper.scrollLeft, list.clientWidth, list.scrollWidth);
            //console.dir(correspondingLink);
            let diffStart = listWrapper.scrollLeft - start;
            let diffEnd = end - (list.clientWidth + listWrapper.scrollLeft);
            
            if(diffEnd > 0){
                //console.log("diffEnd", diffEnd);
                listWrapper.scrollBy({
                    left: diffEnd+16,
                    behavior: 'smooth'
                });
            }

            if(diffStart > 0){
                //console.log("diffStart", diffStart);
                listWrapper.scrollBy({
                    left: -diffStart-16,
                    behavior: 'smooth'
                });
            }
            
        }
    }

    // Initial call to set the active state on page load
    highlightNavOnScroll();

    // Add event listener for scroll
    window.addEventListener('scroll', highlightNavOnScroll);
}
