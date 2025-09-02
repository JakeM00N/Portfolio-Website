document.addEventListener("DOMContentLoaded", () => {
  // Make sure Lenis and ScrollTrigger are loaded
  if (typeof Lenis === "undefined") {
    console.error("Lenis is not loaded!");
    return;
  }

  if (typeof ScrollTrigger === "undefined") {
    console.error("ScrollTrigger is not loaded!");
    return;
  }

  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.8, 
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
    smoothTouch: true,
    direction: "vertical",
    gestureDirection: "vertical",
    mouseMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Keep ScrollTrigger in sync
  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  // RequestAnimationFrame loop
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
