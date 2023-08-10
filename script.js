const navOpen = () => {
  const hamburger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
});
}

navOpen();