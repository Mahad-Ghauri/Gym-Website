document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mid = document.querySelector('.mid');
    const right = document.querySelector('.right');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mid.classList.toggle('active');
            right.classList.toggle('mobile');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header') && mid.classList.contains('active')) {
            mid.classList.remove('active');
            right.classList.remove('mobile');
        }
    });

    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}); 