document.addEventListener('DOMContentLoaded', function() {
    // Превращает картинку data-bg-image в background-image
    (function ibg(){
        setTimeout(() => {
            let ibg=document.querySelectorAll(".ibg");
            for (var i = 0; i < ibg.length; i++) {
                const bgUrl = ibg[i].getAttribute('data-src');
			    ibg[i].style.backgroundImage = `url(${bgUrl})`;
            }
        }, 0);
    })();


    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Add click event listener to each FAQ question
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Get the parent faq-item
            const faqItem = this.parentElement;

            // Toggle active class on the faq-item
            faqItem.classList.toggle('active');

            // Close other FAQ items (optional, remove if you want multiple answers open at once)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.parentElement.classList.remove('active');
                }
            });
        });
    });

    // Close banner
	const bannerBtn = document.querySelector('.banner__closer');
    bannerBtn.addEventListener('click', function () {
        this.closest('.banner').classList.add('hide');
    })
});
