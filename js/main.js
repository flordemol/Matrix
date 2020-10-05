let elemento = document.getElementById("matrix");

// Contexto, defino dimensiones del dibujo dentro del canvas
let ctx = elemento.getContext("2d");

// Obtener tamaño del navegador del cliente
let widthCliente = document.body.clientWidth;
let heightCliente = document.body.clientHeight;

// Expandir canvas al tamaño del navegador del cliente
elemento.width = widthCliente;
elemento.height = heightCliente;

let posicion = Array(300).join(0).split("");

function initMatrix() {
  ctx.fillStyle = "rgba(0, 30, 1, 0.5)";
  ctx.fillRect(0, 0, widthCliente, heightCliente);
  ctx.fillStyle = "#37CC05";
  ctx.font = "11pt arial";

  posicion.map(function (y, index) {
    let texto = String.fromCharCode(1e2 + Math.random() * 30);
    let x = index * 15 + 15;

    matrix.getContext("2d").fillText(texto, x, y);

    if (y > 100 + Math.random() * 1e5) {
      posicion[index] = 0;
    } else {
      posicion[index] = y + 15;
    }
  });
}

setInterval(initMatrix, 50);
