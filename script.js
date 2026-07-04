// ================= REGLA PARA LIMPIAR LA URL (.HTML) =================
// Si la URL contiene .html, lo remueve de la barra de direcciones estéticamente
if (window.location.pathname.endsWith('.html')) {
  const cleanUrl = window.location.pathname.replace(/\.html$/, '') + window.location.search + window.location.hash;
  window.history.replaceState(null, '', cleanUrl);
}

// ================= CONFIGURACIÓN DE WHATSAPP =================
const phone = "527779393985";

function wa(msg) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function setLink(id, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.setAttribute("href", wa(msg));
  }
}

function initWA() {
  setLink("waHero", "Hola, quiero información de Kronox Gym");
  setLink("waMensual", "Hola, me interesa la mensualidad ($350)");
  setLink("waAnual", "Hola, me interesa la anualidad ($3000)");
  setLink("waFooter", "Hola, quiero información general");
  setLink("waNav", "Hola, quiero información de Kronox Gym");
}

// ================= INICIALIZACIÓN DEL SITIO =================
document.addEventListener("DOMContentLoaded", () => {

  // Links de WhatsApp
  initWA();

  // ===== Menú responsive =====
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav nav");

  if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");

      if (nav.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
      } else {
        menuBtn.innerHTML = "☰";
      }
    });

    // Cerrar el menú al tocar un enlace
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.innerHTML = "☰";
      });
    });

  }

});
