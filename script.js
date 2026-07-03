const phone = "527779393985";

function wa(msg) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

document.getElementById("waHero").href =
  wa("Hola, quiero información de Kronox Gym");

document.getElementById("waMensual").href =
  wa("Hola, me interesa la mensualidad de Kronox Gym ($350)");

document.getElementById("waAnual").href =
  wa("Hola, me interesa la anualidad de Kronox Gym ($3000)");

document.getElementById("waFooter").href =
  wa("Hola, quiero información general de Kronox Gym");

document.getElementById("waNav").href =
  wa("Hola, quiero información de Kronox Gym");
