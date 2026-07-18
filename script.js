const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navIcon = document.querySelector(".nav-icon");
const year = document.querySelector("#year");
const scrollTopFab = document.querySelector("#scroll-top-fab");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (scrollTopFab) {
  const toggleScrollTopFab = () => {
    if (window.scrollY > 320) {
      scrollTopFab.classList.add("is-visible");
    } else {
      scrollTopFab.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", toggleScrollTopFab, { passive: true });
  scrollTopFab.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleScrollTopFab();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (navIcon) {
      navIcon.textContent = isOpen ? "✕" : "☰";
    }
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      if (navIcon) {
        navIcon.textContent = "☰";
      }
    }
  });
}
