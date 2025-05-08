// Sélection de la boîte pour la manipulation en JavaScript
let box = document.querySelector('.box');

// Réagit aux mouvements de la souris pour faire tourner la boîte en 3D
window.onmousemove = function (e) {
    let x = e.clientX / 3; // Obtient la position horizontale de la souris
    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)"; // Applique la rotation
}