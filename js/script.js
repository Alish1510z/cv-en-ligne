const btn = document.getElementById("toggleSkills");
const skills = document.getElementById("skillsContent");

btn.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
});
