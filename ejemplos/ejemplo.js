window.onload = inicio;

function inicio() {
  document
    .getElementById("recuadro1")
    .addEventListener("mousedown", presion1, false);
  document
    .getElementById("recuadro1")
    .addEventListener("mouseup", presion2, true);
  document
    .getElementById("recuadro1")
    .addEventListener("mouseover", ratonEntrando, false);
  document
    .getElementById("recuadro1")
    .addEventListener("mouseout", ratonSaliendo, false);
  document
    .getElementById("recuadro2")
    .addEventListener("mouseup", presion3, false);
}

function presion1() {
  document.getElementById("recuadro1").innerHTML =
    "Se presionó el mouse pero todavía no se soltó";
}
function presion2() {
  document.getElementById("recuadro1").innerHTML =
    "..Ahora sí se soltó el mouse";
}
function ratonEntrando() {
  document.getElementById("recuadro1").style.borderRadius = `30px`;
  document.getElementById("recuadro1").style.background = `yellow`;
}
function ratonSaliendo() {
  document.getElementById("recuadro1").style.borderRadius = `0px`;
  document.getElementById("recuadro1").style.background = `aqua`;
}
function presion3() {
  document.getElementById(
    "recuadro2"
  ).innerHTML = `Se presionó el mouse<br /> y se soltó`;
}
