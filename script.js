// Inicializar Atropos cuando la página cargue
document.addEventListener("DOMContentLoaded", function () {
  const atropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40, // Sensibilidad (20-60)
    shadowScale: 1.0, // Sin sombras de escala
    shadow: false, // Desactivar sombras completamente
    highlight: false, // Desactivar highlight
  });
});
