"use strict";

var nombres;
nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
var numerosCaracteres = nombres.map(function (nombre) {
  return "El usuario de ".concat(nombre, " tiene ").concat(nombre.length, " de caracteres en su nombre");
});
console.log(numerosCaracteres);