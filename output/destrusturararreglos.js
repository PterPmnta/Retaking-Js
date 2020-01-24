"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var persona;
persona = ['Juan', 35, 'Salvador', 'Admin. Empresas'];

var _persona = persona,
    _persona2 = _slicedToArray(_persona, 4),
    nombre = _persona2[0],
    edad = _persona2[1],
    pais = _persona2[2],
    profesion = _persona2[3];

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      edad = _ref2[1],
      pais = _ref2[2],
      profesion = _ref2[3];

  console.log(nombre, edad);
};

mostrarInfo(persona);