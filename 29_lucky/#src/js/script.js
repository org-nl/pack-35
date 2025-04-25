document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.pageNavbar-toggler');
    const navbarCollapse = document.querySelector('.pageNavbar-collapse');

    if (menuToggle && navbarCollapse) {
        menuToggle.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');

            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.style.display = 'block';
            } else {
                navbarCollapse.style.display = '';
            }
        });
    }
});
