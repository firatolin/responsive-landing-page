// Smooth scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }

  // Reveal features on scroll
  const features = document.querySelectorAll(".feature-box");
  features.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < window.innerHeight - 100) {
      box.classList.add("reveal");
    }
  });
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
