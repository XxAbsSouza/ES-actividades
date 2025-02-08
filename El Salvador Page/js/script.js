const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.primary-navigation a');
const headerTittle = document.querySelector('.header-tittle');

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
const navbar = document.getElementById('navbar');
let timeout;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        navbar.classList.add('active');

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            navbar.classList.remove('active');
        }, 5000);
    } 
    else {
        navbar.classList.remove('active');
        
        clearTimeout(timeout);
    }

    if (scrollTop === 0) {
        navbar.classList.remove('active');
        clearTimeout(timeout);
    }

    if (navToggle.getAttribute('aria-expanded') === 'true') {
        navbar.classList.add('active');
        clearTimeout(timeout);
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});






