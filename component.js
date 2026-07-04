// components.js

const universalHeader = `
    <header>
      <!-- Changed 'fixed' to 'absolute' and made the background 'bg-transparent' -->
      <nav class="w-full px-6 md:px-12 py-8 flex justify-between items-center absolute top-0 left-0 z-50 bg-transparent text-primary-dark transition-colors duration-500" id="main-nav">
        <a href="index.html" class="text-xl font-bold tracking-tighter relative z-[60]">VarchasViz®</a>

        <!-- Hamburger Menu Icon -->
        <button id="menu-toggle" class="space-y-2 group cursor-pointer p-2 relative z-[60]">
          <div class="w-8 h-[1px] bg-primary-dark group-hover:w-6 transition-all duration-300 menu-line-1"></div>
          <div class="w-8 h-[1px] bg-primary-dark group-hover:w-10 transition-all duration-300 menu-line-2"></div>
        </button>
      </nav>

      <!-- Fullscreen Menu Overlay -->
      <div id="mobile-menu" class="fixed inset-0 bg-primary-dark text-white z-40 flex flex-col justify-center items-center opacity-0 pointer-events-none transition-opacity duration-500">
        <div class="flex flex-col items-center gap-8 text-4xl md:text-6xl font-medium tracking-tight">
          <a href="index.html" class="hover:text-white/50 transition-colors">Home</a>
          <a href="about.html" class="hover:text-white/50 transition-colors">About</a>
          <a href="projects.html" class="hover:text-white/50 transition-colors">Projects</a>
          <a href="contact.html" class="hover:text-white/50 transition-colors">Contact</a>
        </div>
      </div>
    </header>
`;

const universalFooter = `
    <div class="bg-primary-dark text-white rounded-t-3xl md:rounded-t-[3rem] overflow-hidden relative z-20">
      <footer id="footer" class="pt-24 pb-12">
        <div class="px-6 md:px-12 flex flex-col md:flex-row justify-between mb-32 gap-16">
          <div class="w-full md:w-1/3">
            <h4 class="text-xl font-medium mb-6">Studio Insights & Updates</h4>
            <div class="relative flex items-center border-b border-white/20 pb-4 focus-within:border-white transition-colors">
              <input type="email" placeholder="Enter Your Email" class="bg-transparent w-full outline-none text-white/80 placeholder-white/40 font-light text-lg" />
              <button class="absolute right-0 uppercase tracking-widest text-sm font-medium hover:text-white/60 transition-colors">Subscribe ↗</button>
            </div>
          </div>

          <div class="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 text-sm uppercase tracking-widest font-medium text-white/60">
            <div class="flex flex-col gap-5">
              <a href="index.html" class="hover:text-white transition-colors">Home</a>
              <a href="about.html" class="hover:text-white transition-colors">About</a>
              <a href="projects.html" class="hover:text-white transition-colors">Projects</a>
              <a href="contact.html" class="hover:text-white transition-colors">Contact</a>
            </div>
            <div class="flex flex-col gap-5">
              <a href="#" class="hover:text-white transition-colors">Instagram</a>
              <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
            </div>
            <div class="flex flex-col gap-5 normal-case tracking-normal font-light">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=varchasviz3d@gmail.com" target="_blank" class="hover:text-white transition-colors">varchasviz3d@gmail.com</a>
              <a href="tel:+919426513742" class="hover:text-white transition-colors">(+91) 94265 13742</a>
              <p class="mt-2 text-white/40">Surat, India</p>
            </div>
          </div>
        </div>

       
      </footer>
    </div>
`;
// ... (Keep your universalHeader and universalFooter strings exactly as they are) ...

// This function injects the HTML into your pages
function loadComponents() {
  const headerContainer = document.getElementById("universal-header-container");
  const footerContainer = document.getElementById("universal-footer-container");

  // Inject the HTML if the containers exist on the page
  if (headerContainer) headerContainer.innerHTML = universalHeader;
  if (footerContainer) footerContainer.innerHTML = universalFooter;

  // Hamburger Menu Logic
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mainNav = document.getElementById("main-nav");
  const line1 = document.querySelector(".menu-line-1");
  const line2 = document.querySelector(".menu-line-2");
  let isMenuOpen = false;

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove("opacity-0", "pointer-events-none");
        mobileMenu.classList.add("opacity-100", "pointer-events-auto");
        mainNav.classList.replace("text-primary-dark", "text-white");
        line1.classList.replace("bg-primary-dark", "bg-white");
        line2.classList.replace("bg-primary-dark", "bg-white");
      } else {
        mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
        mobileMenu.classList.add("opacity-0", "pointer-events-none");
        mainNav.classList.replace("text-white", "text-primary-dark");
        line1.classList.replace("bg-white", "bg-primary-dark");
        line2.classList.replace("bg-white", "bg-primary-dark");
      }
    });
  }

  // CRITICAL FIX: Tell GSAP to recalculate the scroll triggers
  // now that the heavy footer has been added to the DOM!
  setTimeout(() => {
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }, 300);
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", loadComponents);
