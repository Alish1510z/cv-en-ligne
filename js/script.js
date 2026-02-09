/* ===========================
   GESTION DU THÈME SOMBRE
   =========================== */

/*
 * Attente du chargement complet du DOM
 * afin d'être sûr que le bouton existe
 */
document.addEventListener("DOMContentLoaded", () => {
  // Récupération du bouton de changement de thème
  const btn = document.getElementById("themeToggle");

  /*
   * Au clic sur le bouton :
   * - on ajoute ou retire la classe "dark-mode"
   * - le style est géré uniquement via le CSS
   */
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});


/* ===========================
   ANIMATIONS D’APPARITION AU SCROLL
   =========================== */

/*
 * Animation déclenchée lorsque les sections
 * entrent dans la zone visible de l'écran
 */
document.addEventListener("DOMContentLoaded", () => {
  // Sélection de toutes les sections du CV
  const sections = document.querySelectorAll("section");

  /*
   * IntersectionObserver :
   * permet de détecter quand un élément
   * devient visible à l'écran
   */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Si la section est visible
      if (entry.isIntersecting) {
        // Ajout de la classe "visible"
        // (déclenche l'animation CSS)
        entry.target.classList.add("visible");
      }
    });
  });

  // Observation de chaque section
  sections.forEach(section => observer.observe(section));
});


/* ===========================
   ANIMATION DE FOND (CANVAS)
   =========================== */

// Récupération du canvas et du contexte 2D
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

// Adaptation du canvas à la taille de l'écran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tableau contenant les particules animées
let particles = [];

/*
 * Création des particules :
 * - position aléatoire
 * - rayon variable
 * - vitesse légère pour un effet fluide
 */
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}


/*
 * Fonction d'animation :
 * - efface le canvas
 * - met à jour la position des particules
 * - redessine chaque particule
 */
function animate() {
  // Nettoyage du canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // Déplacement des particules
    p.x += p.dx;
    p.y += p.dy;

    // Rebond sur les bords de l'écran
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    // Dessin de la particule
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.2)";
    ctx.fill();
  });

  // Boucle d'animation fluide
  requestAnimationFrame(animate);
}

// Lancement de l'animation
animate();
