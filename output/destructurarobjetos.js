"use strict";

var usuario = {
  nombre: 'Pedro',
  edad: 31,
  telefono: '3025478965',
  pais: 'Canada'
};
var nombre = usuario.nombre,
    edad = usuario.edad,
    telefono = usuario.telefono,
    pais = usuario.pais;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      telefono = _ref.telefono;
  console.log("Nombre es ".concat(nombre, " y su telefono es ").concat(telefono));
};

mostrarInfo(usuario);