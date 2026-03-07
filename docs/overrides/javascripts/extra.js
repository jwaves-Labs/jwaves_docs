// Tiny JS to make the logo glow on scroll (pure JWAVES flavor)
document.addEventListener('scroll', () => {
  const logo = document.querySelector('.logo');
  if (window.scrollY > 100) {
    logo.style.opacity = '0.95';
  } else {
    logo.style.opacity = '0.7';
  }
});
