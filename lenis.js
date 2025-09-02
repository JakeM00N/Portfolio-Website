document.addEventListener("DOMContentLoaded", () => {
  if (typeof Lenis === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("Lenis or ScrollTrigger not loaded!");
    return;
  }

  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
    smoothTouch: true,
    direction: "vertical",
    gestureDirection: "vertical",
    wheelMultiplier: 1,
  });

  const videoWrapper = document.querySelector(".video-wrapper");

  // Pause Lenis smooth scroll while hovering the video
  

  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
