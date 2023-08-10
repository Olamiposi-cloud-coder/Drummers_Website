// Navbar Responsiveness
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-lists');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active'); // Use .nav-lists to toggle visibility
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navLinks.classList.remove('active'); // Use .nav-lists to toggle visibility
}));
