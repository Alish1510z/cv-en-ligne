//Thème sombre
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

//Animations d'apparition
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  sections.forEach(section => observer.observe(section));
});
