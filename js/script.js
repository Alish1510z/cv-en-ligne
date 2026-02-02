//Toggle des compétences
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleSkills");
  const skills = document.getElementById("skillsContent");

  if (!btn || !skills) {
    console.error("IDs manquants: toggleSkills ou skillsContent");
    return;
  }

  btn.addEventListener("click", () => {
    const isHidden = getComputedStyle(skills).display === "none";
    skills.style.display = isHidden ? "block" : "none";
  });
});

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
