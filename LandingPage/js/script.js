const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.primary-navigation a');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

document.addEventListener('click', (event) => {
    if (event.target.closest('.primary-navigation') === null && event.target !== navToggle) {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});


onscroll = function() {
    primaryNav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.getAttribute('aria-expanded') === 'true') {
            primaryNav.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

let lastScrollTop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop>lastScrollTop) {
        navbar.style.top = "-80px";
        
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


// ---------------------------


