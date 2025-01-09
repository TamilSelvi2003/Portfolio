document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const headerArea = document.querySelector(".header-area");
      if (window.scrollY > 1) {
        headerArea.classList.add("sticky");
      } else {
        headerArea.classList.remove("sticky");
      }
      updateActiveSection();
    });
    document.querySelectorAll(".header ul li a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        if (target.classList.contains("active-section")) return;
  
        const offset = this.getAttribute("href") === "#home" ? 0 : target.offsetTop - 40;
        window.scrollTo({ top: offset, behavior: "smooth" });
  
        document.querySelectorAll(".header ul li a").forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });
    });
    ScrollReveal({ distance: "100px", duration: 2000, delay: 200 });
    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", { origin: "left" });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", { origin: "right" });
    ScrollReveal().reveal(".project-title, .contact-title", { origin: "top" });
    ScrollReveal().reveal(".portfolio, .contact", { origin: "bottom" });
  
    const scriptURL = 'https://docs.google.com/spreadsheets/d/1K58Cuwe7pTIxU2-l_1K6Qd8YncXlR_gjDd6hGqTcG6I/edit?usp=sharing';
    const form = document.forms['submitToGoogleSheet'];
    const msg = document.getElementById("msg");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
          msg.textContent = "Message sent successfully";
          setTimeout(() => (msg.textContent = ""), 5000);
          form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
    });
    function updateActiveSection() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition === 0) {
        document.querySelectorAll(".header ul li a").forEach((link) => link.classList.remove("active"));
        document.querySelector(".header ul li a[href='#home']").classList.add("active");
        return;
      }
  
      document.querySelectorAll("section").forEach((section) => {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const target = section.id;
  
        if (scrollPosition >= offset - 40 && scrollPosition < offset + height - 40) {
          document.querySelectorAll(".header ul li a").forEach((link) => link.classList.remove("active"));
          document.querySelector(`.header ul li a[href='#${target}']`).classList.add("active");
        }
      });
    }

    const container = document.querySelector(".images-container");
    container.addEventListener("animationend", function () {
      this.style.animation = "none";
    });
  });
  












































































































































