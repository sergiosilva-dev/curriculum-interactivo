/**
 * Autor: Sergio Silva
 * Fecha: 2025-06-16
 * Descripción: Control de interacción del CV interactivo, incluyendo
 * el modo oscuro, menú responsive y futuras animaciones.
 */

// Espera a que todo el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío real

    // Captura de valores
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validación simple
    if (nombre === "" || correo === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!validarEmail(correo)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    // Simula envío exitoso
    alert("Gracias por tu mensaje, te responderé pronto 😄");

    // Limpia el formulario
    form.reset();
  });
});

// Función para validar email básico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Menú hamburguesa
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Cambiar tema oscuro/claro
const toggleTheme = document.getElementById("toggle-theme");
const icon = toggleTheme.querySelector("i");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});
