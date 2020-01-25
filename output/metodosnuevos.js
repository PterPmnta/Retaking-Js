"use strict";

var texto = 'Hola mundo';
console.log("".concat(texto, ", empieza con la letra _ h/H _, Resultado:"), texto.startsWith('H'));
console.log("".concat(texto, ", termina con la letra _ o/O _, Resultado:"), texto.endsWith('o'));
console.log("".concat(texto, ", incluye la palabra _ arbol _, Resultado:"), texto.includes('arbol'));
var personas = ['carlos', 'alejandro', 'manuel'];
console.log("Manuel existe en este arreglo, Resultado:", personas.includes('manuel'));
console.log("Persona que tenga mas de 6 caracteres en su nombre, Resultado:", personas.find(function (amigo) {
  return amigo.length > 6;
}));
console.log("Posicion persona, Resultado:", personas.findIndex(function (amigo) {
  return amigo === 'manuel';
}));