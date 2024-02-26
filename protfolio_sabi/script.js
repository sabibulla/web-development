  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('.navbar-toggler');
  const navLinks = document.querySelector('.nav-ul');
  
  // Toggle the navbar menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  
  // Close the menu when a link is clicked
  navLinks.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
  
  // Close the menu when the window is resized
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
    }
  });