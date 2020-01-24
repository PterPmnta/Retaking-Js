"use strict";

function parametros(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No Designo';
  return "Nombre:".concat(nombre, " Pais:").concat(pais, " Correo:").concat(correo, " Telefono:").concat(telefono);
}

console.log(parametros('Isaac', 'Arabia', 'correo@correo.com'));