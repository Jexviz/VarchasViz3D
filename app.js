// app.js - Global Site Logic

window.addEventListener("load", () => {
  // 1. Initialize GSAP and Smooth Scrolling (Lenis)
  initSmoothScroll();

  // 2. Initialize Global Reveal Animations
  initGlobalAnimations();
});

function initSmoothScroll() {
  if (typeof gsap === "undefined" || typeof Lenis === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0, 0);
}

function initGlobalAnimations() {
  if (typeof gsap === "undefined") return;

  // Storytelling Reveal Animations (Fade Up)
  const revealElements = gsap.utils.toArray(".gs-reveal");
  revealElements.forEach((elem) => {
    // Only animate if it hasn't been initialized yet
    if (!elem.classList.contains("anim-initialized")) {
      elem.classList.add("anim-initialized");
      gsap.fromTo(
        elem,
        { autoAlpha: 0, y: 40 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  });

  // Subtle Parallax for Images
  const images = gsap.utils.toArray(".gs-image img");
  images.forEach((img) => {
    if (!img.classList.contains("anim-initialized")) {
      img.classList.add("anim-initialized");
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
}
