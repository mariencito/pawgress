// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

// Close the navbar menu initially
navbarMenu.classList.remove('is-active');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});