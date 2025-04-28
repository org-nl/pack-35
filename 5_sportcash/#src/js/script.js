document.addEventListener('DOMContentLoaded', function() {
    // Burger menu
    const btn = document.querySelector('.btnBurger');
    const menu = document.querySelector('.main-nav');
    
    btn.addEventListener('click', function () {
        if(btn.classList.contains('active')){
        btn.classList.remove('active');
            menu.classList.remove('active');
        } else {
            btn.classList.add('active');
            menu.classList.add('active');
        }
    });

    // Add automatic year update in the footer copyright
    const currentYear = new Date().getFullYear();
    const copyrightEl = document.querySelector('.site-bottom_legal p span');
    if (copyrightEl) {
        copyrightEl.textContent = currentYear;
    }
});
