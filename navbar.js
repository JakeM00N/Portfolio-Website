fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    
    document.getElementById('navbar').innerHTML = data;

    
    const navLinks = document.querySelectorAll('#nav-links li a');
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPath || (linkHref === "#projects" && currentPath === "index.html")) {
        link.classList.add('active');
      }
    });

    // --- HAMBURGER FUNCTIONALITY ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-links');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active'); 
      });
    }
  })
  .catch(error => console.error('Error loading navbar:', error));
