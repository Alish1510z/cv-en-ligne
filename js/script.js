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

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
