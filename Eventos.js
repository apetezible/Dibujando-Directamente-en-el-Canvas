var Dimensiones = {Ancho:300, Largo:300};
var PosicionesMouse = {EnX:1, EnY:1}
var Cuadro = document.getElementById("AreaDeDibujo");
var Papel = Cuadro.getContext("2d");
var BMColorRed =  "#E11B10";
var BMColorBlack = "#180204";
var Boton = document.getElementById("Envio");
var Caja1 = document.getElementById("IngresoDeAncho");
var Caja2 = document.getElementById("IngresoDeLargo");
var Presionado = false;
var Moviendose = false;
var Suelto = true;
var Eventillo;
Cuadro.addEventListener ("mousedown", empezar);
Cuadro.addEventListener ("mousemove", moverse);
Cuadro.addEventListener ("mouseup", detenerse);
Boton.addEventListener ("click", envioDeDatos);

function envioDeDatos () {
  Dimensiones.Ancho = parseInt(Caja1.value);
  Dimensiones.Ancho = Math.abs(Dimensiones.Ancho);
  Dimensiones.Largo = parseInt(Caja2.value);
  Dimensiones.Largo = Math.abs(Dimensiones.Largo);
  Cuadro.width = Dimensiones.Ancho;
  Cuadro.height = Dimensiones.Largo;
  DibujoDeLinea(BMColorBlack, 1, 1, Dimensiones.Ancho-1, 1, Papel);
  DibujoDeLinea(BMColorBlack, Dimensiones.Ancho-1, 1, Dimensiones.Ancho-1, Dimensiones.Largo-1, Papel);
  DibujoDeLinea(BMColorBlack, Dimensiones.Ancho-1, Dimensiones.Largo-1, 1, Dimensiones.Largo-1, Papel);
  DibujoDeLinea(BMColorBlack, 1, Dimensiones.Largo-1, 1, 1, Papel);

}

function empezar (Evento){
  Presionado = true;
  Suelto = true;
  PosicionesMouse.EnX=Evento.layerX;
  PosicionesMouse.EnY=Evento.layerY;
}
function moverse (Evento){
  Moviendose = true;
  if (Presionado == true){
    if(Moviendose == true){
      DibujoDeLinea (BMColorRed, Evento.layerX, Evento.layerY, PosicionesMouse.EnX, PosicionesMouse.EnY, Papel);
      PosicionesMouse.EnX = Evento.layerX;
      PosicionesMouse.EnY = Evento.layerY;
    }else{
      DibujoDeLinea (BMColorRed, Eventio.layerX, Evento.layerY, Evento.layerX+1, Evento.layer+1, Papel);
      PosicionesMouse.EnX = Evento.layerX;
      PosicionesMouse.EnY = Evento.layerY;
    }
  }
}
function detenerse (Evento){
  Suelto = true;
  Presionado = false;
}

  function DibujoDeLinea (Color, XInicial, YInicial, XFinal, YFinal, Lienzo){
    Lienzo.beginPath();
    Lienzo.strokeStyle = Color;
    Lienzo.lineWidth = 3;
    Lienzo.moveTo(XInicial, YInicial);
    Lienzo.lineTo(XFinal, YFinal);
    Lienzo.stroke();
    Lienzo.closePath();
  }
