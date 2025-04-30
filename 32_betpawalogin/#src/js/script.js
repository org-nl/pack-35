// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.style.display === 'block';

            // Close all FAQ answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.display = 'none';
            });

            // Reset all question plus icons
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current FAQ item
            if (!isOpen) {
                answer.style.display = 'block';
                question.classList.add('active');
            }
        });
    });

    // Initially hide all FAQ answers except the first one
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach((answer, index) => {
        if (index === 0) {
            answer.style.display = 'block';
            faqQuestions[0].classList.add('active');
        } else {
            answer.style.display = 'none';
        }
    });

    // Add active class styles
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .faq-question.active::after {
                content: '-';
            }

            .faq-question.active {
                background-color: #2c2c2c;
            }
        </style>
    `);
});
