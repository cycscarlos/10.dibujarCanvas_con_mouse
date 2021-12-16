window.onload = inicio;

function inicio() {
  document
    .getElementById("area_de_dibujo")
    .addEventListener("mousedown", mousePresionado, false);
  document
    .getElementById("area_de_dibujo")
    .addEventListener("mouseup", mouseSoltado, true);
  document
    .getElementById("area_de_dibujo")
    .addEventListener("mouseover", mouseEntrada, false);
  document
    .getElementById("area_de_dibujo")
    .addEventListener("mouseout", mouseSalida, false);
}

// document.addEventListener("keyup", dibujarTeclado);

var c = document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");

// Inicializamos un par de variables para definir en el lienzo, el punto central desde el cual arranca todo el dibujo posterior.

var x = 100;
var y = 100;
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

//* Función que permite dibujar líneas en un lienzo canvas
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

//* Función para la manipulación del mouse
function dibujarConMouse(evento) {
  var colorcito = "aqua";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
      console.log("otra tecla");
  }
}

function mousePresionado() {
  document.getElementById("recuadro1").innerHTML =
    "Se presionó el mouse pero todavía no se soltó";
}
function mouseSoltado() {
  document.getElementById("recuadro1").innerHTML =
    "Se presionó el mouse<br/> y se soltó";
}

function mouseEntrada() {
  document.getElementById("recuadro1").style.borderRadius = `30px`;
  document.getElementById("recuadro1").style.background = `yellow`;
}
function mouseSalida() {
  document.getElementById("recuadro1").style.borderRadius = `0px`;
  document.getElementById("recuadro1").style.background = `aqua`;
}
