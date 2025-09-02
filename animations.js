/// animations.js

gsap.registerPlugin(ScrollTrigger);

// --- PAGE LOAD (ONLY HERO TEXT NOW) ---
const heroText = document.querySelector(".hero-text");
if (heroText) {
  gsap.from(heroText, {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
}


// --- PROJECT SECTIONS ---
gsap.utils.toArray(".project-container").forEach((section) => {
  if (!section) return; // skip if not found

  const text = section.querySelector(".project-text");
  const image = section.querySelector(".project-image");

  if (text) {
    gsap.from(text, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

  if (image) {
    gsap.from(image, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });
  }
});


// --- ABOUT SECTION (appear together from TOP) ---
const about = document.querySelector(".about-container");
if (about) {
  gsap.from(about, {
    y: -90,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
}

const contact = document.querySelector(".contact-container");
if (contact) {
  gsap.from(contact, {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 85%",
      toggleActions: "play none none reset",
    },
    y: 90,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
}


// --- TOOLS SECTION ---
const toolsTitle = document.querySelector(".tools h2");
if (toolsTitle) {
  gsap.from(toolsTitle, {
    scrollTrigger: {
      trigger: ".tools",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
    y: 80,
    opacity: 0,
    ease: "power3.out",
  });
}

const toolsItems = gsap.utils.toArray(".tool");
if (toolsItems.length > 0) {
  gsap.from(toolsItems, {
    scrollTrigger: {
      trigger: ".tools",
      start: "top 90%",
      end: "top 40%",
      scrub: true,
    },
    y: 150,
    opacity: 0,
    ease: "power3.out",
  });
}

// --- PROJECT PAGE HERO ---
const heroH1 = document.querySelector(".project-page-hero h1");
const heroP = document.querySelector(".project-page-hero p");
const video = document.querySelector(".video-wrapper");
const projectContent = gsap.utils.toArray(".project-page-content h2, .project-page-content p");

if (heroH1 || heroP || video || projectContent.length > 0) {
  const tl = gsap.timeline();

  if (heroH1) tl.from(heroH1, { y: 80, opacity: 0, duration: 0.8, ease: "power3.out" });
  if (heroP) tl.from(heroP, { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
  if (video) tl.from(video, { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
  if (projectContent.length > 0) tl.from(projectContent, { y: 40, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.4");
}

// --- BEFORE & AFTER IMAGES ANIMATION ---
gsap.utils.toArray(".before-after-images").forEach((container) => {
  const beforeImage = container.querySelector(".before-image");
  const afterImage = container.querySelector(".after-image");

  gsap.from(beforeImage, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%", // start when top of container hits 80% of viewport
      toggleActions: "play none none none",
    },
    x: -100, // slide from left
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(afterImage, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 100, // slide from right
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2, // slight delay for stagger effect
  });
});








// --- ENSURE SCROLLTRIGGER UPDATES ---
if (typeof lenis !== "undefined") {
  ScrollTrigger.addEventListener("refresh", () => lenis.resize());
}
ScrollTrigger.refresh();

