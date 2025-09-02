
const loader = document.getElementById("loader");
const dots = document.querySelectorAll(".dots span");

dots[dots.length - 1].addEventListener("animationend", () => {
  loader.style.opacity = 0; 
  loader.style.transition = "opacity 0.5s ease-out";
  setTimeout(() => loader.style.display = "none", 500);
});

const gmailPill = document.getElementById("gmail-pill");
const email = gmailPill.textContent;

gmailPill.addEventListener("click", () => {
  navigator.clipboard.writeText(email).then(() => {
    
    gmailPill.textContent = "Copied!";
    setTimeout(() => {
      gmailPill.textContent = email; 
    }, 1500);
  }).catch((err) => {
    console.error("Failed to copy: ", err);
  });
});

const navLinks = document.querySelectorAll('nav ul li a');


const sections = document.querySelectorAll('main section');


function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; 
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}


window.addEventListener('scroll', highlightNav);


highlightNav();
