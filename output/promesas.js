"use strict";

var promesa = new Promise(function (resolve, reject) {
  resolve();
  reject();
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve();
    } else {
      reject();
    }
  }, 5000);
});
promesa.then(function () {
  console.log('Exito de verdad');
});
promesa["catch"](function () {
  console.log('No funciono');
});