fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // Insert navbar into page
    document.getElementById('navbar').innerHTML = data;

    // Select all nav links after navbar is loaded
    const navLinks = document.querySelectorAll('#nav-links li a');
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      // Highlight if link matches current page
      if(linkHref === currentPath || (linkHref === "#projects" && currentPath === "index.html")) {
        link.classList.add('active');
      }
    });
  })
  .catch(error => console.error('Error loading navbar:', error));
