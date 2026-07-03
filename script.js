const phone = "527779393985";

function wa(msg) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function setLink(id, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.href = wa(msg);
  }
}

// Safe bindings
setLink("waHero", "Hola, quiero información de Kronox Gym");
setLink("waMensual", "Hola, me interesa la mensualidad de Kronox Gym ($350)");
setLink("waAnual", "Hola, me interesa la anualidad de Kronox Gym ($3000)");
setLink("waFooter", "Hola, quiero información general de Kronox Gym");
setLink("waNav", "Hola, quiero información de Kronox Gym");
