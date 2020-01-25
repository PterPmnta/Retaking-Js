"use strict";

//Rest
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos("Ventana", 300, "Piso 2", "Lejos"); //Spread

var arregloDatos = ["Puerta", 520, "Piso 14", "Aqui"];

var mostrarEsporas = function mostrarEsporas() {
  for (var _len2 = arguments.length, datosArreglos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datosArreglos[_key2] = arguments[_key2];
  }

  console.log(datosArreglos);
};

mostrarEsporas.apply(void 0, arregloDatos);