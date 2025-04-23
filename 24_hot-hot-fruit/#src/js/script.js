document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('scroll-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                document.querySelector('.back-to-top').classList.add('show');
            } else {
                document.querySelector('.back-to-top').classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Table of Contents functionality
    const tocSidebar = document.getElementById('toc-sidebar');
    const tocOpenBtn = document.getElementById('toc-open-btn');
    const tocCloseBtn = document.getElementById('toc-close-btn');
    const tocLinks = document.querySelectorAll('.toc-link');

    if (tocOpenBtn && tocCloseBtn && tocSidebar) {
        // Function to open TOC
        function openTOC(e) {
            if (e) e.preventDefault();
            tocSidebar.classList.add('open');
            document.body.classList.add('toc-open');
        }

        // Function to close TOC
        function closeTOC(e) {
            if (e) e.preventDefault();
            tocSidebar.classList.remove('open');
            document.body.classList.remove('toc-open');
        }

        // Event listeners for TOC buttons
        tocOpenBtn.addEventListener('click', openTOC);
        tocCloseBtn.addEventListener('click', closeTOC);

        // Close TOC when clicking outside
        document.addEventListener('click', function(e) {
            if (tocSidebar.classList.contains('open')) {
                if (!tocSidebar.contains(e.target) && !tocOpenBtn.contains(e.target) && e.target !== tocOpenBtn) {
                    closeTOC();
                }
            }
        });

        // Close TOC on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && tocSidebar.classList.contains('open')) {
                closeTOC();
            }
        });

        // Handle TOC link clicks
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Get target element ID
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Close TOC
                    closeTOC();

                    // Scroll to target after short delay to allow TOC to close
                    setTimeout(function() {
                        const headerOffset = 120;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]:not(.toc-link)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Skip if it's the back-to-top button or has no target
            if (targetId === '#' || !targetId || this.classList.contains('toc-close')) {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Close mobile menu if open
                if (mainNavigation && mainNavigation.classList.contains('active')) {
                    mainNavigation.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }

                // Scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Comment Reply Functionality
    const replyLinks = document.querySelectorAll('.comment-reply');
    const commentForm = document.querySelector('.comment-form');
    const commentFormContainer = document.querySelector('.comment-form-container');

    if (replyLinks.length && commentForm) {
        replyLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Get the comment author we're replying to
                const commentItem = this.closest('.comment-item');
                const authorName = commentItem.querySelector('.comment-author').textContent.split(' ')[0];

                // Create a reply notice if it doesn't exist
                let replyNotice = commentFormContainer.querySelector('.reply-notice');

                if (!replyNotice) {
                    replyNotice = document.createElement('div');
                    replyNotice.className = 'reply-notice';
                    commentFormContainer.insertBefore(replyNotice, commentFormContainer.firstChild);
                }

                // Update the reply notice
                replyNotice.innerHTML = `
                    <p>Replying to <strong>${authorName}</strong></p>
                    <a href="#" class="cancel-reply">Cancel reply</a>
                `;

                // Scroll to the comment form
                window.scrollTo({
                    top: commentFormContainer.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Focus on the comment textarea
                commentForm.querySelector('textarea').focus();

                // Add cancel reply functionality
                const cancelReply = replyNotice.querySelector('.cancel-reply');
                if (cancelReply) {
                    cancelReply.addEventListener('click', function(e) {
                        e.preventDefault();
                        replyNotice.remove();
                    });
                }
            });
        });
    }

    // Comment Form Submission
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const comment = this.querySelector('#comment').value;
            const author = this.querySelector('#author').value;
            const email = this.querySelector('#email').value;

            // Simple validation
            if (!comment || !author || !email) {
                alert('Please fill in all required fields');
                return;
            }

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'comment-success';
            successMessage.innerHTML = '<p>Thank you for your comment! It is awaiting moderation.</p>';

            // Add success message after the form
            this.parentNode.appendChild(successMessage);

            // Reset the form
            this.reset();

            // Remove reply notice if it exists
            const replyNotice = commentFormContainer.querySelector('.reply-notice');
            if (replyNotice) {
                replyNotice.remove();
            }

            // Remove success message after a delay
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
        });
    }

    // Initialize animations for sections on scroll
    const animateSections = () => {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('section-visible');
            }
        });
    };

    // Run animation check on load and scroll
    window.addEventListener('load', animateSections);
    window.addEventListener('scroll', animateSections);
});
