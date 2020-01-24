"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "El nombre es ".concat(nombre, " y su edad es ").concat(edad);
    }
  };
};

console.log(crearObjeto('Carlos Yair', 55).mostrarInfo());