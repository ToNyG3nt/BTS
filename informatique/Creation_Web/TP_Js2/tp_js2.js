// ==========================================================
// 1. SÉLECTION DES ÉLÉMENTS DU DOM
// ==========================================================
const btnColor = document.getElementById("btnColor");
const btnTextColor = document.getElementById("btnTextColor");
const paragraphe = document.getElementById("paragrapheSurvol");

// Stocker le texte initial du paragraphe pour le réinitialiser
const texteInitial = paragraphe.textContent; 

// ==========================================================
// 2. FONCTION UTILITAIRE : GÉNÉRER UNE COULEUR ALÉATOIRE
// ==========================================================
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// ==========================================================
// 3. GESTIONNAIRES D'ÉVÉNEMENTS
// ==========================================================

// A. Changer la couleur de fond (Click)
// Utilise addEventListener("click", ...)
btnColor.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
});

// B. Changer la couleur du texte du paragraphe (Click)
// Nouveau bouton : change la couleur du texte du paragraphe aléatoirement.
btnTextColor.addEventListener("click", () => {
    paragraphe.style.color = getRandomColor();
});

// C. Changer le texte au survol (MouseEnter)
// Utilise addEventListener("mouseenter", ...)
paragraphe.addEventListener("mouseenter", () => {
    paragraphe.textContent = "Merci d'avoir survolé ce texte !";
});

// D. Rétablir le texte lorsque la souris quitte (MouseLeave)
// Utilise addEventListener("mouseleave", ...)
paragraphe.addEventListener("mouseleave", () => {
    paragraphe.textContent = texteInitial; // Utilise la variable stockée
});