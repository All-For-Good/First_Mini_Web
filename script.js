// Navigation toggle + active link + back-to-top

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const backToTop = document.getElementById('back-to-top');

// Hamburger toggle
menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('show');
});

// Highlight active link
const currentPage = window.location.pathname.split("/").pop();
const links = navLinks.querySelectorAll("a");
links.forEach(link => {
   if(link.getAttribute("href") === currentPage) {
      link.classList.add("active");
   }
});

if (backToTop) {
      window.addEventListener("scroll", () => {
         backToTop.style.display = window.scrollY > 300 ? "block" : "none";
      });

backToTop.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: "smooth" });
});
}

document.addEventListener("DOMContentLoaded", () => {
   if (!document.getElementById("back-to-top")) {
      const btn = document.createElement("button");
      btn.id = "back-to-top";
      btn.textContent = "⬆ Back to Top";
      btn.style.display = "none";
      btn.style.position = "fixed";
      btn.style.bottom = "20px";
      btn.style.right = "20px";
      document.body.appendChild(btn);

      // Scroll behavior
      window.addEventListener("scroll", () => {
         btn.style.display = window.scrollY > 300 ? "block" : "none";
      });

      // Click behavior
      btn.addEventListener("click", () => {
         window.scrollTo({ top: 0, behavior: "smooth" });
      });
   }
});