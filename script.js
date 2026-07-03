const phone = "527779393985"; // México +52

function waLink(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// HERO
document.getElementById("waHero").href =
  waLink("Hola, quiero información sobre Kronox Gym");

// PLAN MENSUAL
document.getElementById("waMensual").href =
  waLink("Hola, me interesa el plan mensual de $350 en Kronox Gym");

// PLAN ANUAL
document.getElementById("waAnual").href =
  waLink("Hola, me interesa el plan anual de $3000 en Kronox Gym");

// FOOTER
document.getElementById("waFooter").href =
  waLink("Hola, quiero información general de Kronox Gym");
