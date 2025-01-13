const navbar = document.getElementById("navbar");

const howDoesItWork = document.getElementById("how-does-it-work");
const contact = document.getElementById("contact");

const whatWeOffer = document.getElementById("what-we-offer");

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.setProperty('--before-top', '-100%');
    } else {
        navbar.style.setProperty('--before-top', '0');
    }
});

howDoesItWork.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight - (whatWeOffer.offsetHeight / 2),
        behavior: 'smooth'
    });
});

contact.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth'
    });
});